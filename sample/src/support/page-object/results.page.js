'use strict';

class ResultsPage {

  get pageElements() {
    return {
      query: '#query',
      noResults: '#no-results',
      severalResults: '#many-results',
    };
  }

  seeNoResults() {
    return browser.waitForVisible(this.pageElements.noResults).should.eventually.be.true;
  }

  seeResults() {
    return browser.waitForVisible(this.pageElements.severalResults).should.eventually.be.true;
  }

  seeSearchQuery(query) {
    return browser
      .waitForText(this.pageElements.query)
      .getText(this.pageElements.query).should.eventually.equal(query);
  }

}

module.exports = new ResultsPage();
