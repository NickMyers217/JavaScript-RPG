/*
 * DOM module
 *
 * Utilities for the document object model
 */

// addToPage :: Element -> ()
exports.addToPage = function (el) {
	document.body.appendChild(el);	
};


// create :: string -> id -> Element
exports.create = function (name, id) {
	var new_elem = document.createElement(name);
	if (id) new_elem.id = id;

	return new_elem;
};
