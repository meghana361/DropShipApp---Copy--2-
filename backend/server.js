const { app } = require(".");
const { connectDb } = require("./config/db");
const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const url = require('url'); 
const { fileURLToPath } =require('url')
const{dirname} =require("path")
const cors = require('cors');
app.use(cors());
dotenv.config();

const PORT=process.env.PORT || 5000;

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// if(process.env.NODE_ENV==='production'){
//   app.use(express.static(path.join(__dirname,"/frontend/dist")))
// }
// app.get("*",(req,res)=>{
//   res.sendFile(path.resolve(__dirname,"frontend","dist","index.html"))
// })
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
}
app.listen(PORT, async () => {
  await connectDb();
  console.log(`server running at port http://localhost:${PORT}`);
  console.log("connected to mongodb");

});
