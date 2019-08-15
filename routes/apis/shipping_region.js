const express = require('express');
const router = express.Router();
const db = require('../../config/connect');
const Shipping_region = require('../../models/Shipping_region');


//Get product list from database
router.get('/', (req, res) => 
    Shipping_region.findAll()
    .then(shipping_regions => {
        console.log(shipping_regions);
        res.sendStatus(200);
    })
    .catch(err => console.log(err))

);

//Posts a product to the database


module.exports = router;