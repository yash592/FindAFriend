var catData = require("../data/cats");
var path = require("path");

// =========================================

// ROUTES

// =========================================

module.exports = function(app) {

	app.get("/home", function(err, res) {
		res.sendFile(path.join(__dirname, "../public/home.html"));
	})

	app.get("/survey", function(err, res) {
		res.sendFile(path.join(__dirname, "../public/survey.html"));
	})

	app.get("/api/cats", function(err, res) {
		res.json(catData);

	})

	app.get("*", function(err, res) {
		res.sendFile(path.join(__dirname, "../public/home.html"))
	});

};