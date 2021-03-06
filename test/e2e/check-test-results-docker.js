#!/usr/bin/env node
'use strict';

const checkTestResults = require('./check-test-results');

checkTestResults('all', 'docker', 'chrome', 21);
checkTestResults('all', 'docker', 'firefox', 21);
checkTestResults('form', 'docker', 'chrome', 3);
checkTestResults('form', 'docker', 'firefox', 3);

checkTestResults('all', 'docker', 'chrome', 12, 'tag');
checkTestResults('all', 'docker', 'firefox', 12, 'tag');
checkTestResults('form', 'docker', 'chrome', 3, 'tag');
checkTestResults('form', 'docker', 'firefox', 3, 'tag');
