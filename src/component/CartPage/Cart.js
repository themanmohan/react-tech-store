import React from 'react';
import  Titile from '../Title';
import CartColumns from  './CartColumns';
import CartList from './CartList';
import CartTotals from  './CartTotals'
export  default function Cart(){
    return(
        <section className="py-5">
        <div className="container">
         <Titile title="Your Cart Item" center="true"/>
        </div>
        {/* CartColumns */}
        <CartColumns/>
        {/* CartList */}
        <CartList/>
        {/* CartTotals */}
        <CartTotals/>
        </section>
    )
}