import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { ButtonContainer } from './styles/Button';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                { (value) => {
                    const { modalOpen, closeModal } = value;
                    const { img, price, title  } = value.modalProduct;

                    if(!modalOpen){
                        return null;
                    }
                    else{
                        return(
                            <ModalWrapper>
                                <div className="container">
                                    <div className="row">
                                        <div id="modal" className="col-10 mx-auto col-md-7 col-lg-5 text-center text-capitalize p-5">
                                            <h4>Item Added To Cart</h4>
                                            <div className="container">
                                            <img src={img} className="image-fluid" />
                                            </div>
                                            <h4> {title} </h4>
                                            <h5 className="text-muted"> ${price} </h5>   
                                            <Link to="/">
                                                <ButtonContainer onClick={ () => closeModal()}>
                                                    Continue
                                                </ButtonContainer> 
                                            </Link>
                                            <Link to="/cart">
                                                <ButtonContainer cart onClick={ () => closeModal()}>
                                                    Go To Cart
                                                </ButtonContainer>
                                            </Link>                                        
                                        </div>
                                    </div>
                                </div>
                            </ModalWrapper>
                        )

                    }
                }}
            </ProductConsumer>
        )
    }
}
export default Modal;

const ModalWrapper = styled.div `
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background:rgba(0,0,0,0.3);
    display:flex;
    align-items:center;
    justify-content: center;
    #modal{
        background-color:white;
    }
`

