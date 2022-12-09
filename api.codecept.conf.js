/** @type {CodeceptJS.MainConfig} */

const apiHelper = require('./helpers/apiHelper');

exports.config = {
  tests: './api/tests/*Test.js',
  output: './api/output',
  helpers: {
    apiHelper: {
      require: './helpers/apiHelper.js',
    },
    REST: {
      prettyPrintJson: true,
    },
    JSONResponse: {},
    ChaiWrapper: {
      require: 'codeceptjs-chai',
    },
  },
  include: {
    I: './steps_file.js',
  },
  mocha: {
    reporterOptions: {
      'codeceptjs-cli-reporter': {
        stdout: '-',
        options: {
          verbose: false,
          steps: true,
        },
      },
      mochawesome: {
        stdout: './api/output/console.log',
        options: {
          reportDir: './api/output',
          reportFilename: 'report',
        },
      },
      'mocha-junit-reporter': {
        stdout: './api/output/console.log',
        options: {
          mochaFile: './api/output/result.xml',
          attachments: true, //add screenshot for a failed test
        },
      },
    },
  },
  name: 'nord_home_task'
}
