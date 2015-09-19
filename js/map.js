/*
 * Map module
 *
 */

// Dependencies
var _ = require('underscore'),
	spr = require('./sprites.js');


// Map object
function Map (title, key, level) {
	this.title = title;
	this.key = key;
	this.level = level;
}


// loadMap :: json -> sprite_sheet -> Map
exports.loadMap = function (mapJson, sheet) {
	var m = mapJson,
		key = m.spriteKey;
		level = _.map(m.level, (row =>
					_.map(row, col =>
						spr.getSprite(sheet, m.spriteKey[col].x, m.spriteKey[col].y))));
	
	return new Map(m.title, key, level);
};
