import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import ProductsContextProvider from "./Global/ProductsContext";
import Products from "./components/Products";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";
import CartContextProvider from "./Global/CartContext";

function App() {
  return (
        <ProductsContextProvider>
          <CartContextProvider>
          <Router>
            <Navbar/>
            <Switch>
              <Route path="/" exact component={Products} />
              <Route path="/cart" exact component={Cart} />
              <Route component={NotFound} />
            </Switch>
          </Router>
          </CartContextProvider>
        </ProductsContextProvider>
    )
}

export default App;