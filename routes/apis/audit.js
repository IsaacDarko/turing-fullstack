const express = require('express');
const router = express.Router();
const db = require('../../config/connect');
const Audit = require('../../models/Audit');


//Get product list from database
router.get('/', (req, res) => 
    Audit.findAll()
    .then(audits => {
        console.log(audits);
        res.sendStatus(200);
    })
    .catch(err => console.log(err))

);

//Posts a product to the database


module.exports = router;