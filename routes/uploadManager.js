// File that will configure blueimp-file-upload-expressjs

var options = {
	tmpDir: __dirname + '/../public/uploaded/tmp',
	uploadDir: __dirname + '/../public/uploaded/files',
	uploadUrl: '/uploaded/files/',
	storage: {
		type: 'local'
	}
},

// Require blueimp-file-upload-expressjs module and pass the options as parameter
var uploader = require('blueimp-file-upload-expressjs')(options);

module.exports = function(router) {
	// GET endpoint to fetch the saved file
	router.get('/upload', function(req, res) {
		uploader.get('/upload', function(obj) {
			res.send(JSON.stringify(obj));
		});
	});
	// Post endpoint to save file
	router.post('/upload', function(req, res) {
		uploader.post(req, res, function(obj) {
			res.send(JSON.stringify(obj));
		});
	});
	// Delete endpoint to remove file
	router.delete('/uploaded/files/:name', function(req, res) {
		uploader.delete(req, res, function(obj) {
			res.send(JSON.stringify(obj));
		});
	});
	return router;
}