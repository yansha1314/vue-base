var merge = require('webpack-merge')
var prodEnv = require('./prod.env')
var config = require('./index')
var port = 3000;
module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  port:port,
  api:'"../static/"',
  code:'001'
})
