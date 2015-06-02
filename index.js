var http = require("http");
var path = require('path');
var server = http.createServer();
var body = "Welcome to Node.js, SamR Eaton";

// console.log(http.createServer());
server.on("request", function(req,res){
	console.log("----------------------------");
	console.log("request from:\t",req.headers.host);
	console.log("request url: \t",req.url);
	console.log("req.method:  \t",req.method);
	console.log("----------------------------");
	res.writeHeader(200, {
		"Content-Length": body.length,
		"Content-Type": "text/plain"
	});
	res.write(body);
	res.end();
	console.log("res : \t",res);
});
server.listen(8000);


var fsb = require("./fs-batch");

fsb().readFiles(["cats.json", "dogs.json", "pigs.json"])
.success(function(files){
	files.each(function(file){
		console.log(file);
	})
});
// .success(function(files){
// 	files.each(function(file){
// 		console.log(file);
// 	})
// });