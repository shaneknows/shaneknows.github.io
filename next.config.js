// This file is not going through babel transformation.
// So, we write it in vanilla JS
// (But you could use ES2015 features supported by your Node.js version)

const SUMMARY_JSON = require('./content/summary.json');
const debug = process.env.NODE_ENV !== "production";

module.exports = {
  exportPathMap: function () {
    const posts = {},
      paths = {};
    SUMMARY_JSON.fileMap && Object.keys(SUMMARY_JSON.fileMap)
      .forEach((file) => {
        const fileObj = SUMMARY_JSON.fileMap[file]
        const obj = {}
        if (fileObj.paths) {
          // Handle custom paths / aliases.
          obj.page = '/post'
          obj.query = {
            fullUrl: file.match(/^content(.+)\.json$/)[1]
          }
          fileObj.paths.forEach((path) => {
            paths[path] = obj
          })
        } else if (file.indexOf('content/posts') === 0) {
          // Handle posts.
          const page = file.split('content').join('').split('.json').join('')
          posts[page] = {
            page: '/post',
            query: {
              fullUrl: page
            }
          }
        }
      });
      
    return Object.assign({}, {
      '/': {page:'/'}
    }, posts, paths) // aliases
  },
  //assetPrefix: '',
  assetPrefix: !debug ? '/' : '',
  webpack: (config, { dev }) => {
    // Perform customizations to webpack config
    // console.log('webpack');
    // console.log(config.module.rules, dev);
    config.module.rules = config.module.rules.map(rule => {
      if(rule.loader === 'babel-loader') {
        rule.options.cacheDirectory = false
      }
      return rule
    })
    // Important: return the modified config
    return config
  }/*,
  webpackDevMiddleware: (config) => {
    // Perform customizations to webpack dev middleware config
    // console.log('webpackDevMiddleware');
    // console.log(config);
    // Important: return the modified config
    return config
  }, */
}
