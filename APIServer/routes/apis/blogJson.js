/**
 * Created by 淡斋 on 03/02/16.
 * use this api to get mock json from server 
 */

var keystone = require('keystone');
var async = require('async');

exports = module.exports = function(req, res) {

	var q = keystone.list('Post').model.find().where('state', 'published').sort('-publishedDate').populate('author').limit('4');

	q.exec(function(err, results) {
		if(err){
			res.send({ error: 'Not found' });
		}
		
		var jsonRaw = [];
		//generate blogs list needed contents
		for(var i = 0 ; i<results.length ; i ++ ){
			var item = {
				id: results[i]._id,
				title: results[i].title,
				publishedDate : results[i].publishedDate,
				brief: results[i].content.brief
			};
			jsonRaw.push(item);
		}

		res.header("Access-Control-Allow-Origin", "*");//access control allow origin 
		res.send(JSON.stringify(jsonRaw));
	});

};
