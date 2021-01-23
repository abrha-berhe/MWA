const mongoose = require("mongoose");
const dbUrl = "mongodb://localhost:27017/JobsDB";
mongoose.connect(dbUrl,{useNewUrlParser:true},{useUnifiedTechnology:true});
mongoose.connection.on("connect",function(){
    console.log("Mongoose is connected to "+dbUrl);
});

require("./jobs-model.js");