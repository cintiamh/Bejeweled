pj = window.pj || {};

pj.Cell = function(col, row, size) {
	this.col = col ? col : 0;
	this.row = row ? row : 0;
	this.size = size ? size : 0;
	this.position = {x: col && size ? col * size : 0, y: row && size ? row * size : 0};
	this.gem = null;
	// console.log("Cell: " + this.col + ", " + this.row + ", " + this.size + ", " + this.position.x + ", " + this.position.y);
};



// toggle highlight

