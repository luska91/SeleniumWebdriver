const { Builder,By, Key, until } = require("selenium-webdriver");
const assert = require('assert');
require('chromedriver');
require('geckodriver');

async function bingTest() {
// 1.Start the session
const driver = await new Builder().forBrowser('firefox').build();

// 2. Establish waiting strategy
await driver.manage().setTimeouts({ implicit: 10000 });

// 3. Navigate to a web page
await driver.get('https://www.bing.com/');

// 4. Find an Element and  take an action
await driver.findElement(By.id('sb_form_q')).sendKeys('dicaprio', Key.ENTER);

// 5. Check title
let titleText = await driver.getTitle();
assert.strictEqual(titleText, "dicaprio - Search");
const isResultDisplayed = await driver.findElement(By.id('b_results')).isDisplayed();
assert.equal(isResultDisplayed, true);

// 6. 
await driver.quit();
}
bingTest();





