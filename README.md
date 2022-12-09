# Installation
1. Pull the repository to your local machine
2. Open solution folder `codecept_nord_home_task_solution_1`
3. Install, Node and npm (make sure you are using Long Term Support node version 18.x.x)
   -- find out which node version you have by using 'node -v' command.
4. Run npm install

# Technologies
- For E2E (front-end): CodeceptJS + Playwright(Node.js)
- For Integration (API): CodeceptJS + Axios (Node.js) 

With CodeceptJS I have ability to write same code base for E2E and integrations tests.
Neverless very usefull feature is test execution in parallel [more info: https://codecept.io/parallel/#parallel-execution]

# File structure
Framework configuration:
- api.codecept.conf.js
- web.codecept.conf.js

Data test files:
- data/*

Test files:
- api/tests/*Test.js
- web/tests/*Test.js

Page object files:
- api/tests/pageObjects/*Page.js
- web/tests/pageObjects/*Page.js

# Executing tests

Open solutions folder: 
   /olybet_automation

Run Integration (api) tests:
- npm run test-api
- npm run test-api-multiple (run test in parallel)

Run E2E (front-end) tests:
- npm run test-web (single); 
- npm run test-web-multiple (run test in parallel)


# Reporting

For detailed reporting change config to mocha.reporterOptions.codeceptjs-cli-reporter.options.verbose: true

.html report files you can find:
- api/output/report.html
- web/output/report.html

# Additional information about project architecture

Used helper classes in the project. Helpers are saved in helpers/ folder.

It is mandatory not to invoke other helpers in a helper file.

