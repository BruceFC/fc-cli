'use strict'
const {resolve} = require('path')
const config = require(resolve(__dirname, '../templates.json'))

console.log(config.tpl)
process.exit()