import React from 'react';
import './App.css';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";

import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import Login from "./pages/login";

function App() {
  return (
    <div classname="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
             
            
            
            
          </Routes>
        </Router>
      </ShopContextProvider>
      
    </div>
    
  );
}

export default App;