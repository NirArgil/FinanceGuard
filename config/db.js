const mongoose = require('mongoose');
const config = require('config');

// let db = config.get("MongoURI");

// if(process.env.DB) {
//   db = process.env.DB;
// }
const DB = process.env.REACT_APP_DB;
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(DB, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        });

        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
    } catch (err) {
        console.log(`Error: ${err.message}`.red);
        process.exit(1);
    }
}

module.exports = connectDB;