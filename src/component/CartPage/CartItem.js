import React from 'react';
import {FaTrash,FaChevronCircleUp,FaChevronCircleDown} from 'react-icons/fa' 
export  default function CartItem({CartItem,increament,decreament,removeItem}){
  const {id,title,price,count,total,image}=CartItem
  return (
    <div className="row mt-5 mt-lg-0 text-capitalize text-center align-item-center ">
     {/* image */}
     <div className="col-10 mx-auto col-lg-2 pb-2">
         <img src={`../${image}`} alt={title} width="60" />
     </div>
     {/* image end */}
     {/* title */}
     <div className="col-10 mx-auto col-lg-2 pb-2">
        <span className="d-lg-none">
            product:-
        </span>
         {title}
     </div>
     {/* title end */}
     {/* price */}
     <div className="col-10 mx-auto col-lg-2 pb-2">
        <span className="d-lg-none">
            price:-
        </span>
         ${price}
     </div>
     {/* count end */}
     <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
           <div>
                <FaChevronCircleDown className="text-primary cart-icon" onClick={()=>decreament(id)} />
                <span className="text-titletet-muted mx-3">
                   {count}
                </span>
                 <FaChevronCircleUp className="text-primary cart-icon" onClick={()=>increament(id)} />
           </div>
        </div>

        {/* <FaChevronCircleUp onClick={increament} /> */}
         
         
     </div>
     {/* count end */}
      {/* remove end */}
     <div className="col-10 mx-auto col-lg-2 ">
        
         <FaTrash className="text-danger cart-icon" onClick={()=>removeItem(id)} />
     </div>
     {/* remove end */}

     {/* total end */}
     <div className="col-10 mx-auto col-lg-2 pb-2">
        <span className="d-lg-none">
            Total: -
        </span>
         ${total}
     </div>
     {/* total end */}

    </div>
     
    );
}