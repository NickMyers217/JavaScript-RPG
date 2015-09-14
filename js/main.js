var screen = require('./screen.js'),
	sprites = require('./sprites.js'),
	dom = require('./dom.js'),
	map = require('./map.js');

window.onload = function () {
	var sht = sprites.load_sprite_sheet('./images/sprite_sheet.png', 64, 47, 32, 32),
		scr = screen.create_screen('game', 800, 600);

	sht.image.onload = function () {
		var level1 = map.load_map(require('./maps/level1.json'), sht);

		dom.add_to_page(scr);
		screen.draw_map(scr, sht, level1);
	};
};
