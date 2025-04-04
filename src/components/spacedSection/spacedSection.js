export default function SpacedSection({
  position = "relative",
  zIndex = 0,
  children,
  customPadding = "px-4 2xl:px-40",
  customStyling,
  backgroundColor = "#02173a",
}) {
  return (
    <div
      className={`${customPadding} ${customStyling} bg-black text-white h-auto w-full border-box top-0`}
      style={{
        backgroundColor: backgroundColor,
        position: position,
        zIndex: zIndex,
      }}
    >
      {children}
    </div>
  );
}
