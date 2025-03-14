import { delay, motion, useInView } from "framer-motion";
import AchievementView from "../Achievement/achievemntView";
import HeaderDiv from "../animatedDiv/headerDiv";
import ProfileCard from "../cards/profileCard";
import SpacedSection from "../spacedSection/spacedSection";
import { useEffect, useRef, useState } from "react";
import HeaderView from "../animatedDiv/headerView";

const LineAnimation = ({
  spanDelay,
  lineDelay,
  duration,
  top = false,
  start = false,
  end = false,
  isMobile,
  text,
  year,
  isInView,
}) => {
  return (
    <div
      style={{
        width: start || end ? "9%" : "20%",
      }}
      className="flex flex-col origin-left justify-center items-start h-80"
    >
      {top ? (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={
            isInView
              ? {
                  opacity: 1,
                }
              : {}
          }
          transition={{
            delay: spanDelay - 2,
          }}
          className={`${
            start ? "invisible" : ""
          } relative w-auto h-6 md:h-auto`}
        >
          <div
            style={{
              border: "2px solid #22caed",
            }}
            className="translate-y-4 md:translate-y-2.5  h-4 w-4 md:h-5 md:w-5 flex justify-center items-center  rounded-full bg-transparent"
          >
            <div
              style={{
                backgroundColor: "#22caed",
              }}
              className="h-2 w-2 md:h-3 md:w-3 rounded-full"
            ></div>
          </div>
          <motion.div
            initial={{
              y: 10,
            }}
            animate={isInView ? { y: isMobile ? 30 : 0 } : {}}
            transition={{
              delay: spanDelay - 2,
            }}
            className="absolute -top-28 flex flex-col"
          >
            <span className="w-20 -translate-x-8 font-light text-gray-800 text-center text-5xs md:text-xs">
              <span>{text}</span>
            </span>
            <span>
              <img
                src="arrowUp.png"
                className="origin-bottom w-6 h-10 -translate-x-0.5"
              />
            </span>
          </motion.div>
        </motion.div>
      ) : (
        <motion.span
          initial={{
            opacity: 0,
            x: isMobile ? -8 : -10,
            y: isMobile ? -8 : -16,
          }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  x: isMobile ? -8 : -10,
                  y: isMobile ? -12 : -24,
                }
              : {}
          }
          transition={{
            delay: spanDelay - 2,
          }}
          style={{
            color: "#3b5ff0",
          }}
          className={`${
            start ? "invisible" : ""
          } h-5 w-5 rounded-full -translate-y-5  font-bold text-xs md:text-base`}
        >
          {year}
        </motion.span>
      )}
      <motion.span
        initial={{
          width: "10px",
          opacity: 0,
        }}
        animate={
          isInView
            ? {
                width: "100%",
                opacity: 1,
              }
            : {}
        }
        transition={{
          duration: duration,
          delay: lineDelay,
        }}
        style={{
          height: "1px",
          backgroundColor: "#3b5ff0",
        }}
        className="origin-left"
      ></motion.span>
      {!top ? (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={
            isInView
              ? {
                  opacity: 1,
                }
              : {}
          }
          transition={{
            delay: spanDelay - 2,
          }}
          className={`${start ? "invisible" : ""} relative`}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            delay={{ delay: spanDelay + 0.5 }}
            style={{
              border: "2px solid #22caed",
            }}
            className="-translate-y-2 md:-translate-y-2.5 h-4 w-4 md:h-5 md:w-5 flex justify-center items-center rounded-full bg-transparent"
          >
            <div
              style={{
                backgroundColor: "#22caed",
              }}
              className="h-2 w-2 md:h-3 md:w-3 rounded-full"
            ></div>
          </motion.div>
          <motion.div
            initial={{ y: -10 }}
            animate={isInView ? { y: 0 } : {}}
            delay={{ delay: spanDelay + 0.5 }}
            className="absolute top-20 flex flex-col"
          >
            <span>
              <img
                src="arrowUp.png"
                className="origin-top rotate-180 w-6 h-10 -translate-x-1 md:translate-x-0"
              />
            </span>
            <span className="w-20 md:w-32 -translate-x-8 md:-translate-x-12 -translate-y-8 font-light text-gray-800 text-center text-5xs md:text-xs">
              {text}
            </span>
          </motion.div>
        </motion.div>
      ) : (
        <motion.span
          initial={{
            opacity: 0,
            x: isMobile ? -8 : -10,
            y: 16,
          }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  x: isMobile ? -8 : -10,
                  y: 20,
                }
              : {}
          }
          transition={{
            delay: spanDelay - 2,
          }}
          style={{
            color: "#3b5ff0",
          }}
          className={`h-5 w-5 rounded-full translate-y-3 font-bold text-xs md:text-base`}
        >
          {year}
        </motion.span>
      )}
    </div>
  );
};

