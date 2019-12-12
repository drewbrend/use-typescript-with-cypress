const webpack = require('@cypress/webpack-preprocessor')
module.exports = on => {
  const options = {
    // send in the options from your webpack.config.js, so it works the same
    // as your app's code
    webpackOptions: require('../../webpack.config'),
    watchOptions: {}
  }

  on('file:preprocessor', webpack(options))

  on('task', {
    logit(something) {
      console.log('made it to the task');
      console.log(something)

      return `${something} MODIFIED`;
    }
  });
}
