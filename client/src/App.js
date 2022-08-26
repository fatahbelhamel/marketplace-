import './App.css';
import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Routes, Route } from "react-router-dom";
import Product from "./pages/product/pages/product.js";
import Commande from "./pages/commande/pages/commande.js";
import ProductsByCategory from "./pages/products/pages/products.js";
import Home from './pages/Home/pages/home.js';
import ClientLogin from './pages/client/pages/login.js';
import ClientRegister from './pages/client/pages/register.js';
import VendorLogin from './pages/vendor/pages/login.js';
import VendorRegister from './pages/vendor/pages/register.js';
import Cart from './pages/cart/pages/cart.js';
import Vendor from './pages/vendor/pages/vendor.js';
import AdminLogin from './pages/admin/pages/adminLogin.js';
import EspaceClient from './pages/client/pages/espaceClient.js';
import EspaceVendor from './pages/vendor/pages/espaceVendor.js';
import CompteClient from './pages/client/pages/compteClient.js';
import CommandeClient from './pages/client/pages/commandeClient.js';
import CompteVendor from './pages/vendor/pages/compteVendor.js';
import CommandeVendor from './pages/vendor/pages/commandeVendor.js';
import ProductVendor from './pages/vendor/pages/productVendor.js';
import AddProduct from './pages/vendor/pages/addProduct.js';
import UpdateProduct from './pages/vendor/pages/updateProduct.js';

import Dashboard from "./pages/admin/pages/dashboard.js";
import Commandes from "./pages/admin/pages/commandes.js";
import CommandeItem from "./pages/admin/pages/commande.js";
import Products from "./pages/admin/pages/products.js";
import Categories from "./pages/admin/pages/categories.js";
import Add_categorie from "./pages/admin/pages/add_categorie.js";
import Clients from "./pages/admin/pages/clients.js";
import Vendeurs from "./pages/admin/pages/vendeurs.js";

function App() {
     const [token,setToken]= useState('');
     const refreshToken = async () =>{
         try {
          const response = await axios.get("http://localhost:5000/admin/token");
            setToken(response.data.adminToken);
         }catch (error) {
            console.error(error);
         }
      }
 
     useEffect(()=>{       
           refreshToken();
     },[]); 

  return (
    
    <Routes>
      <div className="App">
       
        <Route exact path="/" >
         <Home/>
        </Route>
        <Route path="/product/:id" >
         <Product/>
        </Route>
        <Route path="/commande" >
         <Commande/>
        </Route>
        <Route path="/products/:categorie">
         <ProductsByCategory/>
        </Route>
        <Route path="/client/login">
         <ClientLogin/>
        </Route>
        <Route path="/client/register">
         <ClientRegister/>
        </Route>
        <Route path="/client/espaceClient">
         <EspaceClient/>
        </Route>
        <Route path="/client/compteClient">
         <CompteClient/>
        </Route>
        <Route path="/client/commandeClient">
         <CommandeClient/>
        </Route>
        <Route path="/vendor/login">  
         <VendorLogin/>
        </Route>
        <Route path="/vendor/register"> 
         <VendorRegister/>
        </Route>
        <Route path="/vendor/espaceVendor">
         <EspaceVendor/>
        </Route>
        <Route path="/vendor/compteVendor">   
         <CompteVendor/>
        </Route>
        <Route path="/vendor/commandeVendor">  
         <CommandeVendor/>
        </Route>
        <Route path="/vendor/productVendor"> 
         <ProductVendor/>
        </Route>
        <Route path="/vendor/adProduct">
         <AddProduct/>
        </Route>
        <Route path="/vendor/updateProduct/:id"> 
         <UpdateProduct/>
        </Route>
        <Route path="/vender-en-DzMarket"> 
         <Vendor/>
        </Route>
        <Route path="/cart">
         <Cart/>
        </Route>
        <Route path="/admin/login">       
          <AdminLogin/>
        </Route>
        <Route path="/admin/dashboard">         
            <Dashboard/> 
        </Route>
        <Route path="/admin/produits">
         <Products/>
        </Route>
        <Route path="/admin/categories">
         <Categories/>
        </Route>
        <Route path="/admin/add_categorie">
         <Add_categorie/>
        </Route>
        <Route path="/admin/commandes">
         <Commandes/>
        </Route>
        <Route path="/admin/commande/:id">
         <CommandeItem/>
        </Route>
        <Route path="/admin/clients">
         <Clients/>
        </Route>
        <Route path="/admin/vendeurs">
         <Vendeurs/>
        </Route> 
      </div> 
    </Routes> 
  );
}

export default App;
