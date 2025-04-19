import { useEffect, useRef, useState } from "react";
import HeaderDiv from "../animatedDiv/headerDiv";
import LxtButton from "../buttons/lxtButton";
import SpacedSection from "../spacedSection/spacedSection";
import NewsCard from "../cards/newsCard";
import { getMostVisibleIndex } from "../../utils/getMostVisibleIndex";
import Tracker from "../buttons/tracker";
import HeaderView from "../animatedDiv/headerView";
import FreedomView from "./freedomView";
import newsData from "../../jsons/newsData";

const NewsView = ({ inHome }) => {
  return (
    <>
      <HeaderDiv
        className={`rounded-2xl ${
          inHome ? "mt-48" : "mt-24"
        } md:flex justify-between relative hidden`}
        style={{
          backgroundColor: "#0C6AB0",
          height: "55vh",
        }}
      >
        <div className="flex flex-col w-1/2 lg:pt-14 2xl:pt-20 md:text-3xl 2xl:text-6xl pl-10">
          <span className="font-extrabold">In the News</span>
          <span className="font-extralight lg:pt-4 2xl:pt-10 text-2xl w-1/2 lg:w-full lg:text-2xl 2xl:text-4xl">
            Stay updated with the latest headlines, stories, and achievements
            making waves in the skating community and beyond.
          </span>
        </div>
        <div className="h-full w-full flex justify-end absolute right-0 top-0">
          <img
            className="h-full w-1/2 scale-y-125 -translate-y-16 pr-4"
            src="https://res.cloudinary.com/djdyzefbx/image/upload/v1738504019/news-cropped_2_11zon_jf8hqh.png"
          />
        </div>
      </HeaderDiv>
    </>
  );
};

const NewsCardView = ({ isMobile, setActiveNews }) => {
  const [visibleIndex, setVisibleIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      const index = getMostVisibleIndex(container, ".news-card");
      setVisibleIndex(index);
    };

    const container = containerRef.current;
    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(visibleIndex, "visi news");

  return (
    <>
      <div
        ref={containerRef}
        className="flex slider-hidden-scrollbar h-auto py-4 overflow-y-hidden md:-translate-y-32 space-x-4 md:px-4 xl:overflow-hidden overflow-x-scroll"
      >
        {newsData.map((nd, index) => (
          <div
            onClick={() =>
              setActiveNews({
                open: true,
                index: index,
              })
            }
            className="cursor-default"
          >
            <NewsCard
              isMobile={isMobile}
              isActive={visibleIndex == index}
              src={nd.src}
              heading={nd.heading}
              summary={nd.summary}
              date={nd.date}
            ></NewsCard>
          </div>
        ))}
      </div>
      {isMobile && (
        <div className="flex justify-center pt-5 space-x-2">
          {Array.from({ length: 4 }, (_, i) => i).map((i) => (
            <Tracker
              theme={"bg-blue-500"}
              index={i}
              isActive={i == visibleIndex}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default function News({ inHome = false, isMobile }) {
  const [activeNews, setActiveNews] = useState({
    open: false,
    index: 0,
  });
  return (
    <>
      {activeNews.open && (
        <div className="fixed h-full w-full z-20 flex bg-black bg-opacity-80 justify-center items-center">
          <div className="bg-card-color h-3/4 md:h-[500px] 2xl:h-auto w-full mx-4 md:mx-0 md:w-3/4 overflow-scroll md:mt-24 2xl:mt-24 rounded-b-2xl rounded-tl-2xl relative text-white py-10">
            <span
              className="absolute left-0 top-0 py-4 pl-5 pr-10 md:pr-0 cursor-pointer text-gray-300"
              onClick={() =>
                setActiveNews({
                  open: false,
                  index: activeNews.index,
                })
              }
            >
              Home / Media / {newsData[activeNews.index].heading.toLowerCase()}
            </span>

            <span
              className="absolute right-0 top-0 py-4 pr-5 cursor-pointer hover:scale-110 hover:ease-in-out hover:duration-300"
              onClick={() =>
                setActiveNews({
                  open: false,
                  index: activeNews.index,
                })
              }
            >
              x
            </span>

            <div className="pt-10 pl-5 pr-5 gap-5 text-justify">
              <img
                src={newsData[activeNews.index].src}
                className="h-full max-h-[360px] w-[560px] object-cover rounded-b-2xl rounded-tl-2xl drop-shadow-xl md:float-left md:pr-5 pb-2"
              />
              <div className="flex justify-between">
                <span className="text-xs text-black bg-white rounded-2xl px-4 mt-4 md:mt-0 py-1">
                  Sports
                </span>
                <span className="text-xs text-gray-200 bg-gray-500 rounded-2xl px-4 mt-4 md:mt-0 py-1">
                  {newsData[activeNews.index].date}
                </span>
              </div>
              <br />
              <span className="text-2xl font-bold">
                {newsData[activeNews.index].heading}
              </span>
              <br />
              <br />
              <span className="pr-5 text-justify w-auto text-white">
                {newsData[activeNews.index].data.map((dt, index) => (
                  <>
                    <>{dt}</>
                    <br />
                    <br />
                  </>
                ))}
              </span>
            </div>
          </div>
        </div>
      )}
      <SpacedSection customStyling={`${inHome ? "" : "pt-24 relative"}`}>
        {!inHome && (
          <>
            <HeaderView
              heading={"In The News"}
              subheading={"Rahul Sir's Success Stories in the Media"}
            ></HeaderView>
          </>
        )}
        <NewsView inHome={inHome}></NewsView>
        <div className="md:hidden mt-10 mb-5 text-3xl font-bold">
          In the News
        </div>
        <NewsCardView
          isMobile={isMobile}
          setActiveNews={setActiveNews}
        ></NewsCardView>
        {inHome && (
          <div className="my-6 md:-translate-y-24 md:my-10 md:my-0 float-right md:float-left">
            <LxtButton
              text="DISCOVER MORE"
              color="transparent"
              borderColor="white"
              navigationLink="/contact"
            ></LxtButton>
          </div>
        )}

        {!inHome && (
          <>
            <div className="md:my-6 md:my-0 md:mb-40 md:float-right md:float-left ">
              {/* <NewsCardView
                isMobile={isMobile}
                setActiveNews={setActiveNews}
              ></NewsCardView> */}
              {/* <NewsCardView
                isMobile={isMobile}
                setActiveNews={setActiveNews}
              ></NewsCardView>
              <NewsCardView
                isMobile={isMobile}
                setActiveNews={setActiveNews}
              ></NewsCardView> */}
              <FreedomView
                padding={0}
                setActiveNews={setActiveNews}
              ></FreedomView>
            </div>
          </>
        )}
      </SpacedSection>
    </>
  );
}
