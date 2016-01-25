var express = require("express");
var app = express();


// "/" => "hi there!"
app.get("/", function(req, res){
    console.log("someone made a request to / page");
    res.send("Hi there!");
});
// "/bye" => "goodbye!"
app.get("/bye", function(req, res) {
    console.log("someone requested the /bye page");
    res.send("Goodbye!");
});
// "/dog" => "meow!"
app.get("/dog", function(req, res) {
    console.log("someone requested the /dog page");
    res.send("Meow!");
});
// default route
app.get("*", function(req, res) {
    console.log("someone requested a page that doesn't exit");
    res.send("This page does not exits");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started");
});