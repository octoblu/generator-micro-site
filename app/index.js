var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  askFor: function() {
    var done = this.async();
    var prompts = [
      {
        name: 'appName',
        message: 'What would you like your app to be called?',
        'default': 'sample-app'
      }
    ];
    return this.prompt(prompts, (function(_this) {
      return function(props) {
        _this.appname = props.appName;
        return done();
      };
    })(this));
  },
  projectFiles: function() {
    this.template('_webpack.config.dev.js', 'webpack.config.dev.js');
    this.template('_webpack.config.prod.js', 'webpack.config.prod.js');
    this.template('_package.json', 'package.json');
    this.template('_index.html', 'index.html');
    this.template('_dev-server.js', 'dev-server.js');
    this.template('_babelrc', '.babelrc');
    this.template('src/components/no-match/_index.js', 'src/components/no-match/index.js');
    this.template('src/components/no-match/_index.css', 'src/components/no-match/index.css');
    this.template('src/config/_routes.js', 'src/config/routes.js');
    this.template('src/containers/_app.js', 'src/containers/app.js');
    this.template('src/containers/_home.js', 'src/containers/home.js');
    this.template('src/_index.js', 'src/index.js');
    return this.template('_gitignore', '.gitignore');
  }
});
