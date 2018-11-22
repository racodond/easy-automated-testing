'use strict';

class Navigate {

  constructor(pages, homePage) {
    this.pages = pages;
    this.homePage = homePage;
  }

  goToPage(pageName) {
    return browser.url(browser.options.baseUrl + this.pages[pageName]['path']);
  }

  goToPageFromHomePageMenu(pageName) {
    return this.homePage.goToPageFromMenu(pageName);
  }

  seePage(pageName) {
    return browser.getTitle().should.eventually.equal(this.pages[pageName]['title']);
  }
}

const navigate = new Navigate(
  require('src/support/configuration/pages'),
  require('src/support/page-object/home.page'),
);

browser.addCommand('goToPage', function(pageName) {
  logger.info(`Go to the ${pageName} page`, {
    file: __filename,
    method: 'browser.goToPage',
  });
  return navigate.goToPage(pageName);
});

browser.addCommand('goToPageFromHomePageMenu', function(pageName) {
  logger.info(`Go to the ${pageName} page from the home page menu`, {
    file: __filename,
    method: 'browser.goToPageFromHomePageMenu',
  });
  return navigate.goToPageFromHomePageMenu(pageName);
});

browser.addCommand('seePage', function(pageName) {
  logger.info(`See ${pageName}`, {
    file: __filename,
    method: 'browser.seePage',
  });
  return navigate.seePage(pageName);
});
