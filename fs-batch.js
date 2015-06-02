var fs = require("fs");

var helpers = {
	inputType: function(_INPUT){ // is input string or array-of-strings
		return (typeof _INPUT === "string") ? "string" : ( (Array.isArray(_INPUT)) ? "array" : null ); 
	},

	prepareQuery: function(_PATH, _ACTION){
		var self = helpers;
		var newFileQuery = {
			path: _PATH,
			action: _ACTION,
			pending: true,
			send: null,
			receive: null
		};
		if(newFileQuery.action === "write"){
			newFileQuery.send = _SEND_DATA;
		}
		self.queue.push(newFileQuery);
	},

	getMultiFiles: function(_ARR, _ACTION){
		var self = helpers;
		for(var i = 0, ii = _ARR.length; i < ii; i++){
			self.prepareQuery(_ARR[i], _ACTION);
		}
		self.readQueue(); //* left here
	},

	readQueue: function(){
		var self = helpers;
		for (var i = 0, ii = self.queue.length; i<ii; i++) {
			if(self.queue[i] !== null){
				self.readFile(self.queue[i], self.queue, i);
			} 
		}
		self.dataAll.each = self.dataError.each = self.dataSuccess.each = function(s){
			for(var t=this,e=0,n=t.length;n>e;e++)s(t[e],e,t)
		};
	},

	readFile: function(_FILE_OBJ, _FILE_QUEUE_ARRAY, _INDEX){
		var self = helpers;
		var fileObject = {
			query: _FILE_OBJ.path
		};
		fs.readFile(_FILE_OBJ.path, 'utf8',function(err, data){
			if(err) {
				fileObject.error = err;
				self.dataAll.push(fileObject);
				self.dataError.push(fileObject);
			} else {
				fileObject.data = data;
				self.dataAll.push(fileObject);
				self.dataSuccess.push(fileObject);
			}
			if(self.queue.length === self.dataAll.length){
					fsb.utils.onSuccess(self.dataSuccess);
					fsb.utils.onError(self.dataSuccess);
					self.queue = self.dataAll = self.dataSuccess = self.dataError = [];
			}
		});
	},

	queue: [],
	dataAll: [],
	dataSuccess: [],
	dataError: []
};


var fsb = {
	readFiles: function(fd){
		switch(helpers.inputType(fd)){
			case "array":
				helpers.getMultiFiles(fd, "read");
				break;
			case "string":
				console.log("fs-batch: string != array of strings");
				return;
				break;
			default:
				console.log("fs-batch: must pass array of strings");
				return;
				break;
		}
		return fsb;
	},
	readFiles: function(fd){
		switch(helpers.inputType(fd)){
			case "array":
				helpers.getMultiFiles(fd, "read");
				break;
			case "string":
				console.log("fs-batch: string != array of strings");
				return;
				break;
			default:
				console.log("fs-batch: must pass array of strings");
				return;
				break;
		}
		return fsb;
	},

	success: function(_CB){
		fsb.utils.onSuccess = _CB; // in whatever calls onSuccess need to pass it onSuccess(utils.data);
		return fsb;
	},

	utils: {
		onSuccess: function(){},
		onError: function(){}
	}
};

module.exports = function(){
	return fsb;
};