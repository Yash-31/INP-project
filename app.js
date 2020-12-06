var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("Views"))
app.set("view engine","ejs")

//mongoose connection


mongoose.connect('mongodb://localhost:27017/Demo', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log('connected')
}).catch(err=>{
    console.log(err)
})

//mschemas 
const userSchema = new mongoose.Schema({
    Username: String,
    Password: String 
    });

const User = mongoose.model("User",userSchema);
const soilType = new mongoose.Schema({
    Name:        String,
    Nutrients:   String,
    Description: String,
    image:       String,
    map:         String 
    });

const soil = mongoose.model("soil",soilType);



app.get("/",function(req,res){

    res.render("index");
});
app.get("/about",function(req,res){

    res.render("Aboutus");
});
app.get("/contact",function(req,res){

    res.render("ContactUs");
});

//home and it children
app.get("/home",function(req,res){
    res.render("Home");
});
app.get("/soiltype",async(req,res)=>{
    const soils = await soil.find({});
    res.render('soilType',{soils})
})
app.get("/soiltype/:id", async(req,res)=>{
    const soils = await soil.findById(req.params.id)
    res.render('soilTypess',{soils});

})


app.get("/nutrient",(req,res)=>{
    res.render('nutrient')
})

//signup and stuff
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

app.get('/profile', (req,res)=>{
    res.render('Profile');
})
app.post('/login', (req,res)=>{
    const {username , password}=req.body;
    const user = User.findOne({username});
   // console.log(user);
    // console.log(user.Password);
    
    
    
})

app.get("/profile",(req,res)=>{
    res.send ('profile');
})





app.listen(3000)