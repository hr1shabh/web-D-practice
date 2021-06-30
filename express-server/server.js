const express = require("express");
const app = express(); // refering to express module

app.get("/", function(request, respond){ //home root
	//console.log(request);
	respond.send("<h1>Hello</h1>");
});

app.get("/contact", function(req,res){
	res.send("call me :)");
});

app.get("/about", function(req,res){
	res.send("I am a web Developer");
});

app.get("/hobbies", function(req,res){
	res.send("CP is <3");
});

app.listen(3000, function(){
	console.log("server started");
});

