'use strict';

class SearchPage {

  get pageElements() {
    return {
      query: '#query',
      searchButton: '#search-button',
    };
  }

  search(data) {
    return browser
      .setValue(this.pageElements.query, data)
      .click(this.pageElements.searchButton);
  }

}

module.exports = new SearchPage();
