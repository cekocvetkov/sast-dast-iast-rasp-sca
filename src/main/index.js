let express = require("express");
let cors = require("cors");




let app = express();
app.disable("x-powered-by");

const PeopleService = require("./services/people-service.js");


let corsOptions = {
    origin: 'localhost:3001' // Compliant
};
app.use(cors(corsOptions));
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());


app.get('/', async (req, res) => {
    console.log("Get request on '/'")
    let people = await PeopleService.getPeopleFromRealDb();
    res.send(people);
});

app.post('/', async (req, res) => {
    console.log("Get request on '/'")
    console.log(req.body)
    PeopleService.createPerson(req.body);
    res.sendStatus(201);
});

app.listen(3001, () => {
    console.log('listening on port 3001');
}); 