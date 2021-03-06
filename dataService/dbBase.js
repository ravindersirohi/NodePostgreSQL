const { host, port, user, password, database, max} = require('../config');
const { Pool } = require('pg');
const pool = new Pool({
    host: host,
    port: port,
    user: user,
    password: password,
    database: database,
    max: max,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
})
const execute = async (q) => {
    const client = await pool.connect()
    try {
        const { rows } = await client.query(q);
        return rows;
    }
    catch (e) {
        console.log(e);
    }
    finally {
        client.release();
    }
}

const executeQuery = async (q, params) => {
    const client = await pool.connect()
    try {
        const { rows } = await client.query(q, params);
        return rows;
    }
    catch (e) {
        console.log(e);
    }
    finally {
        client.release();
    }
}

module.exports = {
    execute,
    executeQuery
};