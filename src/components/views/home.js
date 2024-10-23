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

const footerObject = {
  heading: "Beginner",
  colorHeading: "Quad Skating",
  color: "red",
  description: "Master the essentials of Quad Skating",
};

const ProductView = () => {
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

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
      className="h-screen w-full sticky z-10"
    >
      hello
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

const WatchShopView = () => {
  return (
    <div className="watch-shop-view">
      <div className="img-left">
        <video
          height={715}
          width={"100%"}
          src="watchshop/watch6.mp4"
          autoPlay
          loop
          muted
          style={{ objectFit: "cover" }}
        />
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
        <img height={715} width={"100%"} src="watchshop/watch4.png" />
        <img />
      </div>
    </div>
  );
};

const StadiumView = () => {
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
            <div className="flex flex-row md:flex-col space-x-4 md:space-x-0 md:space-y-28 pt-10 md:pt-24 pb-10 overflow-x-scroll">
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
          <WatchShopView />
        </div>
        <IphoneView />
      </div>
    </>
  );
};

export default function Home() {
  return (
    <>
      <Movie />
      <SpacedSection zIndex={0}>
        <StatisticCard cardData={statisticData} />
      </SpacedSection>

      <SpacedSection>
        <ProductView></ProductView>
        <ProfileCardView></ProfileCardView>
      </SpacedSection>

      <div className="about-card-view sticky top-0 min-h-screen h-top w-full flex flex-col items-end border-box">
        <StadiumView />
      </div>
    </>
  );
}
