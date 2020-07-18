import React from 'react';
import Hero from '../component/Hero'
import mainBc from '../image/aboutBcg.jpeg';
import Info from '../component/AboutPage/info'
export default function AboutPage(){
    return(
        <>
        <Hero img={mainBc} />
       <Info />
            <h3>HHLO from about</h3>
        </>
    );
}