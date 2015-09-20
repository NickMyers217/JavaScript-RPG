/*
 * Traits module
 *
 * Various functionality that can be mixed in or 'composed' with entities
 */

// The entity can be walked on
exports.walkable = {
	walkable: true
};

// The entity has collision
exports.collidable = {
	collidalbe: true
};

// The entity can be drawn
exports.drawable = {
	drawable: true,
	zindex: 0
};


// The entity is alive
exports.alive = {
	totalHP: 100,
	hpPercent: 100
};


// The entity can move
exports.movable = {
	move: function (dx, dy) {
		this.x += dx;
		this.y += dy;
	}
};
