import { useState } from "react";
import "./productCard.scss";

export default function ProductCard({
  footerEnable = true,
  footerObject,
  backgroundVideo,
  hoverImage,
  checkoutButtonEnable = true,
  key,
  redirect,
  isMobile,
}) {
  const [count, setCount] = useState(0);

  function handleCount() {
    if (count > 1) {
      setCount(0);
      return;
    }
    setCount(count + 1);
    return;
  }

  return (
    <>
      <div
        key={key}
        className="product-card rounded-b-xl w-60 md:w-40 xl:w-60 relative rounded-tl-xl object-contain h-80 xl:h-80  mt-5"
        onClick={() => handleCount()}
      >
        {backgroundVideo && (
          <img
            className="background-video rounded-b-xl rounded-tl-xl absolute top-0 left-0 w-60 h-full"
            src={backgroundVideo}
          ></img>
        )}
        {hoverImage && (
          <img
            className="hover-img rounded-b-xl rounded-tl-xl"
            src={hoverImage}
          />
        )}
        {checkoutButtonEnable && (
          <div
            style={{
              bottom: "70px",
            }}
            className="flex justify-center absolute w-full"
          >
            {isMobile ? (
              <>
                {count > 0 && (
                  <a
                    href={redirect}
                    target="_blank"
                    className="bg-red-100 px-4 text-sm py-2 hover-button cursor-pointer"
                  >
                    Quick Checkout
                  </a>
                )}
              </>
            ) : (
              <a
                href={redirect}
                target="_blank"
                className="bg-red-100 px-4 text-sm py-2 hover-button cursor-pointer"
              >
                Quick Checkout
              </a>
            )}
          </div>
        )}
        {footerEnable && (
          <div className="card-footer rounded-b-xl">
            {footerObject && (
              <>
                <div className="card-heading text-6xs xl:text-lg">
                  {footerObject?.heading && <span>{footerObject.heading}</span>}
                  {footerObject?.colorHeading && (
                    <span
                      style={{
                        color: footerObject.color,
                      }}
                    >
                      {footerObject.colorHeading}
                    </span>
                  )}
                </div>
              </>
            )}
            {footerObject?.description && (
              <span className="card-descrption text-6xs xl:text-md">
                {footerObject.description}
              </span>
            )}
          </div>
        )}
      </div>
    </>
  );
}
