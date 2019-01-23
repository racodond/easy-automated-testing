'use strict';

const { Given, When, Then } = require('cucumber');

Given(/^I am on the (.+) page$/, function(pageName) {
  return browser
    .goToPage(pageName)
    .seePage(pageName);
});

When(/^I go to the (.+) page$/, function(pageName) {
  return browser.goToPage(pageName);
});

When(/^I go to the (.+) page from the home page menu$/, function(pageName) {
  return browser.goToPageFromHomePageMenu(pageName);
});

Then(/^I should be on the (.+) page$/, function(pageName) {
  return browser.seePage(pageName);
});
