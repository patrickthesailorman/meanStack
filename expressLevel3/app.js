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

app.get('/cities/:name', function(req, res) {
    var description = cities[req.params.name];
    res.json(description);
});

app.listen(process.env.PORT);