'use strict';
require('dotenv').config();
const PORT = process.env.PORT;

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect(process.env.MONGODB_URI);

// const cors =require('cors');

const app = module.exports = require('express')();

app.use('*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Credentials',  true);
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, HEAD');
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
    next();
    })

app.use(require('../routes/noteRouter'));

app.all('*', (req, res, next) => {
     next({statusCode:404, message:'route not found'});
    })


app.use((err, req, res, next ) => {
    console.log(err);
    res.status(err.statusCode||500).send(err.message||'server error')
})

app.listen(PORT, console.log(`server on ${PORT}`));