"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
let scenarioTimeout = 1200 * 1000;
cucumber_1.defineSupportCode(({ setDefaultTimeout }) => {
    setDefaultTimeout(scenarioTimeout);
});
