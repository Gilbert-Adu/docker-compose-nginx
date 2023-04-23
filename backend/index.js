const express = require("express");
const app = express()
require("dotenv").config();

app.get("/", (req, res, next) => {
    console.log("running on node server")
});

app.get("/activities", (req, res, next) => {
    let activities = ["run", "hike", "bowl"]
    res.setHeader("content-type", "application/json")
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.status(200).send(JSON.stringify(activities))
})
app.listen(3000, () => {
    console.log(`Backend up and listening on 3000`)
});