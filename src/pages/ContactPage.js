import React from 'react';
import contactBcg from '../image/contactBcg.jpeg';
import Hero from '../component/Hero';
import Contact from '../component/contactPage/Contact'
export default function ContactPage(){
    return(
        <>
            <Hero img={contactBcg} />
            <Contact />
        </>
    );
}