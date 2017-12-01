# sketch-es-serivce

[![Build Status](https://travis-ci.org/south-farm/sketch-es-serivce.svg?branch=master)](https://travis-ci.org/south-farm/sketch-es-serivce)

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

## Usage

A simple way to get start.

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

After it is started, open localhost:9527/docs, you will see a beautiful document
render from swagger.

On this page, we can simply click "Try Button" to test the apis. But before
this, we should paste a JWT in the token input.

### JWT

Here is an example for generate JWT.

Set your public key through envrionment

```sh
JWT_PUBLIC_KEY="-----BEGIN PUBLIC KEY-----\nMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCNdgZPtvnjWnyCxWfIzCrNqFR7\nlOXKl6xag5AB+6j9RRR3ZQXMEKvl/1wjZcMuxb5rs+u5HuJaf4LXmYszhpqUuALj\nGAbSPZZ+awoTvAdyd93iMoK0mh+B+7xkxkQ8bApqQ0q7UYBMb4vyQ/tWX0ubg9wb\nYXzLj7IbGhnyVDLNcQIDAQAB\n-----END PUBLIC KEY-----"
```

The private key for this:

```sh
-----BEGIN RSA PRIVATE KEY-----
MIICXQIBAAKBgQCNdgZPtvnjWnyCxWfIzCrNqFR7lOXKl6xag5AB+6j9RRR3ZQXM
EKvl/1wjZcMuxb5rs+u5HuJaf4LXmYszhpqUuALjGAbSPZZ+awoTvAdyd93iMoK0
mh+B+7xkxkQ8bApqQ0q7UYBMb4vyQ/tWX0ubg9wbYXzLj7IbGhnyVDLNcQIDAQAB
AoGARfuLp8gX29gaHP/YFkibLF8IXJMPE6jxhV3s0m5T7ehM9bwuoAPnZsNsK77e
TrdZOyMpjM2woaDPdCXr7bO7qPBDKGEtRgp5GCwl4/apB/n4a+VoppGVWU/V/n/1
uv56Ck/izc/+pKvqLkFymzeKERmCPIwwfq9Ab1BUE0f/qFkCQQD4um39K0fD68KN
ribdrUeiF0rMy/qspXw5jzg+D59w06IDeAcmcd8bz0BKQilLq39IQg39MVP74IsG
R1F9t/mXAkEAkZjE6ev0aIYfnIB7drQAZQ0WOOButa9gMEAbCQBNrGu5yN7t0Urf
YvAUiOJvRkZ0m1YpxCR4apfjCo7OSS8CNwJBANYYw2xUwOVoHoOOEG5oJWzk18IJ
IrFRkOiK20Kwd/HKeX665oy1H/L0JsbExH8aE+nC0f/LYhtBYOn6oa6xmekCQFYS
0pbX/22rnRSQgGz0jScwTWrig5C1VVAxFcqEe2braLHv2PhaIyYCeKFT/CS3kkgi
8B4c0XNyx65+LkXlnJECQQDCx9TRqUhfQYX+Tbwio3vQpaVEoHqYnp267xgNmTRW
RGI+tXTVW1nJS/fGmeWDZx/V16G7+GNPGm/ighOaXDHb
-----END RSA PRIVATE KEY-----
```

Then you can generate a JWT on site: [https://jwt.io](https://jwt.io)

I've generated one:

```sh
eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.FsHyPJCxjQUdgZROKnHkSIMFSrM2Ecpuhxau3cU-cWfF2pRdYGwYqQQlRb91V4MEf0EjGYDwc-iFmhDb53ourDoJ8l7wMeBDT8Pl9wiCe1eNysA9vWBltwqOy2k6Y1MwXyfvv1pX_NUbjYcJ82I-KPryNqUjTF3N9RtOU7g8_oA
```

Paste above token in swagger live doc, then test apis.

Have fun!

### Travis-CI

If you use travis too, there are two environments should be ecrypted by youself.

If you don't use travis-ci, just delete it.

```sh
travis encrypt 684c6784-3677-49dc-95ea-be8c89f0ba85 --add deploy.api_key
travis encrypt SLACK_URL=https://hooks.slack.com/services/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 --add env
```

### Homework

Update your readme and package.json which is not in any of other one's
reponsiblity...

## Scripts

* build: compile code to ES5
* flow: static code check
* commitmsg: Commit message
* lint: Code linter
* prepare: run before public
* release: update version and push to git
  [standard-version](https://github.com/conventional-changelog/standard-version).
* start: important, the very beginning from here, before change code
* test: test

## Folder Layout

Before you start, take a moment to see how the project structure looks like:

```sh
├── README.md                   # Quick start document
├── dist/                       # The folder for compiled output
├── package.json                # package definition
├── src                         # all source code written for this app
└── .travis.yml                 # travis-ci
```
