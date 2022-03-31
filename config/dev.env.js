'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  NETWORK: '"testnet"',
  // BASE_API: '"http://192.168.3.233:8082/"'
  // BASE_API: '"https://apiarts.huoshu.org/"'
  BASE_API: '"http://35.201.215.236:8082/"'
})
