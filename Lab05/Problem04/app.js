var express= require("express");
require("./api/data/dbconnection");
var routes= require("./api/routes");
const bodyParser = require("body-parser");


var app= express();
app.set("port", 3000);
app.use(function(req, res, next) {
console.log(req.method, req.url);
next();
});
app.use(bodyParser.urlencoded({extended: false}));

app.use("/api", routes);
var server = app.listen(app.get("port"),function(){
    var port = server.address().port;
    console.log("Listening to port "+ port );
});

 


 

 