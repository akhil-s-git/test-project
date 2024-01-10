import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,

} from "react-router-dom";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import Home from "./pages";

function Layout() {
  const [searchText, setSearchText] = useState("");
  const [cartItem, setCartItem] = useState([]);
  const [open, setOpen] = useState(false);
  useEffect(()=>{
    if (localStorage.getItem('cartItems')) {
      const cartItems = JSON.parse(localStorage.getItem('cartItems'));
  setCartItem(cartItems) 
    }
  },[])
 
  return (
    <Router>
    <Navbar  setSearchText={setSearchText} setOpen={setOpen} cartTotal={cartItem?.length} />
      <Routes>
        <Route
          path="/"
          element={
            <Home searchText={searchText} setCartItem={setCartItem}/>
          }
          exact
        />

      </Routes>
      <Cart open={open} setOpen={setOpen} cartItem={cartItem} setCartItem={setCartItem}/>
    </Router>
  );
}

export default Layout;
