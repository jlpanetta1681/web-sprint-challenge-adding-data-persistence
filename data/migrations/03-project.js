exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex("project")
		.del()
		.then(function () {
			// Inserts seed entries
			return knex("project").insert([
				{ id: 1, name: "Wake up" },
				{ id: 2, name: "build a house" },
				{ id: 3, name: "make a million" },
			]);
		});
};
