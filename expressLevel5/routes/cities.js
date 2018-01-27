var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({ extend: false });

var cities = {
    'New York': 'New York',
    'Boston': "Massachusetts", 
    'San Francisco': 'California', 
    'Seattle': 'Washington', 
    'Providence': 'Rhode Island'
    };
   
  

var router = express.Router();
router.route('/')

    .get(function(req, res) {
    var city = Object.keys(cities);
    if(req.query.limit > 0) {
     res.json(city.slice(0, req.query.limit));   
    } else if(req.query.limit > city.length) {
        res.status(400).json("query limit exceeds number of cities");
    } else {
    res.json(city);
    }
})
    .post(parseUrlencoded, function (req, res) {
   if(req.body.state.length > 2 && req.body.name.length > 4) {
    var city = createCity(req.body.name, req.body.state);
    res.status(201).json(city);
     } else {
        res.status(400).json("Invalid City");
     }
});

router.route('/:name')
   .all(function(request, response, next) {
  request.cityName = parseCityName(request.params.name);
  })

    .get(function(req, res) {
      var cityName = parseCityName(req.params.name);
      console.log(cityName);
      var cityInfo = cities[cityName];
    if(!cityInfo) {
       res.status(404).json("No Data found for " + req.params.name); 
    } else {
      res.json(cityInfo);
    }
  })

    .delete(function (req, res) {
      if(cities[req.cityName]) {
        delete cities[req.cityName];
        res.sendStatus(200);
      } else {
        res.sendStatus(404);
      }
    }); 
    
    

function parseCityName(name) {
     var splitName = name.toLowerCase().split(' ');
   for (var i = 0; i < splitName.length; i++) {
       splitName[i] = splitName[i].charAt(0).toUpperCase() + splitName[i].substring(1);     
   }
   var parsedName = splitName.join(' '); 

  return parsedName;
}

var createCity = function(name, state){
  cities[name] = state;
  return name; 
};

module.exports = router;