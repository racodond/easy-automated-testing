'use strict';

class Search {

  constructor(searchPage, resultsPage) {
    this.searchPage = searchPage;
    this.resultsPage = resultsPage;
  }

  search(data) {
    return this.searchPage.search(data);
  }

  searchForSomethingThatDoesNotExist() {
    return this.search(require('src/support/data/search/search-for-something-that-does-not-exist.data'));
  }

  searchForSomethingThatExists() {
    return this.search(require('src/support/data/search/search-for-something-that-exists.data'));
  }

  seeNoResults() {
    return this.resultsPage.seeNoResults();
  }

  seeResults() {
    return this.resultsPage.seeResults();
  }

  seeSearchQuery(query) {
    return this.resultsPage.seeSearchQuery(query);
  }
}

const search = new Search(
  require('src/support/page-object/search.page'),
  require('src/support/page-object/results.page'),
);

browser.addCommand('search', function (data) {
  logger.info(`Search for  ${data}`, {
    file: __filename,
    method: 'browser.search',
  });
  return search.search(data);
});

browser.addCommand('searchForSomethingThatDoesNotExist', function () {
  logger.info('Search for something that does not exist', {
    file: __filename,
    method: 'browser.searchForSomethingThatDoesNotExist',
  });
  return search.searchForSomethingThatDoesNotExist();
});

browser.addCommand('searchForSomethingThatExists', function () {
  logger.info('Search for something that exists', {
    file: __filename,
    method: 'browser.searchForSomethingThatExists',
  });
  return search.searchForSomethingThatExists();
});

browser.addCommand('seeNoResults', function () {
  logger.info('See no results', {
    file: __filename,
    method: 'browser.seeNoResults',
  });
  return search.seeNoResults();
});

browser.addCommand('seeResults', function () {
  logger.info('See several results', {
    file: __filename,
    method: 'browser.seeResults',
  });
  return search.seeResults();
});

browser.addCommand('seeSearchQuery', function (query) {
  logger.info(`See search query: ${query}`, {
    file: __filename,
    method: 'browser.seeSearchQuery',
  });
  return search.seeSearchQuery(query);
});
