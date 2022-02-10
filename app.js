const express = require('express');
const debug = require('debug')('app');
const morgan = require('morgan');
const datas = require('./data/data.json');
const coaches = require('./data/coaches.json');
const res = require('express/lib/response');

const PORT = process.env.PORT || 5001

const app = express()

app.use(express.static(__dirname + '/public'));

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    res.render('index', { title: "Homepage | NYC MARATHON 2022" , datas} )
})

app.get('/register', (req, res) => {
    res.render('register', { title22: "Registration | NYC Marathon 2022", datas } )
})

app.get('/coaching', (req, res) => {
    res.render('coaching', {coaches})
})

app.listen(PORT, () => {
    debug(`Listening on port ${PORT}`)
    console.log(`listening on port ${PORT}`)
})