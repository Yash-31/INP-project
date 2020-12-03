var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("Views"))
app.set("view engine","ejs")

//mongoose connection


mongoose.connect('mongodb://localhost:27017/authDemoa', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log('connected')
})

//mschemas 
const userSchema = new mongoose.Schema({
    Username: String,
    Password: String 
    });

const User = mongoose.model("User",userSchema);


app.get("/",function(req,res){

    res.render("index");
});
app.get("/about",function(req,res){

    res.render("Aboutus");
});
app.get("/contact",function(req,res){

    res.render("ContactUs");
});
app.get("/home",function(req,res){
    res.render("Home");
});


//sugnup and stuff
app.get("/signup",function(req,res){
    res.render("signup");
});
app.post('/signup',(req,res)=>{
    const {Username,Password}=req.body;
    // console.log(Username);
    // console.log(Password)
    
    const user = new User({Username,Password});
    //console.log(user);
    user.save();
    res.redirect('/home')
})


app.post('/login', (req,res)=>{
    const {Username , Password}=req.body;
    console.log(Username);
    console.log(Password)
    
    //res.send(user.Password);
    
    
})

app.get("/profile",(req,res)=>{
    res.send ('profile');
})





app.listen(3000)