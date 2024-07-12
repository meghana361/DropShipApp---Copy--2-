const mongoose = require("mongoose")
const mongoDbUrl=process.env.MONGO_URI;
const connectDb=()=>{
    return mongoose.connect(mongoDbUrl)
}
module.exports={connectDb} 