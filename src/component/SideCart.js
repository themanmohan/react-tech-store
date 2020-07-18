import React from 'react';
import {ProductConsumer} from '../context/context';
import styled from 'styled-components'
export default function SideCart(){
    return(
        <ProductConsumer>
            {value=>{
                
                const {cartOpen,closeCart}=value;
                   console.log(closeCart)
                return(
                    <CartWrapper  show={cartOpen} onclick={closeCart}>
                        <p>cart item</p>
                    </CartWrapper>
                    
                )
                
            }}
        </ProductConsumer>
    );
}

const CartWrapper=styled.nav`
     position:fixed;
     top:60px;
     right:0;
     width:100%;
     height:100%;
     background:var(--mainGray);
     border-left:3px solid  var(--primaryColor);
     z-index:1;
     transform: ${props=>props.show?"translateX(0)":"translateX(100%)"};
     @media (min-width:576px){
         width:20rem;
     }

`;