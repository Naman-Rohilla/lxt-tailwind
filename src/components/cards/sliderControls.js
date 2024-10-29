export default function SliderControl({
  currentIndex,
  setCurrentIndex,
  size,
  setAnimationKey,
  customStyling = "flex items-center justify-center lg:justify-start",
}) {
  const nextSlide = () => {
    console.log("clicked next");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % size);
    triggerAnimation();
  };

  const prevSlide = () => {
    console.log("clicked prev");
    setCurrentIndex((prevIndex) => (prevIndex - 1 + size) % size);
    triggerAnimation();
  };

  const triggerAnimation = () => {
    setAnimationKey((prev) => prev + 1);
  };

  return (
    <div className={`${customStyling}`}>
      <div className="z-10" onClick={prevSlide}>
        <img height={80} width={80} src="leftslide.png" alt="Previous" />
      </div>
      {Array.from({ length: size }, (_, index) => (
        <span
          style={{
            border: index === currentIndex ? `1px solid red` : "none",
            height: "30px",
            width: "30px",
            borderRadius: "100%",
          }}
          key={index}
          className="flex justify-center items-center px-2 mb-2"
        >
          <div
            style={{
              backgroundColor: index === currentIndex ? "red" : "#B6B6B6",
              height: "10px",
              width: "10px",
              borderRadius: "100%",
            }}
          ></div>
        </span>
      ))}
      <div className="" onClick={nextSlide}>
        <img height={80} width={80} src="rightslide.png" alt="Next" />
      </div>
    </div>
  );
}
