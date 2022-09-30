const mongoose=require("mongoose");
const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true
    },
    hashedPassword:{
        type:String
    },
})

module.exports =  mongoose.model("User",userSchema);

// llllll