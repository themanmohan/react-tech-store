import React from 'react';
import {FaBars,FaCartPlus} from 'react-icons/fa';
import {ProductConsumer} from '../context/context';
import logo from '../image/logo.svg';
import styled from 'styled-components';
export default function Navbar(){
    return(
        
      <ProductConsumer>
          {value=>{
              const {cartItem,handleSidebar,handleCart}=value
              return <NavWrapper>
              <div className="nav-center">
                  <FaBars className="nav-icon" onClick={handleSidebar} />
                  <img src={logo}  alt="logo"/>
                  <div className="nav-cart">
                   <FaCartPlus className="nav-icon" onClick={handleCart} />
                  <div className="cart-items">{cartItem}</div>
                  </div>
                  </div>
              </NavWrapper>
          }}
      </ProductConsumer>
    );
}

const NavWrapper = styled.nav`
   position:-webkit-sticky;
   position:sticky;
   top:0;
   width:100%;
   padding:1rem 3.5rem;
   z-index:1;
   background: var(--mainGray);
   border-bottom:3px solid var(--primaryColor);
   .nav-center{
       display:flex;
       align-items:center;
       justify-content:space-between;
       max-width:1170px;
       margin:0 auto;

   }

   .nav-icon{
       font-size:1.5rem;
       cursor: pointer;
   }
   .nav-cart{
       position:relative
   }
    .cart-items{
        position:absolute;
        top:-8px;
        right:--8px;
        background: var(--primaryColor);
        font-size:0.85rem;
        color:var(--mainWhite);
        padding:0 5px;
        border-radius:50%


    }
`;
