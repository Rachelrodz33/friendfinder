var path = require('path');

var listOFriends = require('../data/Friends.js');

module.exports = function(app) {

	app.get('/api/listOlistOFriends', function(req, res) {
		res.json(listOFriends);
	});

	app.post('/api/listOlistOFriends', function(req, res) {
		var userInput = req.body;

		var userResponses = userInput.scores;

		var matchName = '';
		var matchImage = '';
		var totalDifference = 10000; 

		for (var i = 0; i < listOFriends.length; i++) {

			var diff = 0;
			for (var j = 0; j < userResponses.length; j++) {
				diff += Math.abs(listOFriends[i].scores[j] - userResponses[j]);
			}

			if (diff < totalDifference) {

				totalDifference = diff;
				matchName = listOFriends[i].name;
				matchImage = listOFriends[i].photo;
			}
		}

		listOFriends.push(userInput);

		res.json({status: 'OK', matchName: matchName, matchImage: matchImage});
	});
};