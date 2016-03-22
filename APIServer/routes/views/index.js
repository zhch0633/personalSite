var keystone = require('keystone');

exports = module.exports = function(req, res) {
	res.sendfile('public/index.html');
};
