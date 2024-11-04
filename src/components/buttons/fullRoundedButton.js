export default function FullRoundedButton({
  text = "",
  backgroundColor = "#0C6AB0",
  textColor = "white",
}) {
  return (
    <>
      <button
        style={{
          backgroundColor: backgroundColor,
          color: textColor,
        }}
        className="rounded-3xl md:px-8 md:py-3 py-1 px-2 text-xs md:text-base hover:scale-90 hover:duration-500"
      >
        {text}
      </button>
    </>
  );
}
