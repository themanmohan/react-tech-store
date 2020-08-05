import React from 'react';
import styled from 'styled-components'
import {ProductConsumer} from '../context/context'
export default function Footer(){
    return(
        <ProductConsumer>
            {value=>{
                return(
            <FooterWrapper>
            <div className="container py-3">
                <div className="row">
                     <div className="col-md-6">
                         <p className="text-capitalize">
                            copyright &copy; Tech Store {new Date().getFullYear()}.
                            all right Reserved
                         </p>
                     </div>
                     <div className="col-md-6 d-flex align-item-center justify-content-around">
                         {value.social.map(data=><a href={data.url} key={data.id}>{data.icon}</a>)}
                     </div>
                </div>
            </div>
        </FooterWrapper>
                )
            }}
        </ProductConsumer>
       
    )
}
const FooterWrapper= styled.footer`
    background:var(--darkGray);
    color:white;
    .icon{
        font-size:1.5rem;
        color:var(--mainWhite);
        transition:var(--mainTransition);
    }
    .icon:hover{
        color:var(--primaryColor)
    }
`;