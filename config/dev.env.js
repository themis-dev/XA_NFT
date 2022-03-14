'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  NETWORK: '"testnet"',
  BASE_API: '"http://192.168.3.233:8082/"'
})
