import React from 'react';
import Product from '../component/ProductPage/product';
import Hero from '../component/Hero'
import Title from '../component/Title'
import Productbcg from '../image/productsBcg.jpeg'
import {ProductConsumer} from '../context/context'

import ProductFilter from '../component/ProductPage/ProductFilter';
export default function ProductPage(){
    return(
        <>
        <Hero img={Productbcg} />
        <ProductConsumer>
            {
                value=>{
                    const  {filterProduct}=value
                    return(
                           <section className="py-5">
                             <div className="container">
                               <Title title="Our Product" center />
                               {/* product */}

                               {/* row */}
                               {/* totla count */}
                               <div className="row py-5">
                                  <div className="col-10 mx-auto">
                                <h6 className="text-title"> Total Product:- {filterProduct.length}</h6>
                                  </div>
                               </div>
                                {
                                    /* totla count  end*/ }

                                    {/* product filter */}

                                  <ProductFilter />
                                  
                                  
                                <div className="row py-5">
                                {filterProduct.length===0?(
                                    <div className="text-title">
                                       No item found
                                    </div>

                                ):
                                 (filterProduct.map(data=>{
                                return(<Product key={data.id} Product={data} />)
                            }))}
                        </div>
                             </div>
                           </section>
                       
                    )
                }
            }
        </ProductConsumer>
       
            
        </>
    );
}