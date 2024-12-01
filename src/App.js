import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import LxtButton from "./components/buttons/lxtButton";
import { useEffect, useState } from "react";

function App() {
  const [isMobileDesktopView, setIsMobileDesktopView] = useState(false);

  useEffect(() => {
    const checkViewMode = () => {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      console.log(userAgent);
      const isMobileDevice =
        /android/i.test(userAgent) || /iPhone|iPad|iPod/i.test(userAgent);
      const isDesktopWidth = window.innerWidth >= 760;
      console.log(userAgent, window.innerWidth);
      setIsMobileDesktopView(isMobileDevice && isDesktopWidth);
    };

    checkViewMode();
    window.addEventListener("resize", checkViewMode);
    return () => {
      window.removeEventListener("resize", checkViewMode);
    };
  }, []);
  return (
    <>
      {isMobileDesktopView && (
        <div className="h-screen w-full flex justify-center items-center">
          <LxtButton
            text={"This content is visible on desktop only."}
            color={"red"}
          ></LxtButton>
        </div>
      )}
      {!isMobileDesktopView && <RouterProvider router={router} />}
    </>
  );
}

export default App;
