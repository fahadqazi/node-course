var express = require('express');
var app = express();
var bodyparser = require('body-parser');

 var campgrounds = [
        {name: "Salmon Creek", image:"https://upload.wikimedia.org/wikipedia/commons/5/5a/Camping_by_Barriere_Lake,_British_Columbia_-_20040801.jpg"},
        {name: "Jacobs Creek", image:"http://www.wildnatureimages.com/images%203/060731-372..jpg"},
        {name: "Brecon Beacons", image:"http://www.digii.eu/resizes/1200/2010/20100321-22%20Hiking%20by%20waterfalls%20in%20Brecon%20Beacons%20with%20Wouko/SX13242%20Campsite%20at%20Nant%20Hepste-fechan%20river.jpg"},
        {name: "Salmon Creek", image:"https://upload.wikimedia.org/wikipedia/commons/5/5a/Camping_by_Barriere_Lake,_British_Columbia_-_20040801.jpg"},
        {name: "Jacobs Creek", image:"http://www.wildnatureimages.com/images%203/060731-372..jpg"},
        {name: "Salmon Creek", image:"https://upload.wikimedia.org/wikipedia/commons/5/5a/Camping_by_Barriere_Lake,_British_Columbia_-_20040801.jpg"},
        {name: "Jacobs Creek", image:"http://www.wildnatureimages.com/images%203/060731-372..jpg"}
        ];

app.use(bodyparser.urlencoded({extended:true}));
app.set('view engine', 'ejs');

app.get("/", function(req,res){
    res.render("home");
//   res.send("This is the home page"); 
});

app.get("/campgrounds", function(req,res){
    
    res.render("campgrounds", {campgrounds:campgrounds}); 
});

app.post("/campgrounds", function(req,res){
    // get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image};
    campgrounds.push(newCampground);
    // redirect page back to campgrounds
    // res.send("posting area reached"); 
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req,res){
   res.render("new.ejs");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server is running!");
});