const path=require("path")
const foodControllers=require(path.join(__dirname,"../Controllers/food.controllers"));


module.exports=app=>{
    app.get("/api/read",foodControllers.getAll)
    app.post("/api/add",foodControllers.create)
}