const express = require("express")
const app  = express()
const logger = require("./middlewares/logger")
const auth = require("./middlewares/auth")
const checkRole = require("./middlewares/checkRole")
//Middleware
app.use(logger)
app.use(express.json())

//Routes
app.delete(
    "/users/:id",
    auth,
    checkRole("admin"),
    (req,res )=>{
        res.send("User deleted");
    }
);

app.post("/login",(req,res)=>{
    const{email,password }= req.body;
    res.send(`Email:${email}`);
});
 app.get ("/profile",auth,(req,res)=>{
    res.json(req.user);
 });


app.get ("/student",(req,res)=>{
    res.send("Bu studentlar uchun")
})
app.post("/teacher",(req,res)=>{
    res.send("Bu teacher uchun")
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})