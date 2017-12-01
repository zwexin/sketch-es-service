# sketch-es-serivce

[![Build Status](https://travis-ci.org/south-farm/sketch-es-serivce.svg?branch=master)](https://travis-ci.org/south-farm/sketch-es-serivce)

A simple boilerplate for es6/es7 project, you can start your npm module from
this.

Only with neccessary key features:

-   babel
-   commitlint
-   eslint
-   flow
-   husky
-   jest
-   prettier
-   remark
-   standard-version

## Usage

Two ways to get start.

```sh
# prepare [sao](https://sao.js.org)
npm install -g sao

# start from latest
sao south-farm/sketch-es-serivce my-service -u

# or start from sepecific version
sao south-farm/sketch-es-serivce#v0.0.1 my-service

# after project is created
cd my-service
npm i

# start development, keep testing while developing
npm start
```

### Travis-CI

If you use travis too, there are two environments should be ecrypted by youself.

If you don't use travis-ci, just delete it.

```sh
travis encrypt 684c6784-3677-49dc-95ea-be8c89f0ba85 --add deploy.api_key
travis encrypt SLACK_URL=https://hooks.slack.com/services/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 --add env
```

### README.md

Update your readme which is not in any of other one's reponsiblity

## Scripts

-   build: 用 Babel 把 code 编译到标准 es5
-   flow: Facebook 出品的类型校验器，类似 Typescript，但是不强奸
-   commitmsg: 规范 Commit message 的工具
-   lint: 代码格式检查
-   prepare: 发布前需要跑
-   release: 发布，已经 push 到远端，剩下需要自己执行 npm publish, check
    [standard-version](https://github.com/conventional-changelog/standard-version).
-   start: 写代码前跑起来
-   test: 测试

## Folder Layout

Before you start, take a moment to see how the project structure looks like:

```sh
├── README.md                   # Quick start document
├── dist/                       # The folder for compiled output
├── package.json                # package definition
├── src                         # all source code written for this app
└── .travis.yml                 # travis-ci
```
