import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.png';
import {
    Collapse,
    NavbarToggler,
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
import styled from 'styled-components';
import {ButtonContainer} from './styles/Button';

export default class Navigation extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
      render() {
        return (
            <Navbar color="dark" className="navbar navbar-expand-sm navbar-dark">
              <NavbarBrand href="/">
                <img id="brand" src={logo} alt="Turing Store" />
              </NavbarBrand>

              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>

              <Nav className="ml-5 align-items-center" navbar>
                    <NavItem>
                        <Link to="/catalogue" className="nav-link">                                    
                            Catalogue     
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/shipping-regions" className="nav-link">                                    
                            Shipping Regions     
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/special-offers" className="nav-link">                                    
                            Special Offers     
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/privacy-policy" className="nav-link">                                    
                            Privacy Policy     
                        </Link>
                    </NavItem>

                   
                </Nav>

               
                <Nav className="ml-auto" navbar>

                   <Link to="/cart" className="ml-auto"> 
                        <ButtonContainer>
                          <span className="mr-2">
                              <i className="fas fa-cart-plus" />
                            </span>
                               Cart
                        </ButtonContainer>
                    </Link>    

                  
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      Sign In
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>
                        Login
                      </DropdownItem>
                      <DropdownItem>
                        Register
                      </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>
                        Admin
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>
              </Collapse>
            </Navbar>
          
        );
      }
}
