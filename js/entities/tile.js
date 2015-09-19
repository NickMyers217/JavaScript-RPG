/*
 * Tile entities
 * 
 * These entities are tiles that make up the level
 */


// Dependencies
var _ = require('underscore'),
	ent = require('./entity.js'),
	traits = require('./traits.js');


// createFloor :: int -> int -> Sprite -> Entity
exports.createFloor = function (x, y, sprite) {
	var flr = ent.createEntity('floor', x, y, sprite);
	return _.extend(flr, traits.walkable, traits.drawable);
};


// createWall :: int -> int -> Sprite -> Entity
exports.createWall = function (x, y, sprite) {
	var wall = ent.createEntity('wa', x, y, sprite);
	return _.extend(wall, traits.collidable, traits.drawable);
};
