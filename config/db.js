const mongoose = require('mongoose');
const config = require('config');

let db = config.get("MongoURI");

if(process.env.REACT_APP_DB) {
  db = process.env.REACT_APP_DB;
}
// const DB = DB;

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(db, {
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