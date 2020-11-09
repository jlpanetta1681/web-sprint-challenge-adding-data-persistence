// Update with your config settings.
module.exports = {
	development: {
		client: "sqlite3",
		connection: {
			filename: "./data/db_config.js",
		},
		migrations: {
			directory: "./data/migrations",
		},
		seeds: {
			directory: "./data/migrations/seeds",
		},
		useNullAsDefault: true,
	},
};
