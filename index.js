const express = require("express")
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const dotenv = require("dotenv");

const app = express ();
dotenv.config();

const port = process.env.PORT || 3000;

const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;

mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.itlkfrp.mongodb.net/moneytrackappDB`,{
    useNewUrlparser : true,
    useUnifiedTopology : true,
});

app.get("/",(req, res) => {
    res.sendFile(__dirname +"/index.html");
})


app.listen(port, ()=>{
    console.log(`server is running on port${port}`);
})