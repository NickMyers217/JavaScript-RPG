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
	zindex: 0
};
