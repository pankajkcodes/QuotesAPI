const express = require('express');
const app = express();
const quotes = require('./quotes.json');


const port = 5000;

app.get("/", (req, res) => {
    res.status(200).send("Ok");
});

app.get("/quote", (req, res) => {
    res.status(200).json(quotes);
});


app.get("/random", (req, res) => {
    let index = Math.floor(Math.random() * quotes.length);
    let quote = quotes[index];
    res.status(200).json(quote);


});

app.listen(port, () => console.log(`Hello World app listening on port ${port}!`));