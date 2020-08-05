import React from 'react';
import {Link}  from 'react-router-dom'
import {ProductConsumer} from '../context/context';
import styled from 'styled-components'
export default function SideCart(){
    return(
        <ProductConsumer>
            {value=>{
                
                const {cartOpen,closeCart,cart,cartTotal}=value;
                return(
                    <CartWrapper  show={cartOpen} onclick={closeCart}>
                    <ul>
                        {
                            cart.map(item=>{
                                return(
                                    <li key={item.id} className="cart-item mb-4">
                                    <img src={`../${item.image}`} width="35px" alt={item.title} />
                                        <div className="mt-3">
                                            <h6 className="text-uppercase">{item.title}</h6>
                                            <h6 className="text-title text-capitalize">amount:-{item.count}</h6>
                                            
                                        </div>
                                         
                                    </li>
                                )
                            })
                           
                        }
                        </ul>
                         <h4 className="text-title text-capitalize">Total:-${cartTotal}</h4>
                           <div className="text-center my-5" >
                               <Link to="/cart" className="main-link">Cart Page</Link>
                           </div>
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
    overflow: scroll;
    padding:2rem;
     transform: ${props=>props.show?"translateX(0)":"translateX(100%)"};
     @media (min-width:576px){
         width:20rem;
     }
    .cart-item{
        list-style:none;
    }

`;