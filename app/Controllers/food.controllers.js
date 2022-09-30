const path=require("path")
const FoodModel=require(path.join(__dirname,"../model/rest.model"))

exports.getAll=(req,res)=>{
    FoodModel.find({})
    .then(data=>{
        res.send(data);
    })
    .catch(err=>{
        res.status(505).send({
            message:err.message
        })
    })
}

exports.create=(req,res)=>{
    const restlist=new FoodModel({
        restname:req.body.restname,
        foodname:req.body.foodname,
        description:req.body.description,
        available:req.body.available?req.body.available:false,
        img:req.body.img,
        img2:req.body.img2
    })
    restlist.save()
    .then(data=>{
        res.send(data);
    })
    .catch(err=>{
        res.status(500).send({
            message:err.message
        })
    })
}