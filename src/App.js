import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { ProductsList } from './views/Products';
import { ProductComponent, Product } from './views/Product';
import { Provider } from "react-redux";
import { Store } from './store';
import { Cart } from './views/Cart';

function App() {
  return (
    <Provider store={Store}>
      <div id="main-app">
        <h1>ASS - Amazing Super Store</h1>
        <BrowserRouter>
          <Route exact path="/" component={ProductsList}></Route>
          <Route path="/product/:id" component={Product}></Route>
          <Route path="/cart" component={Cart}></Route>
        </BrowserRouter>
      </div>
    </Provider>
  );  
}

export default App;
