var express = require('express');
var app = express();

// ======================
// Routes
// ======================

app.get('/', function(req,res){
    console.log("/ accessed");
    res.send("Hi there, welcome to my assignment");
});

app.get('/speak/:animal', function(req,res){
    var animal = req.params.animal;
    
    if(animal == 'pig'){
        res.send("The pig says 'Oink'");
    }else if(animal == 'cow'){
        res.send("The cow says 'Moo'");
    }else if(animal == 'dog'){
        res.send("The dog says 'Woof Woof!'");
    }
});

app.get("/repeat/:greeting/:num", function(req, res) {
    var greeting = req.params.greeting;
    var num = req.params.num;
    var string = "";
    for(var i=0; i<num; i++){
        string += " " + greeting;
    }
    res.send(string);
});

app.get("*", function(req, res) {
    res.send("Sorry, page not found...What are you doing with your life?");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server has started!");
});