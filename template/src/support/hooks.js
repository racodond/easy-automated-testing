'use strict';

const dateFormat = require('dateformat');
const { Before, After } = require('cucumber');

Before(function() {
  browser.deleteCookie();
  faker.locale = browser.options.locale;
});

After(function(scenario) {
  if (scenario.status === 'failed') {
    const errorDate = dateFormat(new Date(), 'yyyy-mm-dd-HHMMss');
    return browser.saveScreenshot(`./output/errorShots/screenshot-error-${errorDate}.png`);
  }

  return Promise.resolve();
});
