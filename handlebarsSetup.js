/*jslint plusplus: true, node: true */
"use strict";

var handlebars = require('handlebars'),
   template = require('./htmlPageTemplate.js'),
   repeat = require('handlebars-helper-repeat'),
   moment = require('moment');

/******************** HELPERS *******************/
handlebars.registerHelper('classToggleEven', function (infoIn) {
   if (infoIn.data.index % 2 === 0) {
      return new handlebars.SafeString('class="' + infoIn.hash.className + 'Even"');
   } else {
      return new handlebars.SafeString('class="' + infoIn.hash.className + '"');
   }
});

handlebars.registerHelper('dateToMill', function (infoIn) {
   if (infoIn.hash.date) {
      return infoIn.hash.date.valueOf();
   }
   return infoIn.data.index;
});

handlebars.registerHelper('dateToView', function (date) {
   if (date) {
      return moment(date).format('dddd M/D/YY h:mma');
   }
   return '';
});

handlebars.registerHelper('gradeCalc', function (calcValue) {
   var textOut;

   switch (calcValue) {
   case '1':
      textOut = "Highest Attempt";
      break;
   case '2':
      textOut = "Lowest Attempt";
      break;
   case '3':
      textOut = "Average of all Attempts";
      break;
   case '4':
      textOut = "First Attempt";
      break;
   case '5':
      textOut = "Last Attempt";
      break;
   default:
      textOut = '<span class="error"> this value is unknown: ' + calcValue + '</span>';

   }

   return new handlebars.SafeString(textOut);
});

handlebars.registerHelper('showResponces', function (showResponcesVal) {
   var textOut;

   switch (showResponcesVal) {
   case '1':
      textOut = "No";
      break;
   case '2':
      textOut = "Show all questions with user responses";
      break;
   case '3':
      textOut = "Average of all Attempts";
      break;
   case '4':
      textOut = "First Attempt";
      break;
   case '5':
      textOut = "Last Attempt";
      break;
   case undefined:
      textOut = "";
      break;

   default:
      textOut = '<span class="error"> this value is unknown: ' + showResponcesVal + '</span>';

   }

   return new handlebars.SafeString(textOut);
});

handlebars.registerHelper('randSectionsDisplay', function (infoIn) {
   var textOut = infoIn.map(function (section) {
      if (section.nuberToPick > section.outOf || section.nuberToPick === 0 || section.outOf === 0) {
         return section.title + ": <span class='error'>" + section.nuberToPick + " out of " + section.outOf + "</span>";

      } else {
         return section.title + ": " + section.nuberToPick + " out of " + section.outOf;
      }
   });
   return new handlebars.SafeString(textOut.join('<br>'));
});

handlebars.registerHelper('randSectionsSort', function (infoIn) {
   var textOut = infoIn.map(function (section) {
      return (section.title + ": " + section.nuberToPick + " out of " + section.outOf).trim();
   });
   return new handlebars.SafeString(textOut.join('\n'));
});

handlebars.registerHelper('repeat', repeat);

//send it back now that it's all set up
module.exports = handlebars;