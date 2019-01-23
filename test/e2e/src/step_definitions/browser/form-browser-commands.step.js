'use strict';

require('src/support/business-object/form-browser-commands.bo');

const { When, Then } = require('cucumber');

When(/^I search for commands$/, function() {
  return browser.searchForCommands(require('src/support/data/search.data'));
});

Then(/^I should see filled in search details$/, function() {
  return browser.seeSearchDetails();
});
