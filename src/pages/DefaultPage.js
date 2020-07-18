import React from 'react';
import Hero from '../component/Hero'
import mainBc from '../image/defaultBcg.jpeg';
import {Link} from 'react-router-dom'
export default function DfaultPage(){
    return(
       <Hero img={mainBc} max={true} title="4O4">
       <h2>Page Not Found</h2>
            <Link to="/" className="main-link"
             
            style={{margin:'2rem'}} >Back To home</Link>
       </Hero>
    );
}