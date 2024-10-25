import { Link } from "react-router-dom";
import menuItems from "../../jsons/menuItems";
import LxtButton from "../buttons/lxtButton";
import "./footer.scss";
import SpacedSection from "../spacedSection/spacedSection";

export default function Footer() {
  return (
    <>
      <SpacedSection
        backgroundColor="white"
        customStyling="mt-10 overflow-hidden"
      >
        <div className="footer-container border-box pt-0 md:pt-24">
          <div className="form-footer hidden relative rounded-2xl md:flex space-x-4 justify-center w-auto shrink-0">
            <img
              className="absolute left-0 h-64 xl:h-80 xl:w-80 scale-175"
              src="skate1.png"
            ></img>
            <div className="form-container flex flex-col h-full white items-center">
              <div className="py-12 text-3xl xl;text-4xl">
                Stay Informed with News & Events
              </div>
              <div className="input-container  flex space-x-4">
                <input className="h-14 w-40 xl:w-80" placeholder="First Name" />
                <input
                  className="h-14 w-40 xl:w-80"
                  placeholder="Email Address"
                />
                <span className="">
                  <LxtButton
                    text={"JOIN US"}
                    disableResponsive={true}
                    color={"red"}
                  />
                </span>
              </div>
            </div>
            <img
              className="absolute right-0 h-64 xl:h-80"
              src="skate2.png"
            ></img>
          </div>
          <div className="text-black">hi</div>
          <div className="footer-nav">
            {menuItems.map((mt) => (
              <Link to={mt.redirect} className="item" exact>
                {mt.link}
              </Link>
            ))}
          </div>
          <div className="footer-description text-center pt-8 flex justify-center w-full text-sm">
            Our mission is to inspire and empower young skaters, especially
            those who need support the most, to reach their full potential as
            skilled, responsible, and caring athletes.
          </div>
          <div className="footer-divider"></div>
          <div className="footer-end">
            © Rahul Rane 2024, All Rights Reserved
          </div>
        </div>
      </SpacedSection>
    </>
  );
}
