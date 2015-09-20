/*
 * Screen module
 *
 * Utilities for creating and rendering to HTLM5 canvas elements
 */


// Dependencies
var _ = require('underscore'),
	dom = require('./dom.js');


// createScreen :: string -> Screen
exports.createScreen = function (id, width, height) {
	var scr = dom.create('canvas', id);
	if (width) scr.width = width;
	if (height) scr.height = height;

	return scr;
};


// clear :: Screen -> ()
exports.clear = function (screen) {
	var ctx = screen.getContext('2d');

	ctx.clearRect(0, 0, screen.width, screen.height);
};


// drawSprite :: Screen -> Sheet -> Sprite -> int -> int -> ()
exports.drawSprite = function (screen, sheet, sprite, x, y) {
	var ctx = screen.getContext('2d');

	ctx.drawImage(
			sheet.image,
			sprite.sheetX,
			sprite.sheetY,
			sprite.w,
			sprite.h,
			x, y,
			sprite.w,
			sprite.h);
};
