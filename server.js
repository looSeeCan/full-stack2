const express = require("express"), cors = require("cors"); /// create an express server

const API_PORT = process.env.PORT || 5001; /// defining a port. I changed this from 5000 to 5001. The first time I did this tutorial it was set on 5000.
const app = express(); /// assign express to a variable. epress is the command to start the server


app.use(cors());/// use cors

/// 1st call. for api
app.get("/api", (req, res) => { /// "/api" is a url. I think this can be any name.
    console.log("called");
    res.send({result: "Lucycan"}); /// when you send something you need to send an object
})

/// 2nd call. for quit
app.get("/quit", (req, res) => {
    console.log("called quit");
    res.send({result: "Good Bye"});
})


app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));