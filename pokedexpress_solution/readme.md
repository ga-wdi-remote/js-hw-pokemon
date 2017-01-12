# POKEDEXpress

## Express app for Pokemon data

![pikachu](http://orig10.deviantart.net/54d7/f/2013/265/a/b/w_by_professorlayton22-d6nd2yl.jpg)

This weekend you are going to make a full CRUD Express app for Pokemon with server-side rendered views using Handlebars! Hopefully you'll have a much better time than Pikachu.


## Setup
1. Make sure that you are on the `master` branch of your `wdi-remote-...` repo.
Then run `git pull upstream master` to pull the latest materials from the
instructors' repository. You shouldn't hit a merge conflict here, but if you do, flag down an instructor right away.

2. Run `npm install` to install all the dependencies that are already in `package.json`.


### Exercise Objectives

- gain independent practice creating an Express app with full CRUD
- gain more practice setting up an Express app with [MVC](https://www.tutorialspoint.com/mvc_framework/mvc_framework_introduction.htm) framework in mind
- work with middleware like `method-override`,  `body-parser`
- build important debugging skills by understanding errors


### Directions

- Your app's [MVC](https://www.tutorialspoint.com/mvc_framework/mvc_framework_introduction.htm) ("Models Views Controllers") folder structure has been created for you:
  - `models`: our massive Pokemon data model lives here (do not modify)
  - `views`: your Handlebars views live here
  - `controllers`:  you will code your routes in `controllers/poke_array.js`

- Run `npm install` in the pokedexpress directory. Express is already listed as a dependency for you.

### Starter Code

- All the prompts for this homework are located in `server.js` and `controllers/pokemon.js`. Simply follow the prompts as a guide and write in the files to complete the homework. The controller's CRUD functionality has been organized for you, so think about where you'll be building your routes.

- A massive collection of Pokemon data is stored inside `poke_array.js`. This data is an *array* of *objects* that is ready to export using module.exports. You don't need to modify this file. Note: this isn't 100% airtight, and some images might be broken.

- The views folder is empty. There are no rules of when to set these up, so if you'd like to pre-create views or build them as you create your routes, do your thing.

- Start simply, build the app piece by piece testing each piece along the way.

<details><summary>.. Stuck?</summary>
####SETUP
- "No module" error? Did you make sure you correctly installed and saved your dependencies in the current working directory? Double check `package.json` to see it is.

- Keep your workspace super organized and tidy. Focus on the current task _at hand_ and close _all_ tabs and files that don't pertain to this task.

- Constantly test your code. Don't wait until you've written a bunch of code to run it. WHAT are you trying to achieve, and HOW are you trying to achieve it? You should be console logging all the variables you're creating, and remember, all server-side console logs are outputted in terminal.

####ERRORS/DEBUGGING
- Use Morgan to log all requests coming into the server. Looking at it will also tell you the result of that request. Let's say I visit `localhost:3000/pokemon` on the browser and on terminal I see:

  - Example 1: `GET /pokemon 200`. This means the server received a GET request to the `/pokemon` resource, _found_ the GET request in our Pokemon controller, executed our code in the route handler function, returned a response with data and a status of 200 which means everything went fine -- deep inhale -- and the response was sent with success.

  - Example 2: `GET /pokemon 404`. This means the server received a GET request to the `/pokemon` resource, but couldn't find the resource, so it sends a response as a 404 error.

- Test your routes with Postman or cURL. They both allow you to test routes without the need of building views to visualize the data. Instead these tools talk to the server directly. Postman has a very user-friendly GUI, and cURL may have weird syntax, but cURL makes you look cool.

- "CANNOT FIND" means "based on the info/path you gave me, no such file exists". Check how you set your relative paths. Check for typos. Capitalization, extra spaces and extra characters can throw errors.

</details>

### Commits

- Let's get back into the good habit of committing our work at checkpoints in our work. After successfully coding a route, `git add`, and `git commit` with a message with which route you just completed. Wanna add more? Yea! The more, the merrier.

### Reach Goals
- On `index.hbs` display the total number of Pokemon. This number will change as you delete Pokemon.
- Make the app look nicer than just a plain html list. Use express.static('public') and integrate your css skills. Submit a screenshot of your design!
- Add a new and update route.

### Super reach goals
- Use your design skills and make your app responsive.
- Add a `/random` resource so when a user hits `localhost:3000/random`, they see a show page of a Pokemon in randomized order. Add a link to this random page on the index page.
  - super bonus: Create a button called "randomize". Clicking this button will randomize the order of Pokemon with each click.
- Add some fun jQuery animations when you click on a Pokemon. All client-side javascript files will live in the `public` directory.


## Submitting Your Work

  When you're ready to submit your work,

  1.  Add, commit, and push your code to your fork of the class repo.
  2.  File an issue on the class repo titled "Your Name -- wXXdXX".

  The issue should include:

  -   A link that points back to your fork.

  -   A 'comfort' score on how you feel about the material, from 1 (very
      uncomfortable) to 5 (very comfortable)
