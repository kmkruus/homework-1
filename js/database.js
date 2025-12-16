
const Pool = require('pg').Pool;

const pool = new Pool({
    user: "GroupAE",
    password: "WAD",
    database: "MainData",
    host: "localhost",
    port: "5432"
});


const execute = async(query) => {
    try {
        await pool.connect();
        await pool.query(query);
        return true;
    } catch (error) {
        console.error(error.stack);
        return false;
    }
};

const createTblQuery = `
    CREATE TABLE IF NOT EXISTS "posts" (
	    "id" SERIAL PRIMARY KEY,         
	    "body" VARCHAR(4000) NOT NULL,
        "imagelink" VARCHAR(200),
        "likecount"  INTEGER NOT NULL
    );`;

const createAnotherTbl = `
    CREATE TABLE IF NOT EXISTS "users" (
	    "id" SERIAL PRIMARY KEY,         
	    "email" VARCHAR(100) UNIQUE NOT NULL,
        "password" VARCHAR(100) NOT NULL
    );`;

execute(createTblQuery).then(result => {
    if (result) {
        console.log('If it does not exist, create the "posts" table');
    }
});

execute(createAnotherTbl).then(result => {
    if (result) {
        console.log('If it does not exist, create the "users" table');
    }
});

module.exports = pool;