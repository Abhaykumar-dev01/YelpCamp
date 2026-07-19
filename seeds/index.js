const mongoose = require('mongoose');
const Campground = require("../models/campground");
mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp')
    .then(() => {
        console.log("Database connected");
    })
    .catch((err) => {
        console.log(err);
    })

//We imported mongoose and campground model because we would run this file seperately on its own whenever we would want to seed our database

const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');

const sample = array => array[Math.floor(Math.random() * array.length)]

const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 50; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const camp = new Campground({
            location: `${cities[random1000].city},${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`
        })
        await camp.save();

    }
}
seedDB().then(() => {
    mongoose.connection.close();
});