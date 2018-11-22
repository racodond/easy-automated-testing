'use strict';

module.exports = {
  capabilities: [
    {
      browserName: 'firefox',
      acceptInsecureCerts: true,
      // "moz:firefoxOptions": {
      //   args: ['-headless'],
      // }
    },
  ],

  // seleniumInstallArgs: {
  //   proxy: 'http://localhost:3128',
  //   drivers: {
  //     firefox: {
  //       version: '0.23.0',
  //       arch: process.arch,
  //       baseURL: 'https://github.com/mozilla/geckodriver/releases/download',
  //     },
  //   },
  // },
  // seleniumArgs: {
  //   drivers: {
  //     firefox: {
  //       version: '0.23.0',
  //       arch: process.arch,
  //     },
  //   },
  // },

};
