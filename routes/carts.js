var express = require('express');
var router = express.Router();
const carts = require('../models/cart');


/* GET home page. */
router.get('/carts', function(req, res, next) {
    const carts = new cart({
      departure: req.body.departure,
      arrival: req.body.arrival,
      date: req.body.date,
      price: req.body.price,
   });
    carts.save().then(
      () => {
        res.status(201).json({
          message: 'Post saved successfully!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  });

  
  router.put('/carts', (req, res, next) => {
    const carts = new cart({
      departure: req.body.departure,
      arrival: req.body.arrival,
      date: req.body.date,
      price: req.body.price,
    });
  })
  
  router.delete('/carts, (req, res, next) => {
    Thing.deleteOne({_id: req.params.id}).then(
      () => {
        res.status(200).json({
          message: 'Deleted!'
        });
      })
  
    
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
    })

  

module.exports = router;
