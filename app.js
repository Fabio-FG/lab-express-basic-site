//import express package

const express = require("express");
const app = express();

//Create a middleware - public folder

app.use(express.static("public"));


//End points

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/views/index.html")
});


app.get("/about", (req, res) => {
    res.sendFile(__dirname + "/public/views/about.html")
});

app.get("/works", (req, res) => {
    res.sendFile(__dirname + "/public/views/works.html")
});


//Start the server

app.listen(3000, () => {
    console.log("Server is Running!");
})


