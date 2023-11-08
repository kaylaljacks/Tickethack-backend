var express = require('express');
var router = express.Router();
const Cart = require('../models/carts');
require('../models/connection');

/* GET home page. */
router.post('/', (req, res) => {
  const newCart = new Cart({
      departure: req.body.departure,
      arrival: req.body.arrival,
      date: req.body.date,
      price: req.body.price,
  });

  newCart.save().then(() => {
    Cart.find().then(data => {
      res.json({ allCarts: data });
    })
  });
});

router.get('/', (req, res) => {
  Cart.find().then(data => {
    res.json({ allCarts: data });
  })
});

router.delete('/all', (req, res) => {
  Cart.deleteMany().then(() => {
    Cart.find().then(data => {
      res.json({ allCarts: data });
    })
  });
});
  
router.delete('/:id', (req, res) => {
  Cart.deleteOne({_id: req.params.id}).then(() => {
    Cart.find().then(data => {
      res.json({ allCarts: data });
    })
  });
});
  
    

  

module.exports = router;
