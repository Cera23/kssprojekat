const express = require ('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
var path = require('path');


//Rute
var routes = require('./routes/index');


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });
  
  module.exports = app;