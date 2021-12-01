const express = require('express');
const exphbs = require('express-handlebars');
const Game = require('./levels');
const GameApp = require('./levels')
const app = express();

const pg = require("pg");
const Pool = pg.Pool;

// enable the req.body object - to allow us to use HTML forms
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// enable the static folder...
app.use(express.static('public'));

// add more middleware to allow for templating support

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')


const pool = new Pool({
    connectionString: process.env.DATABASE_URL || 'postgresql://codex:pg123@localhost:5432/game',
    ssl: {rejectUnauthorized: false}
});

app.get('/', function (req, res) {
	res.render('index')
});
app.post('/level1', async function(req, res){
	try {
		res.render('level1')
	} catch (error) {
		console.log(error)
	}
})
app.post('/level2', async function(req, res){
	try {
		res.render('level2')
	} catch (error) {
		console.log(error)
	}
})
app.post('/challenge', async function(req, res){
	try {
		res.render('challenge')
	} catch (error) {
		console.log(error)
	}
})












const PORT = process.env.PORT || 4050;
app.listen(PORT, function () {
	console.log(`GameApp started on port ${PORT}`)
})