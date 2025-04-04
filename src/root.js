import { Outlet, Link } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import { useEffect, useState } from "react";
import Footer from "./components/footer/footer";
import MobileNavbar from "./components/navbar/mobileNav";
import { Analytics } from "@vercel/analytics/react";

function Root() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      {isMobile && <MobileNavbar></MobileNavbar>}
      <Analytics />
    </>
  );
}

export default Root;
