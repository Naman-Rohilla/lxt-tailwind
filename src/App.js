import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import LxtButton from "./components/buttons/lxtButton";
import { useEffect, useState } from "react";

function App() {
  const [showDesktopViewMessage, setShowDesktopViewMessage] = useState(false);

  useEffect(() => {
    const checkDesktopViewOnMobile = () => {
      const isMobileDevice =
        /android/i.test(navigator.userAgent) ||
        /iPhone|iPad|iPod/i.test(navigator.userAgent);
      const isDesktopViewport = window.innerWidth >= 1024; // Example breakpoint for desktop

      // Log for debugging
      console.log("User Agent:", navigator.userAgent);
      console.log("Is Mobile Device:", isMobileDevice);
      console.log("Viewport Width:", window.innerWidth);
      console.log("Is Desktop Viewport:", isDesktopViewport);
      console.log("Is Desktop Viewport:", navigator.platform);

      // Show message if it's a mobile device simulating desktop viewport
      setShowDesktopViewMessage(isMobileDevice && isDesktopViewport);
    };

    // Initial check
    checkDesktopViewOnMobile();

    // Listen for window resize
    window.addEventListener("resize", checkDesktopViewOnMobile);

    // Cleanup on unmount
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
