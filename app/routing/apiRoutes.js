
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
// Express config

var app = express();

var catData = require("../data/cats");


// console.log(catData);

// ==================================

// Routes

// ==================================

module.exports = function(app) {

	

	// ====================================

	// POST requests

	// ====================================

	app.post("/api/user", function(req, res) {

		var userScores = req.body;

		console.log(userScores);
	});

}; //  module.exports ends here