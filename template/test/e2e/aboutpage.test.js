module.exports = {
    'Test About page': function(browser) {
        browser
          .url('http://localhost:8888/about')
          .waitForElementVisible('body', 1000)
          .assert.containsText('.navbar-brand', 'FOREVERLIVING AWESOME')
          .assert.containsText('.main-container h3', 'Hello')
          .end();
    }
};
