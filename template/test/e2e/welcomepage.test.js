module.exports = {
  'Test Welcome page' : function (browser) {

    browser
      .url('http://0.0.0.0:8000')
      .waitForElementVisible('body', 1000)
      .assert.containsText('.navbar-brand', 'FOREVERLIVING AWESOME')
      .assert.containsText('.main-container h3', 'Hello from vue; eller')
      .end();
  }
};
