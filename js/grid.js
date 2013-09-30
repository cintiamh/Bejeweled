pj = window.pj || {};

pj.Grid = function(x, y, cols, rows, width) {
	this.cells = [];
	this.position = {x: x ? x : 0, y: y ? y : 0};
	this.cols = cols ? cols : pj.GRID_COLS;
	this.rows = rows ? rows : pj.GRID_ROWS;
	this.width = width ? width : pj.GRID_WIDTH;
};

pj.Grid.prototype.createCells = function() {
	for (var i = 0; i < this.cols; i++) {
		for (var j = 0; j < this.rows; j++) {
			this.cells.push(new pj.Cell(i, j, this.width / this.cols));
		}
	}
};
// Create grid - populate with random gems

// Verify if sequence is formed (3, 4, 5 or more)

// Verify if valid movements are available

// Shuffle gems - if you don't have more available movemnts, shuffle existing pieces.

// swap gems





