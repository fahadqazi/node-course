var express = require("express");
var app = express();

app.get("/home", function(req, res) {
    res.send("<h1>Hey you are in the home directory!</h1><br><ul><li>one</li><li>Two</li></ul>");
});


app.get("/embedded", function(req,res){
  res.render('embedded.ejs'); 
});


app.get("/welcome/:firstname/:lastname", function(req,res){
    var fname = req.params.firstname;
    var lname = req.params.lastname;
    
    res.render("login.ejs", {firstname:fname, lastname:lname}); 
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server has started!");
});

