import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar.js";
import NavbarVendor from "./components/vendor/navbarVendor.js";
import Footer from "./components/footer.js";
import Product from "./components/product.js";
import Home from './components/home.js';
import UserLogin from './components/client/login.js';
import UserRegister from './components/client/register.js';
import VendorLogin from './components/vendor/login.js';
import VendorRegister from './components/vendor/register.js';
import Cart from './components/cart.js';
import Vendor from './components/vendor/vendor.js';
import AdminLogin from './components/admin/adminLogin.js';
import EspaceClient from './components/client/espaceClient.js';
import EspaceVendor from './components/vendor/espaceVendor.js';
import CompteClient from './components/client/compteClient.js';
import CommandeClient from './components/client/commandeClient.js';
import CompteVendor from './components/vendor/compteVendor.js';
import CommandeVendor from './components/vendor/commandeVendor.js';
import ProductVendor from './components/vendor/productVendor.js';
import AddProduct from './components/vendor/addProduct.js';
import UpdateProduct from './components/vendor/updateProduct.js';

import Dashboard from "./components/admin/dashboard.js";
import Commandes from "./components/admin/commandes.js";
import Products from "./components/admin/products.js";
import Categories from "./components/admin/categories.js";
import Add_categorie from "./components/admin/add_categorie.js";
import Clients from "./components/admin/clients.js";
import Vendeurs from "./components/admin/vendeurs.js";

function App() {
  return (
    <Router>
      <div className="App">
       <Switch>
        <Route exact path="/">
         <Navbar/>
         <Home/>
         <Footer/>
        </Route>
        <Route path="/product/:id">
         <Navbar/>
         <Product/>
         <Footer/>
        </Route>
        <Route path="/client/login">
         <Navbar/>
         <UserLogin/>
         <Footer/>
        </Route>
        <Route path="/client/register">
         <Navbar/>
         <UserRegister/>
         <Footer/>
        </Route>
        <Route path="/client/espaceClient">
         <Navbar/>
         <EspaceClient/>
         <Footer/>
        </Route>
        <Route path="/client/compteClient">
         <Navbar/>
         <CompteClient/>
         <Footer/>
        </Route>
        <Route path="/client/commandeClient">
         <Navbar/>
         <CommandeClient/>
         <Footer/>
        </Route>
        <Route path="/vendor/login">
         <NavbarVendor/>
         <VendorLogin/>
         <Footer/>
        </Route>
        <Route path="/vendor/register">
         <NavbarVendor/>
         <VendorRegister/>
         <Footer/>
        </Route>
        <Route path="/vendor/espaceVendor">
         <NavbarVendor/>
         <EspaceVendor/>
         <Footer/>
        </Route>
        <Route path="/vendor/compteVendor">
         <NavbarVendor/>
         <CompteVendor/>
         <Footer/>
        </Route>
        <Route path="/vendor/commandeVendor">
         <NavbarVendor/>
         <CommandeVendor/>
         <Footer/>
        </Route>
        <Route path="/vendor/productVendor">
         <NavbarVendor/>
         <ProductVendor/>
         <Footer/>
        </Route>
        <Route path="/vendor/adProduct">
         <NavbarVendor/>
         <AddProduct/>
         <Footer/>
        </Route>
        <Route path="/vendor/updateProduct/:id">
         <NavbarVendor/>
         <UpdateProduct/>
         <Footer/>
        </Route>
        <Route path="/vender-en-DzMarket">
         <NavbarVendor/>
         <Vendor/>
         <Footer/>
        </Route>
        <Route path="/cart">
         <Navbar/>
         <Cart/>
         <Footer/>
        </Route>
        <Route path="/admin/dashboard">
         <Dashboard/>
        </Route>
        <Route path="/admin/products">
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
        <Route path="/admin/clients">
         <Clients/>
        </Route>
        <Route path="/admin/vendeurs">
         <Vendeurs/>
        </Route>
        <Route path="/admin/login">
         <AdminLogin/>
        </Route>
       </Switch>
       
      </div>
      
    </Router>  
  );
}

export default App;
