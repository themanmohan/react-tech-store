import React,{Component} from  'react';
import {linkData} from './linkData';
import {socialData} from './socialData'
// import {items} from './productData';
import {client} from './contentful'

const ProductContext=React.createContext();
class ProductProvider extends Component{

  state={
    sideBarOpen:false,
    cartOpen:false,
    cartItem:0,
    cart:[],
    links:linkData,
    social: socialData,
    cartSubTotal:0,
    cartTax:0,
    cartTotal:0,
    storeProduct:[],
    filterProduct:[],
    featuredProduct:[],
    singleProduct:[],
    loading:false,
    search:'',
    price:0,
    main:0,
    max:0,
    company:"all",
    shipping:false

  }


  componentDidMount(){
    // this.setProduct(items);
    client.getEntries({
      content_type: 'techStoreProduct'
    })
      .then((response) => this.setProduct(response.items))
      .catch(console.error)
  }


   setProduct=(products)=>{
       const storeProduct = products.map(data=>{
         const {id}=data.sys;
         const image = data.fields.image.fields.file.url
         const product =  {id, ...data.fields,image}
         return product
       })
       
      //setstate
          let  featuredProduct = storeProduct.filter(item => item.featured === true)

          //get maximum price
          let maxprice=Math.max(...storeProduct.map(item=>item.price))
      this.setState({
        storeProduct,
        filterProduct:storeProduct,
        featuredProduct,
        cart:this.getStoraeCart(),
        singleProduct:this.getStoreProduct(),
        loading:false,
        price:maxprice,
        max:maxprice


      },()=>{
        this.addTotal();
      })
  }


  //storage cart

  getStoraeCart=()=>{
    let  cart

    if(localStorage.getItem('cart')){
      cart=JSON.parse(localStorage.getItem('cart'))
    }else{
      cart=[]
    }

    return cart;
  }

//getstorage method
  getStoreProduct = () => {
    return localStorage.getItem('singleProduct') ? JSON.parse(localStorage.getItem('singleProduct')):{}
  }
//getTotal

getTotal=()=>{
   let subtotal = 0;
   let cartItem=0;
   this.state.cart.forEach(item=>{
     subtotal+=item.total
     cartItem +=item.count
   });
  subtotal = parseFloat(subtotal.toFixed(2));
let  tax = subtotal * 0.2;
tax=parseFloat(tax.toFixed(2))
let total=subtotal+tax;
total=parseFloat(total.toFixed(2));

return{
  cartItem,
  subtotal,
  tax,
  total
}
  }
//add Total
addTotal=()=>{
      const total =this.getTotal();
       this.setState({
       cartItem: total.cartItem,
       cartSubTotal:total.subtotal,
       cartTax:total.tax,
       cartTotal:total.total
     })
}
//sync storage

syncStorage=()=>{
  localStorage.setItem('cart',JSON.stringify(this.state.cart))
}


//add to cart

addToCart=(id)=>{
  let tempCart=[...this.state.cart];
  let tempProduct = [...this.state.storeProduct]
  let tempItem = tempCart.find(item=>item.id===id);

  if(!tempItem){
    tempItem = tempProduct.find(item=>item.id===id)
     
    let total =  tempItem.price;
    let cartItem = {...tempItem ,count:1,total}
    tempCart=[...tempCart,cartItem];
  }else{
    tempItem.count++;
    tempItem.total=tempItem.price * tempItem.count;
    tempItem.total=parseFloat(tempItem.total.toFixed(2))
  }

  this.setState(()=>{
    return {cart:tempCart} 
  }, ()=>{
    this.addTotal();
    this.syncStorage();
    this.openCart();
  })
}

//setSingleProduct

setSingleProduct=(id)=>{
  let product = this.state.storeProduct.filter(item=>item.id===id)

  localStorage.setItem('singleProduct',JSON.stringify(product))

  this.setState({
    singleProduct:[...product],
    loading:false
  })
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


  increament=(id)=>{
         let tempCart=[...this.state.cart];
         
        const cartItem= tempCart.find(item=>item.id===id);
        cartItem.count++;
        cartItem.total=cartItem.price * cartItem.count;
        cartItem.total = parseFloat(cartItem.total.toFixed(2));

        this.setState({
          cart:tempCart
        },()=>{
            this.addTotal();
             this.syncStorage();
        }
        )

  }

  decreament = (id) => {
    let tempCart = [...this.state.cart];

    const cartItem = tempCart.find(item => item.id === id);
    cartItem.count=cartItem.count-1

    if(cartItem.count===0){
      this.removeItem(id)
    }else{
      cartItem.total = cartItem.price * cartItem.count;
      cartItem.total = parseFloat(cartItem.total.toFixed(2));
    }

    this.setState({
      cart: tempCart
    }, () => {
      this.addTotal();
      this.syncStorage();
    }
    )
    
  }
  
  removeItem = (id) => {
     let tempCart = [...this.state.cart];
    const cartItem = tempCart.filter(item => item.id!==id);
    this.setState({
      cart: [...cartItem]
    }, () => {
      this.addTotal();
      this.syncStorage();
    })
   
  }


  clearcart = () => {
    this.setState({
      cart:[]
    }, () => {
      this.addTotal();
      this.syncStorage();
    })
  }
  //openCart
  openCart = () => {
    this.setState({
      cartOpen: true
    })
  }

  //handle change

  handleChange = (event) => {
    
     const name = event.target.name;
     const value = event.target.type === "checked" ?
       event.target.checked : event.target.value

     this.setState({
       [name]:value //bracket notataion
     },this.sortDate)
  }
  //sort date

  sortDate=()=>{
   const {storeProduct,price,company,shipping,search}=this.state;
   let tempProduct=[...storeProduct];
  
   //filtered on this basisi of price
      let tempPrice = parseInt(price)
      tempProduct = tempProduct.filter(item => item.price <= tempPrice)
      //filtered on this basisi of shipping
      if(shipping){
          tempProduct = tempProduct.filter(item => item.freeShipping===true)
      }
//filtered on this basisi of search

  if(search.length>0){
    tempProduct=tempProduct.filter(item=>{
      const tempSearch=search.toLowerCase();
      const tempTitile = item.title.toLowerCase().slice(0,search.length);
      console.log(tempTitile)
      if(tempSearch===tempTitile){
           return item
           
      }
      
           
    })
  }

   //filtered on this basisi of comapny
   if(company!=='all'){
     tempProduct=tempProduct.filter(item=>item.company===company)
   }
  
   this.setState({
     filterProduct: tempProduct
   })

  }

  render(){
    return(
       <ProductContext.Provider value={{
         ...this.state,
         handleSidebar:this.handleSidebar,
         handleCart:this.handleCart,
         closeCart:this.closeCart,
         openCart:this.openCart,
         addToCart:this.addToCart,
         setSingleProduct:this.setSingleProduct,
         increament:this.increament,
         decreament:this.decreament,
         removeItem:this.removeItem,
         clearcart:this.clearcart,
         handleChange:this.handleChange
         
       }}>
           {this.props.children}
       </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer

export {ProductConsumer,ProductProvider}



