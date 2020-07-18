import React from 'react';
import Hero from '../component/Hero'
import mainBc from '../image/defaultBcg.jpeg';
import {Link} from 'react-router-dom'
export default function HomePage(){
    return(
        <>
          <Hero title="awesome gadget" max="true"  >
             <Link to="/product" className="main-link"
             
            style={{margin:'2rem'}} >Our Product</Link>
          </Hero>
       
            <h3>HHLO from Hlo from home page</h3>
        </>
    );
}