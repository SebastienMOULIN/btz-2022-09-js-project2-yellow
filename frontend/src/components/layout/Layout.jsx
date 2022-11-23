import { React, useState, useRef } from "react";
import { ToastContainer } from "react-toastify";
import { Outlet } from "react-router-dom";
import useWindowSize from "../../hooks/useWindowDimension";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import Header from "./Header";
import Footer from "./Footer";
import MenuMobile from "../header/MenuMobile";
import MenuDesktop from "../header/MenuDesktop";
import Age from "../pop-up/Age";
import "react-toastify/dist/ReactToastify.css";

function Layout() {
  // Hook to get window size
  const size = useWindowSize();
  const { width } = size;

  // Display menu burger
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  function handleDisplayBurger() {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  }
  // Hook to close burger menu when clicked outside
  const ref = useRef();
  useOnClickOutside(ref, () => setIsBurgerMenuOpen(false));

  const [isVerified, setIsVerified] = useState(
    localStorage.getItem("verified") === "true"
  );

  return (
    <div>
      {!isVerified && <Age setIsVerified={setIsVerified} />}
      <ToastContainer />
      <Header
        isBurgerMenuOpen={isBurgerMenuOpen}
        handleDisplayBurger={handleDisplayBurger}
      />
      {width < 768 && isBurgerMenuOpen && (
        <MenuMobile isBurgerMenuOpen={isBurgerMenuOpen} />
      )}
      {width > 768 && isBurgerMenuOpen && (
        <MenuDesktop ref={ref} isBurgerMenuOpen={isBurgerMenuOpen} />
      )}
      {!isBurgerMenuOpen && (
        <main>
          <Outlet />
        </main>
      )}
      <Footer />
    </div>
  );
}

export default Layout;
