const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require("path");

app.use(bodyParser.urlencoded({ extended: false }));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
})

app.post('/result', (req, res) => {
    let name = req.body.username;
    let age = req.body.age;
    res.send(`Welcome ${name}, age ${age}`);
})


app.listen(3000, () => {
    console.log('Running server on port 3000');
});