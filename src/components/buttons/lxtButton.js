import { useNavigate } from "react-router-dom";
import "./lxtButton.scss";

export default function LxtButton({
  text,
  color,
  borderColor = "none",
  customStyling = "",
  disableResponsive = false,
  navigationLink = "none",
  shiningEffect = false,
}) {
  const navigate = useNavigate();

  function handleNavigation() {
    console.log("entered");
    if (navigationLink != "none") {
      console.log(navigationLink, "navigationLink");
      navigate(navigationLink);
      window?.scrollTo(0, 0);
    }
  }

  return (
    <button
      onClick={() => handleNavigation()}
      className={`lxt-button border-box ${customStyling} ${
        disableResponsive
          ? "py-3.5 px-12 text-lg "
          : "xl:py-3.5 xl:px-12 xl:text-lg md:px-6 md:py-2 text-xs px-2 py-2"
      } text-white rounded-b-xl rounded-tl-xl  font-extralight hover:scale-95 duration-500 ease-in-out`}
      style={{
        backgroundColor: color,
        border: `1px solid ${borderColor}`,
      }}
    >
      <span className={`${shiningEffect ? "shining-text" : ""}`}>{text}</span>
    </button>
  );
}
