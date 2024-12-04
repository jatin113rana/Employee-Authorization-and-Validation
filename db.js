const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config()

const connectDB = async () => {
    mongoose.set('strictQuery', false);
    try {
        const conn = await mongoose.connect(process.env.DB_URL);
        console.log('DATABASE CONNECTED');
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;