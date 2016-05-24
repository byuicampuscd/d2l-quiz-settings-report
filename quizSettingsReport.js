/*jslint plusplus: true, node: true, devel: true */

"use strict";

var async = require('async'),
   xml2js = require('xml2js'),
   processors = require('./node_modules/xml2js/lib/processors.js'),
   makeHtml = require('./makeHtml.js'),
   fs = require('fs'),
   path = require('path'),
   folder = process.cwd(),
   open = require('open'),
   filesNames;

function getFileNames(folder) {
   var htmlFileNames = fs.readdirSync(folder);
   //filter down to just html
   htmlFileNames = htmlFileNames.filter(function (file) {
      return file.substr(0, 5) === 'quiz_' && path.extname(file) === '.xml';
   });
   return htmlFileNames;
}

function readFiles(file, callback) {
   fs.readFile(file, 'utf8', function (error, guts) {
      if (error) {
         callback(error);
      }

      callback(null, guts);
   });
}

function getCourseId() {
   try {
      var fileGuts = fs.readFileSync('imsmanifest.xml', 'utf8'),
         id = /<manifest identifier="D2L_(\d+)"/.exec(fileGuts)[1];
      console.log("Course Id:", id);
      if (typeof id !== 'string' || id.length === 0) {
         throw "Did not find course id in imsmanifest.xml.";
      }
      return id;

   } catch (error) {
      console.log(error);
   }
}

function convertXml2Js(fileText, callback) {
   var xmlParser = new xml2js.Parser({
      explicitArray: false,
      tagNameProcessors: [processors.stripPrefix],
      attrNameProcessors: [processors.stripPrefix]
   });

   xmlParser.parseString(fileText, function (error, obj) {
      if (error) {
         callback(error);
      }
      callback(null, obj);

   });
}

function getFileInfo(fileInfoArray) {
   /*
   Name:
   Dates:
      start
      end
   Grade Item: grade_item
      auto export: d2l_2p0:is_autoexport="yes"
      allow attempt to be set as graded
      overall grade calculation: mark_calculation_type?
      attempts allowed: attempts_allowed
   Submission Views:
      Show Questions:
      Show Question Answers:
      Show Questions Score and out of score:
      Show attempt score and overall attempt score:
      Show Class Average:
   QuestionSections:[
      randSection how many out of total
      ]
   */
   function getDate(dateXml) {
      if (dateXml === '') {
         return undefined;
      } else {
         var date = dateXml.timestamp;
         return new Date(date.year, date.month, date.day, date.hour, date.minutes, date.seconds);
      }
   }

   function getSubmissionViews(views) {
      if (!Array.isArray(views)) {
         views = [views];
      }

      return views.map(function (view) {
         return {
            name: view.$ && view.$.title,
            showQuestionAnswers: view.show_correct_answers,
            responseDisplay: view.response_display_type_id,
            showQuestionScores: "Can not be tracked",
            showOverAllScore: "Can not be tracked",
            showClassAverage: view.show_class_average,
            showScoreDistribution: view.show_score_distribution
         };

      });

   }

   function getRandSections(sectionsObjIn) {
      function getNumberOfItems(section) {
         var items = section.item || section.itemref || undefined;

         if (typeof items === 'undefined') {
            return 0;
         }

         if (!Array.isArray(items)) {
            return 1;
         }

         return items.length;

      }
      var sections = sectionsObjIn.section,
         randSections = [];

      //error check
      if (typeof sections === 'undefined') {
         return [];
      }

      //make sure its and array
      if (!Array.isArray(sections)) {
         sections = [sections];
      }

      sections.forEach(function (section) {
         if (typeof section.qtimetadata !== 'undefined') {
            randSections.push({
               title: section.$.title,
               nuberToPick: +section.qtimetadata.qti_metadatafield[0].fieldentry,
               outOf: getNumberOfItems(section)

            });
         }
      });

      return randSections;
   }

   return fileInfoArray.map(function (fileObj, index) {
      var data = fileObj.questestinterop.assessment;
      return {
         name: data.$.title,
         id: data.$.ident.match(/\d+/)[0],
         isActive: data.assess_procextension.is_active,
         timeLimit: data.assess_procextension.time_limit,
         dates: {
            start: getDate(data.assess_procextension.date_start),
            end: getDate(data.assess_procextension.date_end)
         },
         gradeItem: {
            hasGradeItem: typeof data.assess_procextension.grade_item !== "undefined" ? 'yes' : 'no',
            autoExport: data.assess_procextension.grade_item && data.assess_procextension.grade_item.$.is_autoexport ? 'yes' : 'no',
            autoGrade: data.assessmentcontrol.$.solutionswitch,
            numAttempsAllowed: data.assess_procextension.attempts_allowed,
            overallGradeCalc: data.assess_procextension.mark_calculation_type
         },
         submissionView: getSubmissionViews(data.assessfeedback),
         randSections: getRandSections(data.section)
      };
   });
}

//HERE'S THE MAGIC
module.exports = function () {
   var courseId = getCourseId();
   //get file names
   filesNames = getFileNames(folder);

   //read all the files that start with quiz
   async.map(filesNames, readFiles, function (err, textOfFiles) {

      if (err) {
         console.log(err);
         return;
      }

      //Convert xml to to js
      async.map(textOfFiles, convertXml2Js, function (err, fileInfoArray) {
         //console.log(fileInfoArray[0].questestinterop.assessment.assessfeedback);
         //console.log(fileInfoArray[4]);

         var quizData,
            fileOut = path.resolve('./Report.html');
         //if error
         if (err) {
            console.log(err);
            return;
         }
         //get the info we want
         quizData = getFileInfo(fileInfoArray);
         /*
         console.dir(quizData[0], {
            depth: 3
         });
         console.dir(quizData[4], {
            depth: 3
         });
         */

         //make html page with sortable columns and save file
         try {

            fs.writeFileSync('Report.html', makeHtml(courseId, quizData));
            console.log('Done!');
         } catch (error) {
            console.log(error);
         }
         if (process.argv[2] !== '--no-open') {
            open(path.resolve('./Report.html'));
         }
      });

   });

};