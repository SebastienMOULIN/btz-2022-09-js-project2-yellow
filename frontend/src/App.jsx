import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-toastify/dist/ReactToastify.css";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Brewery from "./pages/Brewery";
import Layout from "./components/layout/Layout";
import CartContextProvider from "./context/Cart/CartState";
import BeerDetails from "./pages/BeerDetails";

function App() {
  const location = useLocation();

  return (
    <CartContextProvider>
      <AnimatePresence exitBeforeEnter initial>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/brewery" element={<Brewery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/beers/:id" element={<BeerDetails />} />
            {/* Si l'url ne corresond à rien de déclaré */}
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </CartContextProvider>
  );
}

export default App;
