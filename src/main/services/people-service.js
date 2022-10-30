const peopleDao = require('../dao/people-dao.js')
class PeopleService {
    static DB = [
        { name: 'Zeko' },
        { name: 'Gecko' }
    ];

    static getPeople() {
        return this.DB;
    }

    static setPeople(people) {
        this.DB = people;
    }

    static async getPeopleFromRealDb() {
        return peopleDao.getAllPeople();
    }

    static async getPersonById(id) {
        return peopleDao.getById(id);
    }

    static createPerson(person) {
        return peopleDao.createPerson(person);
    }
}

module.exports = PeopleService;