var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

// app.get("/home", function(req, res) {
//     res.send("<h1>Hey you are in the home directory!</h1><br><ul><li>one</li><li>Two</li></ul>");
// });


app.get("/embedded", function(req,res){
  res.render('embedded'); 
});


app.get("/welcome/:firstname/:lastname", function(req,res){
    var fname = req.params.firstname;
    var lname = req.params.lastname;
    
    res.render("login", {firstname:fname, lastname:lname}); 
});

app.get("/posts", function(req, res) {
    var posts = [
        {title: "post 1", author: "GGG"},
        {title: "post 2", author: "Money"},
        {title: "post 2", author: "pacman"}
        ];
        
        res.render("posts", {posts: posts});
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server has started!");
});

