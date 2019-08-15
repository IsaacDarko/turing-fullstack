const express = require('express');
const router = express.Router();
const db = require('../../config/connect');
const Shopping_cart = require('../../models/Shopping_cart');


//Get product list from database
router.get('/', (req, res) => 
    Shopping_cart.findAll()
    .then(shopping_cart => {
        console.log(shopping_cart);
        res.sendStatus(200);
    })
    .catch(err => console.log(err))

);

//Posts a product to the database


module.exports = router;