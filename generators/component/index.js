var generators = require('yeoman-generator');
var _ = require('lodash');

module.exports = generators.Base.extend({

  prompting: function () {
    var self = this;
    var prompts = [
      {
        type: 'input',
        name: 'componentName',
        message: 'What is your component\'s name?',
        default: 'React Component'
      },{
        type: 'confirm',
        name: 'stateful',
        message: 'Would you like this component to be stateful?',
        default: false
      }
    ];
    return this.prompt(prompts).then(function (answers) {
      var camelCased = _.camelCase(answers.componentName);
      self.componentName = camelCased.charAt(0).toUpperCase() + camelCased.slice(1);
      self.stateful = answers.stateful;
    })
  },
  writing: function() {
    var context = {
      componentName: this.componentName
    }
    if (this.stateful) {
      this.template('component/_index-stateful.js', this.componentName + '/index.js', context);
    } else {
      this.template('component/_index-stateless.js', this.componentName + '/index.js', context);
    }
    this.template('component/_index.spec.js', this.componentName + '/index.spec.js', context);
    this.template('component/_styles.css', this.componentName + '/styles.css', context);
  }
});
