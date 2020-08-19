import React from 'react';
import Hero  from  '../component/Hero';
import cartBcg  from  '../image/storeBcg.jpeg'
import CartSection from '../component/CartPage'
export default function CartPage(props){

    return(
        <>
        <Hero  img={cartBcg} />
           <CartSection history={props.history} />
        </>
    );
}