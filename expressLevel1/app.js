var express = require('express');
var app = express();

app.get('/', function(req, res) {
   res.send('Hello World'); 

});
app.get('/name', function(req, res) {
    var name = "Patrick";
    res.send("It's " + name + ". ");
    
});

app.get('/redirect', function(req, res) {
    res.redirect(301, '/surprise');
    console.log(res);
});

app.get('/date', function(req, res) {
    var date = new Date().toString().replace(/T/, ':').replace(/\.\w*/, '');
    
    res.send(date);
});

app.listen(process.env.PORT);