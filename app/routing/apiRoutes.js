
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
// Express config

var app = express();

var catData = require("../data/friends");

// console.log(catData);

// ==================================

// Routes

// ==================================

module.exports = function(app) {

	// =====================================

	// GET requests

	// =====================================

	app.get("/api/cats", function(req, res) {
		res.json(catData);
	});


	// ====================================

	// POST requests

	// ====================================

}; //  module.exports ends here