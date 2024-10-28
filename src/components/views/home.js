import { useEffect, useRef, useState } from "react";
import statisticData from "../../jsons/statisticData";
import StatisticCard from "../cards/statisticCard";
import Movie from "../movie/movie";
import SpacedSection from "../spacedSection/spacedSection";
import LxtButton from "../buttons/lxtButton";
import ProductCard from "../cards/productCard";
import "../../styles/productView.scss";
import { stadiumData } from "../../jsons/productData";
import ActionCard from "../cards/actionCard";
import "../../styles/stadiumView.scss";
import ProfileCard from "../cards/profileCard";
import "../../styles/announcementView.scss";
import "../../styles/freedomView.scss";
import FullRoundedButton from "../buttons/fullRoundedButton";

const footerObject = {
  heading: "Beginner",
  colorHeading: "Quad Skating",
  color: "red",
  description: "Master the essentials of Quad Skating",
};

const ProductView = ({ isMobile }) => {
  const refs = [useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      const scrollAmount = 30;
      refs.forEach(
        (ref) =>
          ref.current && (ref.current.scrollTop += e.deltaY * scrollAmount)
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
      { root: null, threshold: 1 }
    );

    refs.forEach((ref) => ref.current && observer.observe(ref.current));

    return () => {
      window.removeEventListener("wheel", handleWheel);
      refs.forEach((ref) => ref.current && observer.unobserve(ref.current));
    };
  }, [refs]);

  return (
    <div className="product-card-view relative md:sticky h-auto md:h-screen flex flex-col justify-start md:justify-between md:flex-row pt-0 md:pt-24">
      <div className="pt-10 md:pt-28 text-3xl xl:text-5xl w-auto flex flex-col">
        <span className="font-extralight">
          Transform <strong>Skater</strong>
        </span>
        <span className="font-extralight">
          with Advanced <strong>Coaching</strong>
        </span>
        <span className="font-extralight">
          and<strong> Equipment</strong>
        </span>
        <span className="text-sm xl:text-lg  mt-5">
          Effectively highlights the focus on enhancing a skater's abilities
          through top-tier coaching and the latest gear
        </span>
        {!isMobile && (
          <div className="text-lxt-button">
            <LxtButton text="BOOK A CLASS" color="red" />
          </div>
        )}
      </div>
      {isMobile ? (
        <div className="gallery-view pt-0 top-0">
          <div className={`flex overflow-y-scroll smooth mt-0`}>
            <div className="flex space-x-4">
              {[...Array(6)].map((_, i) => (
                <ProductCard
                  key={i}
                  footerObject={footerObject}
                  backgroundVideo="skate.gif"
                  hoverImage="rollarskates.png"
                />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="gallery-view flex w-full justify-end pt-20">
          {refs.map((ref, index) => (
            <div
              className={`container-view-${index + 1} `}
              ref={ref}
              key={index}
            >
              <div className="vertical-layer">
                {[...Array(2)].map((_, i) => (
                  <ProductCard
                    key={i}
                    footerObject={footerObject}
                    backgroundVideo="skate.gif"
                    hoverImage="rollarskates.png"
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
    </div>
  );
};

const ProfileCardView = () => {
  return (
    <div
      style={{
        backgroundColor: "rgba(2, 23, 58, 0.8)",
      }}
      className="h-auto md:h-screen w-full relative md:sticky z-10 flex items-start md:items-end py-10 md:pt-32"
    >
      <ProfileCard></ProfileCard>
    </div>
  );
};

const IphoneView = () => {
  return (
    <div className="iphone-view pr-10 md:pr-10 lg:pr-40 2xl:pr-80 h-screen w-1/2 sticky top-0 items-start hidden sm:block">
      <div className="iphone">
        <img
          // height={700}
          // width={350}

          src="iphone.png"
          alt="iPhone"
        />
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
      customStyling="watch-shop-view sticky top-0 w-screen flex py-10 md:py-24"
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
  return (
    <>
      <div className="stadium-view min-h-screen h-auto w-full relative flex justify-between">
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
          <div className="stadium-slider-container px-10 xl:px-40">
            <div className="pt-10 md:pt-24 text-lg md:text-5xl">
              RR <strong>LXT RINK</strong>
            </div>
            <div className="flex flex-row md:flex-col space-x-4 md:space-x-0 md:space-y-28 pt-10 md:pt-24 pb-10 overflow-x-scroll slider-hidden-scrollbar">
              {stadiumData?.map((sd, index) => (
                <ActionCard key={index} heading={sd.heading} list={sd.list} />
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
      </div>
    </>
  );
};

const AnouncementView = () => {
  return (
    <div className="announcement-view text-white flex justify-between">
      <div className="announcement-heading flex flex-col">
        <span className="text-3xl md:text-5xl">Announcement</span>
        <span className="text-lg md:text-2xl">
          Get Ready to Roll—Exciting Skating Event Ahead
        </span>
        <div className="announcement-card-container space-y-1">
          {stadiumData?.map((sd, index) => (
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
      <div className="flex items-center pl-20 hidden md:flex">
        <img width={"100%"} src="race.png" />
      </div>
    </div>
  );
};

const FreedomView = () => {
  return (
    <div className="py-10 md:py-40">
      <div className="freedom-card rounded-2xl h-auto md:h-96 w-auto p-4 py-6 md:p-10 flex flex-col md:flex-row justify-between">
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
    </div>
  );
};

const PictureView = () => {
  return (
    <>
      <div className="flex w-60 flex-col space-y-4 shrink-0">
        <img className="h-80 rounded-2xl" src="picture1.png" />
        <img className="h-36 rounded-2xl" src="picture1.png" />
      </div>
      <div className="flex items-center shrink-0">
        <img className="h-80 rounded-2xl" src="picture1.png" />
      </div>
      <div className="flex w-60 flex-col space-y-4 shrink-0">
        <img className="h-36 rounded-2xl" src="picture1.png" />
        <img className="h-80 rounded-2xl" src="picture1.png" />
      </div>
      <div className="flex items-center shrink-0">
        <img className="h-80 rounded-2xl" src="picture1.png" />
      </div>
      <div className="flex w-60 flex-col space-y-4 shrink-0">
        <img className="h-80 rounded-2xl" src="picture1.png" />
        <img className="h-36 rounded-2xl" src="picture1.png" />
      </div>
      <div className="flex w-60 h-full items-center shrink-0">
        <img
          className="rounded-2xl"
          style={{
            height: "480px",
          }}
          src="picture1.png"
        />
      </div>
      <div className="flex w-60 flex-col space-y-4 shrink-0">
        <img className="h-44 rounded-2xl" src="picture1.png" />
        <img className="h-72 rounded-2xl" src="picture1.png" />
      </div>
    </>
  );
};

const AchievementView = () => {
  return (
    <div className="flex flex-col">
      <strong className="text-4xl md:text-6xl">Achievement</strong>
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
    </div>
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
      <Movie />
      <SpacedSection zIndex={0}>
        <StatisticCard cardData={statisticData} />
      </SpacedSection>

      <SpacedSection>
        <ProductView isMobile={isMobile}></ProductView>
        <ProfileCardView></ProfileCardView>
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
    </>
  );
}
