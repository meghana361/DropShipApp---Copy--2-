
const mongoose = require("mongoose")
const dotenv = require('dotenv');
dotenv.config();
const mongoDbUrl=process.env.MONGO_URI;
const connectDb=()=>{
    return mongoose.connect(mongoDbUrl)
}
module.exports={connectDb} 