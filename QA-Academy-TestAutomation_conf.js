exports.config = {
    capabilities:
        {
            browserName: 'chrome',
        },

    specs: ['QA-Academy-TestAutomation_my-first-test.js'],
    directConnect: true,
    framework: 'jasmine',
    restartBrowserBetweenTests: true
};