pj = window.pj || {};

describe("Grid", function() {
	var grid;

	beforeEach(function() {
		grid = new pj.Grid();
	});

	it("should create grid with default values", function() {
		expect(grid.position.x).toEqual(0);
		expect(grid.position.y).toEqual(0);
		expect(grid.cols).toEqual(pj.GRID_COLS);
		expect(grid.rows).toEqual(pj.GRID_ROWS);
		expect(grid.width).toEqual(pj.GRID_WIDTH);
	});

	it("should create grid with custom values", function() {
		var diff_grid = new pj.Grid(10, 20, 9, 9, 90);
		expect(diff_grid.position.x).toEqual(10);
		expect(diff_grid.position.y).toEqual(20);
		expect(diff_grid.cols).toEqual(9);
		expect(diff_grid.rows).toEqual(9);
		expect(diff_grid.width).toEqual(90);
	});

	it("should create 64 cells for grid", function() {
		grid.createCells();
		expect(grid.cells.length).toEqual(64);
	});
});