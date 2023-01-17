const { test, expect } = require("@playwright/test");
const { Given, When, Then } = require("@cucumber/cucumber");

Given("User launches {string} search page", async function (name) {
  await this.openUrl("https://www.google.com/");
});

Given("Page is loaded", async function () {
  expect(this.page).toHaveTitle("Google");
});

Then("Fill up the term {string} in search bar", async function (searchTerm) {
  await this.page.getByRole("combobox", { name: "Search" }).fill("cute kitten");
});

When("Click the {string} button", async function (buttonName) {
  await this.page.getByRole("combobox", { name: "Search" }).press("Enter");
});

Then(
  "You should see the search page with {string} results",
  async function (searchTerm) {
    await this.page
      .getByRole("button", { name: "Image result for cute kitten Video" })
      .first()
      .click();
  }
);
