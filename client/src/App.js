import React, { Component }  from 'react';
import {Switch, Route} from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './Components/Navbar';
import Productlist from './Components/Productlist';
import Cart from './Components/Cart';
import Details from './Components/Details';
import Default from './Components/Default';

class App extends Component {
  render(){

      return (
        <div className="App">
          <Navigation />
          <Switch>
            <Route exact path="/" component={Productlist} />
            <Route path="/details" component={Details} />
            <Route path="/cart" component={Cart} />
            <Route component={Default} />
          </Switch>
        </div>
       
      );
  }
}

export default App;
