import { Outlet, Link } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import { useEffect, useState } from "react";
import Footer from "./components/footer/footer";
import MobileNavbar from "./components/navbar/mobileNav";
import { Analytics } from "@vercel/analytics/react";
import Popup from "./components/cards/popup";

function Root() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Navbar setIsPopupOpen={setIsPopupOpen} />
      {isPopupOpen && <Popup setIsPopupOpen={setIsPopupOpen} />}
      <Outlet />
      <Footer />
      {isMobile && <MobileNavbar></MobileNavbar>}
      <Analytics />
    </>
  );
}

export default Root;
