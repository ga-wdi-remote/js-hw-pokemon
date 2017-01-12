//***************************
// REQUIREMENTS
//***************************
// Set up your express dependency here:
var express = require("express");
// Set express Router to a variable called router:
var router = express.Router();
// Let's export this router file at the bottom of the page:
// (Scroll to bottom to Exports)

// Require the poke_array.js file here from models.
// Save it to a variable called data:
var data = require('../models/poke_array.js');


//***************************
// READ
//***************************
// Note: All the routes below can be accessed at `localhost:3000/pokemon` + `resource`
// Make a GET route '/' that will render an index page of all pokemon images
router.get('/', function(req, res){
	res.render("pokemon/index.hbs", {
		pokemon: data
	});
});

// Make a GET route '/index/:index' that will render the Pokemon's show page at that :index
//
// Example: a user goes to 'localhost:3000/pokemon/index/0' in the browser and data for Bulbasaur (the pokemon at index 0) will be displayed.

router.get('/:id', function(req, res){

	//grab the pirate by id
	var showPokemon = data[req.params.id];

	res.render("pokemon/show.hbs", {
		pokemon: showPokemon
	});
});



//***************************
// DELETE
//***************************
//make a DELETE route '/:index' that will delete the Pokemon at this index.
router.delete('/:id', function(req, res){
    data.splice(req.params.id, 1); //remove the item from the array
    res.redirect('/pokemon');  //redirect back to index route
});


//***************************
// EXPORTS
//***************************
// use module.exports to export router:
// this makes the scripts on this page accessible by other files that "require" this file. Without exporting, the code in here just sits in here, alone.
module.exports = router;
