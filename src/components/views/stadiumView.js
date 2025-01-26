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
import ReactPlayer from "react-player";
import Tracker from "../buttons/tracker.js";

const StadiumView = ({ inHome = false }) => {
  const [inViewIndex, setInViewIndex] = useState(null);
  const cardRefs = useRef([]);
  const [showContent, setShowContent] = useState(inHome);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    console.log(isMobile, "isMobile");
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
          <div className="h-[400px] md:h-[600px] w-full overflow-hidden relative rounded-b-2xl rounded-tl-2xl">
            <div className="absolute top-0 left-0 bg-card-color h-full w-full opacity-60 z-40"></div>
            <ReactPlayer
              url={"https://www.youtube.com/watch?v=hzE3Qm0szIw"}
              playing
              muted
              controls={false}
              loop={true}
              width="100%"
              height="100%"
              zIndex="1"
              style={{
                transform: isMobile ? "scale(5)" : "scale(1.5)",
                objectFit: "cover",
                display: isVideoReady ? "" : "none",
              }}
              config={{
                youtube: {
                  playerVars: {
                    modestbranding: 1,
                    showinfo: 0,
                    disablekb: 1,
                    rel: 0,
                  },
                },
              }}
              onPlay={() => setIsVideoReady(true)}
            >
              {" "}
            </ReactPlayer>
          </div>
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
                <HeaderDiv className="pt-10 md:pt-24 text-2xl font-extralight md:text-6xl space-x-1 md:space-x-5 flex">
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
                <HeaderDiv className="pt-1 md:pt-2 text-2xl font-extralight md:text-6xl space-x-1 md:space-x-5 flex">
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
                      className="w-full"
                      style={{
                        flexShrink: 0.04,
                      }}
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
            {inHome && (
              <div className="flex shink-0 justify-center pb-6 space-x-2">
                {stadiumData.map((sd, i) => (
                  <Tracker
                    theme={"blue"}
                    index={i}
                    isActive={i == inViewIndex}
                  ></Tracker>
                ))}
              </div>
            )}
            {inHome && (
              <span className="stadium-button float-right">
                <LxtButton
                  text={"READ MORE"}
                  color="transparent"
                  borderColor="white"
                  navigationLink="/rr-lxt-rink"
                />
              </span>
            )}
          </div>
          {showContent && <WatchShopView isMobile={isMobile} />}
        </div>
        <IphoneView />
      </HeaderDiv>
    </>
  );
};

export default StadiumView;
