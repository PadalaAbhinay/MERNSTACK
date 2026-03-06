import express from "express"
const app = express()
app.set("view engine","ejs")
app.set("views","./views")
app.use(express.urlencoded({extended:true}));

const users = [
    { name:"Abhinay", email:"abhinay@gmail.com", password:"1234" },
    { name:"Abhishek", email:"abhishek@gmail.com", password:"1234" },
    { name:"Abhijeet", email:"abhi@gmail.com", password:"1234" },


]
// app.get("/",(req,res)=>{
//     res.render("login");
// });
app.get("/register",(req,res)=>{
    res.render("register");
});
app.get("/login",(req,res)=>{
    res.render("login");
});

app.post("/login",(req,res)=>{
    const {email,password} = req.body;
    const user = users.find((user) => user.email === email);
    if(user) {
        if(user.password === password) {
            res.redirect("/");
        } else {
            res.redirect("/login");
        }
    }   else {
        res.redirect("/login");
    }
    res.redirect("/");
});

app.get("/",(req,res)=>{
    res.render("dashboard",{users});
});

app.listen(2000,()=> console.log("server is started "));
