var express = require('express');
var app = express();
var router = require('./routes/cities');

app.use(express.static('public'));

app.use('/', router);
app.listen(process.env.PORT);