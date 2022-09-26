const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require("path");

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'html'));

const date = new Date();
const hour = date.getHours();

app.use('/css', express.static(path.join(__dirname, 'css')));

if(hour >= 6 && hour < 18){
    cssFile = 'day.css';
} else if(hour >= 18 && hour < 6) {
    cssFile = 'night.css';
}

app.use(bodyParser.urlencoded({extended:false}));

app.get('/', (req, res) => {
    res.render(path.join(__dirname + '/index.html'));
})

app.post('/result', (req, res)=>{
    let name = req.body.username;
    let age = req.body.age;
    res.send(`Welcome ${name}, age ${age}`);
})


app.listen(3000, () => {
    console.log('Running server on port 3000');
});