var $ = require('assert');
var isAsync = require('./index');
var fs = require('fs');

$.ok(isAsync(fs.stat));
$.ok(!isAsync(fs.statSync));

