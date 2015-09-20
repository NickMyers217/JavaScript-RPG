/*
 * Main entry point
 *
 */


// Dependencies
var util = require('./util.js'),
	dom = require('./dom.js'),
	game = require('./game.js');


util.underscoreMixins();


window.onload = function () {
	var g = game.createGame(800, 600);

	dom.addToPage(g.screen);

	console.log(g);

	g.sheet.image.onload = function () {
		game.run(g);
	};
};
