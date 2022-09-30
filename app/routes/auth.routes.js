const path =require("path")
const AuthController=require(path.join(__dirname,"../Controllers/auth.controllers"))

module.exports=app=>{
    app.post("/api/register",AuthController.register)
    app.post("/api/login",AuthController.login)
}