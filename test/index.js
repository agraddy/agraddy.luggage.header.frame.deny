var tap = require('agraddy.test.tap')(__filename);
var response = require('agraddy.test.res');
var pack = require('../package.json');

var mod = require('../');

var req = {};
var res = response();
var lug = {};
mod.luggage(req, res, lug, function() {
	tap.assert.deepEqual(res._headers[0], {"X-Frame-Options": "DENY"}, 'Should set the header.');
});

// TODO: package.json needs to have a luggage item

tap.assert.equal(pack.luggage, true, 'The luggage item needs to be set in the package.json file.');

