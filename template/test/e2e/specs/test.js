// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
    'default e2e tests': function(browser) {
        browser
        .url('http://localhost:8000')
            .waitForElementVisible('#app', 5000)
            .assert.elementPresent('.navbar-brand')
            .assert.containsText('h1', 'Build something awesome!')
            .end();
    }
};
