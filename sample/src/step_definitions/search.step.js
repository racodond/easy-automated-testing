'use strict';

require('src/support/business-object/search.bo');

const { defineSupportCode } = require('cucumber');

defineSupportCode(function ({ Before, Given, When, Then }) {

  let query = require('src/support/data/search/search-for-something.data');

  Before({ tags: '@query-reminder' }, function() {
    query = require('src/support/data/search/search-for-something-query-reminder.data');
  });

  When(/^I search for something$/, function () {
    return browser.search(query);
  });

  When(/^I search for something that does not exist$/, function () {
    return browser.searchForSomethingThatDoesNotExist();
  });

  When(/^I search for something that exists$/, function () {
    return browser.searchForSomethingThatExists();
  });

  Then(/^I should see some results$/, function () {
    return browser.seeResults();
  });

  Then(/^I should be told that no results have been found$/, function () {
    return browser.seeNoResults();
  });

  Then(/^I should be reminded what I searched for$/, function () {
    return browser.seeSearchQuery(query);
  });

});
