const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp')
    .then(() => {
        console.log("Database connected");
    })
    .catch((err) => {
        console.log(err);
    })

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {

})

app.listen(3000, () => {
    console.log('serving on port 3000');
})