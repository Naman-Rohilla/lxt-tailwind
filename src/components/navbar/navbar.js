import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import LxtButton from "../buttons/lxtButton";
// import "./navbar.scss";
import menuItems from "../../jsons/menuItems";
import SpacedSection from "../spacedSection/spacedSection";

export default function Navbar() {
  const textButton = "BOOK A RINK";

  const location = useLocation();
  const navigate = useNavigate();

  function homeNavigation() {
    navigate("/");
    window?.scrollTo(0, 0);
  }

  return (
    <SpacedSection position={"fixed"} zIndex={200}>
      <div className="h-20 md:h-24 w-full flex z-1 items-center justify-between">
        <div className="w-auto">
          <img
            className="object-contain w-36 xl:w-60 cursor-pointer"
            onClick={() => homeNavigation()}
            src="lxtlogo.png"
          />
        </div>
        <div className="space-x-4 text-xs text-100 xl:space-x-8 xl:text-sm font-light hidden md:flex items-center">
          {menuItems.map((mt) => (
            <Link
              to={mt.redirect}
              className={`item hover:-translate-y-1 hover:border-red-theme duration-300 ease-in-out hover:text-red-theme  ${
                location.pathname == mt.redirect &&
                location.pathname != "/comming-soon"
                  ? "text-blue-500 border-b-2 pb-2 border-blue-500"
                  : ""
              }`}
              exact
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              {mt.link}
            </Link>
          ))}
          <a href="https://lxtskates.catalog.to/" target="_blank">
            <LxtButton text={textButton} color="red" borderColor={"none"} />
          </a>
        </div>
        <div className="flex md:hidden">
          <a href="https://lxtskates.catalog.to/" target="_blank">
            <LxtButton
              text={textButton}
              color="red"
              borderColor={"none"}
              shiningEffect={true}
            />
          </a>
        </div>
      </div>
    </SpacedSection>
  );
}
