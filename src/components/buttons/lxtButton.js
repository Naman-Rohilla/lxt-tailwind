export default function LxtButton({ text, color, borderColor = "none" }) {
  return (
    <button
      className={`text-xs border-box px-2 py-2 xl:py-3.5 xl:px-12 text-white rounded-b-xl rounded-tl-xl xl:text-lg md:px-6 md:py-2 font-extralight`}
      style={{
        backgroundColor: color,
        border: `1px solid ${borderColor}`,
      }}
    >
      {text}
    </button>
  );
}
