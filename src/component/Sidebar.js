import React from 'react';
import styled from 'styled-components';
import  {Link } from 'react-router-dom'
import {ProductConsumer} from '../context/context';
export default function Sidebar(){
    return(
        
        <ProductConsumer>
         {value=>{
             const {links,handleSidebar,sideBarOpen}=value;
             return(
                 <SideWrapper show={sideBarOpen}>
                  <ul>
                      {links.map(data=>{
                          return <li key={data.id}>
                              <Link to={data.path} className="sidebar-link" onClick={handleSidebar} >{data.text}</Link>
                          </li>
                      })}
                  </ul>
                  
                 </SideWrapper>
             )
         }}
            </ProductConsumer>
        
    );
}

const SideWrapper = styled.nav`
    position:fixed;
    top:61px;
    left:0px;
    width:100%;
    z-index:1;
    height:100%;
    background: var(--mainGray);
    border-right:3px solid var(--primaryColor);
     transform: ${props=>props.show?"translateX(0)":"translateX(-100%)"};
     @media (min-width:576px){
         width:20rem;
     }
    ul{
        list-style-type:none;
        padding:0 !important
    }

    .sidebar-link{
        display:block;
        font-size:1.5rem;
        text-transform:capitalize;
        color:var(--mainBlack);
        padding:0.5rem 1.5rem;
        transition: var(--mainTransition);
    }
    .sidebar-link:hover{
        background: var(--primaryColor);
        color:var(--mainWhite);
        padding:0.5rem 1.5rem 0.5rem 2.5rem;
        text-decoration:none;
    }
`;
