/*jslint plusplus: true, node: true, devel: true */
"use strict";

var handlebars = require('./handlebarsSetup.js');

module.exports = function (courseId, quizData) {
   console.log("\nMAKING HTML:");
   var context = {
         courseId: courseId,
         quizzes: quizData,
         subViewCount: 0
      },
      subViewFiller = {};

   //how many sub views do we need?
   quizData.forEach(function (quiz) {
      if (context.subViewCount < quiz.submissionView.length) {
         context.subViewCount = quiz.submissionView.length;
      }
   });

   //make blank subView
   Object.keys(context.quizzes[0].submissionView).forEach(function (key) {
      subViewFiller[key] = '';
   });

   //fix all to be the same length
   context.quizzes.forEach(function (quiz) {
      while (quiz.submissionView.length < context.subViewCount) {
         quiz.submissionView.push(subViewFiller);
      }
   });
 
   return handlebars.templates.htmlPageTemplate(context);
};