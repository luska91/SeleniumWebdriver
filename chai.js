// const { assert } = require("chai");
const { Builder, By, Key} = require("selenium-webdriver");
const should = require('chai').should();
const assert = require('assert');
const { equal } = require("assert");
require('chromedriver');

async function chaiTest(){
    const driver = await new Builder().forBrowser('chrome').build();
    await driver.manage().setTimeouts({ implicit: 10000 });

    // navigae to the website
    await driver.get('https://skryabin.com/market/quote.html');

    // make actions- type passwords
    await driver.findElement(By.id('password')).sendKeys('1234',Key.TAB);
    // check the error msg is available
    const errorMessage = await driver.findElement(By.id('password-error'));
    const isErrorMessageDisplayed = await errorMessage.isDisplayed();
    console.log(isErrorMessageDisplayed);

    // assert that error msg is displayed using Node JS assertion library
    assert.equal(isErrorMessageDisplayed, true)

    // assert that error msg is displayed using CHaiJS assertion library
isErrorMessageDisplayed.should.be.true;

// getting the error msg text
const errorMessageText = await errorMessage.getText();
console.log(errorMessageText);

// check the text error msg with NodeJS library
assert.strictEqual(errorMessageText, 'Please enter at least 5 characters.');


// check the text error msg with ChaiJS library
errorMessageText.should.equal('Please enter at least 5 characters.');
errorMessageText.should.equal.include('5 characters', 'There is no such phrase');

// check the text error msg with NodeJS library)
    // close the browser
    await driver.quit();
}
chaiTest();