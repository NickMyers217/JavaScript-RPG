/*
 * Screen module
 *
 */


// Dependencies
var dom = require('./dom.js');


// string -> Screen
exports.createScreen = function (id, width, height) {
	var scr = dom.create('canvas', id);
	if (width) scr.width = width;
	if (height) scr.height = height;

	return scr;
};


// Screen -> Sheet -> Sprite -> int -> int -> ()
exports.drawSprite = function (screen, sheet, sprite, x, y) {
	var ctx = screen.getContext('2d');

	ctx.drawImage(sheet.image, sprite.sheetX, sprite.sheetY, sprite.w, sprite.h, x, y, sprite.w, sprite.h);
};


// Game -> ()
exports.drawGame = function (game) {
	var ctx = game.screen.getContext('2d');

	game.map.level.forEach((row, y) =>
			row.forEach((s, x) =>
				exports.drawSprite(game.screen, game.sheet, s, x * s.w, y * s.h)));
};
