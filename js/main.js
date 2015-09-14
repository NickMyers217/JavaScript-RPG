var screen = require('./screen.js'),
	sprites = require('./sprites.js'),
	dom = require('./dom.js'),
	game = require('./game.js');

window.onload = function () {
	var sht = sprites.load_sprite_sheet('./images/sprite_sheet.png', 64, 47, 32, 32),
		g = game.create_game(800, 600, sht);

	dom.add_to_page(g.screen);

	sht.image.onload = function () {
		screen.draw_game(g);
	};
};
