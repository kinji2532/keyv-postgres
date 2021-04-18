'use strict';

const KeyvSql = require('@keyv/sql');
const Client = require('pg').Client;

class KeyvPostgres extends KeyvSql {
	constructor(opts) {
		opts = Object.assign({
			dialect: 'postgres',
			uri: 'postgresql://localhost:5432'
		}, opts);

		opts.connect = () => Promise.resolve()
			.then(() => {
                                const client = new Client({ connectionString: opts.uri, ssl: {rejectUnauthorized: false} });
				client.connect();
                                return sql => client.query(sql)
					.then(data => {
client.end();
return data.rows
}
);
			});

		super(opts);
	}
}

module.exports = KeyvPostgres;
