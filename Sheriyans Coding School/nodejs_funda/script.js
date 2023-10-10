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
