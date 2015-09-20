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


// run :: Game -> ()
exports.run = function (game) {
	requestAnimationFrame(() => frame(game, util.timestamp()));
};


// update :: Game -> int -> Game
var update = function (game) {
	game.player.move(1, 1);
};


// render :: Game -> int -> ()
var render = function (game) {
	var plyr = game.player;

	screen.clear(game.screen);
	
	game.entities.forEach(function (e) {
		if (e.drawable)
			screen.drawSprite(game.screen, game.sheet, e.sprite, e.x, e.y);
	});

	if (plyr.drawable)
		screen.drawSprite(game.screen, game.sheet, plyr.sprite, plyr.x, plyr.y);
};


// frame :: Game -> int -> ()
var frame = function (game, last) {
	var now = util.timestamp(),
		dt = Math.min(1, (now - last) / 1000);

	update(game, dt);
	render(game, dt);

	requestAnimationFrame(() => frame(game, now));
};
