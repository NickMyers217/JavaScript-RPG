/*
 * DOM module
 *
 */

// Element -> ()
exports.addToPage = function (el) {
	document.body.appendChild(el);	
};


// string -> id -> Element
exports.create = function (name, id) {
	var new_elem = document.createElement(name);
	if (id) new_elem.id = id;

	return new_elem;
};
