#!/usr/bin/env node

var fs = require('fs');
var path = require('path');
var program = require('commander');
var anychart_nodejs = require('anychart-nodejs');

program
    .version('0.0.1')
    .option('-i, --input [value]', 'path to input data file with chart, stage or svg', 'chart.js')
    .option('-o, --output [value]', 'path to output directory for reports.', 'reports')
    .option('-n, --name [value]', 'name of report.', 'report.html');

program.parse(process.argv);


fs.readFile(program.input, 'utf8', function(err, data) {
  if (err) {
    console.log(err);
  } else {
    var isExistOutputReportDir = fs.existsSync(program.output);
    if (!isExistOutputReportDir) {
      fs.mkdirSync(program.output);
    }

    //export parameters
    var params = {
      outputType: 'png',
      resources: [
        'https://cdnjs.cloudflare.com/ajax/libs/proj4js/2.3.15/proj4.js',
        'https://cdn.anychart.com/geodata/1.2.0/countries/united_states_of_america/united_states_of_america.js'
      ]
    };

    anychart_nodejs.exportTo(data, params).then(function(data) {
      var templateFile = fs.readFileSync('./template.html', 'utf8');
      var base64Data = data.toString('base64');

      templateFile = templateFile.replace('{{chart}}', '<img class="img-responsive" src="data:image/png;base64,' + base64Data + '">');

      var fileName = program.output + '/' + program.name;
      var dirName = path.dirname(fileName);
      if (!fs.existsSync(dirName))
        fs.mkdirSync(dirName);

      fs.writeFile(fileName, templateFile, function(err) {
        if (err) {
          console.log(err);
        } else {
          console.log('Written to ' + fileName + ' file');
        }
      });
    }, function(err) {
      console.log(err);
    });
  }
});





