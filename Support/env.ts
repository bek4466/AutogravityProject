import { defineSupportCode } from "cucumber";

let scenarioTimeout = 1200 * 1000;

defineSupportCode(({ setDefaultTimeout }) => {
    setDefaultTimeout(scenarioTimeout);
});