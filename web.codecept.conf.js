/** @type {CodeceptJS.MainConfig} */

exports.config = {
  tests: './web/tests/*Test.js',
  output: './web/output',
  helpers: {
    Playwright: {
      url: 'https://dev-back-office2.80.oit.lt/',
      show: false, // headless mode should be false by default; 
      browser: 'chromium',
      args: [
        '--disable-dev-shm-usage',
        '--no-sandbox',
        '--user-data-dir="/tmp/chromium"',
        '--disable-web-security',
        '--disable-features=site-per-process',
      ]
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
    loginPage: './web/tests/pageObjects/loginPage.js',
    foldersPage: './web/tests/pageObjects/foldersPage.js'
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
        stdout: './web/output/console.log',
        options: {
          reportDir: './web/output',
          reportFilename: 'report',
        },
      },
      'mocha-junit-reporter': {
        stdout: './web/output/console.log',
        options: {
          mochaFile: './web/output/result.xml',
          attachments: true, //add screenshot for a failed test
        },
      },
    },
  },
  name: 'nord_home_task'
}