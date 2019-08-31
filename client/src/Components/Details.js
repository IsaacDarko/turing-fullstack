import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './styles/Button';

 
class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                   const {product_id, name, image, price, discounted_price, description, inCart } = value.detailProduct;

                   return (
                       <div className="container py-5 ">
                            {/* Product details title */}

                                <div className="row">
                                    <div className="col-10 mx-auto text-center my-5">
                                        <h1>{name}</h1>
                                    </div>
                                </div>

                            {/* End of product details title */}

                            {/* Product details body */}

                            <div className="row">

                                {/* product details image */}
                                <div className="col-10 mx-auto col-md-6 my-3">
                                   {/*taking image1 from the backend db*/} <img src={image} className="image-fluid" alt="product" />
                                </div>


                                {/* product details text */}
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalie">

                                    {/*taking name from the backend db*/}
                                    <h2> {name} </h2>

                                    {/*taking both prices from the db*/}
                                    <del> <span>$</span>{discounted_price} </del>  <h4><span>$</span>{price} </h4>

                                    {/*taking description from the backend db*/}
                                    <p className="text-capitalie font-weight-bold mb-0 mt-3">                                        
                                        Description :
                                    </p>
                                    <p className="text-muted lead">                                        
                                      {description}
                                    </p>


                                    {/* buttons */}
                                    <div>
                                        <Link to="/">
                                            <ButtonContainer btp>
                                                Back To Products
                                            </ButtonContainer>
                                        </Link>
                                        
                                            <ButtonContainer cart 
                                            disabled={ inCart? true:false } 
                                            onClick={()=>{ 
                                                value.addToCart(product_id);
                                                value.openModal(product_id);
                                                }                                               
                                            }>
                                              { inCart? "In Cart":"Add To Cart" }  
                                            </ButtonContainer>
                                    </div>   
                                </div>
                            </div>


                       </div>
                   )
                }} 
                
            </ProductConsumer>
        )
    }
}

export default Details;
