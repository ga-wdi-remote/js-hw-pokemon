//***************************
// REQUIREMENTS
//***************************
// Set up your express dependencies here:
var express = require("express");
var app = express();
var logger = require("morgan");
var bodyParser = require("body-parser");
var hbs = require('hbs');
//include the method-override package
var methodOverride = require('method-override');


//***************************
// MIDDLEWARE
//***************************
//set up your middleware and view engine here
//this is for morgan
app.use(logger("dev"));
//these are for bodyParser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
//this is for public static files
app.use(express.static('public'));
//use methodOverride.
app.use(methodOverride('_method'));

app.set("view engine", "hbs");
app.set('views', './views');


//***************************
// CONTROLLERS
//***************************
//set up your controller for the `/pokemon` resource
//ex: var pokemonController = require('???')
var pokemonController = require("./controllers/pokemon.js");
app.use('/pokemon', pokemonController);


//***************************
// LISTENER
//***************************
// Add a listener for port 3000:
app.listen(3000, function(req, res){
  console.log("**********************");
	console.log("listening on port 3000");
  console.log("**********************");
});
