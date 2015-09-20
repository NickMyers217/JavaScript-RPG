/*
 * Utility module
 *
 * Utilitiy functions that should be mixed in with underscore.js
 * as well as other helpful functions
 */

// Dependencies
var _ = require('underscore');


exports.underscoreMixins = function () {
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
};


// timestamp :: Time
var timestamp = function () {
	return window.performance && window.performance.now ?
		window.performance.now()
		: new Date().getTime();
};
