
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

		var diffArr = [];


		var userScores = req.body.scores;

		console.log(userScores);
		console.log(catData);

		
        for (var i = 0; i < 9; i ++) {


        	for(var j = 0; j < 9; j++) {		

			

				var diff = Math.abs(parseInt(userScores[i]) - parseInt(catData[i].scores[j]));

				

			}

			



			diffArr.push(diff);

			console.log(diffArr);			
			

	};	

	var diffmin = Math.min.apply(Math, diffArr);

	console.log(diffmin);

	var catMatch = (diffArr.indexOf(diffmin));

	var returnCat = catData[catMatch];

	// console.log(catData.indexOf(diffmin));

	res.json(returnCat);

		

		
	});

}; //  module.exports ends here