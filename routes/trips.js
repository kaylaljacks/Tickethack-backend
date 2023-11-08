var express = require('express');
var router = express.Router();
const Trip = require('../models/trips');
require('../models/connection');

/* GET home page. */

     
      router.get('/', (req, res) => {
        Trip.find().then(data => {
          res.json({ allTrips: data });
        })
      });

   

      router.post('/', (req, res) => {

        const departure = req.body.departure;
        const arrival = req.body.arrival;
        const date = req.body.selectedDate;
  
        Trip.findOne({departure, arrival}).then(data => {
          res.json({ allTrips: data });
        })
      });

      
module.exports = router;


