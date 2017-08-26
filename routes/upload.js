var express = require('express');
var router = express.Router();
var fs = require('fs');
var rest = require('restler');
var mime = require('mime');
var archiver = require('archiver');
/* GET home page. */
router.get('/:folder/:file/:protocole//:url/:con1/:con2/:compress', function(req, res, next) {
	var folder = req.params.folder;
	var file = folder + '/' +req.params.file;
    var compress = req.params.compress;
	var url = req.params.protocole + '//' + req.params.url + '/' + req.params.con1 + '/' + req.params.con2; 
	mimeee = mime.lookup(file); 
                fs.stat(file, function(err, stats) {
            rest.post(url, {
                multipart: true,
                data: {
                    "file": rest.file(file, null, stats.size, null, mimeee)
                }
            }).on("complete", function(data) {
                console.log(data);
                res.send(data.result.url);
            });
        }); 
	
	//res.send('we are uploading your file');
});

router.get('/:folder//:protocole//:url/:con1/:con2/:compress', function(req, res, next) {
    var folder = req.params.folder + '/';
    var compress = req.params.compress;
    var url = req.params.protocole + '//' + req.params.url + '/' + req.params.con1 + '/' + req.params.con2; 
    var marand = Math.random() * (100 - 10) + 10;
    /*var writablee = fs.createWriteStream(__dirname + '/' + folder + '.zip');
    var archive = archiver('zip', {
        zlib: { level: 9 } // Sets the compression level. 
    });
    archive.directory(folder, false);
    

    writablee.on('close', function() {
        var mimeee2 = mime.lookup(folder + '.zip'); 
        console.log(archive.pointer() + ' total bytes');
        fs.stat(folder + '.zip', function(err, stats) {
            rest.post(url, {
                multipart: true,
                data: {
                    "file": rest.file(folder + '.zip', null, stats.size, null, mimeee2)
                }
            }).on("complete", function(data) {
                console.log(data);
                res.send(data.result.url);
            });
    });
    });
        
    archive.on('progress', function(err) {
         console.log('currently zipping files');
    });
                
    archive.on('error', function(err) {
        throw err;
    });
    archive.finalize();*/

    var output = fs.createWriteStream(__dirname + '/../'+ marand + '.zip');
    var archive = archiver('zip', {
        zlib: { level: 9 } // Sets the compression level. 
    });
    
    output.on('close', function() {
          console.log(archive.pointer() + ' total bytes');
          console.log('archiver has been finalized and the output file descriptor has closed.');
          res.render('openload', {file: marand + '.zip', url: url});
          /*var mimeee2 = mime.lookup('./'+ marand + '.zip');

          fs.stat('./'+ marand + '.zip', function(err, stats) {
            rest.post(url, {
                multipart: true,
                data: {
                    "file": rest.file('./'+ marand + '.zip', null, stats.size, null, mimeee2)
                }
            }).on("complete", function(data) {
                console.log(data);
                res.send(data.result.url);
            });
    });*/

    });

    archive.on('error', function(err) {
        throw err;
    });
    archive.pipe(output);
    archive.directory(folder, false);
    archive.finalize();

});
module.exports = router;
