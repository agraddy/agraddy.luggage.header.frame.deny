var mod = {};

mod.luggage = function(req, res, lug, cb) {
	res.setHeader('X-Frame-Options', 'DENY');
	cb();
}

module.exports = mod;
