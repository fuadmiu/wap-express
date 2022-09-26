const express = require('express');
const app = express();
app.get('/', (req, res) => {
    let name = req.query.name || 'Person';
    let age = req.query.age || 0;
    res.send(`Welcome ${name}, your age is ${age}`);
});
app.listen(3000);