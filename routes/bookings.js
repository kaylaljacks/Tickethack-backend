var express = require('express');
var router = express.Router();
const Booking = require('../models/bookings');
require('../models/connection');

/* GET home page. */

router.post('/', (req, res) => {
    const newBooking = new Booking({
      departure: req.body.departure,
      arrival: req.body.arrival,
    });
  
    newBooking.save().then(() => {
      Booking.find().then(data => {
        res.json({ allBooking: data });
      })
    });
  });
  
  router.get('/', (req, res) => {
    Booking.find().then(data => {
      res.json({ allBooking: data });
    })
  });
  


module.exports = router;
