import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function MobileNavbar() {
  const navigate = useNavigate();

  const [openMenu, setOpenMenu] = useState(false);

  const location = useLocation();

  function handleNavigation(location) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(location);
    return;
  }

  console.log(location.pathname, "location");

  return (
    <div
      style={{
        zIndex: "200",
      }}
      className="pr-12 pl-2 bg-card-color flex items-center justify-between sticky bottom-0 h-16 w-full text-white"
    >
      <div
        onClick={() => handleNavigation("/")}
        className={`flex text-7xs flex-col space-y-1.5 items-center ${
          location.pathname == "/" ? "text-red-500" : "text-white"
        }`}
      >
        <img src="lxtlogo.png" className="h-6 w-full" />
        <span>HOME</span>
      </div>
      <div
        onClick={() => handleNavigation("/about")}
        className={`flex text-7xs space-y-1 flex-col items-center ${
          location.pathname == "/about" ? "text-red-500" : "text-white"
        }`}
      >
        <img src="about.png" className="h-6 w-7" />
        <span>ABOUT US</span>
      </div>
      <div
        onClick={() => handleNavigation("/rr-lxt-rink")}
        className={`flex text-7xs space-y-1 flex-col items-center ${
          location.pathname == "/rr-lxt-rink" ? "text-red-500" : "text-white"
        }`}
      >
        <img src="redo.png" className="h-7 w-8" />
        <span>RR LXT LINK</span>
      </div>
      <div
        onClick={() => setOpenMenu(!openMenu)}
        className="flex text-7xs space-y-1 flex-col items-center relative"
      >
        <img src="more.png" className="h-6 w-7" />
        <span className={`${openMenu ? "text-red-500" : "text-white"}`}>
          MORE
        </span>
        {openMenu && (
          <div className="absolute bottom-[50px] rounded-b-xl rounded-tl-xl right-0 bg-card-color h-40 w-40 flex flex-col pt-2">
            <span
              onClick={() => handleNavigation("/announcement")}
              className={`p-2 px-4 ${
                location.pathname == "/announcement"
                  ? "text-red-500 "
                  : "text-white"
              }`}
            >
              Announcement
            </span>
            <span
              onClick={() => handleNavigation("/achievement")}
              className={`p-2 px-4 ${
                location.pathname == "/achievement"
                  ? "text-red-500 "
                  : "text-white"
              }`}
            >
              Achievement
            </span>
            <span
              onClick={() => handleNavigation("/news")}
              className={`p-2 px-4 ${
                location.pathname == "/news" ? "text-red-500 " : "text-white"
              }`}
            >
              Media
            </span>
            <span
              onClick={() => handleNavigation("/comming-soon")}
              className="p-2 px-4"
            >
              Contact Us
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
