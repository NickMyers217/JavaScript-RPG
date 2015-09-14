// Game module

var screen = require('./screen.js');
var sprite = require('./sprites.js');
var map = require('./map.js');


// Game object
// This is the overall data structure of the game
function Game (screen, sheet, map) {
	this.screen = screen;
	this.sheet = sheet;
	this.map = map;
}


// int -> int -> sprite_sheet -> game
exports.create_game = function (width, height, sheet) {
	var scr = screen.create_screen('game', width, height),
		level1 = map.load_map(require('./maps/level1.json'), sheet);

	return new Game(scr, sheet, level1);
};
