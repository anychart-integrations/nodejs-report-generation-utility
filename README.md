[<img src="https://cdn.anychart.com/images/logo-transparent-segoe.png?2" width="234px" alt="AnyChart - Robust JavaScript/HTML5 Chart library for any project">](https://anychart.com)
# HTML Reports Generation Utility
This example shows how to generate HTML reports with charts using AnyChart charting library and Node.js module.

## Running
Clone this repository:
```
$ git clone git@github.com:anychart-integrations/nodejs-report-generation-utilily.git
```
Go to the example folder:
```
$ cd ./nodejs-report-generation-utilily
```
To run an example you have to install dependencies. To do so run:
```
$ npm install
```
> **Notice!**
> AnyChart NodeJS module requires [ImageMagic](https://www.imagemagick.org) to create JPG and PNG images.
Visit Image Magic [install](https://www.imagemagick.org/script/index.php) page for details.
**Note for Windows users:** you have to create environment variable as described in [Image Magic: Advanced Windows Installation](https://www.imagemagick.org/script/advanced-windows-installation.php) article.

And to run with defaults you should just exec index.js file with nodejs. 
```
 $ node index.js 
 Written to reports/report.html file
```
> **Notice!**
> Please refrain from using percent values in chart. In node js DOM emulation there is some problems with this and resulting image may be differ from the planned.

## Options
```
 -i, --input [value] - path to input data file with a chart, a stage or an svg. Default: chart.js.
 -o, --output [value] - path to output directory for reports. Default: reports
 -n, --name [value] - name of a report file. Default: report.html
```

## Requirements
* jsdom (DOM environment for the chart rendering)
* commander (for console API)
* anychart (anychart library)
* anychart-nodejs (anychart nodejs export module)

## Further Learning
* [Documentation](https://docs.anychart.com)
* [JavaScript API Reference](https://api.anychart.com)
* [Charts Playground](https://playground.anychart.com)
* [Technical Support](https://anychart.com/support)

## License
AnyChart NodeJS integration sample includes two parts:
- Code of the integration sample that allows to use Javascript library (in this case, AnyChart) with HTML Reports Generation Utility. You can use, edit, modify it, use it with other Javascript libraries without any restrictions. It is released under [Apache 2.0 License](https://github.com/anychart-integrations/nodejs-report-generation-utility/blob/master/LICENSE).
- AnyChart JavaScript library. It is released under Commercial license. You can test this plugin with the trial version of AnyChart. Our trial version is not limited by time and doesn't contain any feature limitations. Check details [here](https://www.anychart.com/buy/).

If you have any questions regarding licensing - please contact us. <sales@anychart.com>

[![Analytics](https://ga-beacon.appspot.com/UA-228820-4/Integrations/nodejs-report-generation-utility?pixel&useReferer)](https://github.com/igrigorik/ga-beacon)