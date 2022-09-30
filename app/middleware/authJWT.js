const path=require("path")
const jwt=require("jsonwebtoken")
const UserModel=require(path.join(__dirname,"../model/user.model"))

const varifyToken=(req,res,next)=>{

    if(req.headers && req.headers.authorization && req.heasers.authorization.split(' ')[0]=='JWT'){
        jwt.verify(req.headers.authorization.split(' ')[1],process.env.SECRET_KEY,function(err,payload){
            console.log(payload)
            if(err){
               return  res.status().send({message:"Access denied user not authenticated"})
            }
            UserModel.findById(payload.id)
            .then(data=>{
                req.user=data;
               next();
               return;
            })
            .catch(err=>{
                // res.status(500).send({message:err.message});
                req.user=null;
            })

        })
    }else{
        res.status(404).send({message:"JWT not passed"});
    }
}

module.exports=varifyToken;