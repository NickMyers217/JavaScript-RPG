// Map module

var spr = require('./sprites.js');

// Map files are simply JSON files
// Create a JSON file like some of the already existing ones
// { title, sprite_key, level }
// Once created, load the JSON with the function in this module
// This will create a map object you can render to the screen

function Map (title, key, level) {
	this.title = title;
	this.key = key;
	this.level = level;
}


// json -> sprite_sheet -> map
exports.load_map = function (map_json, sheet) {
	var m = map_json,
		key = m.sprite_key.map((s, i) =>
				spr.get_sprite(sheet, m.sprite_key[i].x, m.sprite_key[i].y));
		level = m.level;

	return new Map(m.title, key, level);
};
