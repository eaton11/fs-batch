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


// http.createServer(function(req,res){
// 	// console.log("req: ",req);
// 	console.log(" ");
// 	console.log(" ");
// 	console.log("======================");
// 	console.log("======================");
// 	console.log("req.headers > ",req.headers);
// 	console.log("--------------");
// 	console.log("req.headers.host > ",req.headers.host);
// 	console.log("--------------");
// 	console.log("req.headers['accept-encoding'] > ",req.headers["accept-encoding"]);
// 	console.log("--------------");
// 	console.log("req.rawHeaders > ",req.rawHeaders);
// 	console.log("--------------");
// 	console.log("req.url > ",req.url);
// 	console.log("--------------");
// 	console.log("req.method >",req.method);
// 	console.log("======================");
// 	console.log("======================");

// 	console.log(" ");
// 	console.log(" ");
// 	console.log(" ");

// 	console.log("^^^^^^^^^^^^^^^^^^^^^^^^");
// 	console.log("^^^^^^^ RESPONSE ^^^^^^^");
// 	console.log("^^^^^^^^^^^^^^^^^^^^^^^^");
// 	// console.log("res : ",res);
// 	// console.log("--------------");
// 	// console.log("req.headers.host > ",req.headers.host);
// 	// console.log("--------------");
// 	// console.log("req.headers['accept-encoding'] > ",req.headers["accept-encoding"]);
// 	// console.log("--------------");
// 	// console.log("req.rawHeaders > ",req.rawHeaders);
// 	// console.log("--------------");
// 	// console.log("req.url > ",req.url);
// 	// console.log("--------------");
// 	// console.log("req.method >",req.method);
// 	console.log("======================");
// 	console.log("======================");


// 	res.writeHeader(200, {"Content-Type": "text/plain"});
// 	res.write("Welcome to Node.js, SamR");
// 	res.end();
// 	console.log("res : ",res);
// 	console.log("======================");
// 	console.log("======================");
// 	// res.end();
// }).listen(8000);

// console.log("Server running on port :8000");
var fsb = require("./fs-batch");

// console.log("output: ",kb.add(9,2));
// console.log(path.join(__dirname, 'poopyhead'));
// console.error("error msg");
// console.warn("warning msg");
fsb().read("kitty")
.success(function(files){
	files.each(function(file){
		console.log(file);
	})
});
// console.log(fsb());