const express = require('express');
const router = express.Router();
const db = require('../../config/connect');
const Shipping = require('../../models/Shipping');


//Get product list from database
router.get('/', (req, res) => 
    Shipping.findAll()
    .then(shipments => {
        console.log(shipments);
        res.sendStatus(200);
    })
    .catch(err => console.log(err))

);

//Posts a product to the database


module.exports = router;