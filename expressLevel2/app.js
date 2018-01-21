var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/cities', function(req, res) {
    var cities = ['New York', 'Boston', 'San Francisco', 'Seattle'];
    res.json(cities);
});

app.listen(process.env.PORT);