const CardView = () => {
  return (
    <HeaderDiv
      style={{
        height: "550px",
      }}
      className="bg-card-color flex md:flex-row flex-col"
    >
      <img
        src="https://res.cloudinary.com/djdyzefbx/image/upload/v1738503204/profile1_3_11zon_lsufig.png"
        className="origin-bottom md:scale-110  md:translate-x-20"
      />
      <div className="h-full md:h-auto flex flex-col items-center justify-center w-full">
        <span className="text-7xl md:text-9xl font-bold">Rahul Rane</span>
        <span className="text-xl md:text-4xl tracking-wider">
          Managing Director at LAZERXTECH
        </span>
      </div>
    </HeaderDiv>
  );
};

const TextView = () => {
  return (
    <div className="flex flex-col space-y-5 text-justify md:text-left">
      <span>
        When you think about coaching the roles of a skating coach seem
        unlimited.
      </span>
      <span>
        They are there to serve as an adviser, an assessor, a counselor, a
        demonstrator, friend, mentor, an endless fountain of wisdom and
        knowledge, role model, your manager and your number one supporter.
        Furthermore, a coach's job seems never-ending. They are needed in the
        "newbie" stages of a sport to teach an skater the rules of the game, how
        they'll train and what is important to overall success.
      </span>
      <span>
        Then, once the skater has shown that they understand the basics of their
        sport, then the coach must work hand-in-hand with the trainer to discuss
        and come to an agreement on what training methods and requirements are
        appropriate. Finally, after an athlete understands the ins and outs of
        their sport, a coach is still needed to serve as a mentor and
        "cheerleader" of sorts whenever required at times.
      </span>
      <span>A coach is working hard to make his students dreams come true</span>
    </div>
  );
};

const StickyTextView = () => {
  return (
    <div
      className="leading-none text-7xl md:text-22xl"
      style={{
        color: "rgba(255,255,255,0.05)",
      }}
    >
      Rahul Rane
    </div>
  );
};

