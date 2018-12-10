var express = require('express');
var bodyParser = require('body-parser');
var request = require('request')
var morgan = require('morgan')
var app = express();

//Helpers
var apiHelpers = require('./helpers/apiHelpers.js');

//Middleware
app.use(bodyParser.json());
app.use(morgan('dev'));

// Due to express, when you load the page, it doesn't make a get request to '/', it simply serves up the dist folder
app.use(express.static(__dirname + '/../client/dist'));

// Use Express Router
const movieRoutes = require('./routes/movieRoutes.js');
//Use routes
app.use('/movies', movieRoutes);


app.listen(3000, function() {
  console.log('listening on port http://localhost:3000');
});
