var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var Player = require.main.require('./models/Player');

router.use(bodyParser.json()); // Accept incoming JSON entities
router.use(bodyParser.urlencoded({extended: true}));

/* Method to get overview over who owes who what */
router.get('/owes', function (req, res, next) {
	Player.find({})
		.sort('name')
		.populate('owes.owee')
		.exec(function (err, players) {
			res.render('owes', {owes: players});
	});
});

/* Method to register a payback between two players */
router.put('/payback', function (req, res) {
	var ower = req.body.ower;	
	var owee = req.body.owee;
	var item = req.body.paybackItem;
	var amount = req.body.paybackAmount;

	console.log(ower + " paid back '" + amount + "'  '" + item + "' to " + owee);
	res.status(202)
		.send('Not Yet Implemented')
		.end();
});

module.exports = router