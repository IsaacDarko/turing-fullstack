import React, { Component } from 'react';
//import { productsData } from './controllers/data';
import axios from 'axios';


const ProductContext = React.createContext();
//Provider
//Consumer

 

class ProductProvider extends Component {

    state ={
        products: [],
        detailProduct: [],
        cart: [],
        modalOpen:false,
        modalProduct: [],
        singleProduct:{
            id: null,
            name:null,
            price:null,
            discounted_price:null,
            image:null,
            image_2:null,
            thumbnail:null,
            display:null,
            inCart:false
        },       
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0
    };

    componentDidMount(){
        this.setProducts();
    }   
      

    setProducts = () =>{
    axios.get('/products')
    .then((res)=>{ 
        let temps = res.data;
        let singleItem=[];
        temps.forEach( item =>{
            singleItem = {...item, cart:false};
            temps = [...temps, singleItem];
        })
        this.setState( () => {
            return { products: temps };
            });
    }) 
     };

    getProduct = (product_id) => {
        const product = this.state.products.find( product => product.product_id === product_id );
        return product;
    }
    
    handleDetail = (product_id) =>{
        const product = this.getProduct(product_id);
        this.setState(()=> {
            return { detailProduct: product };
        });  
    };
    
    addToCart = (product_id) =>{
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getProduct(product_id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
        this.setState( ()=> {
            return { products:tempProducts, cart:[...this.state.cart, product] };
        },
        () => {this.addTotals()}
      );
    };

    openModal = (id) =>{
        const product = this.getProduct(id);
        this.setState( ()=>{
            return {modalProduct:product, modalOpen:true}
        })
    };

    closeModal = ()=>{
        this.setState( ()=> {
            return{ modalOpen:false }
        })
    };

    increment = (product_id) =>{
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find( item => item.product_id === product_id );

        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];

        product.count = product.count + 1;
        product.total = product.count * product.price;

        this.setState( ()=>{
            return{ cart:[...tempCart]}
        },
        ()=>{
             this.addTotals();
        })
    }

    decrement = (product_id) =>{
        let tempCart =[...this.state.cart];
        const selectedProduct = tempCart.find( item => item.product_id === product_id);

        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];

        product.count = product.count - 1;

        if(product.count === 0){
            this.removeItem(product_id)
        }        
        else{
            product.total = product.count * product.price;
            this.setState(()=>{
                return{ cart:[...tempCart] }
            },
            ()=>{
                this.addTotals();
            });
        }
    }

    removeItem = (product_id) =>{
        //set up all the necessary temporary variable needed.
        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart];
        //filter out item from the temporary cart using it's id
        tempCart = tempCart.filter(item => item.id !== product_id);
        //retrieve the index of the removed item
        const index = tempProducts.indexOf(this.getProduct(product_id));
        let removedProduct = tempProducts[index];
        //use the index of the removed product to reset it's incart,count and total attributes
        removedProduct.inCart = false;
        removedProduct.count = 0;
        removedProduct.total = 0;

        //return replacement values to the state
        //the cart with temporary cart & the products which is without the removed index
        this.setState(()=>{
            return{
                cart: [...tempCart],
                products: [...tempProducts]
            };
          },
            ()=>{
        //re-run the addTotals method to ensure that the total calculations are updated
                this.addTotals();
            }
        );

    };

    clearCart = ()=>{
        //reset the cart array in the state to null
            this.setState( ()=>{
                return { cart: [] };
            },
            ()=>{
        //reset the products and cartTotal arrays and replace with a new copy of the state-data
                this.setProducts();
                this.addTotals();
            }
    )}

    addTotals = () =>{
      //create a temprory var to store current value of the subtotal of all items added to the cart
        let subTotal = 0;
      //map through the cart everytime a new item is added and add their subtotals
        this.state.cart.map(item =>(subTotal+=item.total));
        const tempTax = subTotal*0.1;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subTotal + tax;
        this.setState(()=>{
            return {
                cartSubTotal: subTotal,
                cartTax: tax,
                cartTotal: total
            }
        })
    }

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
                openModal: this.openModal,
                closeModal: this.closeModal,
                increment: this.increment,
                decrement: this.decrement,
                removeItem: this.removeItem,
                clearCart: this.clearCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}


const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };