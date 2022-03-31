'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  NETWORK: '"testnet"',
  // BASE_API: '"http://192.168.3.233:8082/"'
<<<<<<< HEAD
=======
  // BASE_API: '"https://apiarts.huoshu.org/"'
>>>>>>> d728ad5d695931e1e183e45294f8c2bd0f4d636a
  BASE_API: '"http://35.201.215.236:8082/"'
})
