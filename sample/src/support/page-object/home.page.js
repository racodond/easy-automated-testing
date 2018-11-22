'use strict';

class HomePage {

  get pageElements() {
    return {
      search: '#search',
      contact: '#contact',
    };
  }

  goToPageFromMenu(pageName) {
    return browser.click(this.pageElements[pageName]);
  }

}

module.exports = new HomePage();
