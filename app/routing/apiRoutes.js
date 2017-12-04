
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

		
        // for (var i = 0; i < 5; i ++) {


        	for(var j = 0; j < 5; j++) {		

			

				var diff = Math.abs(parseInt(userScores[2]) - parseInt(catData[0].scores[0]));
				

			}



			diffArr.push(diff);

			console.log(diffArr);			
			

	// }		



		

		
	});

}; //  module.exports ends here