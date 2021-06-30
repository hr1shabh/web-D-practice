const express = require("express");
const bodyParser = require("body-parser")
const app = express();

app.get("/",function(req, res){ //__dirname will give us location of the file on server
	res.sendFile(__dirname + "/index.html");
})

app.use(bodyParser.urlencoded({extended: true}));
//bodyparser -> extracts the entire body portion of an incoming request stream and exposes it on req.body
//urlencoded -> It parses incoming requests with urlencoded payloads and is based on body-parser.  It returns an Object.

app.post("/",function(req, res){
var num1 = Number(req.body.num1);
var num2 = Number(req.body.num2);
var result = num1+num2;
res.send("Result is " + result);
})

app.listen("3000");