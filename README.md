# whate is fc-cli
  命令行工具，用于快速生成前端项目基础架构。
  fc-cli is a scaffold for initiating new projects from a given template

# 使用的三方组件库
  -commander, 自动解析命令和参数，用于处理用户输入的命令
  -co：异步流程控制工具，用更舒服的方式写异步代码
  -co-prompt：传统的命令行只能单行一次性地输入所有参数和选项，使用这个工具可以自动提供提示信息，并且分步接收用户的输入
  -inquirer, 通用的命令行用户界面集合，用于和用户进行交互
  -download-git-repo, 下载并提取 git 仓库，用于下载项目模板
  -chalk, 命令行美化
  -fs, 文件读写操作
  -log-symbols, 命令行展示图标

# template
  bin
    |- index.js 入口文件
  lib
  node_modules
  package.json

# Usage
  ## 安装
  npm i fc-cli -g

  ## 使用
  fc-cli i

  ## 新增页面

  ## 删除

  ## 