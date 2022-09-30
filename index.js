const express=require("express")
const mongoose=require("mongoose")
const app=express();
const path=require('path')
const bodyParser=require('body-parser');
const varifyToken=require(path.join(__dirname,"./app/middleware/authJWT"))

const cors=require("cors");
// require('dotenv').config({ path: './.env' })
require('dotenv').config()


// console.log(__dirname)
// console.log(path.join(__dirname,"./app/middleware/authJWT"))

mongoose.connect(process.env.MONGODB_URL);
var db = mongoose.connection;
db.on("open",()=>{
    console.log("connected");
})
db.on("error",()=>{
    console.log("dis-connected");
})
app.use(cors());
app.use(bodyParser.json());






require(path.join(__dirname,"./app/routes/auth.routes"))(app)
require(path.join(__dirname,"./app/routes/food.routes"))(app)



app.listen(process.env.PORT,()=>{
    console.log("server is running on "+process.env.PORT);
})