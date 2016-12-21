var fs = require('fs');
var clc = require('cli-color');
module.exports =  {
    create: function(file, content) {
        this.exists(
            __dirname + '/../' + file,
            this.write,
            content
        );
    },

    exists: function(file, callback, content) {
        fs.exists(file, function(exists) {
            if (exists) {
                console.log(
                    clc.red('File exists:') +
                    file.replace(__dirname + '/../' , '')
                );
                return true;
            }
            callback(file, content);
        });
    },

    write: function(file, content) {
        fs.writeFile(file, content, function(err) {
            if (err) {
                return console.log(clc.red(err));
            }
            console.log(
                clc.green('Created: ') +
                file.replace(__dirname + '/../' , '')
            );
        }.bind(this));
    }
};
