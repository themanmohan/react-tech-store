import React from 'react';
import CartItem from './CartItem';
import {ProductConsumer} from "../../context/context"
export  default function CartList(){
    return(
        <div className="container-fluid">
            {/* row */}
            <div className="row">
               <div className="col">
                  <ProductConsumer>
                      {
                          value=>{
                              const {cart,removeItem,decreament,increament} =value;
                              if(cart.length===0){
                                  return (
                                      <h1 className="text-title text-center my-4">
                                            Your Cart Is Currently Empty
                                      </h1>
                                  )
                              }
                              return(
                                  <>
                                  {cart.map(item=> (<CartItem key={item.id} CartItem={item} increament={increament}
                                  decreament={decreament} removeItem={removeItem} />))}
                                  
                                  </>
                              )
                          }
                      }
                  </ProductConsumer>
               </div>
            </div>
        </div>
    )
}   