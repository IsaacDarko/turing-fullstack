const express = require('express');
const router = express.Router();
const db = require('../../config/connect');
const Order = require('../../models/Order');


//Get product list from database
router.get('/', (req, res) => 
    Order.findAll()
    .then(orders => {
        console.log(orders);
        res.sendStatus(200);
    })
    .catch(err => console.log(err))

);

//Posts a product to the database


module.exports = router;