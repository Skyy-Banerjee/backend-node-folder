### Part 2: Express JS

# Intro

//Express => Using SERVER features
//Node can run without Express but not the other way around.
//Express at the end of the day, uses the http code, writing http code with Vanilla Node is tough and cumbersome.

# Routes

# middleware

# Request and Response

//Request=> Information/Details about me! (device location, device type, etc.)
//Response=> Controls which help us sending response from server.
//Next()=> A push, so that our request moves to next executable thing/route

# Route Parameters

// facebook.com/skyy_210 or /soumadip
// We keep the common part stable, changing the changeble parts of the route. AKA Dynamic Routes
// profile/:username

```js
//Express.js
const express = require('express');
const app = express();
const port = 5001;

//2 middlewares
app.use(function (req, res, next) {
	console.log('middleware running!');
	next();
});

app.use(function (req, res, next) {
	console.log('Hello from middleware 2!');
	next();
});

//Configuring EJS
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	res.send('Hello World 1234!'); //localhost:5001/
});

app.get('/page1', (req, res) => {
	res.send('<h1>Page 1</h1>'); //localhost:5001/page1
});

app.get('/banerjee', (req, res) => {
	res.send('<h2>Dev. Banerjee</h2>'); //localhost:5001/banerjee
});

app.get('/profile', (req, res) => {
	res.send('<h2>Hello  from PROFILE</h2>'); //localhost:5001/profile/
});

app.get('/profile/:username', (req, res) => {
	res.send(`<h1>Hello  from ${req.params.username}!!!</h1>`); //localhost:5001/profile/'dynamic params'
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
```

### Template Engines

//ejs=> Html with superpowers

1. npm install ejs.
2. configure ejs => app.set("view engine", "ejs");
3. A folder named 'views' (without typos).
4. make ejs files in that folder.
5. Render them instead of sending.
6. While rendering, we must make sure that we write the name of a file inside the 'views' folder.
7. '.ejs' extension isn't necessary in the render function.

### Static files

//setting up images, stylesheets and frontend javascript.

1. Create a folder called 'public'.
2. Creaye 3 folders inside it named images, stylesheets and javascript.
3. Configure the express static in index/script.js.
4. Understand the path.

### Error handling with Express_JS

# https://expressjs.com/en/guide/error-handling.html

```js
//Express.js
//Server code
const express = require('express');
const app = express();
const port = 5001;

//Configuring EJS
app.set('view engine', 'ejs');

//Static files
app.use(express.static('./public'));

app.get('/', (req, res) => {
	res.render('index', { age: 12 }); //localhost:5001/
});
app.get('/contact', (req, res) => {
	res.render('contact', { name: 'Soumadip' }); //localhost:5001/contact
});

//Err. handling with Express_JS
app.get('/error', (req, res) => {
	throw Error('Something went wrong!');
});

app.use(function errorHandler(err, req, res, next) {
	if (res.headersSent) {
		return next(err);
	}
	res.status(500);
	res.render('error', { error: err });
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
```
