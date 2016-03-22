var keystone = require('keystone');
var async = require('async');

exports = module.exports = function(req, res) {
	res.sendfile('public/index.html');
};
