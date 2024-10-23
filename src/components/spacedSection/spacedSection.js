export default function SpacedSection({
  position = "relative",
  zIndex = 0,
  children,
  customStyling = "px-10 2xl:px-40",
}) {
  return (
    <div
      className={`${customStyling} bg-black text-white h-auto w-full border-box top-0`}
      style={{
        backgroundColor: "#02173a",
        position: position,
        zIndex: zIndex,
      }}
    >
      {children}
    </div>
  );
}
