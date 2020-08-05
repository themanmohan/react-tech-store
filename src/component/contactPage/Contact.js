import React from 'react';

import styled from 'styled-components'
import Title from '../Title'
export default function Contact(){
    return(
        <SectionWrapper className="py-5  ">
        <Title title="Contact Us" center="center"/>
            <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                    <from className="mt-5"  action="https://formspree.io/manmohankumar023@gmail.com" method="POST">
                    
                         <div className="form-group">
                              <input type="text" name="firstname" className="form-control input" placeholder="firstname"  required />
                                 <label name="firstname" className="label">FirstName</label>
                         </div>
                          <div className="form-group">
                              <input type="email" name="email" className="form-control input" placeholder="m@gmail.com" required />
                            <label name="firstname" className="label">Email</label>
                         </div>
                          <div className="form-group">
                              <input type="text"  name="subject" className="form-control input" placeholder="import!!!" required />
                            <label name="firstname" className="label">Subject</label>
                         </div>
                          <div className="form">
                             <textarea name="message" className="form-control input" rows="10" placeholder="hlo there buddy" required>

                             </textarea>

                          </div>
                           <div className="form-group mt-3">
                              <input type="submit" name="send" className="form-control bg-primary text-white input" />
                         </div>
                    </from>
                    
                </div>
            </div>
        </SectionWrapper>
    )
}

const SectionWrapper =styled.section`
 
        .input:focus{
           border-bottom:3px solid green;
           box-shadow:none
        }

        .input:focus:invalid{
            border-bottom: 3px solid red;
            box-shadow:none;
            
        }
        
        .label{
             font-size:1rem;
              margin-left:1rem;
              margin-top:1rem;
              display:block;
              transition:all 1s;
              
        }
        .input:placeholder-shown + label{
          opacity:0;
          visibility:hidden;
          transform:translateY(-3rem)
        }
`;