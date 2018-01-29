import * as reporter from "cucumber-html-reporter";
import * as fs from "fs";
import * as mkdirp from  "mkdirp";
import * as path from "path";
import { browser } from 'protractor';
import { mkdir } from "fs";
const jsonReports = path.join(process.cwd(), "../../AutoGravityProject/Autogravity_UI_Automation/reports/json");
const htmlReports = path.join(process.cwd(), "../../AutoGravityProject/Autogravity_UI_Automation/reports/html");
const targetJson = jsonReports + "/cucumber_report.json";
const targetHtml = htmlReports + "/cucumber_report.html";
const screenshot = path.join(process.cwd(), "../../AutoGravityProject/Autogravity_UI_Automation/reports/image");

const cucumberReporterOptions ={ 
    brandTitle: "Autogravity",
    jsonDir: jsonReports,
    output: targetHtml,
    reportsSuiteAsScenarios: true,
    ignoreBadJsonFile: true,
    theme: "bootstrap",
    screenshotsDirectory: screenshot,
    storeScreenshots: true,
    metadata: {
        'App Version': '0.3.2',
        'Test Environment': 'STAGING',
        'Browser': 'Chrome  54.0.2840.98',
        'Platform': 'Windows 10',
        'Parallel': 'Scenarios',
        'Executed': 'Remote'
    }
};

export class Reporter { 
    public static createDirectory(dir: string){
        if(!fs.existsSync(dir)){
            mkdirp.sync(dir);
        }
    }

    public static createHTMLReport(){
        try{ 
            reporter.generate(cucumberReporterOptions);
        }catch(err){
            if(err){
                throw new Error("Failed to save Cucumber test results to Json file.");
            }
        }
    }
}
