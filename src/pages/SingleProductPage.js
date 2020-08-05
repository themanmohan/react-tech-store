import React from 'react';
import {Link} from "react-router-dom";
import Hero from '../component/Hero';
import singleProductImg from "../image/singleProductBcg.jpeg";
import {ProductConsumer} from "../context/context";
export default function SingleProductPage(){
    return(
        <>
            <Hero img={singleProductImg} max="max" title="SingleProduct" />
            <ProductConsumer>
                {value=>{
                    const {singleProduct,addToCart,loading}=value
                     console.log(singleProduct)
                     console.log(singleProduct.title)
                    if(loading){
                        console.log('loding')
                        return <h2>proudct loading.....</h2>
                    }
                     return(
                        singleProduct.map(item => {
                            
                            return(
                                
                                 <section key={item.id} className="py-5">
              <div className="container">
                <div className="row">
                  <div className="col-10 mx-auto col-sm-8 col-md-6 my-3">
                    <img src={`../${item.image}`}
                      alt="single product"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-10 mx-auto col-sm-8 col-md-6 my-3">
                    <h5 className="text-title mb-4">model :{item.title} </h5>
                    <h5 className="text-capitalize text-muted mb-4">
                      company : {item.company}
                    </h5>
                    <h5 className="text-main text-capitalize mb-4">
                      price : ${item.price}
                    </h5>
                    <p className="text-capitalize text-title mt-3">
                      some info about product :
                    </p>
                    <p>{item.description}</p>
                    <button
                      type="button"
                      className="main-link"
                      style={{ margin: "0.75rem" }}
                      onClick={() => addToCart(item.id)}
                    >
                      add to cart
                    </button>
                    <Link
                      to="/product"
                      className="main-link"
                      style={{ margin: "0.75rem" }}
                    >
                      back to products
                    </Link>
                  </div>
                </div>
              </div>
            </section>
                            )
                        })
                    ) 
                }}
            </ProductConsumer>
        </>
    );
}