const express = require('express');
const path = require('path');
const cors = require('cors');
const  exhandle = require('express-handlebars');//testing backend api performance with a view engine for dev purposes
const bodyParser = require('body-parser')
//end of declarations of dependencies

//initializing app
const app = express(); 

//including routes directories and storing them inside constants
const product = require('./routes/apis/product');
const customer = require('./routes/apis/customer');
const department = require('./routes/apis/department');
const shipping = require('./routes/apis/shipping');
const category = require('./routes/apis/category');
const attribute = require('./routes/apis/attribute');
const attribute_value = require('./routes/apis/attribute_value');
const audit = require('./routes/apis/audit');
const order = require('./routes/apis/order');
const order_details = require('./routes/apis/order_details');
const product_category = require('./routes/apis/product_category');
const product_attribute = require('./routes/apis/product_attribute');
const shipping_region = require('./routes/apis/shipping_region');
const shopping_cart = require('./routes/apis/shopping_cart');
const tax = require('./routes/apis/tax');
const review = require('./routes/apis/review');
const user = require('./routes/apis/user');
const auth = require('./routes/apis/auth');


//Setting up DB connection
const db = require('./config/connect');

db
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

//homepage route
app.get('/', (req, res) => res.send('INDEX'));

//setting up middleware
app.engine('handlebars', exhandle({defaulLayout: 'main'}));
app.set('view engine', 'handlebars');

//body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));


//serving up static files(assets/images)
app.use(express.static('assets/product-images'));

//setting up routes(apis)
app.use('/products', product);
app.use('/customer', customer);
app.use('/department', department);
app.use('/shipping', shipping);
app.use('/category', category);
app.use('/attribute', attribute);
app.use('/attribute_value', attribute_value);
app.use('/audit', audit);
app.use('/order', order);
app.use('/order_details', order_details);
app.use('/product_categories', product_category);
app.use('/product_attributes', product_attribute);
app.use('/shipping_regions', shipping_region);
app.use('/shopping_cart', shopping_cart);
app.use('/tax', tax);
app.use('/reviews', review);
app.use('/user', user);
app.use('/auth', auth);



const port = process.env.PORT || 8000;
app.listen(port, ()=>console.log(`Server is now listening in on ${port}`));