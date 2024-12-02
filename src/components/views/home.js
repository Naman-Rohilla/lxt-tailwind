import { useEffect, useRef, useState } from "react";
import statisticData from "../../jsons/statisticData";
import StatisticCard from "../cards/statisticCard";
import Movie from "../movie/movie";
import SpacedSection from "../spacedSection/spacedSection";
import LxtButton from "../buttons/lxtButton";
import ProductCard from "../cards/productCard";
import "../../styles/productView.scss";
import {
  announcementData,
  productData1,
  productData2,
  productData3,
  stadiumData,
} from "../../jsons/productData";
import ActionCard from "../cards/actionCard";
import "../../styles/stadiumView.scss";
import ProfileCard from "../cards/profileCard";
import "../../styles/announcementView.scss";
import FullRoundedButton from "../buttons/fullRoundedButton";
import NewsCard from "../cards/newsCard";
import SliderControl from "../cards/sliderControls";
import { AnimatePresence, motion } from "framer-motion";
import HeaderDiv from "../animatedDiv/headerDiv";

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
            window.addEventListener("wheel", handleWheel);
          } else {
            window.removeEventListener("wheel", handleWheel);
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
            className={`flex slider-hidden-scrollbar overflow-y-scroll smooth mt-0`}
          >
            <div className="flex space-x-4">
              {[...productData1, ...productData2, ...productData3].map(
                (pd, i) => (
                  <ProductCard
                    key={i}
                    footerObject={footerObject}
                    backgroundVideo={pd}
                    hoverImage="hoverskate.jpeg"
                  />
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
                    backgroundVideo={pd1}
                    hoverImage="hoverskate.jpeg"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
      {isMobile && (
        <div className="text-lxt-button mt-4">
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

const IphoneView = () => {
  return (
    <div className="iphone-view pr-10 md:pr-10 lg:pr-40 2xl:pr-80 h-screen w-1/2 sticky top-0 items-start hidden md:block">
      <div className="iphone">
        <img src="iphone.png" alt="iPhone" />
        <video
          src="iphone.mp4"
          autoPlay
          loop
          muted
          style={{ objectFit: "cover" }}
        />
        <div className="iphone-button">
          <LxtButton text={"BOOK A TICKET"} color="red" />
        </div>
      </div>
    </div>
  );
};

const WatchShopView = ({ isMobile }) => {
  return (
    <SpacedSection
      position="sticky"
      customStyling="watch-shop-view sticky top-0 w-full md:w-screen flex py-10 md:py-24"
    >
      {isMobile ? (
        <>
          <div className="flex flex-col w-full items-center space-y-5">
            <span className="text-5xl text-red-500">Shop Live</span>
            <img width={"60%"} src="watchshop/watch5.png" />
            <video className="mobile-video object-cover" autoPlay loop muted>
              <source src="watchshop/watch6.mp4"></source>
            </video>
            <LxtButton
              text={"Watch & Shop"}
              color={"red"}
              customStyling="text-lg py-3 px-6"
            />
          </div>
        </>
      ) : (
        <>
          <div className="img-left relative">
            <video className="h-full object-cover" autoPlay loop muted>
              <source src="watchshop/watch6.mp4"></source>
            </video>
            <img src="watchshop/live.png" />
          </div>
          <div className="img-center">
            <img width={"100%"} height={220} src="watchshop/watch2.png" />
            <span className="text-shop">Shop Live</span>
            <img width={"60%"} src="watchshop/watch5.png" />
            <span
              style={{
                fontSize: "1rem",
              }}
            >
              <LxtButton text={"Watch & Shop"} color={"red"} />
            </span>
            <img width={"100%"} height={150} src="watchshop/watch1.png" />
          </div>
          <div className="img-right">
            <img className="h-full" src="watchshop/watch4.png" />
            <img />
          </div>
        </>
      )}
    </SpacedSection>
  );
};

const StadiumView = ({ isMobile }) => {
  const [inViewIndex, setInViewIndex] = useState(null);
  const cardRefs = useRef([]);

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
      <HeaderDiv className="stadium-view min-h-screen h-auto w-full relative flex justify-between">
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
        <div className="stadium-slider-view min-h-screen h-auto w-full relative md:w-1/2">
          <div className="stadium-slider-container px-4 xl:px-40">
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
            <div className="flex flex-row md:flex-col space-x-4 md:space-x-0 md:space-y-28 pt-10 md:pt-24 pb-10 overflow-x-scroll slider-hidden-scrollbar">
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
            </div>
            <span className="stadium-button">
              <LxtButton
                text={"READ MORE"}
                color="transparent"
                borderColor="white"
              />
            </span>
          </div>
          <WatchShopView isMobile={isMobile} />
        </div>
        <IphoneView />
      </HeaderDiv>
    </>
  );
};

const AnouncementView = () => {
  return (
    <HeaderDiv className="announcement-view relative text-white flex justify-between h-auto">
      <div className="announcement-heading flex flex-col">
        <HeaderDiv className="text-3xl md:text-5xl font-extrabold">
          Announce
          <span
            style={{
              color: "#0C6AB0",
            }}
          >
            ment
          </span>
        </HeaderDiv>
        <HeaderDiv className="text-lg pt-2 md:text-2xl font-extralight">
          Get Ready to Roll—Exciting Skating Event Ahead
        </HeaderDiv>
        <div className="announcement-card-container space-y-1">
          {announcementData?.map((sd, index) => (
            <ActionCard
              key={index}
              heading={sd.heading}
              list={sd.list}
              defaultExpanded={false}
            ></ActionCard>
          ))}
        </div>
        <span className="pt-2">
          <LxtButton
            text={"KNOW MORE"}
            color={"transparent"}
            borderColor="white"
          />
        </span>
      </div>
      <div className="hidden md:flex"></div>
      <div className="flex absolute top-0 w-1/2 right-0 items-center pl-4 pt-14 hidden md:flex">
        <img width={"100%"} src="race.png" />
      </div>
    </HeaderDiv>
  );
};

const FreedomView = () => {
  return (
    <HeaderDiv className="py-10 md:py-40">
      <div className="bg-card-color hover:bg-blue-900 hover:duration-300 rounded-2xl h-auto md:h-96 w-auto p-4 py-6 md:p-10 flex flex-col md:flex-row justify-between">
        <div className="flex flex-col justify-between w-full items-center md:items-start md:w-2/5 text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
          <div className="flex flex-col">
            <strong>Skate to Freedom,</strong>
            <strong>Live with Passion</strong>
          </div>
          <span className="py-5 text-xl text-center md:text-start lg:text-3xl xl:text-4xl font-extralight">
            Push your limits with the support of a world-class coach and academy
          </span>
          <span className="pb-6 md:pb-0">
            <LxtButton text={"START TODAY"} color={"red"} />
          </span>
        </div>
        <div className="w-full h-80  flex justify-center md:w-1/2 xl:h-full object-cover overflow-hidden rounded-2xl">
          <img
            src="feedomskating.png"
            className="object-cover md:w-full px-1 py-2  md:-translate-y-10  md:py-0 scale-125 rounded-2xl"
          />
        </div>
      </div>
    </HeaderDiv>
  );
};

const PictureView = () => {
  return (
    <>
      <div className="flex w-60 flex-col space-y-4 shrink-0">
        <img className="h-80 rounded-2xl" src="picture1.png" />
        <img className="h-36 rounded-2xl" src="ach1.jpg" />
      </div>
      <div className="flex items-center shrink-0">
        <img className="h-80 w-64 rounded-2xl" src="ach2.jpg" />
      </div>
      <div className="flex w-60 flex-col space-y-4 shrink-0">
        <img className="h-36 rounded-2xl" src="ach3.jpg" />
        <img className="h-80 rounded-2xl" src="ach10.png" />
      </div>
      <div className="flex items-center shrink-0">
        <img className="h-80 w-64  rounded-2xl" src="ach5.jpg" />
      </div>
      <div className="flex w-60 flex-col space-y-4 shrink-0">
        <img className="h-80 rounded-2xl" src="ach11.jpeg" />
        <img className="h-36 rounded-2xl" src="ach7.jpeg" />
      </div>
      <div className="flex w-60 h-full items-center shrink-0">
        <img
          className="rounded-2xl"
          style={{
            height: "480px",
          }}
          src="profile2.jpeg"
        />
      </div>
      <div className="flex w-60 flex-col space-y-4 shrink-0">
        <img className="h-44 rounded-2xl" src="ach6.jpg" />
        <img className="h-72 rounded-2xl" src="ach9.jpeg" />
      </div>
    </>
  );
};

const AchievementView = () => {
  return (
    <HeaderDiv className="flex flex-col">
      <span className="text-4xl md:text-6xl font-extrabold">
        Achieve
        <span
          style={{
            color: "#0C6AB0",
          }}
        >
          ment
        </span>
      </span>
      <span className="text-sm md:text-lg pt-4">
        Honored for Consistent Excellence in Skating and Cycling Performances
      </span>
      <div className="py-5 flex space-x-4">
        <FullRoundedButton text="Personel Milstones"></FullRoundedButton>
        <FullRoundedButton
          text="Team Success as a Coach"
          backgroundColor="#FFFFFFB2"
          textColor="#2E2E2E"
        ></FullRoundedButton>
      </div>
      <div className="h-auto content-box slider-hidden-scrollbar overflow-x-auto flex flex-nowrap space-x-5 md:py-10">
        <PictureView></PictureView>
      </div>
      <div className="flex justify-end pt-10">
        <LxtButton
          text="DISCOVER MORE"
          color="transparent"
          borderColor="white"
        ></LxtButton>
      </div>
    </HeaderDiv>
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
  return (
    <>
      <div className="flex slider-hidden-scrollbar h-auto py-4 overflow-y-hidden md:-translate-y-32 space-x-4 md:px-4 xl:overflow-hidden overflow-x-scroll">
        <NewsCard
          isMobile={isMobile}
          src="news1.png"
          heading={"Shiv Chhatrapati Award, Best Skating Coach"}
          summary={
            "Rahul Ramesh Rane of Pune has been felicitated with the most prestigious Sports..."
          }
          date={"September 7, 2024"}
        ></NewsCard>
        <NewsCard
          isMobile={isMobile}
          src="ach7.jpeg"
          heading={"LXT has been awarded with GEO"}
          summary={
            "He also got a Special invite for the 'Inline Speed Skating International Seminar'..."
          }
          date={"June 24, 2022"}
        ></NewsCard>
        <NewsCard
          isMobile={isMobile}
          src="ach3.jpg"
          heading={"1st FIRS International Speed Skating Seminar"}
          summary={
            "He also got a Special invite for the 'Inline Speed Skating International Seminar..."
          }
          date={"December 7, 2019"}
        ></NewsCard>
        <NewsCard
          isMobile={isMobile}
          src="ach2.jpg"
          heading={"India Ka Khelotsav, Pune Int Sports Expo"}
          summary={
            "Rahul Ramesh Rane was felicitated by the legendary Milkha Singh at the closing..."
          }
          date={"May 8, 2016"}
        ></NewsCard>
      </div>
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);

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
          <div className="w-full flex justify-center md:justify-end">
            <SliderControl
              currentIndex={currentIndex}
              setCurrentIndex={setCurrentIndex}
              size={5}
              setAnimationKey={setAnimationKey}
            ></SliderControl>
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
        className="h-auto w-full background-primary-color p-4 md:p-10 space-y-4"
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
            <LxtButton text={"SEND"} color={"red"}></LxtButton>
          </div>
        </form>
      </div>
    </>
  );
};

export default function Home() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <Movie isMobile={isMobile} />
      <SpacedSection zIndex={0}>
        <StatisticCard cardData={statisticData} />
      </SpacedSection>

      <SpacedSection>
        <ProductView isMobile={isMobile}></ProductView>
        <ProfileCardView isMobile={isMobile}></ProfileCardView>
      </SpacedSection>

      <div className="about-card-view top-0 min-h-screen h-top w-full flex flex-col items-end border-box">
        <StadiumView isMobile={isMobile} />
      </div>
      <SpacedSection>
        <AnouncementView></AnouncementView>
      </SpacedSection>
      <SpacedSection>
        <FreedomView></FreedomView>
      </SpacedSection>

      <SpacedSection>
        <AchievementView></AchievementView>
      </SpacedSection>

      <SpacedSection>
        <NewsView></NewsView>
        <div className="md:hidden mt-10 mb-5 text-3xl font-bold">
          In the News
        </div>
        <NewsCardView isMobile={isMobile}></NewsCardView>
        <div className="my-6 md:-translate-y-24 md:my-10 md:my-0 float-right">
          <LxtButton
            text="DISCOVER MORE"
            color="transparent"
            borderColor="white"
          ></LxtButton>
        </div>
      </SpacedSection>
      <SpacedSection customStyling="mt-24">
        <Review></Review>
      </SpacedSection>
    </>
  );
}
