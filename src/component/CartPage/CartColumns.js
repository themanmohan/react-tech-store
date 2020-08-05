import React from 'react';

export  default function CartColumns(){
    return(
        <div className="container-fluid text-center d-none d-lg-block my-5">
              <div className="row">
                 {/* single column */}
                 <div className="col-lg-2">
                <p className="text-uppercase">Produts</p>
                 </div>
                 {/* single column end */}

                  {/* single column */}
                 <div className="col-lg-2">
                <p className="text-uppercase">Name of product</p>
                 </div>
                 {/* single column end */}
                  {/* single column */}
                 <div className="col-lg-2">
                <p className="text-uppercase">price</p>
                 </div>
                 {/* single column end */}
                  {/* single column */}
                 <div className="col-lg-2">
                <p className="text-uppercase">quantity</p>
                 </div>
                 {/* single column end */}
                  {/* single column */}
                 <div className="col-lg-2">
                <p className="text-uppercase">remove</p>
                 </div>
                 {/* single column end */}
                  {/* single column */}
                 <div className="col-lg-2">
                <p className="text-uppercase">total</p>
                 </div>
                 {/* single column end */}
              </div>
        </div>
    )
}