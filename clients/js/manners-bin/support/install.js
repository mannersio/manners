'use strict';

var mannersBin = require('../src/manners.js');
var spawn = require('child_process').spawn;

mannersBin.run(['--version'], function (err) {
  if (err) {
    return console.error(err);
  }

  console.log('manners installed');
});
