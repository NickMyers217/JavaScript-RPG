var screen = require('./screen.js'),
	sprite = require('./sprites.js'),
	map = require('./map.js'),
	dom = require('./dom.js');

/* How the overall data structure should look (work in progress)
var game = {
	"screen": {
		// Just a canvas element
	},
	"sheet": {
		// A sprite sheet object
		"countX": 64, // Number of sprites on x axis
		"countY": 47, // Number of sprites on y axis
		"spriteW": 32, // How many pixels wide a sprite is
		"spriteH": 32, // How many pixels tall a sprite is
		"image": {
			// An image element with the sprite sheet image
		}
	},
	"entities": {
		// An object containing arrays for all the game entities
	}
};
*/


// int -> int -> SpriteSheet -> Game
var createGame = function (width, height, sheet) {
	var scr = screen.createScreen('game', width, height),
		level1 = map.loadMap(require('./maps/level1.json'), sheet);

	return {
		map: level1,
		sheet: sheet,
		screen: scr
	};
};


window.onload = function () {
	var sht = sprite.loadSpriteSheet('./images/sprite_sheet.png', 64, 47, 32, 32),
		g = createGame(800, 600, sht);

	dom.addToPage(g.screen);

	sht.image.onload = function () {
		screen.drawGame(g);

		console.log(g);
	};
};