export default function About() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [animationKey, setAnimationKey] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const reloadAnimation = () => {
    setAnimationKey((prevKey) => prevKey + 1);
  };

  return (
    <>
      <SpacedSection customStyling="pt-10 md:-pt-4 flex items-end justify-center translate-y-24 md:translate-y-40">
        <HeaderView
          heading={"ABOUT US"}
          subheading={"Let me to introduce myself"}
        ></HeaderView>
      </SpacedSection>
      <SpacedSection
        position="sticky"
        customStyling="flex justify-center"
        customPadding="px-2 pt-20 md:pt-10"
        backgroundColor="transparent"
      >
        <StickyTextView></StickyTextView>
      </SpacedSection>
      <SpacedSection backgroundColor="transparent">
        <CardView></CardView>
      </SpacedSection>
      <SpacedSection
        backgroundColor="transparent"
        customStyling="pt-14 text-xl font-extralight"
      >
        <TextView></TextView>
      </SpacedSection>
      <SpacedSection backgroundColor="transparent" customStyling="pt-14">
        <div
          style={{
            height: "665px",
            background: "linear-gradient(180deg, #22caed, #3b5ff0)",
          }}
          className="flex flex-col justify-center items-center px-4 md:px-24 rounded-b-2xl rounded-tl-2xl relative overflow-hidden"
        >
          <div className="text-lg md:text-3xl -translate-y-10 tracking-widest font-semibold text-center z-10">
            GROUP OF COMPANIES SINCE 1989
          </div>
          <div
            style={{
              background: "linear-gradient(180deg, #22caed, #3b5ff0)",
            }}
            className="absolute rounded-full h-44 w-44 left-0 bottom-0 translate-x-8 -translate-y-2 shadow-md blur-md"
          ></div>

          <div
            style={{
              background: "linear-gradient(180deg, #22caed, #3b5ff0)",
            }}
            className="absolute rounded-full h-80 w-80 right-0 top-0 -translate-x-2 -translate-y-12 shadow-md blur-lg"
          ></div>
          <div
            className="bg-white shadow-xl w-full -translate-y-3 flex justify-between relative"
            style={{
              height: "450px",
              borderRadius: "30px 0px 30px 30px",
              zIndex: 100,
            }}
          >
            <div
              style={{
                background: "linear-gradient(180deg, #22caed, #3b5ff0)",
              }}
              className="absolute rounded-full h-12 w-12 -translate-x-6 md:h-20 md:w-20 left-0 top-0 md:-translate-x-10 md:translate-y-16 shadow-md"
            ></div>
            <div
              style={{
                background: "linear-gradient(180deg, #22caed, #3b5ff0)",
              }}
              className="absolute rounded-full h-16 w-16 translate-x-6 translate-y-6 md:h-36 md:w-36 right-0 bottom-0 md:translate-x-16 md:translate-y-10 shadow-md"
            ></div>
            <img
              src="https://res.cloudinary.com/djdyzefbx/image/upload/v1738504019/rahul_4_11zon_rbmlho.png"
              className="w-1/2 xl:block hidden scale-125 origin-bottom -translate-x-16 filter drop-shadow-2xl"
            />
            <div className="w-full xl:w-1/2 text-black flex flex-col items-center justify-center">
              <div
                key={animationKey}
                ref={ref}
                className="w-full overflow-hidden flex justify-start xl:-translate-x-20 -translate-y-10 px-4 md:px-4"
              >
                <LineAnimation
                  spanDelay={1}
                  lineDelay={0}
                  duration={1}
                  start={true}
                  isMobile={isMobile}
                  text={
                    "started dealing in skate products without any company information"
                  }
                  year={1989}
                  isInView={isInView}
                />
                <LineAnimation
                  spanDelay={3}
                  lineDelay={2}
                  duration={1}
                  isMobile={isMobile}
                  text={
                    "started dealing in skate products without any company information"
                  }
                  year={1989}
                  isInView={isInView}
                />
                <LineAnimation
                  spanDelay={5}
                  lineDelay={4}
                  duration={1}
                  isMobile={isMobile}
                  top={true}
                  text={"Hyper Wheels USA (Distributer) "}
                  year={1990}
                  isInView={isInView}
                />
                <LineAnimation
                  spanDelay={7}
                  lineDelay={6}
                  duration={1}
                  isMobile={isMobile}
                  text={"RCTeamToppers (Partnership)"}
                  year={1991}
                  isInView={isInView}
                />
                <LineAnimation
                  spanDelay={9}
                  lineDelay={8}
                  duration={1}
                  isMobile={isMobile}
                  top={true}
                  text={"Team Topper Skating Academy (MD)"}
                  year={1996}
                  isInView={isInView}
                />
                <LineAnimation
                  spanDelay={11}
                  lineDelay={10}
                  duration={1}
                  end={true}
                  text={"Roxa Skates Italy (Distributor)"}
                  year={1997}
                  isMobile={isMobile}
                  isInView={isInView}
                />
              </div>
              <div
                onClick={reloadAnimation}
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.1)",
                  borderRadius: "14px 0px 14px 14px",
                }}
                className="px-5 py-2 flex items-center space-x-2 text-gray-400 text-md font-extralight hover:text-gray-800 cursor-pointer hover:scale-110 ease-in duration-200 hover:shadow-md xl:-translate-x-20"
              >
                <img src="replay.png" className="h-5 w-5" />
                <span>Reload</span>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-12 flex flex-col font-extralight text-xl space-y-2">
          <span>LAZERXTECH Established in the year 2008,</span>
          <span>
            We at LAZER X TECH, are engaged in the sphere of Manufacturing,
            Exporting, Importing and Trading of a various ranges of Skates and
            Cycles with complete range of associated accessories.
          </span>
          <span>
            Our range includes Quad Skates Packages, Inline Skate Packages,
            Skates Wheel, Skate Boot, Skate Frames, Skate Bearings, Skin suits,
            Skate Bags,
          </span>
        </div>
      </SpacedSection>
      <SpacedSection
        backgroundColor="transparent"
        customStyling="pt-40"
        customPadding=""
      >
        <AchievementView inHome={true}></AchievementView>
      </SpacedSection>
    </>
  );
}
