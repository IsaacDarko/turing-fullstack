import React, { Component } from 'react'
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import { ProductConsumer } from '../../context';
import CartList from './CartList';
import CartTotals from './CartTotals';

export default class Cart extends Component {
    render() {
        return (
            <ProductConsumer>
                { value =>{
                    const { cart } = value;
                    if(cart.length > 0){
                        return(

                            <React.Fragment>
                                <section>
                                    <Title name="Your" title="Cart"/> 
                                    <CartColumns />
                                    <CartList value={value} />  
                                    <CartTotals value={value} />         
                                </section>
                            </React.Fragment>
                        );
                    }
                    else{
                        return(
                            <React.Fragment>
                                <EmptyCart />
                            </React.Fragment>
                        );
                    }
                }}
                    
            </ProductConsumer>
            
            
        )
    }
}
