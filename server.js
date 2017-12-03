// Depemndencies

var express = require("express");
var bodyParser = require("body-parser");

// Express config

var app = express();

// Setting up the port for heroku

var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// routes

require(".app/routing/apiRoutes")(app);
require(".app/routing/htmlRoutes")(app);

// Listeners

app.listen(PORT, function() {
	console.log("Listening on PORT " + PORT);
});