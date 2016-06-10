var generators = require('yeoman-generator');
var _ = require('lodash');

module.exports = generators.Base.extend({

  prompting: function () {
    var self = this;
    var prompts = [
      {
        type: 'input',
        name: 'appname',
        message: 'What would you like your app to be called?',
        default: 'Zooid App'
      },
      {
        type: 'input',
        name: 'author',
        message: 'Who is the author?',
        default: 'Octoblu Inc'
      },
      {
        type: 'input',
        name: 'githubUser',
        message: 'What is your github username?',
        default: 'octoblu'
      }
    ];
    return this.prompt(prompts).then(function (answers) {
      var camelCased = _.camelCase(answers.appname);
      self.appNameCamel = camelCased.charAt(0).toUpperCase() + camelCased.slice(1);
      self.appname = _.kebabCase(self.appNameCamel);
      self.author = answers.author;
      self.githubUrl = "https://github.com/" + answers.githubUser;
    })
  },
  writing: function() {
    var context = {
      appname: this.appname,
      author: this.author,
      githubUrl: this.githubUrl
    }
    this.template('_webpack.config.dev.js', this.appNameCamel + '/webpack.config.dev.js', context);
    this.template('_webpack.config.prod.js', this.appNameCamel + '/webpack.config.prod.js', context);
    this.template('_package.json', this.appNameCamel + '/package.json', context);
    this.template('_index.html', this.appNameCamel + '/index.html', context);
    this.template('_dev-server.js', this.appNameCamel + '/dev-server.js', context);
    this.template('_babelrc', this.appNameCamel + '/.babelrc', context);
    this.template('_eslintrc', this.appNameCamel + '/.eslintrc', context);
    this.template('_eslintignore', this.appNameCamel + '/.eslintignore', context);
    this.template('src/components/NotFound/_NotFound.js', this.appNameCamel + '/src/components/NotFound/NotFound.js', context);
    this.template('src/components/NotFound/_NotFound.spec.js', this.appNameCamel + '/src/components/NotFound/NotFound.spec.js', context);
    this.template('src/components/NotFound/_NotFound.css', this.appNameCamel + '/src/components/NotFound/NotFound.css', context);
    this.template('src/components/NotFound/_index.js', this.appNameCamel + '/src/components/NotFound/index.js', context);
    this.template('src/config/_routes.js', this.appNameCamel + '/src/config/routes.js', context);
    this.template('src/containers/_app.js', this.appNameCamel + '/src/containers/app.js', context);
    this.template('src/containers/_home.js', this.appNameCamel + '/src/containers/home.js', context);
    this.template('src/_index.js', this.appNameCamel + '/src/index.js', context);
    this.template('test/_setup.js', this.appNameCamel + '/test/.setup.js', context);
    this.template('test/_mocha.opts', this.appNameCamel + '/test/mocha.opts', context);
    this.template('_travis.yml', this.appNameCamel + '/.travis.yml', context);
    this.template('_gitignore', this.appNameCamel + '/.gitignore', context);
  }
});
