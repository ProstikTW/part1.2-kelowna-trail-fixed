const { Console } = require("console");
const {By, Key, Builder } = require("selenium-webdriver");
require("selenium-webdriver/chrome");


async function kelownaTest() {

    let driver = await new Builder().forBrowser("chrome").build();

    await driver.get("https://devops-proj-staging-940f3.web.app");

    

    const lastnameInput = await driver.findElement(By.id("lastname"));
    await driver.actions().sendKeys(lastnameInput, "This is Test").perform();
    
    const firstnameInput = await driver.findElement(By.id("firstname"));
    await driver.actions().sendKeys(firstnameInput , "I Love DevOps!").perform();

    const groupSize = await driver.findElement(By.id("GroupSize"));
    groupSize.clear();
    await driver.actions().sendKeys(groupSize, "5").perform();


    const buttonAdd = await driver.findElement
    (By.xpath("/html/body/div[1]/table/tbody/tr/td[1]/form/table/tbody/tr/td[2]/p[1]/input[1]")).click();

    const members = await driver.findElement(By.id("members"));
    console.log("Test Success"); 

    driver.close();
    driver.quit();
}

kelownaTest();