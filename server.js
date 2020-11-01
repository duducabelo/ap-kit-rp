const server = require("./database/server");
db = require("./database/db.js");

server.listen(3000, ()=>{
	console.log("servidor on!");
});
