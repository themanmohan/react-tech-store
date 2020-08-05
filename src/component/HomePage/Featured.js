import React  from 'react'
import Product from '../product';
import {Link} from 'react-router-dom';
import Titile from '../Title'
import {ProductConsumer} from '../../context/context'
export default function Featured(){
    return(
        <section className="py-5">
              <div className="container">
                 <Titile title="Featured Product" center="true" />
                      <div className="row">
                          <ProductConsumer>
                              {value=>{
                                  
                                  const {featuredProduct}=value;
                                  
                                 return featuredProduct.map(item=>{
                                      return <Product key={item.id} Product={item}/>
                                  })

                              }}
                          </ProductConsumer>
                      </div>
                      <div className="row mt-5">
                      <div className="col text-center">
                        <Link to="/product" className="main-link">
                            OUR PRODUCT
                        </Link>
                        </div>
                      </div>
              </div>
        </section>

    )
}