var express     = require('express');
var app         = express();
var mongooose   = require('mongoose');
var bodyparser  = require('body-parser');

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyparser.urlencoded({extended: true}));

mongooose.connect("mongodb://localhost/restful_blog_app");

//APP CONFIG
var blogSchema = new mongooose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
});

//  MONGOOSE/MODEL CONFIG
var Blog = mongooose.model("Blog", blogSchema);

// Blog.create({
//     title: "My first Blog",
//     image: "https://drupal-internationsgmbh.netdna-ssl.com/cdn/article/public/recommended_blog.jpg",
//     body: "A blog (a truncation of the expression weblog) is a discussion on the World Wide Web con"
//     });
/*
*title
*image
*body
*date created
*/

// RESTFUL ROUTES

app.get("/", function(req,res){
   res.redirect("/blogs"); 
});

app.get("/blogs", function(req, res){
    Blog.find({}, function(err, blogs){
       if(err){
           console.log(err);
       } else{
           res.render("index", {blogs:blogs});
       }
    });
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server is now running!");
});