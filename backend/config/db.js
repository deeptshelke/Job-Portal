const mongoose = require('mongoose');
require('dotenv').config();

function connectDB () {
    // database connection
    mongoose.connect(process.env.DATABASE , {

    }).then(() => console.log("Database connected"))
    .catch((err)=> console.log(err));
}

module.exports = connectDB;