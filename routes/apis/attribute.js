const express = require('express');
const router = express.Router();
const db = require('../../config/connect');
const Attribute = require('../../models/Attribute');


//Get product list from database
router.get('/', (req, res) => 
    Attribute.findAll()
    .then(attributes => {
        console.log(attributes);
        res.sendStatus(200);
    })
    .catch(err => console.log(err))

);

//Posts a product to the database


module.exports = router;