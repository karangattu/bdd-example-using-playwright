const { test, expect } = require("@playwright/test");
const { Given, When, Then } = require("@cucumber/cucumber");

Given("User launches {string} search page", async function (name) {
  await this.openUrl(name);
});

Given("{string} Page is loaded", async function (titleName) {
  expect(this.page).toHaveTitle(titleName);
});

Then("Fill up the term {string} in search bar", async function (searchTerm) {
  await this.page.getByRole("combobox", { name: "Search" }).fill(searchTerm);
});

When("Click the {string} button", async function (buttonName) {
  await this.page.getByRole("combobox", { name: buttonName }).press("Enter");
});

Then(
  "You should see the search page with {string} results",
  async function (searchTerm) {
    await this.page.getByRole('link', { name: `Images for ${searchTerm}`});
  }
);
