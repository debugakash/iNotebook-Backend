const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://root:root@cluster0.gy2kirw.mongodb.net/inotebook";

const connectTomongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectTomongo; 