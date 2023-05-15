const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });

  test("Clicking Draw displays the choices div", async () => {
        await driver.get("http://localhost:8000");
        await driver.findElement(By.id("draw")).click();
        await driver.wait(until.elementLocated(By.id("choices")), 1000);
        expect(await driver.wait(until.elementLocated(By.id('choices')), 1000).isEnabled()).toBeTruthy()
    });

    test("Removing a bot from Duo puts it back in choices", async () => {
      await driver.get("http://localhost:8000");
      await driver.findElement(By.id("draw")).click();
      await driver.findElements(By.className("bot-btn")).click();
      await driver.findElements(By.className("bot-btn")).click();
      await driver.wait(until.elementLocated(By.id("choices")), 1000);
      const choicesDiv = await driver.findElement(By.id("choices"));
      expect(choicesDiv).toBeTruthy();
    });
});
