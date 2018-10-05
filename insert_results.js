var fs = require('fs');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://mongo:27017/ebay_db"; //ebay_db
var jsonfile = require('jsonfile');


var save_data = function(){
	
	MongoClient.connect(url, function(err,db){
		if(err) throw err;
		
		var content = fs.readFileSync("output.json");
		var json = JSON.parse(content);
		
		console.log('Connected to MongoDB...');
		db.collection("phones").insertMany(json, function(err, doc) {
			if (err) throw err;
			console.log("Data Inserted...");
			console.log(json);
		});
		
	});
}

module.exports = save_data;