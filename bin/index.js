#!/usr/bin/env node
'use strict'

const program = require('commander');
const {resolve} = require('path')
const version = 'v' + require(resolve(__dirname, '../package.json')).version
// const commands = require(resolve(__dirname, '../command/index.js'))

// 定义当前版本
program
  .version(version)

// 定义使用方法
program
  .usage('<command>')

// 定义init方法
program.command('init')
.description('Generate a new project')
.alias('i')
.action(() => {
  require(resolve(__dirname, '../command/init.js'))
})

// 定义list方法
program.command('list')
  .description('List all the templates')
  .alias('l')
  .action(() => {
    require(resolve(__dirname, '../command/list.js'))
  })

// 定义add方法
program.command('add')
  .description('Add a new template')
  .alias('a')
  .action(() => {
    require(resolve(__dirname, '../command/add.js'))
  })

// 定义delete方法
program.command('delete')
.description('Delete a template')
.alias('d')
.action(() => {
  require(resolve(__dirname, '../command/delete.js'))
})

// 处理参数和提供帮助信息
program.parse(process.argv)

if(!program.args.length){
  program.help()
}