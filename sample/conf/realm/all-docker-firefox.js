'use strict';

const merge = require('merge');

let config = require('./part/all');
config = merge.recursive(true, require('./part/docker'), config);
config = merge.recursive(true, require('./part/firefox'), config);
config = merge.recursive(
  true,
  {
    reporterOptions: {
      json: {
        outputDir: 'output-json/all-docker-firefox/',
        filename: 'report',
        combined: 'true',
      },
    },
    host: 'firefox',
  },
  config);
config = merge.recursive(true, require('../../wdio.conf').config, config);

exports.config = config;
