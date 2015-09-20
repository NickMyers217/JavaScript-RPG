/*
 * Game module
 *
 * Implement these functions to setup and run the game
 */


// Dpenedencies
var _ = require('underscore'),
	screen = require('./screen.js'),
	sprite = require('./sprites.js'),
	ent = require('./entities/entity.js');


// Game object
function Game (sheet, screen, player, entities) {
	this.sheet = sheet;
	this.screen = screen;
	this.player = player;
	this.entities = entities;
}


// createGame :: int -> int -> SpriteSheet -> Game
exports.createGame = function (width, height) {
	var sheet = sprite.loadSpriteSheet('./images/sprite_sheet.png', 64, 47, 32, 32),
		scr = screen.createScreen('game', width, height),
		lvl = require('./maps/level1.json'),
		key = lvl.spriteKey,
		entities = _.chain(lvl.level)
			.indexedDoubleMap((a, x, y) => 
					ent[key[a].factory](
						key[a].name,
						x * sheet.spriteW,
						y * sheet.spriteH,
						sprite.getSprite(sheet, key[a].sprite.x, key[a].sprite.y)))
			.flatten()
			.value(),
		plyr = ent.createPlayer("player", 50, 50, sprite.getSprite(sheet, 0, 2));

	return new Game(sheet, scr, plyr, entities);
};


// render :: Game -> ()
exports.render = function (game) {
	var plyr = game.player;
	
	_.forEach(_.sortBy(game.entities, e => e.zindex), function (e) {
		if (e.drawable)
			screen.drawSprite(game.screen, game.sheet, e.sprite, e.x, e.y);
	});

	if (plyr.drawable)
		screen.drawSprite(game.screen, game.sheet, plyr.sprite, plyr.x, plyr.y);
};
