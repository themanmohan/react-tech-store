import React ,{Component} from 'react';

import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import {Switch,Route} from 'react-router-dom';
import Home from './pages/HomePage';
import About from './pages/AboutPage';
import Product from './pages/ProductPage';
import SingleProduct from './pages/SingleProductPage';
import Contact from './pages/ContactPage';
import CartPage from './pages/CartPage';
import Default from './pages/DefaultPage';


import Navbar from './component/Navbar';
import Sidecart from './component/SideCart';
import Sidebar from './component/Sidebar';
import Footer from './component/Footer';
class  App extends Component {
  render(){
  return (
   <div>
      
      {/* navbar, sidebar,cart,footer  */}
      <Navbar />
      <Sidebar />
      <Sidecart />
      <Switch>
        <Route path="/" exact component={Home}></Route>
         <Route path="/about"  component={About}></Route>
          <Route path="/contact"  component={Contact}></Route>
           <Route path="/product"  component={Product}></Route>
           <Route path="/cart"  component={CartPage}></Route>
           <Route path="/default"  component={Default}></Route>
            <Route path="/products/:id"  component={SingleProduct}></Route>
      </Switch>
      <Footer />
   </div>
  );
  }
}
  
export default App;
