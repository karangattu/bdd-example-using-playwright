const { test, expect } = require("@playwright/test");
const { Given, When, Then } = require("@cucumber/cucumber");

Then("Click on {string}", async function (menuOptionName) {
  await this.page.getByRole('button', { name: menuOptionName }).click();
});

When("Select {string} from list", async function (linkName) {
  await this.page.getByRole('link', { name: linkName }).first().click();
});
