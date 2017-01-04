var fs = require('fs');
var merge = require('webpack-merge')
config = {
  NODE_ENV: '"production"',
  api:'"data/order.json"',
}
if(process.env.NODE_ENV === 'production'){
  if(fs.existsSync(__dirname+'/private.js')){
    config = merge(config,require('./private.js'));
  }
}
module.exports = config
