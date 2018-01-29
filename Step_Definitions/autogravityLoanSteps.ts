
//import * as console from 'console';
import { async } from 'rxjs/scheduler/async';
import { AssertionError, throws } from 'assert';
import { by, element, browser, ElementFinder, protractor, By, $, $$, ExpectedConditions, Ptor } from 'protractor';
import { AutoGravityPage } from '../POM/AutoGravityPage';
const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;
let global = require('../../node_modules/protractor');
const { Given, When, Then } = require('cucumber');
const auto_gravity: AutoGravityPage = new AutoGravityPage();
let testData = require('../Data_Json/supportData');
declare var console: Console;

// if you need to log in, uncomment in hook class line 11 to invoke Login function

if (global.AutoLogin === "true") {

    browser.driver.manage().window().maximize();
    //browser.manage().timeouts().pageLoadTimeout(40000);
    browser.ignoreSynchronization = true;

    Given('User navigates to Autogravity application', async () => {

        await browser.get(testData.AutoGravityURL);

        await auto_gravity.nextBtn.click().then(async () => {
            // uncomment line 33 if you want to choose USED cars
            // await auto_gravity.usedCarsSelection.click().then(async () =>{
        });
    });


    When('User chooses random brand of car', async () => {
        
        await auto_gravity.cadillac.click().then(async () => {
            await browser.sleep(1000);

            await auto_gravity.cadillacListSelection.getText().then(async (elements) => {
                // to filter if needed to find particular model
                var arr = elements//.filter(isBigEnough);
                //console.log(arr);
                arr.map(async (item) => {
                    if (item === "CT6 Sedan\nstarting at\n$54,095 MSRP") {
                        await browser.sleep(1000);
                        console.log(auto_gravity.cadillacListSelection.getText());
                        await auto_gravity.cadillacListSelection.getElementsByTagName('div').get(arr.indexOf(item)).click().then(async () => {
                        });
                    }
                });
            });
        });
    });

        When('User chooses model and fills up all info about car details', async () => {

            await auto_gravity.atsCoupe.getText().then(async (text) => {
                await expect(text).to.eventually.equal(true, "wrong title");
                await auto_gravity.atsCoupe.click();
            });

            await auto_gravity.premiumModel.click().then(async () => {

            });
            await auto_gravity.cashDownPaymentField.click().sendKeys(testData.cashDown);
            await auto_gravity.estFactory.getText().then(async (text) => {
                await expect(text).to.eventually.equal(true, "wrong Text");
            })
            await auto_gravity.termMonths.isDisplayed().click().then(async () => {
                await auto_gravity.selectMonths.click();
            })


        });

        Then('User proceeds to next page to fill up the personal information', async () => {
           
            await auto_gravity.nextBtn2.click().then(async () => {
                await auto_gravity.zipcodeInput.sendKeys(testData.zipcodeInput);
            })
        });
    };