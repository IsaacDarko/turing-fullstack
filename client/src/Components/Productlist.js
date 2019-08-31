import React, { Component } from 'react';
import Title from './Title';
import {ProductConsumer} from '../context';
import Product from './Product';
import { 
    Container,
    ListGroup
} from 'reactstrap';
 
class Productlist extends Component {
     

    render() {
        return (
            
            <React.Fragment>
               <Container> 
                <div className="py-5">
                    <div className="container">
                        <Title name="Turing" title="Products" />

                        
                            <div className="row">
                                <ListGroup >
                                    <div className="row">

                                        <ProductConsumer>
                                            { value =>{    
                                                return value.products.map(product =>{
                                                    return <Product key={product.product_id} product={product} /> 
                                                });                                  
                                                    
                                            }} 
                                        </ProductConsumer>
                                     
                                    </div>  
                                </ListGroup>
                            </div>
                        
                    
                    </div>                    
                </div>
              </Container> 
            </React.Fragment>
            //<Product />
        )
    }
}


export default Productlist;
