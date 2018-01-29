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
const AutoGravityPage_1 = require("../POM/AutoGravityPage");
const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;
let global = require('../../node_modules/protractor');
const { Given, When, Then } = require('cucumber');
const auto_gravity = new AutoGravityPage_1.AutoGravityPage();
let testData = require('../Data_Json/supportData');
// if you need to log in, uncomment in hook class line 11 to invoke Login function
if (global.AutoLogin === "true") {
    protractor_1.browser.driver.manage().window().maximize();
    //browser.manage().timeouts().pageLoadTimeout(40000);
    protractor_1.browser.ignoreSynchronization = true;
    Given('User navigates to Autogravity application', () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get(testData.AutoGravityURL);
        yield auto_gravity.nextBtn.click().then(() => __awaiter(this, void 0, void 0, function* () {
            // uncomment line 33 if you want to choose USED cars
            // await auto_gravity.usedCarsSelection.click().then(async () =>{
        }));
    }));
    When('User chooses random brand of car', () => __awaiter(this, void 0, void 0, function* () {
        yield auto_gravity.cadillac.click().then(() => __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.sleep(1000);
            yield auto_gravity.cadillacListSelection.getText().then((elements) => __awaiter(this, void 0, void 0, function* () {
                // to filter if needed to find particular model
                var arr = elements; //.filter(isBigEnough);
                //console.log(arr);
                arr.map((item) => __awaiter(this, void 0, void 0, function* () {
                    if (item === "CT6 Sedan\nstarting at\n$54,095 MSRP") {
                        yield protractor_1.browser.sleep(1000);
                        console.log(auto_gravity.cadillacListSelection.getText());
                        yield auto_gravity.cadillacListSelection.getElementsByTagName('div').get(arr.indexOf(item)).click().then(() => __awaiter(this, void 0, void 0, function* () {
                        }));
                    }
                }));
            }));
        }));
    }));
    When('User chooses model and fills up all info about car details', () => __awaiter(this, void 0, void 0, function* () {
        yield auto_gravity.atsCoupe.getText().then((text) => __awaiter(this, void 0, void 0, function* () {
            yield expect(text).to.eventually.equal(true, "wrong title");
            yield auto_gravity.atsCoupe.click();
        }));
        yield auto_gravity.premiumModel.click().then(() => __awaiter(this, void 0, void 0, function* () {
        }));
        yield auto_gravity.cashDownPaymentField.click().sendKeys(testData.cashDown);
        yield auto_gravity.estFactory.getText().then((text) => __awaiter(this, void 0, void 0, function* () {
            yield expect(text).to.eventually.equal(true, "wrong Text");
        }));
        yield auto_gravity.termMonths.isDisplayed().click().then(() => __awaiter(this, void 0, void 0, function* () {
            yield auto_gravity.selectMonths.click();
        }));
    }));
    Then('User proceeds to next page to fill up the personal information', () => __awaiter(this, void 0, void 0, function* () {
        yield auto_gravity.nextBtn2.click().then(() => __awaiter(this, void 0, void 0, function* () {
            yield auto_gravity.zipcodeInput.sendKeys(testData.zipcodeInput);
        }));
    }));
}
;
