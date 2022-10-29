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
}

module.exports = PeopleService;