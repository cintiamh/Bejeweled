pj = window.pj || {};

describe("Game", function() {
	var game;

	beforeEach(function() {
		game = new pj.Game();
	});

	it("should create an empty game with initial values", function() {
		expect(game.score).toEqual(0);
		expect(game.level).toEqual(0);
	});
});