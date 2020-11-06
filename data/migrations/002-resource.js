exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex("resource")
		.del()
		.then(function () {
			// Inserts seed entries
			return knex("resource").insert([
				{ id: 1, name: "morning" },
				{ id: 2, name: "evening" },
				{ id: 3, name: "daytime" },
			]);
		});
};
