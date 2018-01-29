"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const rimraf = require("rimraf");
const reporter_1 = require("../Support/reporter");
const jsonReports = "../../Autogravity_UI_Automation/reports/json";
let global = require('../../node_modules/protractor');
let supportData = require('../../../Autogravity_UI_Automation/Data_Json/supportData');
const htmlReports = "../../Autogravity_UI_Automation/reports/html";
const screenshot = "../../Autogravity_UI_Automation/reports/image";
exports.config = {
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
        rimraf('../Autogravity_UI_Automation/reports/json/*.json', (err) => __awaiter(this, void 0, void 0, function* () {
            if (err)
                throw err;
        }));
        rimraf('../Autogravity_UI_Automation/reports/json/*.png', (err) => __awaiter(this, void 0, void 0, function* () {
            if (err)
                throw err;
        }));
        protractor_1.browser.driver.manage().window().maximize();
        protractor_1.browser.manage().timeouts().implicitlyWait(3000);
        protractor_1.browser.driver.manage().deleteAllCookies();
        reporter_1.Reporter.createDirectory(jsonReports);
        reporter_1.Reporter.createDirectory(htmlReports);
        reporter_1.Reporter.createDirectory(screenshot);
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
        reporter_1.Reporter.createHTMLReport();
    },
    noGlobals: false,
};
