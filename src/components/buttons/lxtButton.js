export default function LxtButton({
  text,
  color,
  borderColor = "none",
  customStyling = "text-xs px-2 py-2",
}) {
  return (
    <button
      className={`border-box ${customStyling} xl:py-3.5 xl:px-12 text-white rounded-b-xl rounded-tl-xl xl:text-lg md:px-6 md:py-2 font-extralight`}
      style={{
        backgroundColor: color,
        border: `1px solid ${borderColor}`,
      }}
    >
      {text}
    </button>
  );
}
