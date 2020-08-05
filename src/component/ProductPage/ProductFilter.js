import React from 'react'
import styled from 'styled-components';
import {ProductConsumer} from '../../context/context'
export default function ProductFilter(){
    return(
     <ProductConsumer>
       {
           value=>{
               const {
                   price,
                   max,
                   min,
                   search,
                   company,
                   shipping,
                   storeProduct,
                   handleChange
               } = value
                  
                  let companies = new Set();
                  companies.add('all')
                  for (let product in storeProduct)
                     companies.add(storeProduct[product]["company"])
                     companies=[...companies]

                    
                 
               return(
                   <div className="row my-5">
                      <div className="col-10 mx-auto">
                          <FilterWrapper>
                          {/* text-search */}
                          <div>
                              <label htmlFor="search" >Search Prodcut</label>
                              <input type="text" name="search" id="search"
                              onChange={handleChange} value={search} className="filter-item"
                               />
                               </div>
                                {/* end text-search */}

                                {/* start category */}
                                <div>
                                    <label  htmlFor="company">Company</label>
                                    <select  name="company" id="company"
                                   onChange={handleChange} value={company} className="filter-item">
                                     {/* <option value="all">all</option>
                                      <option value="htc">htc</option>
                                       <option value="fuji">fuji</option> */}
                                       {
                                           companies.map((company,index)=>{
                                               return (
                                                 
                                                   <option key={index} value={company}>{company}</option>
                                                   
                                               )
                                           })
                                       }
                                    </select>
                                </div>
                                <div>
                                {/* end of categories */}
                                {/* price start */}
                                 <label  htmlFor="price">Price</label>
                                 <p className="mb-2">Product Price:-<span>
                                     $ {price}
                                 </span>
                                 </p>

                                 <input type="range" id="price" name="price" min={min}
                                 max={max} value={price} onChange={handleChange} className="filter-price"
                                 ></input>
                                 </div>
                                {/* price start  end*/}
                                {/* free shipping  */}
                                <div>
                                <label  htmlFor="shipping" className="mt-5"
                                >Shipping</label>
                                <input type="checkbox" name="shipping" id="shipping" id="shipping"
                                onChange={handleChange} checked={shipping && true} className="filter-item"
                                >
                                </input>
                                </div>
                                 {/* free shipping end */}

                          </FilterWrapper>
                      </div>
                   </div>
               )
           }
       }
     </ProductConsumer>
    )
}

const FilterWrapper = styled.div `
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(200px, 1fr));
  grid-column-gap:1rem;
  grid-row-gap:2rem;

  label{
      font-weight:bold;
      text-transform:capitalize;
  }

  .filter-item,
  .filter-price{
      display:black;
      width:100%;
      background:transparent;
      border-radius:0.5rem;
      border:2px solid var(--darkGray)
  }
`;