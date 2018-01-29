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
const protractor_1 = require("../../../Autogravity_UI_Automation/node_modules/protractor");
let supportData = require('../../Data_Json/supportData');
class AutoGravityPage {
    constructor() {
        // login to autogravity 
        // different car models elements
        //allModels = $('[itemtype="http://schema.org/ItemList"]').$('[data-gtm="selectedMake"]');
        //ats coupe model of Cadillac
        this.atsCoupe = protractor_1.$$('[class="image___1R4ra"]').get(0);
        //2drCoupe 3.5 Premium model
        this.premiumModel = protractor_1.$$('[class="images___22alB loaded___3X_EN"]').get(6);
        // Next Btn
        this.nextBtn = protractor_1.$('[class="btn btn-primary homeButtonMain___2nQs0"]');
        // selecting Used cars 
        this.usedCarsSelection = protractor_1.$('[class="btn "]');
        // load details
        this.cashDownPaymentField = protractor_1.element.all(protractor_1.by.id('downpaymentinput')).get(1);
        this.estFactory = protractor_1.element.all(protractor_1.by.id('rebateTextField')).get(1);
        this.termMonths = protractor_1.element.all(protractor_1.by.id('electfieldterms'));
        this.selectMonths = protractor_1.element(protractor_1.by.xpath('//div[text()="24 Months"]'));
        this.nextBtn2 = protractor_1.$('[class="newButton___3mgiP btn btn-primary"]');
        this.zipcodeInput = protractor_1.$('[class="inputField___3-EiM"]');
        this.newItem = protractor_1.$$('[class="list-group-item item___2KSDy"]');
        this.modelsList = protractor_1.$$('[class="container-fluid"]').get(1);
        //modelsList = $('[itemtype="http://schema.org/ItemList"]');
        this.individualModel = protractor_1.$('class="col-xs-4 col-sm-3 col-md-2 makeFrame___1XMiK makeAll___11IQY"').$('//h5[text()="Cadillac"]');
        this.cadillac = protractor_1.$$('[class="col-xs-4 col-sm-3 col-md-2 makeFrame___1XMiK makeAll___11IQY"]').get(7);
        this.cadillacListSelection = protractor_1.$$('[class="col-sm-3 model___3RrUN"]');
    }
    Login() {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.ignoreSynchronization = true;
            if (protractor_1.browser.baseUrl === supportData.AutoGravityURL) {
                yield protractor_1.browser.get(supportData.AutoGravityURL);
                yield protractor_1.element(protractor_1.by.xpath('//a[text()="Log In"]')).click().then(() => __awaiter(this, void 0, void 0, function* () {
                    yield protractor_1.element(protractor_1.by.name('email')).sendKeys(supportData.userName);
                    yield protractor_1.element(protractor_1.by.name('password')).sendKeys(supportData.Password);
                    return yield protractor_1.element(protractor_1.by.css('[class="btn btn-primary"]')).click().then(() => __awaiter(this, void 0, void 0, function* () {
                    }));
                }));
            }
            ;
        });
    }
    ;
    // All the models list function
    loopingThroughModelList() {
        return __awaiter(this, void 0, void 0, function* () {
            this.newItem.getText().then((colData) => __awaiter(this, void 0, void 0, function* () {
                var columnData = colData;
                var p = 0;
                var newColData = [];
                for (var i = 0; i < (columnData.length - 1); i++) {
                    newColData[p++] = colData[i + 1].slice();
                }
                for (var j = 0; j < newColData.length; j++) {
                    if (newColData[j] === 'Cadillac') {
                        this.newItem.getText().get(newColData.indexOf('Cadillac')).click().then(() => __awaiter(this, void 0, void 0, function* () {
                            console.log('Printed and selected Cadillac');
                        }));
                    }
                    break;
                }
            }));
        });
    }
    //get different models for cadillac
    isBigEnough(value) {
        return __awaiter(this, void 0, void 0, function* () {
            return value == 'CTS Sedan\nstarting at\n$46,295 MSRP';
        });
    }
    // random models
    difModel() {
        return __awaiter(this, void 0, void 0, function* () {
            var lists = document.getElementsByTagName("ul");
            for (var i = 0; i < lists.length; i++) {
                if (/(^|\\s)list-group(\\s|$)/.test(lists[i].className)) {
                    var items = lists[i].getElementsByTagName("li");
                    for (var j = 0; j < items.length; ++j) {
                        if (items[j].lastElementChild.appendChild) {
                            return protractor_1.element.all(protractor_1.by.css('[class="list-group-item item___2KSDy"]')).get(27);
                        }
                    }
                }
            }
        });
    }
}
exports.AutoGravityPage = AutoGravityPage;
