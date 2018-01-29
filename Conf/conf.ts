
import { Config, browser } from 'protractor';
import * as rimraf from "rimraf";
import * as path from "path";
import { AutoGravityPage } from '../POM/AutoGravityPage';
import { protractor } from 'protractor/built';
import { Reporter } from "../Support/reporter";
const jsonReports = "../../Autogravity_UI_Automation/reports/json";
let global = require('../../node_modules/protractor');
let supportData = require('../../../Autogravity_UI_Automation/Data_Json/supportData');
const htmlReports = "../../Autogravity_UI_Automation/reports/html";
const screenshot = "../../Autogravity_UI_Automation/reports/image";

export let config: Config = {
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    specs: ['../../Features/Autogravity_Loan.feature'],
    framework: 'custom',
    frameworkPath: require.resolve('../../node_modules/protractor-cucumber-framework'),
    allScriptsTimeout: 1200000000,
    
    baseUrl: supportData.AutoGravityURL,
    SELENIUM_PROMISE_MANAGER: false,
    getPageTimeout: 1200000000,
    
    capabilities: {
        browserName: 'chrome',
        shardTestFiles: true,
        maxInstances: 1,
    },
    onPrepare: () => {
        rimraf('../Autogravity_UI_Automation/reports/json/*.json', async (err) => {
            if (err) throw err;
        });
        rimraf('../Autogravity_UI_Automation/reports/json/*.png', async (err) => {
            if (err) throw err;
        });
        browser.driver.manage().window().maximize();
        browser.manage().timeouts().implicitlyWait(3000);
        browser.driver.manage().deleteAllCookies();
        Reporter.createDirectory(jsonReports);
        Reporter.createDirectory(htmlReports);
        Reporter.createDirectory(screenshot);
        global.AutoLogin = 'true';
    },
    cucumberOpts: {
        compiler: "ts:ts-node/register",
        format: "json:../Autogravity_UI_Automation/reports/json/cucumber_report.json",
        require: ['../Step_Definitions/autogravityLoanSteps.js', '../Support/hook.js', '../Support/reporter.js', '../Support/env.js'],
        strict: true,
        tags: '@ChoosingCar',
        defaultTimeoutInterval: 20000000,
        onComplete: null,
        isVerbose: true,
        showColors: true,
        includeStackTrace: true,
        profile: false,
        'no-source': true,
        jslint: true
    },
    onComplete: () => {
        Reporter.createHTMLReport();
    },
    noGlobals: false,
};
