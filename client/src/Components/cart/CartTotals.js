import React from 'react';
import {Link} from 'react-router-dom';

export default function CartTotals({value}) {
    const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
    return (

        <React.Fragment>
            <div className="container py-5">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">

                        <Link to="/">
                            <button className="btn btn-outline-danger text-uppercase mb-3 px-5" type="button"
                            onClick={()=>{ clearCart() }}
                            >
                                clear cart
                            </button>
                        </Link>

                        <h5>
                            <span className="text-title"> Sub-Total:  </span>
                            <strong>  ${cartSubTotal}</strong>
                        </h5>

                        <h5>
                            <span className="text-title"> Tax:  </span>
                            <strong>  ${cartTax}</strong>                           
                        </h5>

                        <h5>
                            <span className="text-title"> Total:  </span>
                            <strong>  ${cartTotal}</strong>
                        </h5>

                    </div>

                </div>
            </div>
        </React.Fragment>
    )
}
