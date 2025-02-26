import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import LxtButton from "./components/buttons/lxtButton";
import { useEffect, useState } from "react";

function App() {
  const [showDesktopViewMessage, setShowDesktopViewMessage] = useState(false);

  useEffect(() => {
    const checkDesktopViewOnMobile = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const isDesktopDevice = /windows nt|mac os x/.test(userAgent);
      const isDesktopViewport = window.innerWidth >= 767;

      console.log("User Agent:", navigator.userAgent);
      console.log("Is desktop Device:", isDesktopDevice);
      console.log("Viewport Width:", window.innerWidth);
      console.log("Is Desktop Viewport:", isDesktopViewport);
      console.log("Is Desktop Viewport:", navigator.platform);

      setShowDesktopViewMessage(!isDesktopDevice && isDesktopViewport);
    };

    checkDesktopViewOnMobile();
    window.addEventListener("resize", checkDesktopViewOnMobile);
    return () => {
      window.removeEventListener("resize", checkDesktopViewOnMobile);
    };
  }, []);
  return (
    <>
      {showDesktopViewMessage ? (
        <div className="h-screen w-full flex justify-center items-center">
          <LxtButton
            text={"This content is visible on desktop only."}
            color={"red"}
          ></LxtButton>
        </div>
      ) : (
        <RouterProvider router={router} />
      )}
    </>
  );
}

export default App;
