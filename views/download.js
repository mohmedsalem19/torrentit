var express = require('express');
var router = express.Router();
var fs = require('fs');
var request = require('request');
var spawn = require('cross-spawn');
/* GET home page. */
router.get('/:torrentfile/:torrentsizee/:folder/:fileupload/:quality', function(req, res, next) {
	var torrentfile = req.params.torrentfile;
	var torrentfile2 = torrentfile.replace(/[*]/g, ' ');
	var filetoUpload = req.params.fileupload;
	var filetoUpload2 = filetoUpload.replace(/[*]/g, ' ');
	var folder = req.params.folder;
	var folder2 = folder.replace(/[*]/g, ' ');
	var quality = req.params.quality;
	var toreSize = req.params.torrentsizee;
	
		if (toreSize > 5368709120) {
			res.send('sorry you can\'t download more than 5Gb ');
		}else{
			var child = spawn('torrent', ['torrents/' + torrentfile2], { stdio: 'inherit' });
			console.log('downloading-------------');
			res.render('download', {size: toreSize, folder: folder2, file: filetoUpload2, compress : ''});
		}
		
});
router.get('/:torrentfile/:torrentsizee/:fileupload/:quality', function(req, res, next) {
	
	var torrentfile = req.params.torrentfile;
	var torrentfile2 = torrentfile.replace(/[*]/g, ' ');
	var filetoUpload = req.params.fileupload;
	var filetoUpload2 = filetoUpload.replace(/[*]/g, ' ');
	var quality = req.params.quality;
	var toreSize = req.params.torrentsizee;
	
		if (toreSize > 5368709120) {
			res.send('sorry you can\'t download more than 5Gb ');
		}else{
			var child = spawn('torrent', ['torrents/' + torrentfile2], { stdio: 'inherit' });
			console.log('downloading-------------');
			res.render('download', {size: toreSize, folder: '', file: filetoUpload2, compress : ''});
		}
		
		
	
  	//res.send(req.params.torrentfile);
});

router.get('/:torrentfile/:torrentsizee/:folder/:anotherfolder/:fileupload/:quality', function(req, res, next) {
	var torrentfile = req.params.torrentfile;
	var torrentfile2 = torrentfile.replace(/[*]/g, ' ');
	var filetoUpload = req.params.fileupload;
	var filetoUpload2 = filetoUpload.replace(/[*]/g, ' ');
	var folder = req.params.folder;
	var folder2 = folder.replace(/[*]/g, ' ');
	var anofolder = req.params.anotherfolder;
	var anofolder2 = anofolder.replace(/[*]/g, ' ');
	var quality = req.params.quality;
	var toreSize = req.params.torrentsizee;
	
		if (toreSize > 5368709120) {
			res.send('sorry you can\'t download more than 5Gb ');
		}else{
			var child = spawn('torrent', ['torrents/' + torrentfile2], { stdio: 'inherit' });
			console.log('downloading-------------');
			res.render('download', {size: toreSize, folder: folder2 + '\\' + anofolder2, file: filetoUpload2, compress : ''});
		}
		
	
  	//res.send(req.params.torrentfile);
});

router.get('/:torrentfile/:torrentsizee/:folder/:fileupload/:compress/:anothercompress/:quality', function (req,res,next){
	var torrentfile = req.params.torrentfile;
	var torrentfile2 = torrentfile.replace(/[*]/g, ' ');
	var filetoUpload = req.params.fileupload;
	var filetoUpload2 = filetoUpload.replace(/[*]/g, ' ');
	var folder = req.params.folder;
	var folder2 = folder.replace(/[*]/g, ' ');
	var quality = req.params.quality;
	var compressing = req.params.compress;
	var toreSize = req.params.torrentsizee;

		if (toreSize > 5368709120) {
			res.send('sorry you can\'t download more than 5Gb ');
		}else{
			var child = spawn('torrent', ['torrents/' + torrentfile2], { stdio: 'inherit' });
			console.log('downloading-------------');
			res.render('download', {size: toreSize, folder: folder2, file: '', compress : 'yes'});
		}
		
	

});

module.exports = router;
