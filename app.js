var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const cartsRouter = require('./routes/carts');
const bookingsRouter = require('./routes/bookings');
const tripsRouter = require('./routes/trips');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/carts', cartsRouter);
app.use('/bookings', bookingsRouter);
app.use('/trips', tripsRouter);

const cors = require('cors');
app.use(cors());



module.exports = app;
