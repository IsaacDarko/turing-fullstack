const express = require('express');
const router = express.Router();
const db = require('../../config/connect');
const Category = require('../../models/Category');


//Get product list from database
router.get('/', (req, res) => 
    Category.findAll()
    .then(categories => {
        console.log(categories);
        res.sendStatus(200);
    })
    .catch(err => console.log(err))

);

//Posts a product to the database


module.exports = router;