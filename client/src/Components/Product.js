import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { 
    Badge
} from 'reactstrap';
 
class Product extends Component {
 
    render() {

       const { product_id, name, image, price, discounted_price, inCart  } = this.props.product;

        return (
                <ProductConsumer>
                    { (value) => (
                        <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                
                <div className="card">

                    <div className="img-container p-5" onClick={ () =>value.handleDetail(product_id)}>
                            <Link to="/details">
                                <img src={image} alt="product" className="card-img-top" />
                            </Link>


                            <button className="cart-btn" 
                                disabled={ inCart ? true : false} 
                                onClick={() => {
                                        value.addToCart(product_id);
                                        value.openModal(product_id);
                                     }}
                                >
                                { inCart? (
                                    <p className="text-capitalize mb-0" disabled>
                                        {"in cart "} 
                                        
                                    </p>
                                    ) : (
                                <i className="fas fa-cart-plus" />
                                )}
                    
                            </button> 

                    </div>


                 

                    {/* Cart Footer */}
                    <div className="card-footer d-flex justify-content-between">
                        <p className="align-self-center mb-0">
                            {name}
                        </p>
                        <h5 className="font-italic mb0">
                            <span className="mr-1"> <del>$ {price}</del> ${discounted_price}</span> 
                        </h5>
                    </div>

                </div>                  
        </ProductWrapper>

                    )}
                    
            </ProductConsumer>
            
        )
    }
}

Product.propTypes = {
    product: PropTypes.shape({
        product_id: PropTypes.number ,
        img: PropTypes.string ,
        title: PropTypes.string ,
        price: PropTypes.number,
        inCart: PropTypes.bool 
    }).isRequired
}

export default Product;

const ProductWrapper = styled.div`
    .card{
        border-color:transparent;
        transition: all 1s linear;
    }
    .card-footer{
        background:transparent;
        border-top:transparent;
        transition: all 1s linear
    }

    &:hover {
        .card{
            border:0.04rem solid rgba(0,0,0,0.2);
            box-shadow:2px 2px 5px 0px rgba(0,0,0,0.2);;
        }

        .card-footer{
            background: rgba(180,180,180,0.5);
        }
    }
    .img-container{
        position:relative;
        overflow: hidden;
    }

    .card-img-top{
        transition: all 0.5s linear;
    }

    .img-container:hover .card-img-top{
        transform: scale(1.2);
    }
     .cart-btn {
         position:absolute;
         bottom:0;
         right:0;
         padding: 0.2rem 0.4rem;
         background: #2bdded;
         border:none; 
         color:white;
         border-radius: 0.5rem 0 0 0;
         transform: translate(100%, 100%);
         transition: all 0.5s linear;
     }

     .img-container:hover .cart-btn {
         transform: translate(0, 0);
     }

     .cart-btn:hover {
         color: #a10aff;
         cursor:pointer;
     }
`