### Nodejs - Tons of C++ code taken from chrome's V8 engine, and it's wrappped inside JS code.

### JS alone cannot make/run a server

# import & export

```js
//script1.js
const a = 28;
const b = 29;
module.exports = { a, b };

//script2.js
const d = require('./script1');
console.log(d);
//In terminal- node script2.js
//OP: { a: 28, b: 29 }
```

# npm

//npm => playstore of Node (kinda).. Packages instead of apps
//Ex:- npm package for text-audio functionality
//npm install/i one-liner-joke

### https://www.npmjs.com/

```js
//Trying out 2 random packages..
const oneLinerJoke = require('one-liner-joke');
const figlet = require('figlet');
console.log(oneLinerJoke.getRandomJoke());
figlet('Skyy here!!', function (err, data) {
	if (err) {
		console.log('Something went wrong...');
		console.dir(err);
		return;
	}
	console.log(data);
});
```

### Express_JS

//Framework for NodeJS

//Express usecase(s) => Routing

//Routing => GET/POST/PUT/DELETE/PATCH

```js
//Express.js
const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
	res.send('Hello World 1234!'); //localhost:5000/
});

app.get('/page1', (req, res) => {
	res.send('<h1>Page 1</h1>'); //localhost:5000/page1
});

app.get('/banerjee', (req, res) => {
	res.send('<h2>Mr. Banerjee</h2>'); //localhost:5000/banerjee
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
```

### Nodemon

//npm i nodemon -g

//nodemon script(.js)

### middleware

//A function that runs before EVERY route

//If we wanna do something before the router is hit, we use middlewares.

//If middleware runs, the request is jammed! Solution?

=> next(); //A small push

```js
//Express.js
const express = require('express');
const app = express();
const port = 5000;

//2 middlewares
app.use(function (req, res, next) {
	console.log('middleware running!');
	next();
});

app.use(function (req, res, next) {
	console.log('Hello from middleware 2!');
	next();
});

app.get('/', (req, res) => {
	res.send('Hello World 1234!'); //localhost:5000/
});

app.get('/page1', (req, res) => {
	res.send('<h1>Page 1</h1>'); //localhost:5000/page1
});

app.get('/banerjee', (req, res) => {
	res.send('<h2>Dev. Banerjee</h2>'); //localhost:5000/banerjee
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
```
