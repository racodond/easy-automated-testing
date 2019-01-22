[![npm version](https://badge.fury.io/js/etaf.svg)](https://badge.fury.io/js/etaf)
[![Build Status](https://travis-ci.org/racodond/etaf.svg?branch=master)](https://travis-ci.org/racodond/etaf)
[![AppVeyor Build status](https://ci.appveyor.com/api/projects/status/5wsjr8by0lqsngw4/branch/master?svg=true)](https://ci.appveyor.com/project/racodond/etaf/branch/master)

[![Quality Gate status](https://sonarcloud.io/api/project_badges/measure?project=etaf&metric=alert_status)](https://sonarcloud.io/dashboard?id=etaf)
[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=etaf&metric=ncloc)](https://sonarcloud.io/dashboard?id=etaf)

# Easy Test Automation Framework (ETAF)

This framework is designed to help you get easily and quickly started with test automation on any project.
It is based on [WebdriverIO](http://webdriver.io/) and [cucumber](https://cucumber.io/) ([cucumberJS](https://github.com/cucumber/cucumber-js) to be exact).
Integrating this module provides a ready-to-go environment to write and execute functional test scenarios.
It includes:
* A template to generate your test automation project so that you don't start from a blank page
* The necessary packages pre-configured to be able to run your scenarios without requiring any other setup. The only requirement is to have a browser on the machine running the tests: either Chrome or Firefox.
* [Guidelines and good practices](https://github.com/racodond/etaf/blob/master/template/doc/Framework.md) to ensure great maintainability of test scenarios
* A decoupled architecture between scenarios and data sets to allow high execution scalability
* Some useful [custom browser commands](http://webdriver.io/guide/usage/customcommands.html) such as `fillInForm` to ease and accelerate test automation writing. See related [JSDoc](https://racodond.github.io/etaf/) for more details.

This framework is suitable for big solutions that will be covered by an important number of scenarios.
Note that it requires good development skills as well as good knowledge and understanding of JavaScript.

## Integrating ETAF to Your Project

### Prerequisites
* Install [npm](https://www.npmjs.com/) and [Node.js](https://nodejs.org) (latest available 8.X.X version)
* Install [npx](https://www.npmjs.com/package/npx): `npm install -g npx`
* Install [Java JRE](http://www.oracle.com/technetwork/java/javase/downloads/index.html) (version 8 or greater)

### Adding ETAF Package and Configuration to Your Project
1. Create a new folder <AUTOMATED_TESTS> in your project to host your automated tests.
2. Create a new NPM project by executing `npm init`. More information about the different options [here](https://docs.npmjs.com/getting-started/using-a-package.json).
3. Install EAT package by running the following command from <AUTOMATED_TESTS>: `npm install --save etaf`. It creates a `node_modules` directory containing all the dependencies needed to run the project.
4. From <AUTOMATED_TESTS>, run `npx etaf install` to generate the skeleton of your test project. If you want to generate the skeleton of your project with some working samples, run: `npx etaf install --sample=true`

### Behind a Proxy
Set the configuration of your proxy by editing the `.npmrc` file in your home directory:
```
proxy=http://localhost:3128
https-proxy=http://localhost:3128
```


## Running Functional Tests
* Run `npx etaf run` to launch the tests as they would be played remotely.
* Run `npx etaf run wdio.local.conf.js` to run the tests with local configuration.
* Run `npx etaf run wdio.debug.conf.js` to run the tests with debug configuration (see Running Tests in Debug Mode section
for mode details).

Note that the local and debug configurations have to be generated first (see Configuration section).

### Configuration
* The global configuration is set in the `wdio.conf.js` file, in the root folder of your project.
* The local configuration is set in the `wdio.local.conf.js`. This local configuration can be reset by running
`npx etaf generate-local-conf`.
* The debug configuration is set in the `wdio.debug.conf.js`. This debug configuration can be reset by running
`npx etaf generate-local-conf`.

### Parameters
To pass parameters to the command, add `--`: `npx etaf run --parameter1=value1`

#### URL of the Website to Test
Add command line parameter `--baseUrl="https://base.url"` or update the wdio configuration file accordingly.

#### Locale
Add command line parameter `--locale="en"` or update the wdio configuration file accordingly.
 
#### Running a Subset of Tests Using Tags
Add command line parameter `--tagExpression='@tag'`.

Tags can be combined:
* `--tagExpression='@tag1 or @tag2'` runs test tagged with `@tag1` or `@tag2`
* `--tagExpression='@tag1 and @tag2'` runs test tagged with both `@tag1` and `@tag2`
* `--tagExpression='not @tag1'` runs tests not tagged with `@tag1`

See [Cucumber Tag Expressions documentation](https://docs.cucumber.io/cucumber/api/#tag-expressions) for more details.

#### Realm (market, brand, environment, ...)
A realm is a configuration file that defines some wdio properties specific to a realm. A realm can be seen as a market, 
a brand, an environment (such as dev or staging), etc. or a combination of them. Realm files are stored in the
`conf/realm` directory.

Usually realms define at least the following properties:
* `baseUrl`: website to test
* `specs`: list of features to run

Add command line parameter `--realm="xxx"`. Where `xxx` is the file name in `conf/real` without the `.js` extension.

For example:
* To run NRT tests from the catalog domain on mywebsite.com: `npx etaf run --baseUrl="https://mywebsite.com" --tagExpression='@nrt and @catalog'`
* To run NRT tests on realm `us-dev`: `npx etaf run --realm="us-dev" --tagExpression='@nrt'`


## Running Functional Tests in Debug Mode
For IntelliJ, follow instructions at [Debug with Chrome Debugging Protocol](https://www.jetbrains.com/help/idea/running-and-debugging-node-js.html#ws_node_debug_remote_chrome).
At step #4, run `npx etaf run wdio.debug.conf.js`


## Running Unit Tests
* Run `npx etaf test-unit` to run unit tests
* Run `npx etaf test-unit-with-coverage` to run unit tests with code coverage computation


## Writing Automated Tests
Read detailed explanations in [Framework.md](https://github.com/racodond/etaf/blob/master/template/doc/Framework.md).
