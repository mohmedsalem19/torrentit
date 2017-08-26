var express = require('express');
var router = express.Router();
var fs = require('fs');
/* GET home page. */
router.get('/:folder/:file', function(req, res, next) {
	var folder = req.params.folder;
	var file = req.params.file;
	var fs = require("fs"); //Load the filesystem module
var stats = fs.statSync(folder + "/" + file);
var fileSizeInGiga = stats["size"] / 1073741824;
//Convert the file size to megabytes (optional)
	res.send(fileSizeInGiga + '');
});


module.exports = router;
