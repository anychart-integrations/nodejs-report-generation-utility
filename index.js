#!/usr/bin/env node

var fs = require('fs');
var jsdom = require('jsdom').jsdom;
var program = require('commander');


var document = jsdom('<body><div id="container"></div></body>');
var window = document.defaultView;

var anychart = require('anychart')(window);
var anychart_nodejs = require('anychart-nodejs')(anychart);

program
    .version('0.0.1')
    .option('-i, --input [value]', 'path to input data file with chart, stage or svg', 'chart.js')
    .option('-f, --format [value]', 'format (type) of input data. Possible values: svg, xml, javascript, json.', 'javascript')
    .option('-o, --output [value]', 'path to output directory for reports.', 'reports')
    .option('-n, --name [value]', 'name of report.', 'report.html');

program.parse(process.argv);


fs.readFile(program.input, 'utf8', function(err, data) {
  if (err) {
    console.log(err.message);
  } else {
    var isExistOutputReportDir = fs.existsSync(program.output);
    if (!isExistOutputReportDir) {
      fs.mkdirSync(program.output);
    }

    //export parameters
    var params = {
      type: 'png',
      dataType: program.format,
      document: document,
      resources: [
        'https://cdnjs.cloudflare.com/ajax/libs/proj4js/2.3.15/proj4.js',
        'https://cdn.anychart.com/geodata/1.2.0/countries/united_states_of_america/united_states_of_america.js'
      ]
    };

    anychart_nodejs.exportTo(data, params).then(function(data) {
      var templateFile = fs.readFileSync('./template.html', 'utf8');
      var base64Data = data.toString('base64');

      templateFile = templateFile.replace('{{chart}}', '<img class="img-responsive" src="data:image/png;base64,' + base64Data + '">');

      fs.writeFile(program.output + '/' + program.name, templateFile, function(err) {
        if (err) {
          console.log(err.message);
        } else {
          console.log('Written to ' + program.output + '/' + program.name + ' file');
        }
        process.exit(0);
      });
    }, function(err) {
      console.log(err.message);
      process.exit(0);
    });
  }
});





