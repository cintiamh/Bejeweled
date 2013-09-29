pj = window.pj || {};

pj.Game = function() {
	this.score = 0;
	this.level = 0;
	this.grid = null;
};

pj.Game.prototype.newGame = function(level) {
	this.level = level;
	this.grid = new pj.Grid(pj.gridPosition.x, pj.gridPosition.y, pj.levels[level].cols, pj.levels[level].rows, 20);
};