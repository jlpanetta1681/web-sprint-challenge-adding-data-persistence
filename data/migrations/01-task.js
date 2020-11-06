exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex("task")
		.del()
		.then(function () {
			// Inserts seed entries
			return knex("task").insert([
				{ id: 1, description: "wake up" },
				{ id: 2, description: "Build a house" },
				{ id: 3, description: "make a million dollars" },
			]);
		});
};
