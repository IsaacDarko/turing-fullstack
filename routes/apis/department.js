const express = require('express');
const router = express.Router();
const db = require('../../config/connect');
const Department = require('../../models/Department');


//Get product list from database
router.get('/', (req, res) => 
    Department.findAll()
    .then(departments => {
        console.log(departments);
        res.sendStatus(200);
    })
    .catch(err => console.log(err))

);

//Posts a product to the database


module.exports = router;