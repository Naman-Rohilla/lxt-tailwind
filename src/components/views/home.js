import { useEffect, useRef, useState } from "react";
import statisticData from "../../jsons/statisticData";
import StatisticCard from "../cards/statisticCard";
import Movie from "../movie/movie";
import SpacedSection from "../spacedSection/spacedSection";
import LxtButton from "../buttons/lxtButton";
import ProductCard from "../cards/productCard";
import "../../styles/productView.scss";
import {
  productData1,
  productData2,
  productData3,
} from "../../jsons/productData";

import ProfileCard from "../cards/profileCard";
import NewsCard from "../cards/newsCard";
import HeaderDiv from "../animatedDiv/headerDiv";
import AchievementView from "../Achievement/achievemntView";
import StadiumView from "./stadiumView";
import AnouncementView from "./anouncementView";
import { getMostVisibleIndex } from "../../utils/getMostVisibleIndex";
import Tracker from "../buttons/tracker";
import "../../App.css";

const footerObject = {
  heading: "Beginner",
  colorHeading: "Quad Skating",
  color: "red",
  description: "Master the essentials of Quad Skating",
};

const ProductView = ({ isMobile }) => {
  const refs = [
    {
      ref: useRef(null),
      data: productData1,
    },
    {
      ref: useRef(null),
      data: productData2,
    },
    {
      ref: useRef(null),
      data: productData3,
    },
  ];

  const [visibleIndex, setVisibleIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      const index = getMostVisibleIndex(container, ".product-card");
      setVisibleIndex(index);
    };

    const container = containerRef.current;
    if (container) {
      container?.addEventListener("scroll", handleScroll);

      return () => {
        container?.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  console.log(visibleIndex, "visibleIndex");

  useEffect(() => {
    const handleWheel = (e) => {
      // e.preventDefault();
      const scrollAmount = 30;
      refs.forEach(
        (ref) =>
          ref.ref.current &&
          (ref.ref.current.scrollTop += e.deltaY * scrollAmount)
      );
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window?.addEventListener("wheel", handleWheel);
          } else {
            window?.removeEventListener("wheel", handleWheel);
          }
        });
      },
      { root: null, threshold: 0.7 }
    );

    refs.forEach((ref) => ref.ref.current && observer.observe(ref.ref.current));

    return () => {
      window.removeEventListener("wheel", handleWheel);
      refs.forEach(
        (ref) => ref.ref.current && observer.unobserve(ref.ref.current)
      );
    };
  }, [refs]);

  return (
    <HeaderDiv className="product-card-view relative md:sticky h-auto md:h-screen flex flex-col justify-start md:justify-between md:flex-row pt-0 md:pt-24">
      <div className="pt-10 md:pt-28 text-3xl xl:text-5xl w-auto flex flex-col">
        <span className="font-extralight">
          Transform{" "}
          <span
            style={{
              color: "#0C6AB0",
            }}
            className="font-extrabold"
          >
            Skater
          </span>
        </span>
        <span className="font-extralight">
          with Advanced{" "}
          <span
            style={{
              color: "#0C6AB0",
            }}
            className="font-extrabold"
          >
            Coaching
          </span>
        </span>
        <span className="font-extralight">
          and
          <span
            style={{
              color: "#0C6AB0",
            }}
            className="font-extrabold"
          >
            {" "}
            Equipment
          </span>
        </span>
        <span className="text-sm xl:text-lg  mt-5">
          Effectively highlights the focus on enhancing a skater's abilities
          through top-tier coaching and the latest gear
        </span>
        {!isMobile && (
          <div className="text-lxt-button mt-6">
            <LxtButton text="BOOK A CLASS" color="red" />
          </div>
        )}
      </div>
      {isMobile ? (
        <div className="gallery-view pt-0 top-0">
          <div
            ref={containerRef}
            className={`flex slider-hidden-scrollbar overflow-x-scroll py-2 smooth mt-0`}
          >
            <div className="flex space-x-4">
              {[...productData1, ...productData2, ...productData3].map(
                (pd, i) => (
                  <div
                    className={`${
                      visibleIndex == i
                        ? "scale-105 ease-in-out duration-300 opacity-100"
                        : "opacity-60"
                    }`}
                  >
                    <ProductCard
                      key={i}
                      footerObject={footerObject}
                      backgroundVideo={pd.link}
                      hoverImage={pd.hover}
                    />
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="gallery-view flex w-full justify-end pt-20">
          {refs.map((ref, index) => (
            <div
              className={`container-view-${index + 1} `}
              ref={ref.ref}
              key={index}
            >
              <div className="vertical-layer">
                {ref.data.map((pd1, i) => (
                  <ProductCard
                    key={i}
                    footerObject={footerObject}
                    backgroundVideo={pd1.link}
                    hoverImage={pd1.hover}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
      {isMobile && (
        <div className="flex pt-5 justify-center space-x-2">
          {[...productData1, ...productData2, ...productData3].map((pd, i) => (
            <Tracker
              theme={"bg-red-500"}
              index={i}
              isActive={visibleIndex == i}
            />
          ))}
        </div>
      )}
      {isMobile && (
        <div className="text-lxt-button mt-4 flex justify-end">
          <LxtButton text="BOOK A CLASS" color="red" />
        </div>
      )}
    </HeaderDiv>
  );
};

const ProfileCardView = ({ isMobile }) => {
  return (
    <div
      style={{
        backgroundColor: "rgba(2, 23, 58, 0.8)",
      }}
      className="h-auto md:h-screen w-full relative md:sticky z-10 flex items-start md:items-end md:pb-40 py-10 md:pt-32"
    >
      <ProfileCard isMobile={isMobile}></ProfileCard>
    </div>
  );
};

const NewsView = () => {
  return (
    <>
      <HeaderDiv
        className="rounded-2xl mt-48 md:flex justify-between relative hidden"
        style={{
          backgroundColor: "#0C6AB0",
          height: "55vh",
        }}
      >
        <div className="flex flex-col w-1/2 pt-20 text-6xl pl-10">
          <span className="font-extrabold">In the News</span>
          <span className="font-extralight pt-10 text-2xl w-1/2 lg:w-full lg:text-4xl">
            Stay updated with the latest headlines, stories, and achievements
            making waves in the skating community and beyond.
          </span>
        </div>
        <div className="h-full w-full flex justify-end absolute right-0 top-0">
          <img
            className="h-full w-1/2 scale-y-125 -translate-y-16 pr-4"
            src="news-cropped.png"
          />
        </div>
      </HeaderDiv>
    </>
  );
};

const NewsCardView = ({ isMobile }) => {
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
        <NewsCard
          isMobile={isMobile}
          isActive={visibleIndex == 0}
          src="news1.png"
          heading={"Shiv Chhatrapati Award, Best Skating Coach"}
          summary={
            "Rahul Ramesh Rane of Pune has been felicitated with the most prestigious Sports..."
          }
          date={"September 7, 2024"}
        ></NewsCard>
        <NewsCard
          isMobile={isMobile}
          isActive={visibleIndex == 1}
          src="ach7.jpeg"
          heading={"LXT has been awarded with GEO"}
          summary={
            "He also got a Special invite for the 'Inline Speed Skating International Seminar'..."
          }
          date={"June 24, 2022"}
        ></NewsCard>
        <NewsCard
          isMobile={isMobile}
          isActive={visibleIndex == 2}
          src="ach3.jpg"
          heading={"1st FIRS International Speed Skating Seminar"}
          summary={
            "He also got a Special invite for the 'Inline Speed Skating International Seminar..."
          }
          date={"December 7, 2019"}
        ></NewsCard>
        <NewsCard
          isMobile={isMobile}
          isActive={visibleIndex == 3}
          src="ach2.jpg"
          heading={"India Ka Khelotsav, Pune Int Sports Expo"}
          summary={
            "Rahul Ramesh Rane was felicitated by the legendary Milkha Singh at the closing..."
          }
          date={"May 8, 2016"}
        ></NewsCard>
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

const Star = ({ rating, maxRating = 1, id }) => {
  const fillPercentage = (rating / maxRating) * 100;
  const gradientId = `starGradient-${id}`;

  return (
    <svg
      className="h-4 w-4"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
    >
      <defs>
        <linearGradient id={gradientId}>
          <stop offset={`${fillPercentage}%`} stopColor="#FBBC05" />
          <stop offset={`${fillPercentage}%`} stopColor="transparent" />
        </linearGradient>
      </defs>

      <path
        d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
        fill="none"
        stroke="#FBBC05"
        strokeWidth="20"
      />

      <path
        fill={`url(#${gradientId})`}
        d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
      />
    </svg>
  );
};

const Review = () => {
  const [checkboxState, setCheckboxState] = useState(0);

  function handleCheckbox(index) {
    setCheckboxState(index);
  }
  return (
    <>
      <div className="space-y-2 md:space-y-4">
        <div
          style={{
            zIndex: -1,
            position: "relative",
          }}
          className=" md:hidden"
        >
          <img
            className="h-full w-full rounded-2xl my-4 hover:scale-90 hover:translate-y-20 duration-500 transition-all ease-in"
            src="review.png"
          />
        </div>
        <span className="text-md md:text-4xl">
          Meet Anil Pednekar from Team Airss ( Chief Instructor )
        </span>
        <div className="w-full flex">
          <img
            className="-translate-x-3 md:-translate-x-6 w-3 h-3  md:h-5 md:w-5"
            src="upquote.png"
          ></img>
          <span className="-translate-x-3 md:-translate-x-4 md:-text-xs md:text-xl leading-5 md:leading-8 pt-1 text-justify ">
            As a coach at RR LXT Rink, I've had the privilege of working with
            passionate skaters under the guidance of Rahul Rane. His dedication
            and love for the sport are truly inspiring, and his coaching
            philosophy emphasises personalised attention, discipline, and
            technical excellence. Watching the skaters improve their skills and
            confidence has been immensely rewarding. At RR LXT Rink, we foster a
            supportive environment where skaters not only push their limits but
            also grow together as a team. It's an ideal place for aspiring
            skaters to train and thrive while having fun!{" "}
            <span className="inline-flex -translate-y-1 rotate-180 text-slate-700">
              <img src="upquote.png" className="md:h-5 md:w-5 h-3 w-3" />
            </span>
          </span>
        </div>
        <div className="flex md:flex-row flex-col">
          <div className="text-xs flex w-full space-x-4 items-center">
            <span>Auguest 30, 2024</span>
            <div className="flex space-x-1">
              <Star rating={1} id={1}></Star>
              <Star rating={1} id={1}></Star>
              <Star rating={1} id={1}></Star>
              <Star rating={1} id={1}></Star>
              <Star rating={0.6} id={2}></Star>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <div
        style={{
          zIndex: -1,
          position: "relative",
        }}
        className="hidden md:flex"
      >
        <img
          className="h-screen w-full rounded-2xl my-4 hover:scale-90 hover:translate-y-20 duration-500 transition-all ease-in"
          src="review.png"
        />
      </div>
      <div
        style={{
          zIndex: "100",
          position: "relative",
        }}
        className="h-auto w-full background-primary-color p-4 md:p-10 space-y-4 mt-10 md:mt-0"
      >
        <span className="text-xl md:text-3xl lg:text-4xl font-bold">
          My Journey with Rahul Sir and RR LXT Rink
        </span>
        <form className="space-y-6">
          <div className="space-y-6 md:space-y-0 md:space-x-4 w-full flex md:flex-row flex-col">
            <input
              placeholder="First Name"
              className="border-none px-4 md:px-12 background-prime-color py-5 md:py-8 rounded-b-2xl rounded-tl-2xl flex-1"
            />
            <input
              placeholder="Mobile No"
              className="border-none px-4 md:px-12 background-prime-color py-5 md:py-8 rounded-b-2xl rounded-tl-2xl flex-1"
            />
          </div>
          <div className="flex">
            <input
              placeholder="Your Message"
              className="border-none px-4 md:px-12 background-prime-color h-40 md:h-48 rounded-b-2xl rounded-tl-2xl flex-1"
            />
          </div>
          <div className="flex md:flex-row flex-col justify-between items-start md:items-center space-y-4 md:space-y-0">
            <div className="space-x-8 flex">
              <div className="md:space-x-6 flex md:flex-row flex-col">
                <span className="space-x-4 flex items-center">
                  {checkboxState == 1 ? (
                    <img className="h-4  w-4" src="tickedCheckbox.png" />
                  ) : (
                    <>
                      <img
                        className="h-4 w-4"
                        src="checkbox.png"
                        onClick={() => handleCheckbox(1)}
                      />
                    </>
                  )}
                  <span>Skater</span>
                </span>
                <span className="space-x-4 flex items-center mt-10 md:mt-0">
                  {checkboxState == 2 ? (
                    <img className="h-4 w-4" src="tickedCheckbox.png" />
                  ) : (
                    <>
                      <img
                        className="h-4 w-4"
                        src="checkbox.png"
                        onClick={() => handleCheckbox(2)}
                      />
                    </>
                  )}
                  <span>Parents</span>
                </span>
              </div>
              <div className="md:space-x-6 flex md:flex-row flex-col">
                <span className="space-x-4 flex items-center">
                  {checkboxState == 3 ? (
                    <img className="h-4 w-4" src="tickedCheckbox.png" />
                  ) : (
                    <>
                      <img
                        className="h-4 w-4"
                        src="checkbox.png"
                        onClick={() => handleCheckbox(3)}
                      />
                    </>
                  )}
                  <span>Coach</span>
                </span>
                <span className="space-x-4 flex items-center mt-10 md:mt-0">
                  {checkboxState == 4 ? (
                    <img className="h-4 w-4" src="tickedCheckbox.png" />
                  ) : (
                    <>
                      <img
                        className="h-4 w-4"
                        src="checkbox.png"
                        onClick={() => handleCheckbox(4)}
                      />
                    </>
                  )}
                  <span>Other</span>
                </span>
              </div>
            </div>
            <div className="flex w-full justify-end">
              <LxtButton text={"SEND"} color={"red"}></LxtButton>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default function Home() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    console.log(isMobile, "isMobile");
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Movie isMobile={isMobile} />
      <SpacedSection
        zIndex={0}
        customStyling="-translate-y-10 md:-translate-y-0"
      >
        <StatisticCard cardData={statisticData} />
      </SpacedSection>

      <SpacedSection customStyling="-translate-y-10 md:-translate-y-0">
        <ProductView isMobile={isMobile}></ProductView>
        <ProfileCardView isMobile={isMobile}></ProfileCardView>
      </SpacedSection>

      <div className="about-card-view top-0 min-h-screen h-top w-full flex flex-col items-end border-box">
        <StadiumView inHome={true} />
      </div>

      <AnouncementView inHome={true} isMobile={isMobile}></AnouncementView>

      <SpacedSection>
        <AchievementView></AchievementView>
      </SpacedSection>

      <SpacedSection>
        <NewsView></NewsView>
        <div className="md:hidden mt-10 mb-5 text-3xl font-bold">
          In the News
        </div>
        <NewsCardView isMobile={isMobile}></NewsCardView>
        <div className="my-6 md:-translate-y-24 md:my-10 md:my-0 float-right md:float-left">
          <LxtButton
            text="DISCOVER MORE"
            color="transparent"
            borderColor="white"
          ></LxtButton>
        </div>
      </SpacedSection>
    </>
  );
}
