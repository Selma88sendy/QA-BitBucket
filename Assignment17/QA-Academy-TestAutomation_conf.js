exports.config = {
    capabilities:
        {
            browserName: 'chrome',
        },

    specs: ['QA Tests-Assignment17.js'], //'QA-Academy-TestAutomation_my-first-test.js', 'second-test.js'
    directConnect: true,
    framework: 'jasmine',
};