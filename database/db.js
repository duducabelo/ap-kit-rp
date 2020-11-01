const mongo = require("mongodb").MongoClient;

mongo.connect("mongodb://localhost:27017", {useUnifiedTopology: true})
	.then(connection => {
		global.connection = connection.db("dbteste01");
		console.log("CONECTADO A DB!");
	})
	.catch(err => console.log(err));



