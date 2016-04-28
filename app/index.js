var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  askFor: function() {
    var self = this;
    var done = this.async();
    var prompts = [
      {
        name: 'appname',
        message: 'What would you like your app to be called?',
        'default': 'sample-app'
      },
      {
        name: 'author',
        message: 'Who is the author?',
        'default': 'Bob Jones'
      },
      {
        name: 'githubUser',
        message: 'What is your github username?'
      }
    ];

    this.prompt(prompts, function(props) {
      self.appname = props.appname;
      self.author = props.author;
      self.githubUrl = "https://github.com/" + props.githubUser;
      return done();
    })
  },
  projectFiles: function() {
    this.template('_webpack.config.dev.js', 'webpack.config.dev.js');
    this.template('_webpack.config.prod.js', 'webpack.config.prod.js');
    this.template('_package.json', 'package.json');
    this.template('_index.html', 'index.html');
    this.template('_dev-server.js', 'dev-server.js');
    this.template('_babelrc', '.babelrc');
    this.template('_eslintrc', '.eslintrc');
    this.template('_eslintignore', '.eslintignore');
    this.template('src/components/NotFound/_NotFound.js', 'src/components/NotFound/NotFound.js');
    this.template('src/components/NotFound/_NotFound.spec.js', 'src/components/NotFound/NotFound.spec.js');
    this.template('src/components/NotFound/_NotFound.css', 'src/components/NotFound/NotFound.css');
    this.template('src/config/_routes.js', 'src/config/routes.js');
    this.template('src/containers/_app.js', 'src/containers/app.js');
    this.template('src/containers/_home.js', 'src/containers/home.js');
    this.template('src/_index.js', 'src/index.js');
    this.template('test/_setup.js', 'test/.setup.js');
    this.template('test/_mocha.opts', 'test/.mocha.opts');
    this.template('_travis.yml', '.travis.yml');
    return this.template('_gitignore', '.gitignore');
  }
});
