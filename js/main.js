/*
 * Main entry point
 *
 */

var util = require('./util.js'),
	dom = require('./dom.js'),
	game = require('./game.js');


window.onload = function () {
	var g = game.createGame(800, 600);

	console.log(g);

	dom.addToPage(g.screen);

	g.sheet.image.onload = function () {
		game.render(g);
	};
};
