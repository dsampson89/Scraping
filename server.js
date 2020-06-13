const express = require("express");
const mongoose = require("mongoose")
const expressHandlebars = require("express-handlebars");
const bodyParser= require("body-parser");

const PORT = process.env.PORT || 3000;

// Initialize Express
const app = express();

const router = express.Router();

require("./config/routes")(router);

app.use(express.static(__dirname + "/public"));

app.engine("handlebars", expressHandlebars({
    defaultLayout: "main"
}));
app.set ("view engine", "handlebars");

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(router);

const db = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.connect(db, function(error){
    if (error){
        console.log (error);
    }
    else {
        console.log("mongoose connection is successful");
    }
});

app.listen(PORT, function(){
    console.log("Listening on port:" + PORT);
});