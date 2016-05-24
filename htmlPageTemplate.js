var Handlebars = require("handlebars");  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['htmlPageTemplate'] = template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "            <th data-sort=\"indexstring\" "
    + alias3((helpers.classToggleEven || (depth0 && depth0.classToggleEven) || alias2).call(alias1,{"name":"classToggleEven","hash":{"className":"subView"},"data":data}))
    + ">Submission View Name\r\n               <div></div>\r\n            </th>\r\n            <th data-sort=\"indexstring\" "
    + alias3((helpers.classToggleEven || (depth0 && depth0.classToggleEven) || alias2).call(alias1,{"name":"classToggleEven","hash":{"className":"subView"},"data":data}))
    + ">Show Questions?\r\n               <div></div>\r\n            </th>\r\n            <th data-sort=\"indexstring\" "
    + alias3((helpers.classToggleEven || (depth0 && depth0.classToggleEven) || alias2).call(alias1,{"name":"classToggleEven","hash":{"className":"subView"},"data":data}))
    + ">Show Question Answers\r\n               <div></div>\r\n            </th>\r\n            <th data-sort=\"indexstring\" "
    + alias3((helpers.classToggleEven || (depth0 && depth0.classToggleEven) || alias2).call(alias1,{"name":"classToggleEven","hash":{"className":"subView"},"data":data}))
    + ">Show Class Average\r\n               <div></div>\r\n            </th>\r\n            <th data-sort=\"indexstring\" "
    + alias3((helpers.classToggleEven || (depth0 && depth0.classToggleEven) || alias2).call(alias1,{"name":"classToggleEven","hash":{"className":"subView"},"data":data}))
    + ">Show Score Distribution\r\n               <div></div>\r\n            </th>\r\n";
},"3":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "         <tr>\r\n            <!--link-->\r\n            <td>\r\n               <a href=\"https://byui.brightspace.com/d2l/lms/quizzing/admin/modify/quiz_newedit_properties.d2l?qi="
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "&ou="
    + alias4(alias5((depths[1] != null ? depths[1].courseId : depths[1]), depth0))
    + "\" target=\"_blank\">Edit This Quiz</a>\r\n            </td>\r\n            <!--Index-->\r\n            <td>"
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "</td>\r\n            <!--Name-->\r\n            <td data-sort-value=\""
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "|"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</td>\r\n\r\n            <!--ID-->\r\n            <td>"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "</td>\r\n\r\n            <!--Is Active-->\r\n            <td data-sort-value=\""
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "|"
    + alias4(((helper = (helper = helpers.isActive || (depth0 != null ? depth0.isActive : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"isActive","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.isActive || (depth0 != null ? depth0.isActive : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"isActive","hash":{},"data":data}) : helper)))
    + "</td>\r\n\r\n            <!--Time Limit-->\r\n            <td>"
    + alias4(((helper = (helper = helpers.timeLimit || (depth0 != null ? depth0.timeLimit : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"timeLimit","hash":{},"data":data}) : helper)))
    + "</td>\r\n\r\n            <!--Start Date-->\r\n            <td data-sort-value=\""
    + alias4((helpers.dateToMill || (depth0 && depth0.dateToMill) || alias2).call(alias1,{"name":"dateToMill","hash":{"date":((stack1 = (depth0 != null ? depth0.dates : depth0)) != null ? stack1.start : stack1)},"data":data}))
    + "\">"
    + alias4((helpers.dateToView || (depth0 && depth0.dateToView) || alias2).call(alias1,((stack1 = (depth0 != null ? depth0.dates : depth0)) != null ? stack1.start : stack1),{"name":"dateToView","hash":{},"data":data}))
    + "</td>\r\n\r\n            <!--End Date-->\r\n            <td data-sort-value=\""
    + alias4((helpers.dateToMill || (depth0 && depth0.dateToMill) || alias2).call(alias1,{"name":"dateToMill","hash":{"date":((stack1 = (depth0 != null ? depth0.dates : depth0)) != null ? stack1.end : stack1)},"data":data}))
    + "\">"
    + alias4((helpers.dateToView || (depth0 && depth0.dateToView) || alias2).call(alias1,((stack1 = (depth0 != null ? depth0.dates : depth0)) != null ? stack1.end : stack1),{"name":"dateToView","hash":{},"data":data}))
    + "</td>\r\n\r\n            <!--Has Grade Item-->\r\n            <td data-sort-value=\""
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "|"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.gradeItem : depth0)) != null ? stack1.hasGradeItem : stack1), depth0))
    + "\">"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.gradeItem : depth0)) != null ? stack1.hasGradeItem : stack1), depth0))
    + "</td>\r\n\r\n            <!--Auto Export To Gradebook-->\r\n            <td data-sort-value=\""
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "|"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.gradeItem : depth0)) != null ? stack1.autoExport : stack1), depth0))
    + "\">"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.gradeItem : depth0)) != null ? stack1.autoExport : stack1), depth0))
    + "</td>\r\n\r\n            <!--Auto Grade-->\r\n            <td data-sort-value=\""
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "|"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.gradeItem : depth0)) != null ? stack1.autoGrade : stack1), depth0))
    + "\">"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.gradeItem : depth0)) != null ? stack1.autoGrade : stack1), depth0))
    + "</td>\r\n\r\n            <!--Number of Attemps-->\r\n            <td>"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.gradeItem : depth0)) != null ? stack1.numAttempsAllowed : stack1), depth0))
    + "</td>\r\n\r\n            <!--Grade Calculation-->\r\n            <td data-sort-value=\""
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.gradeItem : depth0)) != null ? stack1.overallGradeCalc : stack1), depth0))
    + "\">"
    + alias4((helpers.gradeCalc || (depth0 && depth0.gradeCalc) || alias2).call(alias1,((stack1 = (depth0 != null ? depth0.gradeItem : depth0)) != null ? stack1.overallGradeCalc : stack1),{"name":"gradeCalc","hash":{},"data":data}))
    + "</td>\r\n\r\n            <!--Rand Sections-->\r\n            <td data-sort-value=\""
    + alias4((helpers.randSectionsSort || (depth0 && depth0.randSectionsSort) || alias2).call(alias1,(depth0 != null ? depth0.randSections : depth0),{"name":"randSectionsSort","hash":{},"data":data}))
    + "\">"
    + alias4((helpers.randSectionsDisplay || (depth0 && depth0.randSectionsDisplay) || alias2).call(alias1,(depth0 != null ? depth0.randSections : depth0),{"name":"randSectionsDisplay","hash":{},"data":data}))
    + "</td>\r\n\r\n            <!-- Submission view -->\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.submissionView : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "         </tr>\r\n";
},"4":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : {}, alias4=helpers.helperMissing, alias5="function";

  return "            <td data-sort-value=\""
    + alias2(alias1((container.data(data, 1) && container.data(data, 1).index), depth0))
    + "|"
    + alias2(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"name","hash":{},"data":data}) : helper)))
    + "\">"
    + alias2(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"name","hash":{},"data":data}) : helper)))
    + "</td>\r\n            <td data-sort-value=\""
    + alias2(alias1((container.data(data, 1) && container.data(data, 1).index), depth0))
    + "|"
    + alias2((helpers.showResponces || (depth0 && depth0.showResponces) || alias4).call(alias3,(depth0 != null ? depth0.responseDisplay : depth0),{"name":"showResponces","hash":{},"data":data}))
    + "\">"
    + alias2((helpers.showResponces || (depth0 && depth0.showResponces) || alias4).call(alias3,(depth0 != null ? depth0.responseDisplay : depth0),{"name":"showResponces","hash":{},"data":data}))
    + "</td>\r\n            <td data-sort-value=\""
    + alias2(alias1((container.data(data, 1) && container.data(data, 1).index), depth0))
    + "|"
    + alias2(((helper = (helper = helpers.showQuestionAnswers || (depth0 != null ? depth0.showQuestionAnswers : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"showQuestionAnswers","hash":{},"data":data}) : helper)))
    + "\">"
    + alias2(((helper = (helper = helpers.showQuestionAnswers || (depth0 != null ? depth0.showQuestionAnswers : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"showQuestionAnswers","hash":{},"data":data}) : helper)))
    + "</td>\r\n            <td data-sort-value=\""
    + alias2(alias1((container.data(data, 1) && container.data(data, 1).index), depth0))
    + "|"
    + alias2(((helper = (helper = helpers.showClassAverage || (depth0 != null ? depth0.showClassAverage : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"showClassAverage","hash":{},"data":data}) : helper)))
    + "\">"
    + alias2(((helper = (helper = helpers.showClassAverage || (depth0 != null ? depth0.showClassAverage : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"showClassAverage","hash":{},"data":data}) : helper)))
    + "</td>\r\n            <td data-sort-value=\""
    + alias2(alias1((container.data(data, 1) && container.data(data, 1).index), depth0))
    + "|"
    + alias2(((helper = (helper = helpers.showScoreDistribution || (depth0 != null ? depth0.showScoreDistribution : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"showScoreDistribution","hash":{},"data":data}) : helper)))
    + "\">"
    + alias2(((helper = (helper = helpers.showScoreDistribution || (depth0 != null ? depth0.showScoreDistribution : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"showScoreDistribution","hash":{},"data":data}) : helper)))
    + "</td>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "<html>\r\n\r\n<head>\r\n   <meta charset=\"utf-8\">\r\n   <title></title>\r\n   <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js\"></script>\r\n\r\n   <!--   <script src=\"https://cdnjs.cloudflare.com/ajax/libs/jquery.tablesorter/2.26.0/js/jquery.tablesorter.js\"></script>-->\r\n   <!--   <script src=\"https://cdnjs.cloudflare.com/ajax/libs/jquery.tablesorter/2.26.0/js/jquery.tablesorter.combined.min.js\"></script>-->\r\n\r\n   <script>\r\n      /* beautify preserve:start */\r\n      /* The copyright statment below only applies to the contents of this script tag*/\r\n      /* Source code at: https://github.com/joequery/Stupid-Table-Plugin \r\n                              \r\n      Copyright(c) 2012 Joseph McCullough\r\n\r\n      Permission is hereby granted, free of charge, to any person obtaining a copy\r\n      of this software and associated documentation files(the \"Software\"), to deal in the Software without restriction, including without limitation the rights\r\n      to use, copy, modify, merge, publish, distribute, sublicense, and / or sell\r\n      copies of the Software, and to permit persons to whom the Software is\r\n      furnished to do so, subject to the following conditions:\r\n\r\n         The above copyright notice and this permission notice shall be included in all\r\n      copies or substantial portions of the Software.\r\n\r\n      THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\r\n      IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\r\n      FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.IN NO EVENT SHALL THE\r\n      AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\r\n      LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\r\n      OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\r\n      SOFTWARE.\r\n      */\r\n      (function(c){c.fn.stupidtable=function(b){return this.each(function(){var a=c(this);b=b||{};b=c.extend({},c.fn.stupidtable.default_sort_fns,b);a.data(\"sortFns\",b);a.on(\"click.stupidtable\",\"thead th\",function(){c(this).stupidsort()})})};c.fn.stupidsort=function(b){var a=c(this),g=0,f=c.fn.stupidtable.dir,e=a.closest(\"table\"),k=a.data(\"sort\")||null;if(null!==k){a.parents(\"tr\").find(\"th\").slice(0,c(this).index()).each(function(){var a=c(this).attr(\"colspan\")||1;g+=parseInt(a,10)});var d;1==arguments.length?\r\nd=b:(d=b||a.data(\"sort-default\")||f.ASC,a.data(\"sort-dir\")&&(d=a.data(\"sort-dir\")===f.ASC?f.DESC:f.ASC));e.trigger(\"beforetablesort\",{column:g,direction:d});e.css(\"display\");setTimeout(function(){var b=[],l=e.data(\"sortFns\")[k],h=e.children(\"tbody\").children(\"tr\");h.each(function(a,e){var d=c(e).children().eq(g),f=d.data(\"sort-value\");\"undefined\"===typeof f&&(f=d.text(),d.data(\"sort-value\",f));b.push([f,e])});b.sort(function(a,b){return l(a[0],b[0])});d!=f.ASC&&b.reverse();h=c.map(b,function(a){return a[1]});\r\ne.children(\"tbody\").append(h);e.find(\"th\").data(\"sort-dir\",null).removeClass(\"sorting-desc sorting-asc\");a.data(\"sort-dir\",d).addClass(\"sorting-\"+d);e.trigger(\"aftertablesort\",{column:g,direction:d});e.css(\"display\")},10);return a}};c.fn.updateSortVal=function(b){var a=c(this);a.is(\"[data-sort-value]\")&&a.attr(\"data-sort-value\",b);a.data(\"sort-value\",b);return a};c.fn.stupidtable.dir={ASC:\"asc\",DESC:\"desc\"};c.fn.stupidtable.default_sort_fns={\"int\":function(b,a){return parseInt(b,10)-parseInt(a,10)},\r\n\"float\":function(b,a){return parseFloat(b)-parseFloat(a)},string:function(b,a){return b.localeCompare(a)},\"string-ins\":function(b,a){b=b.toLocaleLowerCase();a=a.toLocaleLowerCase();return b.localeCompare(a)}}})(jQuery);\r\n\r\n      /* beautify preserve:end */\r\n\r\n   </script>\r\n   <script>\r\n      // A $( document ).ready() block.\r\n      $(document).ready(function() {\r\n         $('table').stupidtable({\r\n            indexstring: function(aIn, bIn) {\r\n               //assumes num before the |\r\n               var a = aIn.split('|'),\r\n                  b = bIn.split('|');\r\n               //are the word parts the same ? need to compair numbers?\r\n               if (a[1] === b[1]) {\r\n                  return (+b[0]) - (+a[0]);\r\n               } else if (a[1] < b[1]) {\r\n                  return 1;\r\n               } else {\r\n                  return -1;\r\n               }\r\n\r\n            }\r\n         });\r\n         //make the rows highlight-able\r\n         $('tr').on('click', function() {\r\n            $(this).toggleClass('highlight');\r\n         });\r\n      });\r\n\r\n      function changeTableWidth(valIn) {\r\n         $('table').css('width', valIn + '%');\r\n      }\r\n\r\n   </script>\r\n   <style>\r\n      body {\r\n         font-family: Arial, sans-serif;\r\n      }\r\n      \r\n      th {\r\n         background-color: cornflowerblue;\r\n         color: white;\r\n         -webkit-user-select: none;\r\n         -moz-user-select: none;\r\n         -ms-user-select: none;\r\n         user-select: none;\r\n      }\r\n      \r\n      th div {\r\n         border: none;\r\n         width: 0;\r\n         height: 0;\r\n      }\r\n      \r\n      .sorting-desc div {\r\n         width: 0;\r\n         height: 0;\r\n         border-left: 15px solid transparent;\r\n         border-right: 15px solid transparent;\r\n         border-bottom: 15px solid white;\r\n         margin: 0 auto;\r\n      }\r\n      \r\n      .sorting-asc div {\r\n         width: 0;\r\n         height: 0;\r\n         border-left: 15px solid transparent;\r\n         border-right: 15px solid transparent;\r\n         border-top: 15px solid white;\r\n         margin: 0 auto;\r\n      }\r\n      \r\n      .error {\r\n         background-color: red;\r\n         display: inline-block;\r\n         padding: 3px;\r\n         border-radius: 5px;\r\n      }\r\n      \r\n      table {\r\n         border-collapse: collapse;\r\n      }\r\n      \r\n      td,\r\n      th {\r\n         border: 1px solid black;\r\n         text-align: center;\r\n      }\r\n      \r\n      th[data-sort] {\r\n         cursor: pointer;\r\n      }\r\n      \r\n      [type='range'] {\r\n         width: 500px;\r\n      }\r\n      \r\n      th.subView {\r\n         background-color: #9575CD;\r\n      }\r\n      \r\n      th.subViewEven {\r\n         background-color: #673AB7;\r\n      }\r\n      \r\n      th.randSections {\r\n         background-color: #2196F3;\r\n      }\r\n      \r\n      th.gradeItem {\r\n         background-color: #4CAF50;\r\n      }\r\n      \r\n      th.date {\r\n         background-color: #FF5722;\r\n      }\r\n      \r\n      th.general {\r\n         background-color: #E91E63;\r\n      }\r\n      \r\n      .highlight {\r\n         background-color: lightgray;\r\n      }\r\n\r\n   </style>\r\n</head>\r\n\r\n<body>\r\n   <h3>Table Width:\r\n      <input type=\"range\" max=\"500\" min=\"100\" value=\"100\" oninput=\"changeTableWidth(this.value)\" />\r\n   </h3>\r\n   <table>\r\n      <thead>\r\n         <tr>\r\n            <th class=\"general\">Link\r\n               <div></div>\r\n            </th>\r\n            <th data-sort=\"int\" class=\"general\">Index\r\n               <div></div>\r\n            </th>\r\n            <th data-sort=\"indexstring\" class=\"general\">Name\r\n               <div></div>\r\n            </th>\r\n            <th data-sort=\"int\" class=\"general\">ID\r\n               <div></div>\r\n            </th>\r\n            <th data-sort=\"indexstring\" class=\"general\">Is Active\r\n               <div></div>\r\n            </th>\r\n            <th data-sort=\"int\" class=\"general\">Time Limit\r\n               <div></div>\r\n            </th>\r\n            <th data-sort=\"int\" class=\"date\">Start Date\r\n               <div></div>\r\n            </th>\r\n            <th data-sort=\"int\" class=\"date\">End Date\r\n               <div></div>\r\n            </th>\r\n            <th data-sort=\"indexstring\" class=\"gradeItem\">Has Grade Item\r\n               <div></div>\r\n            </th>\r\n            <th data-sort=\"indexstring\" class=\"gradeItem\">Auto Export To Gradebook\r\n               <div></div>\r\n            </th>\r\n            <th data-sort=\"indexstring\" class=\"gradeItem\">Auto Grade\r\n               <div></div>\r\n            </th>\r\n            <th data-sort=\"int\" class=\"gradeItem\">Number of Attemps\r\n               <div></div>\r\n            </th>\r\n            <th data-sort=\"int\" class=\"gradeItem\">Grade Calculation\r\n               <div></div>\r\n            </th>\r\n            <th data-sort=\"string\" class=\"randSections\">Rand Sections\r\n               <div></div>\r\n\r\n            </th>\r\n"
    + ((stack1 = (helpers.repeat || (depth0 && depth0.repeat) || helpers.helperMissing).call(alias1,(depth0 != null ? depth0.subViewCount : depth0),{"name":"repeat","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "         </tr>\r\n      </thead>\r\n      <tbody>\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.quizzes : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "      </tbody>\r\n   </table>\r\n</body>\r\n\r\n</html>\r\n";
},"useData":true,"useDepths":true});
