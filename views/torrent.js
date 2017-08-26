var express = require('express');
var router = express.Router();
var fs = require('fs');
var request = require('request');
/* GET home page. */
router.get('/:torrentfile', function(req, res, next) {
	var torfile = req.params.torrentfile;
	//var modyfile = torfile.replace('*', ' ');
	request('http://127.0.0.1/uploadtorrent?torrent=' + torfile, function(err, response, body){
		var filess = JSON.parse(body);
		request('http://127.0.0.1/uploadtorrent?torrentsize=' + torfile, function(err, response, body2){
			var torrentallsize = body2;
			res.render('list', {filename: torfile, files: filess, torrentsize: torrentallsize});
		});
		
		//res.send(body);
	});
  	//res.send('done');
});


module.exports = router;
