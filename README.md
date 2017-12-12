# sketch-es-serivce

[![Build Status](https://travis-ci.org/south-farm/sketch-es-service.svg?branch=master)](https://travis-ci.org/south-farm/sketch-es-service)

A simple boilerplate for micro service written in ES6/7.

Only with neccessary key features:

* babel
* commitlint
* eslint
* flow
* husky
* jest
* prettier
* remark
* express
* jwt
* standard-version

## How to use this template

first generate the project

```sh
# prepare [sao](https://sao.js.org)
npm install -g sao

# start from latest
sao south-farm/sketch-es-service my-service -u

# or start from sepecific version
sao south-farm/sketch-es-service#v0.0.1 my-service

# after project is created
cd my-service

rm -rf package-lock.json CHANGELOG.md

# remove license if you don't like MIT
rm LICENSE
```

### Homework

* Update your readme and package.json.
* Update .travis.yml if you also use travis-ci, otherwise just delete it.
* Update Dockerfile later.

#### Travis-CI

There are two environments should be cared about:

* `DOCKER_REGISTRY`
* `DOCKER_REPO`

There are three environments should be ecrypted by youself.
The `SLACK_URL` used for notifing your team members when a new version is published.

```sh
travis encrypt DOCKER_USER=you_user_name --add env.global
travis encrypt DOCKER_PASS=you_password --add env.global
travis encrypt SLACK_URL=https://hooks.slack.com/services/xxxx/xxxx/xxxxxxx --add env.global
```

## Usage

A simple way to get start.

```sh
npm i

# start development, keep testing while developing
npm start
```

After it is started, open localhost:9527/v1/docs, you will see a beautiful document
render from swagger.

On this page, we can simply click "Try Button" to test the apis. But before
this, we should paste a JWT in the token input.

### JWT

I've generated a jwt token for you, along with the default JWT_PUBLIC_KEY in config.js:

```sh
eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.FsHyPJCxjQUdgZROKnHkSIMFSrM2Ecpuhxau3cU-cWfF2pRdYGwYqQQlRb91V4MEf0EjGYDwc-iFmhDb53ourDoJ8l7wMeBDT8Pl9wiCe1eNysA9vWBltwqOy2k6Y1MwXyfvv1pX_NUbjYcJ82I-KPryNqUjTF3N9RtOU7g8_oA
```

Paste above token in swagger live doc, then test apis.

You can generate a new JWT on site: [https://jwt.io](https://jwt.io), use RS256 algorithm.

Before it, we should get a RSA key pair. If you just want to get a quick one, use the [online tool](http://travistidwell.com/jsencrypt/demo/).

Have fun!

## Scripts

* build: compile code to ES5
* flow: static code check
* commitmsg: Commit message
* lint: Code linter
* release: update version and push to git
  [standard-version](https://github.com/conventional-changelog/standard-version).
* start: important, the very beginning from here, before change code
* test: test

## Environments

**note:** It would be good if you define your environment with a prefix APP\_ .

Example environments:

* APP_PORT: service port
* APP_BASE_PATH: service base path
* APP_JWT_PUBLIC_KEY: a jwt public key

## Folder Layout

Before you start, take a moment to see how the project structure looks like:

```sh
├── README.md                   # Quick start document
├── dist/                       # The folder for compiled output
├── package.json                # package definition
├── src                         # all source code written for this app
└── .travis.yml                 # travis-ci
```
