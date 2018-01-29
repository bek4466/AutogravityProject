import { $, $$, by, element, ElementFinder, protractor, browser } from '../../../Autogravity_UI_Automation/node_modules/protractor';
let supportData = require('../../Data_Json/supportData');
import * as buffer from "buffer";
import { defineSupportCode } from 'cucumber';

export class AutoGravityPage {

    // login to autogravity 

    async Login() {
        browser.ignoreSynchronization = true;

        if (browser.baseUrl === supportData.AutoGravityURL) {
            await browser.get(supportData.AutoGravityURL);
            await element(by.xpath('//a[text()="Log In"]')).click().then(async () => {
                await element(by.name('email')).sendKeys(supportData.userName);
                await element(by.name('password')).sendKeys(supportData.Password);
                return await element(by.css('[class="btn btn-primary"]')).click().then(async () => {
                });
            });
        };
    };

    // different car models elements
    //allModels = $('[itemtype="http://schema.org/ItemList"]').$('[data-gtm="selectedMake"]');
    //ats coupe model of Cadillac
    atsCoupe = $$('[class="image___1R4ra"]').get(0);
    //2drCoupe 3.5 Premium model
    premiumModel = $$('[class="images___22alB loaded___3X_EN"]').get(6);
    // Next Btn
    nextBtn = $('[class="btn btn-primary homeButtonMain___2nQs0"]');
    // selecting Used cars 
    usedCarsSelection = $('[class="btn "]');

    // load details
    cashDownPaymentField = element.all(by.id('downpaymentinput')).get(1);
    estFactory = element.all(by.id('rebateTextField')).get(1);
    termMonths = element.all(by.id('electfieldterms'));
    selectMonths = element(by.xpath('//div[text()="24 Months"]'));
    nextBtn2 = $('[class="newButton___3mgiP btn btn-primary"]');
    zipcodeInput = $('[class="inputField___3-EiM"]');



    // All the models list function
    async loopingThroughModelList() {
        this.newItem.getText().then(async (colData) => {
            var columnData = colData;
            var p = 0;
            var newColData = [];
            for (var i = 0; i < (columnData.length - 1); i++) {
                newColData[p++] = colData[i + 1].slice();
            }
            for (var j = 0; j < newColData.length; j++) {
                if (newColData[j] === 'Cadillac') {
                    this.newItem.getText().get(newColData.indexOf('Cadillac')).click().then(async () => {
                        console.log('Printed and selected Cadillac');
                    })
                }
                break;
            }

        })
    }

    newItem = $$('[class="list-group-item item___2KSDy"]');
    modelsList = $$('[class="container-fluid"]').get(1);
    //modelsList = $('[itemtype="http://schema.org/ItemList"]');
    individualModel = $('class="col-xs-4 col-sm-3 col-md-2 makeFrame___1XMiK makeAll___11IQY"').$('//h5[text()="Cadillac"]');
    cadillac = $$('[class="col-xs-4 col-sm-3 col-md-2 makeFrame___1XMiK makeAll___11IQY"]').get(7);
    cadillacListSelection = $$('[class="col-sm-3 model___3RrUN"]');
    //get different models for cadillac


    async isBigEnough(value) {
        return value == 'CTS Sedan\nstarting at\n$46,295 MSRP';
    }

    // random models
    async difModel() {
        var lists = document.getElementsByTagName("ul");
        for (var i = 0; i < lists.length; i++) {
            if (/(^|\\s)list-group(\\s|$)/.test(lists[i].className)) {
                var items = lists[i].getElementsByTagName("li");
                for (var j = 0; j < items.length; ++j) {
                    if (items[j].lastElementChild.appendChild) {
                        return element.all(by.css('[class="list-group-item item___2KSDy"]')).get(27);
                    }
                }
            }
        }

    }
}