import React from 'react'
import Title from '../Title';
import aboutBcg from '../../image/aboutBcg.jpeg';
export default function Info(){
    return(
        
            <section className="pyg-5">
               <div className="container">
                   <div className="row">
                      <div className="col-10 mx-auto col-md-6 my-3">
                        <img src={aboutBcg} className="img-fluid img-thumbnail" alt="" />
                      </div>
                      <div className="col-10 mx-auto col-md-6 my-3">
                          <Title title="about us" />
                          <p className="text-lead text-muted my-3">
                              Lorem ipsum dolor sit, amet consectetur adipisicing elit.Facere quam, ipsa
                               aperiam dolor iusto similique iure quibusdam dolore alias delectus consequuntur
                               veritatis impedit officia, illum recusandae eaque accusantium harum ducimus.
                          </p>
                          <p className="text-lead text-muted my-3">
                              Lorem ipsum dolor sit, amet consectetur adipisicing elit.Facere quam, ipsa
                               aperiam dolor iusto similique iure quibusdam dolore alias delectus consequuntur
                               veritatis impedit officia, illum recusandae eaque accusantium harum ducimus.
                          </p>
                          <button type="button" className="main-link" style={{margin:'2rem'}}> more info</button>
                      </div>
                   </div>
               </div>
            
            </section>
            
        
    )
}