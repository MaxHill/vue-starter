var File = require('./File');

/**
 * Constructor.
 *
 * @param {string} dir
 * @param {string} extension
 */
function Generate(dir, extension) {
    this.clc = require('cli-color');
    this.dir = (dir) ? '../../' + dir + '/' : '';
    this.extension = (extension) ? '.' + extension : '.vue';
    this.content = null;
    this.name = null;
    this.error = 0;
    this.getVariables();
}

/**
 * Set the content of the file.
 *
 * @param {string} content
 */
Generate.prototype.setContent = function(content) {
    this.content = content;
};

/**
 * Capitalize string.
 *
 * @param  {string} string
 * @return {string}
 */
Generate.prototype.capitalize = function(string) {
    return string.toLowerCase().replace(/\b\w/g, function(m) {
        return m.toUpperCase();
    });
};

/**
 * Get cli variables.
 */
Generate.prototype.getVariables = function() {
    // jscs:disable
    this.name = process.env.npm_config_name;
    // jscs:enable
    this.validateName();
};

/**
 * Makes sure its a valid name.
 *
 * @return {boolean}
 */
Generate.prototype.validateName = function() {
    if (typeof this.name !== 'undefined' && 0 === this.name.length) {
        console.log(this.clc.red('The name must contain characters'));
        process.exit();
    }
    if (!this.name) {
        console.log(this.clc.red('You must specify a file name'));
        process.exit();
    }
    return true;
};

/**
 * Create the file if the validator passes.
 */
Generate.prototype.create = function() {
    this.validateName();
    File.create(this.dir + this.name + this.extension, this.content);
};

module.exports = Generate;
