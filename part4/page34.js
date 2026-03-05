import express from "express"
const app = express()
app.set("view engine","ejs")
app.set("views","./views")
app.listen(8080,()=> console.log("server is started "))
app.get("/",(req,res)=>{
    res.render("login");
});