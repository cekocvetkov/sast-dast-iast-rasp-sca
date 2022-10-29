let express = require("express");
let cors = require("cors");
let app = express();
app.disable("x-powered-by");

const PeopleService = require("./services/people-service.js");

let corsOptions = {
    origin: 'localhost:3001' // Compliant
};
app.use(cors(corsOptions));

app.get('/', (req, res) => {
    console.log("Get request on '/'")
    let people = PeopleService.getPeople();
    res.send(people);
});

app.listen(3001, () => {
    console.log('listening on port 3001');
}); 