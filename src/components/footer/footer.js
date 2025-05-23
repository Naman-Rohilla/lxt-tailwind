import { Link } from "react-router-dom";
import menuItems from "../../jsons/menuItems";
import LxtButton from "../buttons/lxtButton";
import "./footer.scss";
import SpacedSection from "../spacedSection/spacedSection";

const FooterForm = () => {
  return (
    <div className="flex flex-col h-full items-left md:items-center">
      <div className="pb-8 pt-20 w-1/2 md:w-auto text-xl xl:text-4xl">
        Stay Informed with News & Events
      </div>
      <div className="input-container pb-5 w-full flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <input
          className="h-14 w-full md:w-40 xl:w-80"
          placeholder="First Name"
        />
        <input
          className="h-14 w-full md:w-40 xl:w-80"
          placeholder="Email Address"
        />

        <LxtButton text={"JOIN US"} disableResponsive={true} color={"red"} />
      </div>
    </div>
  );
};

export default function Footer() {
  return (
    <>
      <SpacedSection
        backgroundColor="white"
        customStyling="mt-0 md:mt-10 overflow-hidden"
      >
        <div className="footer-container border-box pt-0">
          <div className="footer-nav flex flex-col space-y-6 md:space-y-0 md:space-x-10 md:flex-row w-full justify-center pt-12">
            {menuItems.map((mt) => (
              <Link to={mt.redirect} className="item" exact>
                {mt.link}
              </Link>
            ))}
          </div>
          <div className="footer-description text-left md:text-center pt-8 flex justify-center w-full text-sm">
            Our mission is to inspire and empower young skaters, especially
            those who need support the most, to reach their full potential as
            skilled, responsible, and caring athletes.
          </div>
          <div className="footer-divider"></div>
          <div className="footer-end space-y-2 md:space-y-0">
            <span>© Rahul Rane 2024, All Rights Reserved</span>
            <span>Design Created by: JalebiDesignStudio</span>
          </div>
        </div>
      </SpacedSection>
    </>
  );
}
