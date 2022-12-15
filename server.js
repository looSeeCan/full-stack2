///when values are changed kill task and restart

const express = require("express"), 
    dbOperation = require("./dbFiles/dbOperation"),
    cors = require("cors"); /// create an express server


const API_PORT = process.env.PORT || 5001; /// defining a port. I changed this from 5000 to 5001. The first time I did this tutorial it was set on 5000.
const app = express(); /// assign express to a variable. epress is the command to start the server

/// defining some variables for mondgo DB
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());/// use cors

/// 1st call. for api
app.post("/api", async(req, res) => { /// "/api" is a url. I think this can be any name.
    console.log("called");
    console.log(req.body);
    console.log(req.body.sso);
    const result = await dbOperation.getEmployees(req.body.sso);
    console.log("result", result);
    res.send(result.recordset)
});

/// 2nd call. for quit
app.post("/create", async(req, res) => {
    console.log("create");
    // console.log(req);
    console.log(req.body);
    await dbOperation.createEmployees(req.body);
    const result = await dbOperation.getEmployees(req.body.sso);
    console.log("result",result);
    res.send(result.recordset);
})



// dbOperation.getEmployees().then(res => {
//     console.log(res.recordset);
// })

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));