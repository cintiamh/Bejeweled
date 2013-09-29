pj = window.pj || {};

pj.Gem = function() {
	this.cell = null;
	this.type = 0; // types are stored in an array. this is the array index.
	this.level = 0; // 0 - normal, 1 - power, 2 - hyper
};