const express = require('express');
const router = express.Router();
const db = require('../../config/connect');
const Tax = require('../../models/Tax');


//Get product list from database
router.get('/', (req, res) => 
    Tax.findAll()
    .then(tax => {
        console.log(tax);
        res.sendStatus(200);
    })
    .catch(err => console.log(err))

);

//Posts a product to the database


module.exports = router;