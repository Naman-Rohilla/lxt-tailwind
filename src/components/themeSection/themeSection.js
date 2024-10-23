export default function ThemeSection({
  position = "sticky",
  backgroundColor = "#02173a",
  paddingTop = "100px",
  zIndex = 1,
  flexSetting = "flex",
  sizeSetting = "h-screen w-full",
  children,
}) {
  return (
    <div
      className={`${sizeSetting} ${flexSetting} ${position} top-0 z-${zIndex}`}
      style={{
        backgroundColor: backgroundColor,
        paddingTop: paddingTop,
      }}
    >
      {children}
    </div>
  );
}
