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

	ctx.drawImage(sheet.image,
			sprite.x,
			sprite.y,
			sprite.w,
			sprite.h,
			x, y,
			sprite.w,
			sprite.h);
};


// screen -> sheet -> map -> [[screen_side_effect]]
exports.draw_map = function (screen, sheet, m) {
	var ctx = screen.getContext('2d'),
		l = m.level.map(row => row.map(col => m.key[col]));

	for (var y = 0; y < l.length; y++) {
		for (var x = 0; x < l[0].length; x++) {
			var s = l[y][x];
			exports.draw_sprite(screen, sheet, s, x * s.w, y * s.h);
		}
	}
};
