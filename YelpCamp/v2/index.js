var express     = require('express');
var app         = express();
var bodyparser  = require('body-parser');
var mongoose    = require("mongoose");

mongoose.connect("mongodb://localhost/yelp_camp");

//schema setup
var campgroundSchema = new mongoose.Schema({
    name: String, 
    image: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create(
//     {
//       name: "Brecon Beacons", 
//       image:"http://www.digii.eu/resizes/1200/2010/20100321-22%20Hiking%20by%20waterfalls%20in%20Brecon%20Beacons%20with%20Wouko/SX13242%20Campsite%20at%20Nant%20Hepste-fechan%20river.jpg"
    
//     },function(err, campground){
//         if(err){
//             console.log(err);
//         }else{
//             console.log("newly created campground");
//             console.log(campground);
//         }
//     });



app.use(bodyparser.urlencoded({extended:true}));
app.set('view engine', 'ejs');

app.get("/", function(req,res){
    res.render("home");
//   res.send("This is the home page"); 
});

app.get("/campgrounds", function(req,res){
    //get all camp grounds from DB
    Campground.find({},function(err,allcampgrounds){
        if(err){
            console.log(err);
        }else{
            res.render("campgrounds", {campgrounds:allcampgrounds})
        }
    });
    
    // res.render("campgrounds", {campgrounds:campgrounds}); 
});

app.post("/campgrounds", function(req,res){
    // get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image};
    //create a new campground and save to the DB
    Campground.create(newCampground, function(err, newlyCreated){
        if(err){
            console.log(err);
        }else{
            res.redirect("/campgrounds");
        }
    });
    
    // campgrounds.push(newCampground);
    // redirect page back to campgrounds
    // res.send("posting area reached"); 
    // res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req,res){
   res.render("new.ejs");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server is running!");
});