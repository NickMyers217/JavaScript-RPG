// Screen module
var dom = require('./dom.js');


// string -> screen
exports.create_screen = function (id, width, height) {
	var scr = dom.create('canvas', id);
	if (width) scr.width = width;
	if (height) scr.height = height;

	return scr;
};


// screen -> sheet -> sprite -> int -> int -> screen_side_effect
exports.draw_sprite = function (screen, sheet, sprite, x, y) {
	var ctx = screen.getContext('2d');

	ctx.drawImage(sheet.image, sprite.x, sprite.y, sprite.w, sprite.h, x, y, sprite.w, sprite.h);
};


// game -> [[screen_side_effect]]
exports.draw_game = function (game) {
	var ctx = game.screen.getContext('2d');

	game.map.level.forEach((row, y) =>
			row.forEach((s, x) =>
				exports.draw_sprite(game.screen, game.sheet, s, x * s.w, y * s.h)));
};
