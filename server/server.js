require("dotenv").config();
const express = require("express");
const massive = require("massive");
const ctrl = require("./controller");

const app = express();

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

app.use(express.json());

app.get('/api/houses', ctrl.getHouses)
app.post('/api/houses', ctrl.newHouse)
app.delete('/api/houses/:id', ctrl.deleteHouse)

massive(CONNECTION_STRING)
.then(dbInstance => {
    app.set("db", dbInstance);
        console.log("database connected")
    app.listen(SERVER_PORT, () => {
        console.log(`Server is listening on port ${SERVER_PORT}.`)
    });
})
.catch(err => console.log(err));

