/*
 * Entity module
 *
 */


// Dependencies
var sprite = require('./sprites.js');


function Entity (x, y, sprite) {
	this.x = x;
	this.y = y;
	this.sprite = sprite;
}


exports.createEntity = function (x, y, sprite) {
	return new Entity(x, y, sprite);
};

