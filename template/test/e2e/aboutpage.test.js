module.exports = {
  'Test About page' : function (browser) {
    browser
      .url('http://0.0.0.0:8000/about')
      .waitForElementVisible('body', 1000)
      .assert.containsText('.navbar-brand', 'FOREVERLIVING AWESOME')
      .assert.containsText('.main-container h3', 'Hello')
      .end();
  }
}
