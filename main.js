const express=require('express')
const app = express()
const port=4000;
const path = require("path");
const bodyParser =require("body-parser")
app.use(bodyParser.json());//cho phép đọc dữ liệu truyền từ api
app.set('view engine', 'ejs');// cấu hình ejs 
app.set("views", path.join(__dirname, "views"));
app.get("/login",(req,res)=>{
   
    res.render('C:\Users\Admin\Desktop\ass\views\Loginscreen.ejs')
})
app.get("/register",(req,res)=>{
   
    res.render('C:\Users\Admin\Desktop\ass\views\RegisterScreen.ejs')
})
app.get("/Home",(req,res)=>{
   
    res.render('C:\Users\Admin\Desktop\ass\views\HomeScreen.ejs')
})
app.get("/insert",(req,res)=>{
   
    res.render('C:\Users\Admin\Desktop\ass\views\InsertScreen.ejs')
})
app.get("/edit",(req,res)=>{
   
    res.render('C:\Users\Admin\Desktop\ass\views\Editscreen.ejs')
})
app.get("/list",(req,res)=>{
   
    res.render('C:\Users\Admin\Desktop\ass\views\Listproduct.ejs')
})
app.post("/register/user",(req,res)=>{
   console.log(req.body);
  
})
app.listen(4000,()=>{
    console.log(`sever running at the port ${port}` )
    console.log( path.join(__dirname, "views"))
})