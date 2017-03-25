var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var Player = require.main.require('./models/Player');
var helper = require('../helpers.js');

router.use(bodyParser.json()); // Accept incoming JSON entities

/* Add a new player */
router.post('/', function (req, res) {
	new Player({name: req.body.name})
		.save(null, {method: 'insert'})
		.then(function(player) {
            console.log('Created player: ' + player.name);
            res.redirect('/player/list');
		}).catch(function(err) {
			return helper.renderError(res, err);
		});
});

/* Get specific statistics for a given player */
router.get('/:id/stats', function(req, res) {
	Player.findById(req.params.id)
		.exec(function(err, player) {
		if (err) {
			return helper.renderError(res, err);
		}
		res.render('playerStatistics', {player: player});
	});	
});

/* Get a list of all players */
router.get('/list', function (req, res) {
	Player.query(function(qb){
		qb.orderBy('name','ASC');
	})
		.fetchAll()
		.then(function(players) {
			res.render('players', {players: players.serialize()});
		}).catch(function(err) {
			console.error(err);
		});
	});

module.exports = router