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
   
    // services: ['browserstack'],
    framework: 'cucumber',
    reporters: ['spec',['allure', {outputDir: 'allure-results'}]],
    cucumberOpts: {
        require: ['./features/step-definitions/*.steps.js','./features/common/*.steps.js'],
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
}
