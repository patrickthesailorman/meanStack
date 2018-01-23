var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({extended: false});

app.post('/cities', parseUrlencoded, function (req, res) {
   if(req.body.description.length > 2) {
    var city = createCity(req.body.name, req.body.description);
    res.status(201).json(city);
     } else {
        res.status(400).json("Invalid City");
     }
});

 app.delete('/cities/:name', function (req, res) {
   if(cities[req.cityName]) {
     delete cities[req.cityName];
     res.sendStatus(200);
     } else {
      res.sendStatus(404);
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
    
// app.param('name', function(req, res, next) {
//   req.cityName = parseCityName(req.params.name);
//   next();
// });
    
app.get('/cities', function(req, res) {
    var city = Object.keys(cities);
    if(req.query.limit > 0) {
     res.json(city.slice(0, req.query.limit));   
    } else if(req.query.limit > city.length) {
        res.status(400).json("query limit exceeds number of cities");
    } else {
    res.json(city);
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