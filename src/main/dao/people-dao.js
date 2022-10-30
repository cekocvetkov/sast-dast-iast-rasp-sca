const dbPool = require('./db-pool.js')

async function getAllPeople() {
    let res = await dbPool.query("select * from person");
    return res.rows;
}

async function getById(id) {
    let res = await dbPool.query("select * from person where id = " + id);
    return res.rows;
}

async function createPerson(person) {
    const query = 'INSERT INTO person(id, name) VALUES($1, $2)'
    const values = [person.id, person.name]

    await dbPool.query(query, values)
}

module.exports = {
    getAllPeople: getAllPeople,
    createPerson: createPerson,
    getById: getById
}