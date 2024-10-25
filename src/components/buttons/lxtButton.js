export default function LxtButton({
  text,
  color,
  borderColor = "none",
  customStyling = "",
  disableResponsive = false,
}) {
  return (
    <button
      className={`border-box ${customStyling} ${
        disableResponsive
          ? "py-3.5 px-12 text-lg "
          : "xl:py-3.5 xl:px-12 xl:text-lg md:px-6 md:py-2 text-xs px-2 py-2"
      } text-white rounded-b-xl rounded-tl-xl  font-extralight`}
      style={{
        backgroundColor: color,
        border: `1px solid ${borderColor}`,
      }}
    >
      {text}
    </button>
  );
}
