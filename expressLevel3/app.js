var express = require('express');
var app = express();

app.use(express.static('public'));

var cities = {
    'New York': 'New York',
    'Boston': "Massachusetts", 
    'San Francisco': 'California', 
    'Seattle': 'Washington', 
    'Providence': 'Rhode Island'
    };
app.get('/cities', function(req, res) {
    var cities = ['New York', 'Boston', 'San Francisco', 'Seattle', 'Providence'];
    if(req.query.limit > 0) {
     res.json(cities.slice(0, req.query.limit));   
    } else if(req.query.limit > cities.length) {
        res.status(400).json("query limit exceeds number of cities");
    } else {
    res.json(cities);
    }
});

app.get('/cities/:name', function(req, res) {
    var description = cities[req.params.name];
    if(!description) {
       res.status(404).json("No Data found for " + req.params.name); 
    } else {
    res.json(description);
    }
});

app.listen(process.env.PORT);