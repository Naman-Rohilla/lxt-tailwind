import { useNavigate } from "react-router-dom";

export default function MobileNavbar() {
  const navigate = useNavigate();

  function handleNavigation(location) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(location);
    return;
  }

  return (
    <div
      style={{
        zIndex: "200",
      }}
      className="pr-12 pl-2 bg-card-color flex items-center justify-between sticky bottom-0 h-16 w-full text-white"
    >
      <div
        onClick={() => handleNavigation("/")}
        className="flex text-7xs flex-col space-y-1.5 items-center"
      >
        <img src="lxtlogo.png" className="h-6 w-full" />
        <span>HOME</span>
      </div>
      <div
        onClick={() => handleNavigation("/about")}
        className="flex text-7xs space-y-1 flex-col items-center"
      >
        <img src="about.png" className="h-6 w-7" />
        <span>ABOUT US</span>
      </div>
      <div className="flex text-7xs space-y-1 flex-col items-center">
        <img src="redo.png" className="h-7 w-8" />
        <span>RR LXT LINK</span>
      </div>
      <div className="flex text-7xs space-y-1 flex-col items-center">
        <img src="more.png" className="h-6 w-7" />
        <span>MORE</span>
      </div>
    </div>
  );
}
