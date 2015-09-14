// DOM module

// DOM element -> DOM side_effect
exports.add_to_page = function (el) {
	document.body.appendChild(el);	
};


// string -> id -> DOM element
exports.create = function (name, id) {
	var new_elem = document.createElement(name);
	if (id) new_elem.id = id;

	return new_elem;
};
