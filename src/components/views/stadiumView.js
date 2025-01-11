import { useEffect, useRef, useState } from "react";
import { rinkData, stadiumData } from "../../jsons/productData";
import HeaderDiv from "../animatedDiv/headerDiv";
import LxtButton from "../buttons/lxtButton";
import ActionCard from "../cards/actionCard";
import WatchShopView from "./watchShopView.js";
import IphoneView from "./iphoneView";
import "../../styles/stadiumView.scss";
import HeaderView from "../animatedDiv/headerView.js";
import SpacedSection from "../spacedSection/spacedSection.js";

const StadiumView = ({ isMobile, inHome = false }) => {
  const [inViewIndex, setInViewIndex] = useState(null);
  const cardRefs = useRef([]);
  const [showContent, setShowContent] = useState(inHome);

  useEffect(() => {
    if (!stadiumData || stadiumData.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = entry.target.getAttribute("data-index");
          if (entry.isIntersecting) {
            console.log("Setting inViewIndex to:", index);
            setInViewIndex(Number(index));
          }
        });
      },
      { threshold: 0.5 }
    );

    cardRefs.current.forEach((card) => {
      console.log("Observing card:", card);
      card && observer.observe(card);
    });

    return () => {
      cardRefs.current.forEach((card) => card && observer.unobserve(card));
    };
  }, [stadiumData]);
  return (
    <>
      {showContent ? (
        <></>
      ) : (
        <SpacedSection>
          <div className="pt-20 text-white">
            <HeaderView
              heading={"RR LXT RINK"}
              subheading={"Rahul Rane Rink - Infrastructure"}
            />
          </div>
          <div className="h-[600px] w-full bg-blue-500"></div>
        </SpacedSection>
      )}
      <HeaderDiv className="stadium-view h-auto w-full relative flex justify-between">
        {showContent && (
          <div className="stadium-background h-screen sticky top-0">
            <div className="stadium-background-color">
              <img
                style={{
                  height: "100vh",
                  width: "100vw",
                }}
                src="stadium.png"
              />
              <div className="stadium-background-color"></div>
            </div>
          </div>
        )}
        <div className="stadium-slider-view h-auto w-full relative md:w-1/2">
          <div className="stadium-slider-container px-4 xl:px-40">
            {showContent ? (
              <HeaderDiv className="pt-10 md:pt-24 text-2xl font-extralight md:text-6xl">
                RR <span className="font-extrabold">LXT</span>{" "}
                <span
                  className="font-extrabold"
                  style={{
                    color: "#0C6AB0",
                  }}
                >
                  Rink
                </span>
              </HeaderDiv>
            ) : (
              <>
                <HeaderDiv className="pt-10 md:pt-24 text-2xl font-extralight md:text-6xl space-x-5 flex">
                  <span className="text-white">Infrastructure</span>
                  <span
                    className="font-extrabold"
                    style={{
                      color: "#0C6AB0",
                    }}
                  >
                    Advantages
                  </span>
                </HeaderDiv>
                <HeaderDiv className="pt-10 md:pt-2 text-2xl font-extralight md:text-6xl space-x-5 flex">
                  <span className="text-white">and other</span>
                  <span
                    className="font-extrabold"
                    style={{
                      color: "#0C6AB0",
                    }}
                  >
                    Benefits
                  </span>
                </HeaderDiv>
              </>
            )}
            <div className="flex text-white flex-row md:flex-col space-x-4 md:space-x-0 md:space-y-28 pt-10 md:pt-24 pb-10 overflow-x-scroll slider-hidden-scrollbar">
              {showContent ? (
                <>
                  {stadiumData?.map((sd, index) => (
                    <div
                      data-index={index}
                      key={index}
                      ref={(el) => (cardRefs.current[index] = el)}
                      className="w-full shrink-0"
                    >
                      <ActionCard
                        heading={sd.heading}
                        list={sd.list}
                        isActive={index === inViewIndex}
                      />
                    </div>
                  ))}
                </>
              ) : (
                <>
                  {rinkData?.map((rd, index) => (
                    <div
                      data-index={index}
                      key={index}
                      ref={(el) => (cardRefs.current[index] = el)}
                      className="w-full shrink-0"
                    >
                      <ActionCard
                        heading={rd.heading}
                        highlightList={rd.highlightList}
                        list={rd.list}
                        isActive={index === inViewIndex}
                      />
                    </div>
                  ))}
                </>
              )}
            </div>
            <span className="stadium-button">
              <LxtButton
                text={"READ MORE"}
                color="transparent"
                borderColor="white"
              />
            </span>
          </div>
          {showContent && <WatchShopView isMobile={isMobile} />}
        </div>
        <IphoneView />
      </HeaderDiv>
    </>
  );
};

export default StadiumView;
