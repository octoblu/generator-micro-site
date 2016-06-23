var generators = require('yeoman-generator');
var _ = require('lodash');

module.exports = generators.Base.extend({

  prompting: function () {
    var self = this;
    var prompts = [
      {
        type: 'input',
        name: 'appNameKebab',
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
      var camelCased = _.camelCase(answers.appNameKebab);
      self.appName = camelCased.charAt(0).toUpperCase() + camelCased.slice(1);
      self.appNameKebab = _.kebabCase(self.appName);
      self.author = answers.author;
      self.githubUser = answers.githubUser;
      self.githubUrl = "https://github.com/" + answers.githubUser;
    })
  },
  writing: function() {
    var context = {
      appNameKebab: this.appNameKebab,
      author: this.author,
      githubUrl: this.githubUrl,
      githubUser: this.githubUser,
      appName: this.appName
    }
    this.template('_webpack.config.dev.js', 'webpack.config.dev.js', context);
    this.template('_webpack.config.prod.js', 'webpack.config.prod.js', context);
    this.template('_README.md', 'README.md', context);
    this.template('_package.json', 'package.json', context);
    this.template('_index.html', 'index.html', context);
    this.template('_dev-server.js', 'dev-server.js', context);
    this.template('_babelrc', '.babelrc', context);
    this.template('_eslintrc', '.eslintrc', context);
    this.template('_eslintignore', '.eslintignore', context);
    this.template('src/components/NotFound/_NotFound.js', 'src/components/NotFound/NotFound.js', context);
    this.template('src/components/NotFound/_NotFound.spec.js', 'src/components/NotFound/NotFound.spec.js', context);
    this.template('src/components/NotFound/_NotFound.css', 'src/components/NotFound/NotFound.css', context);
    this.template('src/components/NotFound/_index.js', 'src/components/NotFound/index.js', context);
    this.template('src/config/_routes.js', 'src/config/routes.js', context);
    this.template('src/containers/_app.js', 'src/containers/app.js', context);
    this.template('src/containers/_home.js', 'src/containers/home.js', context);
    this.template('src/_index.js', 'src/index.js', context);
    this.template('test/_setup.js', 'test/.setup.js', context);
    this.template('test/_mocha.opts', 'test/mocha.opts', context);
    this.template('_travis.yml', '.travis.yml', context);
    this.template('_gitignore', '.gitignore', context);
  }
});
