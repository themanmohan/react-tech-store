import React,{Component} from  'react';
import {linkData} from './linkData';
const ProductContext=React.createContext();
class ProductProvider extends Component{

  state={
    sideBarOpen:false,
    cartOpen:false,
    cartItem:0,
    cart:[],
    links:linkData
  }

  //handleSideBar

  handleSidebar = ()=>{
    this.setState({
      sideBarOpen:!this.state.sideBarOpen
    })
  }

  //handleBarCart

  handleCart = () => {
    this.setState({
      cartOpen: !this.state.cartOpen
    })
  }

  //coseCart
  closeCart=()=>{
    this.setState({
      cartOpen:false
    })
  }

  //openCart
  openCart = () => {
    this.setState({
      cartOpen: true
    })
  }
  render(){
    return(
       <ProductContext.Provider value={{
         ...this.state,
         handleSidebar:this.handleSidebar,
         handleCart:this.handleCart,
         closeCart:this.closeCart,
         openCart:this.openCart
         
       }}>
           {this.props.children}
       </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer

export {ProductConsumer,ProductProvider}



