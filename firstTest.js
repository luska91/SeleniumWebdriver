const { Builder, By, until } = require("selenium-webdriver");
const assert = require('assert');
require('chromedriver');

async function ledarte(){
// 1. Start the session
const driver = await new Builder().forBrowser('chrome').build();

// 2. Establish Waiting strategy
await driver.manage().setTimeouts({ implicit: 10000 });

// 3. Navigate to a web page
await driver.get('https://ledarte.net/');

// 4. Find an element
await driver.findElement(By.xpath("//a[contains(text(), 'shop now')]")).click();

// 5. Check result
const isResultDisplayed = await driver.findElement(By.linkText("About le d'ARTe")).isDisplayed();
assert.equal(isResultDisplayed, true);

// 6. Quit the page
await driver.quit();
}
ledarte();

// const isResultDisplayed = await driver.findElement(By.xpath("//a[contains(text(), 'Get direction')]")).isDisplayed();

// await driver.wait(until.titleIs(),1000);
// const title = await driver.getTitle();
