const express = require('express');
const router = express.Router();
const db = require('../../config/connect');
const Product = require('../../models/Product');


//Get product list from database
router.get('/', (req, res) => 
    Product.findAll()
    .then(products => {
        res.json({
            data:products
        });
        
    })
    .catch(err => console.log(err))

);

//Posts a product to the database


module.exports = router;