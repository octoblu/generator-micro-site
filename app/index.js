var generators = require('yeoman-generator');
var createFile = require('create-file');

module.exports = generators.Base.extend({
  createFile: function () {
    var content = 'a whole bunch of shit'
    createFile('./test.js', content, function (err) {
      console.log('Created file...');
    });
  }
});
