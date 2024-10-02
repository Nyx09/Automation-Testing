export const config = {
    
    runner: 'local',
    specs: [
        './features/**/*.feature'
    ],
    exclude: [
    ],
    maxInstances: 10,
    capabilities: [{
        browserName: 'MicrosoftEdge'
    }],
    logLevel: 'debug',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'cucumber',
    reporters: ['spec',['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
        useCucumberStepReporter: true
            }],
        'video'
    ],
    cucumberOpts: {
        require: ['./features/step-definitions/**.steps.js'],
        backtrace: false,
        requireModule: [],
        dryRun: false,
        failFast: false,
        name: [],
        snippets: true,
        source: true,
        strict: false,
        tagExpression: '',
        timeout: 60000,
        ignoreUndefinedDefinitions: false
    },
    afterStep: async function (step, scenario, { error, duration, passed }, context) {
        if (error) {
          await browser.takeScreenshot();
        }
      }
}
