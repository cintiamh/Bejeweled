pj = window.pj || {};

pj.BASE_SCORE = 10;
pj.GRID_COLS = 8;
pj.GRID_ROWS = 8;
pj.GRID_WIDTH = 160;
pj.gridPosition = {x: 0, y: 0};

pj.gemTypes = [
	{
		color: 0x00FF00,
		shape: "Apple"
	},
	{
		color: 0xFFFF00,
		shape: "Pear"
	},
	{
		color: 0xFF0000,
		shape: "Strawberry"
	},
	{
		color: "purple",
		shape: "Grapes"
	},
	{
		color: "orange",
		shape: "Orange"
	},
	{
		color: "yellow",
		shape: "Lemon"
	}
];

// minScore

pj.levels = [
	{
		multiplier: 1.0,
		cols: 8,
		rows: 8,
		minScore: 200,
		time: 50000
	},
	{
		multiplier: 1.5
	},
	{
		multiplier: 2
	},
	{
		multiplier: 2.5
	},
	{
		multiplier: 3
	},
	{
		multiplier: 3.5
	}
];
