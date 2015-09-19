/*
 * Entity module
 *
 * The base entity that other entities derive from
 */


// Dependencies
var sprite = require('./sprites.js');


// Entity object
function Entity (name, x, y, sprite) {
	this.name = name;
	this.x = x;
	this.y = y;
	this.sprite = sprites;
}


// createEntity :: int -> int -> Sprite -> Entity
exports.createEntity = function (name, x, y, sprite) {
	return new Entity(name, x, y, sprite);
};

