var express     = require('express');
var app         = express();
var bodyparser  = require('body-parser');
var mongoose    = require("mongoose");

mongoose.connect("mongodb://localhost/yelp_camp");

//schema setup
var campgroundSchema = new mongoose.Schema({
    name: String, 
    image: String,
    description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create(
//     {
//       name: "Brecon Beacons", 
//       image:"http://www.digii.eu/resizes/1200/2010/20100321-22%20Hiking%20by%20waterfalls%20in%20Brecon%20Beacons%20with%20Wouko/SX13242%20Campsite%20at%20Nant%20Hepste-fechan%20river.jpg",
//       description:"This is a huge place, no bathrooms, no water, just a pub on the way, which closed at most times. How ever you might actually run into some squadies"
    
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

//INDEX - show all camp grounds
app.get("/campgrounds", function(req,res){
    //get all camp grounds from DB
    Campground.find({},function(err,allcampgrounds){
        if(err){
            console.log(err);
        }else{
            res.render("index", {campgrounds:allcampgrounds})
        }
    });
    
    // res.render("campgrounds", {campgrounds:campgrounds}); 
});

//CREATE - add new campground to database
app.post("/campgrounds", function(req,res){
    // get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var description = req.body.description;
    var newCampground = {name: name, image: image, description:description};
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

//NEW - show form to create new campground.
app.get("/campgrounds/new", function(req,res){
   res.render("new.ejs");
});

//SHOW - shows more info about a selected campground
app.get("/campgrounds/:id", function(req, res) {
    //find the camground with the provided ID
    Campground.findById(req.params.id, function(err, foundCampground){
       if(err){
           console.log(err);
       } else{
           //render show template with that campground
           res.render("show", {campground: foundCampground});
       }
    });
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server is running!");
});