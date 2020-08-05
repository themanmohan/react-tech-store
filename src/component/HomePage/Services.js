import React, { Component }  from 'react';
import styled from 'styled-components';
import {FaDolly,FaRedo,FaDollarSign} from 'react-icons/fa'
export default class Services extends Component{
    state={
        services:[
            {id:1,icon:<FaDolly className='icon'/>,title:"free shipping", text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been"},
            {id:2,icon:<FaRedo className='icon'/>,title:"free shipping", text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been"},
            {id:3,icon:<FaDollarSign className='icon'/>,title:"free shipping", text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been"}
        ]
    }
    render(){
    return(
       <SectionWrapper>
          <div className="container">
             <div className="row">
                   {this.state.services.map(data=>{
                       return(
                              <div className="col-10 mx-auto col-sm-6 col-md-4 text-center my-3" key={data.id}>
                               <div className="service-icon">
                                 {data.icon}
                               </div>
                               <div className="mt-3 text-capitalize">
                                  {data.title}
                               </div>
                               <div className="mt-3 ">
                                  {data.text}
                               </div>
                           </div>
                       )
                   }
                       
                   )}
             </div>
          </div>
       </SectionWrapper>
    )
    }
}

const SectionWrapper=styled.section`
    background:rgba(9,183,234,0.5);
    .service-icon{
        font-size:2.5rem;
        color:var(--primaryColor)
    }
`;