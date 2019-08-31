const express = require('express');
const router = express.Router();
const db = require('../../config/connect');
const Product = require('../../models/Product');
const auth = require('../../middleware/auth');


//@Route        POST api/product/add
//@description  Retrives entire product list from database
//@access       Access is public
router.get('/', async function  (req, res) { 
    let products = await Product.findAll();
    res.status(200).json(products);
   
});



//@Route        POST api/product/add
//@description  Saves new products to the database (admins)
//@access       Access is private
router.post('/add', auth, ( req, res ) => {
    // destructuring data passed in through the request-body and assigning them to variables
    const { prod_name, prod_desc, price, disc_price, img, img_two, thumbnail } = req.body;

    //a little backend validation to ensure all required data was submitted
    if ( !prod_name || !prod_desc || !price || !disc_price ) {
        return res.status(400).json({msg: 'Please fill in all the required fields'});
    };
    
//if no user is found with the same email then the submitted values are stored in a newUser variable which is a new instance of the User model
            const newProduct = new Product({
                name: prod_name,
                description: prod_desc,
                        price,
                discounted_price: disc_price,
                image: img,
                image_2: img_two,
                thumbnail: thumbnail,
                
            });

            //Store new product in database
            newProduct.save()             
            .then(product=>{
                res.json({product});
            });
                      
})

module.exports = router;