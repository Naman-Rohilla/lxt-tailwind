import { Link, NavLink } from "react-router-dom";
import LxtButton from "../buttons/lxtButton";
// import "./navbar.scss";
import menuItems from "../../jsons/menuItems";
import SpacedSection from "../spacedSection/spacedSection";

export default function Navbar() {
  const textButton = "BOOK A RINK";

  return (
    <SpacedSection position={"fixed"} zIndex={200}>
      <div className="h-20 md:h-24 w-full flex z-1 items-center justify-between">
        <div className="w-auto">
          <img className="object-contain  w-36 xl:w-60" src="lxtlogo.png" />
        </div>
        <div className="space-x-4 text-xs text-100 xl:space-x-8 xl:text-sm font-light hidden md:flex items-center">
          {menuItems.map((mt) => (
            <Link to={mt.redirect} className="item" exact>
              {mt.link}
            </Link>
          ))}
          <LxtButton text={textButton} color="red" borderColor={"none"} />
        </div>
        <div className="flex md:hidden">
          <LxtButton text={textButton} color="red" borderColor={"none"} />
        </div>
      </div>
    </SpacedSection>
  );
}
