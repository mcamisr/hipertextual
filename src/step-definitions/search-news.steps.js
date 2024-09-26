const { Given, When, Then } = require("@wdio/cucumber-framework");
const SEARCH = require("../pageobjects/search-news.page");
const { browser , expect} = require("@wdio/globals");
const assert = require("assert");

Given(/^I am on the main page$/, async () => {
  await SEARCH.OpenPage();
});

When(/^I search for the news about Reed Jobs$/, async () => {
 
  await SEARCH.SearchText();
});

Then(/^I should see that the url is correct$/, async () => {
  assert.equal(await browser.getUrl(), SEARCH.urlNewsletter);
});

When(/^I enter my email address I click on the subscribe button$/, async () => {
  await SEARCH.SubcribeMe();
});
Then(/^I should see the confirmation message$/, async () => {
  await expect(SEARCH.TextForConfirmation).toBeDisplayed()

});
