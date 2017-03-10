var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var Player = require.main.require('./models/Player');
var helper = require('../helpers.js');

router.use(bodyParser.json()); // Accept incoming JSON entities

/* Add a new player */
router.post('/', function (req, res) {
	var player = new Player({
	    name: req.body.name,
  	});
  	player.save(function(err) {
	    if (err) {
	    	return helper.renderError(res, err);
	    }
	    console.log('Created player: ' + player.name);
	    res.redirect('/player/list');
	 });
});

router.get('/list', function (req, res) {
	Player.find({}, function(err, players) {
	    if (err) {
	    	return helper.renderError(res, err);
	    }
		res.render('players', {players: players});
	});	
});

module.exports = router