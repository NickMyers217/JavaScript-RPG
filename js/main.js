var _ = require('underscore'),
	util = require('./util.js'),
	screen = require('./screen.js'),
	sprite = require('./sprites.js'),
	ent = require('./entities/entity.js'),
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
	"entities": [
		// An array containing all the game entities
	]
};
*/


// createGame :: int -> int -> SpriteSheet -> Game
var createGame = function (width, height, sheet) {
	var scr = screen.createScreen('game', width, height),
		lvl = require('./maps/level1.json'),
		key = lvl.spriteKey,
		entities = _.chain(lvl.level)
			.indexedDoubleMap((a, x, y) => 
					ent[key[a].factory](key[a].name,
										x * sheet.spriteW,
										y * sheet.spriteH,
										sprite.getSprite(sheet, key[a].sprite.x, key[a].sprite.y)))
			.flatten()
			.value();

	return {
		sheet: sheet,
		screen: scr,
		entities: entities
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
