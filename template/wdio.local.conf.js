'use strict';

const merge = require('etaf').merge;

const config = {
  specs: [
    './src/features/**/*.feature',
  ],

  baseUrl: 'http://localhost:8080',
  locale: 'en',

  // capabilities: [{
  //   // maxInstances can get overwritten per capability. So if you have an in-house Selenium
  //   // grid with only 5 firefox instance available you can make sure that not more than
  //   // 5 instance gets started at a time.
  //   maxInstances: 1,
  //
  //   browserName: 'chrome',
  //   chromeOptions: {
  //     args: ['--headless'],
  //     prefs: {
  //       profile: {
  //         default_content_setting_values: { images: 2 }, // Do not load images for tests to run faster
  //         password_manager_enabled: false, // Deactivate password manager
  //       },
  //       credentials_enable_service: false, // Deactivate password manager
  //     },
  //   },
  //
  //   browserName: 'firefox',
  //   acceptInsecureCerts: true,
  //   // "moz:firefoxOptions": {
  //   //   args: ['-headless'],
  //   // }
  //
  //   proxy: {
  //     proxyType: 'system',
  //   },
  //
  // },
  // ],

  logLevel: 'verbose',

  // seleniumInstallArgs: {
  //   proxy: 'http://localhost:3128',
  //   drivers: {
  //     chrome: {
  //       version: '2.43',
  //       arch: process.arch,
  //       baseURL: 'https://chromedriver.storage.googleapis.com',
  //     },
  //     firefox: {
  //       version: '0.23.0',
  //       arch: process.arch,
  //       baseURL: 'https://github.com/mozilla/geckodriver/releases/download',
  //     },
  //   },
  // },
  // seleniumArgs: {
  //   drivers: {
  //     chrome: {
  //       version: '2.43',
  //       arch: process.arch,
  //     },
  //     firefox: {
  //       version: '0.23.0',
  //       arch: process.arch,
  //     },
  //   },
  // },

};

exports.config = merge.recursive(true, require('./wdio.conf').config, config);
