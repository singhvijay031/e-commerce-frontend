import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import CheckOut from "./pages/CheckOut";
import { useState } from "react";

function App() {
  const [order, setOrder] = useState(null);
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route
          path="/checkout"
          element={<CheckOut setOrder={setOrder} />}
        ></Route>
        <Route
          path="/order-confirmation"
          element={<CheckOut order={order} />}
        ></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
