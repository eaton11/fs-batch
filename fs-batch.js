var fs = require("fs");

var helpers = {
	inputType: function(_INPUT){ // is input string or array-of-strings
		return (typeof _INPUT === "string") ? "string" : ( (Array.isArray(_INPUT)) ? "array" : null ); 
	},

	getMultiFiles: function(ARR){
		
	},

	dataReturned: function(){
		utils.dataAll.each = utils.dataError.each = function(s){
			for(var t=this,e=0,n=t.length;n>e;e++)s(t[e],e,t)
		};
	},

	queue: [],
	dataAll: [],
	dataError: []
};


var fsb = {

	read: function(fd, buffer, offset, length, position, callback){
		switch(helpers.inputType(fd)){
			case "string":
				console.log("string mofo");
				break;
			case "array":
				getMultiFiles(fd);
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
		onError: function(){},
	}
};

module.exports = function(){
	return fsb;
};