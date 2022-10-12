const report = require('multiple-cucumber-html-reporter');
 
report.generate({
    jsonDir: './test/reports/cucumber-results/',
    reportPath: './test/reports/cucumber-results/',
    launchReport:true,
    metadata:{
        browser: {
            name: 'chrome',
            version: '60'
        },
        device: 'Local test machine',
        platform: {
            name: 'ubuntu',
            version: '16.04'
        }
    },
    customData: {
        title: 'Run info',
        data: [
            {label: 'Project', value: 'OLIVE Project'},
            {label: 'Release', value: '1.0.0'},
            {label: 'Cycle', value: 'B11221.34321'},
            // {label: 'Execution Start Time', value: 'Nov 19th 2017, 02:31 PM EST'},
            // {label: 'Execution End Time', value: 'Nov 19th 2017, 02:56 PM EST'}
        ]
    }
});


// let reporter = require('cucumber-html-reporter');

// let options = {
//     theme: 'bootstrap',
//     jsonFile: './test/reports/cucumber-results/registation-login-testing.json',
//     output: './test/reports/cucumber-results/cucumber_report.html',
//     reportSuiteAsScenarios: false,
//     scenarioTimestamp: true,
//     launchReport: true,
//     metadata: {
//         "App Version": "1.0.0",
//         "Test Environment": "QA",
//         "Browser": "Chrome  80",
//         "Platform": "Mac"
//     }
// };

// reporter.generate(options);
