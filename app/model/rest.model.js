const mongoose=require("mongoose")

const RestSchema=mongoose.Schema({
    restname:{
    type:String,
    required:true
    },
    foodname:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    available:{
        type:String,
        required:true
    },
    img: {
         data: Buffer,
        type: String,
        required:true
     },
     img2: {
        data: Buffer,
       type: String
    }
});
const RestModel = mongoose.model("rest",RestSchema);
module.exports=RestModel;