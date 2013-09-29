pj = window.pj || {};

pj.Cell = function(x, y, size) {
	this.position = {x: x, y: y};
	this.size = size; // all cells are squares, so size is for width and height.
	this.gem = null;
	this.neighbors = [];
};

// toggle highlight

