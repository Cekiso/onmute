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

app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')


const pool = new Pool({
    connectionString: process.env.DATABASE_URL || 'postgresql://nkully:nkully@localhost:5432/game',
    ssl: { rejectUnauthorized: false }
});
const gaming = Game(pool);


app.get('/', async function(req, res) {
    res.render('index')

});
app.post('/level1', async function(req, res) {



    try {
        res.render('level1')

    } catch (error) {
        console.log(error)
    }
})
app.post('/level2', async function(req, res) {
    try {
        res.render('level2')
    } catch (error) {
        console.log(error)
    }
})
app.post('/level3', async function(req, res) {
        try {
            res.render('level3')
        } catch (error) {
            console.log(error)
        }
    })
    // app.post('1000/challenge', async function(req, res) {
    //     try {
    //         res.render('challenge')
    //     } catch (error) {
    //         console.log(error)
    //     }
    // })

app.post('/submit/sign/:username', async function(req, res) {
    try {
        const username = req.params.username;

        await pool.query(`update player set challenge_id = challenge_id + 1  where player_name = $1`, [username])
    } catch (error) {

    }


})


app.get('/challenge/:username', async function(req, res) {

    try {
        const username = req.params.username;
        const sql = `select challenge_name from player join challenge on challenge.id = player.challenge_id where player_name = $1`

        // ? how do I execute my select query?

        var result = await pool.query(`select challenge_name from player join challenge on challenge.id = player.challenge_id where player_name = $1`, [username])

        var challenge = result.rows[0].challenge_name;
        res.json({
            challenge
        });
    } catch (error) {

    }



})



const PORT = process.env.PORT || 4050;
app.listen(PORT, function() {
    console.log(`GameApp started on port $ { PORT }`)
})