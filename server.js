//dependencies
var express = require("express");

var app = express();

var bodyParser = require('body-parser');

var path = require('path');

//set the port of our application
var PORT = process.env.PORT || 8080;

//public directory
app.use(express.static(path.join(__dirname, './app/public')));

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

//routes
require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);

// Start listening on PORT
app.listen(PORT, function() {
  console.log('Friend Finder app is listening on PORT: ' + PORT);
});