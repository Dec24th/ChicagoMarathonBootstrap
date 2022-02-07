const express = require('express');
const debug = require('debug')('app');
const morgan = require('morgan');

const PORT = process.env.PORT || 5001

const app = express()

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    res.render('index')
})

app.listen(PORT, () => {
    debug(`Listening on port ${PORT}`)
})