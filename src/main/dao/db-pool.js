const { Pool } = require('pg')

const connectionString = "postgres://postgresUser:postgresPasswort@localhost:6432/peopledb";

const pool = new Pool({
    // single pool
    connectionString,
});

module.exports = pool;