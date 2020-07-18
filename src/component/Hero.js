import React from 'react';
import styled from 'styled-components';
import mainBc from '../image/mainBcg.jpeg';
export default function Hero({img,title,max,children}){
    return(
        <HeroWrapper max={max} img={img}>
          <div className="banner">
           <h1 className="title">{title}</h1>
           {children}
          </div>
        </HeroWrapper>
    );
}

const HeroWrapper=styled.div` 
   text-align:center;
   display:flex;
   align-items:center;
   justify-content:center;
   width:100%;
   min-height:${props=>props.max?'100vh':'60vh'};
   color:var(--mainWhite);
   background:linear-gradient(var(--primaryRGBA),var(--primaryRGBA)), url(${props=>props.img}) center/cover no-repeat;
    .title{
        padding-top:2rem;
        font-size:3.4rem;
        text-shadow:4px 4px 2px rgba(0,0,0,1);
        text-transform:capitalize
    }
`;

Hero.defaultProps={
  img:mainBc
}