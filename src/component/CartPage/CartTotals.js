import React from 'react';
import {ProductConsumer} from "../../context/context"
export  default function CartTotal(){
    return(
        <div className="container">
         <div className="row">
            <ProductConsumer>
                {
                    value=>{
                        const {clearcart,cartSubTotal,cartTax,cartTotal}=value;
                        
                        return(
                            <div className="col text-title text-center my-4">
                                <button className="btn btn-outline-danger text-capitalize mb-4" onClick={clearcart}>
                                  Clear Cart
                                </button>
                                <h3>subtotal: ${cartSubTotal}</h3>
                                <h3>tax: ${cartTax}</h3>
                                <h3>total: ${cartTotal}</h3>
                            </div>
                        )
                    }
                }
            </ProductConsumer>
         </div>

        </div>
    )
}