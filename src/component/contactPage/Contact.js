import React from 'react'
import Title from '../Title'
export default function Contact(){
    return(
        <section className="py-5">
        <Title title="Contact Us" center="center"/>
            <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                    <from className="mt-5"  action="https://formspree.io/manmohankumar023@gmail.com" method="POST">
                    
                         <div className="form-group">
                              <input type="text" name="firstname" className="form-control" placeholder="firstname" />
                         </div>
                          <div className="form-group">
                              <input type="email" name="email" className="form-control" placeholder="m@gmail.com" />
                         </div>
                          <div className="form-group">
                              <input type="text" name="subject" className="form-control" placeholder="import!!!" />
                         </div>
                          <div className="form">
                             <textarea name="message" className="form-control" rows="10" placeholder="hlo there buddy">

                             </textarea>

                          </div>
                           <div className="form-group mt-3">
                              <input type="submit" name="send" className="form-control bg-primary text-white" />
                         </div>
                    </from>
                </div>
            </div>
        </section>
    )
}