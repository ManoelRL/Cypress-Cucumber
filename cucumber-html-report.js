const report = require('multiple-cucumber-html-reporter');

report.generate({
	jsonDir: 'cypress/jsonlogs',
	reportPath: './reports/multiple-cucumber-htmlreport.html',
	metadata:{
        browser: {
            name: 'chrome',
            version: 'XX'
        },
        device: 'Local test machine',
        platform: {
            name: 'Windows',
            version: '11'
        }
    },
    customData: {
        title: 'Cypress BDD Cucumber',
        data: [
            {label: 'Project Name', value: 'Gestor BAC'},
            {label: 'Execution Start Time', value: (new Date).toString()},
            {label: 'Execution End Time', value: (new Date).toString()}
        ]
    }
});
