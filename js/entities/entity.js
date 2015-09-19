/*
 * Entity module
 *
 */


// Dependencies
var sprite = require('./sprites.js');


// Entity object
function Entity (x, y, sprite) {
	this.x = x;
	this.y = y;
	this.sprite = sprite;
}


// createEntity :: int -> int -> Sprite -> Entity
exports.createEntity = function (x, y, sprite) {
	return new Entity(x, y, sprite);
};

