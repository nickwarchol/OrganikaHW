import React from 'react';
import './App.css';
import Footer from './components/footer';
import NavBar from './components/navBar';
import Home from './components/home';
import Catalog from './components/catalog';
import QuantityPicker from './components/quantityPicker';
import About from './components/about';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'
import Product from './components/product';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
    <div className="App">
      <NavBar class="navBar"></NavBar>

        <Switch>
        
        <Route path="/" exact component={Home} ></Route>
        <Route path="/home" exact component={Home} ></Route>
        <Route path="/catalog" exact component={Catalog} ></Route>
        <Route path="/about" exact component={About} ></Route>
      
    
        </Switch>

        <Footer></Footer>

    </div>

    </BrowserRouter>
  );
}

export default App;
