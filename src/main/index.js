let express = require("express");
let cors = require("cors");
let app = express();

const PeopleService = require("./services/people-service.js");

app.use(cors());

app.get('/', (req, res) => {
    console.log("Get request on '/'")
    let people = PeopleService.getPeople();
    res.send(people);
});

app.listen(3001, () => {
    console.log('listening on port 3001');
}); 