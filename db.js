//connect to mongo db
const mongoose = require('mongoose');

async function connection() {
    const connection = await mongoose.connect('mongodb+srv://dharuns2006:OaMYql94va91H8nB@cluster0.jdjg6qw.mongodb.net/');
    console.log("connected to db");

    
}

module.exports = connection;