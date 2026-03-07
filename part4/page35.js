import express from "express"
const app = express()
const productrouter = express.Router()
const userrouter = express.Router()

productrouter.get("/list", (req, res) => {
    res.send("Product List")
});

userrouter.get("/list", (req, res) => {
    res.send("User List")
});
   

app.use("/products", productrouter);
app.use("/users", userrouter);
app.listen(5000, () => { console.log("Server started") });
