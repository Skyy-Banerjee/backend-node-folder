require('dotenv').config();
const express = require('express'); //CommonJs syntax
const dummyData = require('./dummyData');
const app = express();
//const port = 4000;

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.get('/twitter', (req, res) => {
	res.send('Hello TWITTER!');
});

app.get('/login', (req, res) => {
	res.send('<h1>Please login at some WEBSITE</h1>');
});

app.get('/youtube', (req, res) => {
	res.send('<h2>Hello there from YouTube</h2>');
});

app.get('/dummydata', (req, res) => {
	res.json(dummyData);
});

app.listen(process.env.PORT, () => {
	console.log(`Example app listening on port ${process.env.PORT}`);
});
