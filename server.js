///when values are changed kill task and restart

const express = require("express"), 
    dbOperation = require("./dbFiles/dbOperation"),
    Employee = require("./dbFiles/employee"), 
    cors = require("cors"); /// create an express server

const API_PORT = process.env.PORT || 5001; /// defining a port. I changed this from 5000 to 5001. The first time I did this tutorial it was set on 5000.
const app = express(); /// assign express to a variable. epress is the command to start the server

/// defining some variables for mondgo DB
let client;
let session;
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());/// use cors

/// 1st call. for api
app.post("/api", (req, res) => { /// "/api" is a url. I think this can be any name.
    console.log("called");
    res.send({result: "Lucycan"}); /// when you send something you need to send an object
})

/// 2nd call. for quit
app.post("/quit", (req, res) => {
    console.log("called quit");
    res.send({
        result: "Ricki",
        last: "Albright",
        age: 36,
    });
})

// let ricki = new Employee(123456789, "Ricki Albright", "ralbright@ge.com", "1984-10-18", "youAndI#234")
// console.log(ricki);
// console.log(ricki.employeeSso)

// dbOperation.createEmployees(ricki);

// dbOperation.getEmployees().then(res => {
//     console.log(res.recordset);
// })

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));