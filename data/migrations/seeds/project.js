exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex("project")
		.del()
		.then(function () {
			// Inserts seed entries
			return knex("project").insert([
				{
					id: 1,
					name: "Wake up",
					description: "project",
					completed: "false",
					task_id: 01,
				},
				{
					id: 2,
					name: "build a house",
					description: "project",
					completed: "false",
					task_id: 02,
				},
				{
					id: 3,
					name: "make a million",
					description: "project",
					completed: "false",
					task_id: 03,
				},
			]);
		});
};
