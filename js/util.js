/*
 * Utility module
 *
 */

// Dependencies
var _ = require('underscore');


_.mixin({
	// doubleMap :: [[a]] -> (a -> b) -> [[b]]
	doubleMap: function (list, fn) {
		return _.map(list, row =>
					_.map(row, col =>
						fn(col)));
	},

	// indexedDoubleMap :: [[a]] -> (a -> int -> int -> b) -> [[b]]
	indexedDoubleMap: function (list, fn) {
		return _.map(list, ((row, y) =>
					_.map (row, (col, x) =>
						fn(col, x, y))));
	}
});
