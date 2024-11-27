import Login from "./components/home/login";
import Register from "./components/home/register";
import ShowProds from "./components/products/ShowProd";
import AddPro from "./components/products/addProd";
import ShowCart from "./components/cart/cart";
import Contact from "./components/contact/contact";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import "./App.css";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={< Login />} />
        <Route path="/register" element={< Register />} />
        <Route path="/show-products" element={<ShowProds />} />
        <Route path="/add-product" element={<AddPro />} />
        <Route path="/show-cart" element={<ShowCart />} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
  );
}

