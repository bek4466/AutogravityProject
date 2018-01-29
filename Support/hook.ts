const { BeforeAll, After, Status } = require("cucumber");
import { browser } from 'protractor';
import * as fs from "fs";
import * as path from "path";
import { config } from "../tmp/Conf/conf";
import { AutoGravityPage } from '../POM/AutoGravityPage';
const auto_page: AutoGravityPage = new AutoGravityPage();

BeforeAll(async () => {
    // if you need to log in
    //await auto_page.Login();
});

After(async function(scenario){
    if(scenario.result.status === Status.FAILED){
        const screenshot = await browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    }

});