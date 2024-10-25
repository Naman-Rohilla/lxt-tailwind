import { Outlet, Link } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import { useEffect, useState } from "react";
import Footer from "./components/footer/footer";

function Root() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Root;
