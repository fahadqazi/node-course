var express = require('express');
var app = express();
var bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({extended: true}));

var friends = ["imran", "ifran", "shabz", "ash", "khant"];

app.set("view engine", "ejs");

app.get("/", function(req, res){
   res.render("home"); 
});

app.post("/addfriend", function(req,res){
    var newfriend = req.body.newfriend
    friends.push(newfriend);
    res.redirect("/friends");
    // res.send("You made it to the post page"); 
});

app.get("/friends", function(req,res){
    
    res.render("friends", {friends:friends});
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server running!")
});