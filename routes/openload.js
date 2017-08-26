var express = require('express');
var router = express.Router();
var fs = require('fs');
var rest = require('restler');
var mime = require('mime');
/* GET home page. */
router.get('/:file/:protocole//:url/:con1/:con2', function(req, res, next) {
	var file = req.params.file;
	var url = req.params.protocole + '//' + req.params.url + '/' + req.params.con1 + '/' + req.params.con2;
	var mimeee2 = mime.lookup(file); 
	fs.stat(file, function(err, stats) {
            rest.post(url, {
                multipart: true,
                data: {
                    "file": rest.file(file, null, stats.size, null, mimeee2)
                }
            }).on("complete", function(data) {
                console.log(data);
                res.send(data.result.url);
            });
    });


});
module.exports = router;
