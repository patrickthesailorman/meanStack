var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({extended: false});

app.post('/cities', parseUrlencoded, function (request, response) {
   if(request.body.description.length > 4) {
    var city = createCity(request.body.name, request.body.description);
    response.status(201).json(city);
     } else {
        response.status(400).json("Invalid City");
     }
});

app.use(express.static('public'));

var cities = {
    'New York': 'New York',
    'Boston': "Massachusetts", 
    'San Francisco': 'California', 
    'Seattle': 'Washington', 
    'Providence': 'Rhode Island'
    };
    
app.param('name', function(request, response, next) {
  request.cityName = parseCityName(request.params.name);
  next();
});
    
app.get('/cities', function(req, res) {
    res.json(Object.keys(cities));
    if(req.query.limit > 0) {
     res.json(cities.slice(0, req.query.limit));   
    } else if(req.query.limit > cities.length) {
        res.status(400).json("query limit exceeds number of cities");
    } else {
    res.json(cities);
    }
});

app.get('/cities/:name', function(req, res) {
    var cityName = parseCityName(req.params.name);
    var cityInfo = cities[cityName];
    if(!cityInfo) {
       res.status(404).json("No Data found for " + req.params.name); 
    } else {
    res.json(cityInfo);
    }
});


function parseCityName(name) {
  var parsedName = name[0].toUpperCase() + name.slice(1).toLowerCase();
  return parsedName;
}

var createCity = function(name, description){
  cities[name] = description;
  return name; 
};

app.listen(process.env.PORT);