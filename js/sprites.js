/*
 * Sprites module
 *
 */


// Sprite_Sheet object
function SpriteSheet (image, countX, countY, spriteW, spriteH) {
	this.image = image;
	this.countX = countX;
	this.countY = countY;
	this.spriteW = spriteW;
	this.spriteH = spriteH;
}


// Sprite object
function Sprite (x, y, w, h) {
	this.sheetX = x;
	this.sheetY = y;
	this.w = w;
	this.h = h;
}

// file_path -> int -> int -> int -> int -> SpriteSheet
exports.loadSpriteSheet = function (filePath, cx, cy, sx, sy) {
	var img = new Image();
	img.src = filePath;

	return new SpriteSheet(img, cx, cy, sx, sy);
};


// SpriteSheet -> int -> int -> Sprite
exports.getSprite = function (sheet, spriteX, spriteY) {
	return new Sprite(spriteX * sheet.spriteW,
					  spriteY * sheet.spriteH,
					  sheet.spriteW,
					  sheet.spriteH);
};
