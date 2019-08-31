import axios from 'axios';

export const productsData =
     axios.get('/products')
    .then(res => { 
        return res.products;
    })


/*export const refinedProducts = {
    products : {productsData}
};*/