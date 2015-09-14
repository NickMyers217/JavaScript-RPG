// Sprites module


// Sprite_Sheet object
function Sprite_Sheet (image, count_x, count_y, size_x, size_y) {
	this.image = image;
	this.count_x = count_x;
	this.count_y = count_y;
	this.size_x = size_x;
	this.size_y = size_y;
}


// Sprite object
function Sprite (x, y, w, h) {
	this.x = x; this.y = y;
	this.w = w; this.h = h;
}

// file_path -> int -> int -> int -> int -> sprite_sheet
exports.load_sprite_sheet = function (file_path, cx, cy, sx, sy) {
	var img = new Image();
	img.src = file_path;

	return new Sprite_Sheet(img, cx, cy, sx, sy);
};


// sprite_sheet -> int -> int -> sprite
exports.get_sprite = function (sheet, sprite_x, sprite_y) {
	return new Sprite(sprite_x * sheet.size_x,
					  sprite_y * sheet.size_y,
					  sheet.size_x,
					  sheet.size_y);
};
