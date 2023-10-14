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
	throw Error('Something went wrong!')
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
