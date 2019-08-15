const express = require('express');
const router = express.Router();
const db = require('../../config/connect');
const Customer = require('../../models/Customer');


//Get product list from database
router.get('/', (req, res) => 
    Customer.findAll()
    .then(customers => {
        console.log(customers);
        res.sendStatus(200);
    })
    .catch(err => console.log(err))

);

//Posts a product to the database


module.exports = router;