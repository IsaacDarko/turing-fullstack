import React, { Component }  from 'react';
import {Switch, Route} from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './Components/Navbar';
import Productlist from './Components/Productlist';
import Product from './Components/Product';
import Cart from './Components/cart';
import Details from './Components/Details';
import Modal from './Components/modal';
import Default from './Components/Default';
import Catalogue from './Components/pages/Catalogue';
import ShippingRegions from './Components/pages/ShippingRegions';
import PrivacyPolicy from './Components/pages/PrivacyPolicy';
import SpecialOffers from './Components/pages/SpecialOffers';
import Login from './Components/Login';
 

class App extends Component {
  render(){

      return (
        
        <React.Fragment>
          <div className="App">
            <Navigation />
              <Switch>
                <Route exact path="/" component={Productlist} />
                <Route path="/details" component={Details} />
                <Route path="/products" component={Product} />
                <Route path="/cart" component={Cart} />
                <Route path="/catalogue" component={Catalogue} />
                <Route path="/shipping-regions" component={ShippingRegions} />
                <Route path="/special-offers" component={SpecialOffers} />
                <Route path="/privacy-policy" component={PrivacyPolicy} />
                <Route path="/login" component={Login} />
                <Route component={Default} />
              </Switch>
              <Modal />
          </div>
        </React.Fragment>
       
       
      );
  }
}

export default App;
