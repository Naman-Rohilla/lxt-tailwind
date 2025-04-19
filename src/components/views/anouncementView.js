import HeaderDiv from "../animatedDiv/headerDiv";
import LxtButton from "../buttons/lxtButton";
import ActionCard from "../cards/actionCard";
import "../../styles/announcementView.scss";
import {
  announcementData,
  announcementTypeData,
} from "../../jsons/productData";
import SpacedSection from "../spacedSection/spacedSection";
import HeaderView from "../animatedDiv/headerView";
import { useEffect, useState } from "react";
import FreedomView from "./freedomView";
import { AnimatePresence, motion } from "framer-motion";
import ExpandedCard from "../cards/expandedCard";
import SummerText from "../animatedDiv/summerText";

const AnouncementView = ({ inHome = false }) => {
  const [selectedType, setSelectedType] = useState("All");
  const [openNav, setOpenNav] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    console.log(isMobile, "isMobile");
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const announcementStats = announcementTypeData.map((atd) => {
    const filteredAnnouncements = announcementData.filter((ad) =>
      ad.type.includes(atd.name)
    );
    return {
      name: atd.name,
      count: filteredAnnouncements.length,
    };
  });

  return (
    <SpacedSection customStyling={`${inHome ? "" : "pt-24"}`}>
      {inHome ? (
        <>
          <HeaderDiv className="text-3xl md:text-5xl font-extrabold pt-14">
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
        </>
      ) : (
        <>
          <HeaderView
            heading={"Announcement"}
            subheading={"Get Ready to Roll—Exciting Skating Event Ahead"}
          ></HeaderView>

          <div
            style={{
              background:
                "linear-gradient(146.18deg, #9CDAFF 17.06%, #DFFDFF 74.12%)",
            }}
            className=" h-[592px] w-full flex md:flex-row flex-col justify-between rounded-b-2xl rounded-tl-2xl relative"
          >
            <span className="hidden md:flex"></span>
            <div className="flex flex-col justify-center px-5 bottom-0 md:top-0 md:pl-20 md:pr-20 2xl:pl-60 2xl:pr-60 md:pt-20 absolute text-[#0065B3]">
              <span className="text-6xl md:text-8xl w-full font-bold">
                23<sup>rd</sup> LXT
              </span>
              <span className="text-5xl md:text-8xl w-full font-bold">
                RACE
              </span>
              <span className="pt-2 text-2xl ">
                In fond remembrance of Rahul Sir on his birthday.
              </span>
              <span className="pt-4 md:pt-10 mb-10 md:mb-0">
                <LxtButton text={"RESGISTER NOW"} color={"red"}></LxtButton>
              </span>
            </div>
            <img
              src="https://res.cloudinary.com/djdyzefbx/image/upload/v1738499129/muhvamxi9jqbocxyc6hn.png"
              className="h-[1275px] w-full md:w-auto -translate-y-6 md:-translate-y-20"
            />
            <img
              src="https://res.cloudinary.com/djdyzefbx/image/upload/v1738500741/watch5_6_11zon_kdmvvz.png"
              className="absolute top-0 left-0 origin-bottom -translate-x-5 w-60 pt-24 -rotate-90 flex md:hidden"
            />
          </div>

          <HeaderDiv className="text-3xl md:text-5xl font-extrabold pt-14">
            Announce
            <span
              style={{
                color: "#0C6AB0",
              }}
            >
              ment
            </span>
            <span className="float-right pt-2 relative flex md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#e8eaed"
                onClick={() => setOpenNav(!openNav)}
              >
                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
              </svg>

              {openNav && (
                <>
                  <div className="absolute top-0 right-0 pt-1 px-2 mt-10 z-20 text-black">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="14px"
                      viewBox="0 -960 960 960"
                      width="14px"
                      fill="black"
                      onClick={() => setOpenNav(false)}
                    >
                      <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                    </svg>
                  </div>
                  <div className="h-auto bg-white w-80 absolute right-0 top-0 mt-10 z-10 rounded-b-2xl rounded-tl-2xl flex flex-col text-sm font-light px-6 py-4 space-y-2">
                    {announcementStats.map((atd, index) => (
                      <>
                        {atd.name == selectedType ? (
                          <AnimatePresence>
                            <motion.span
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{
                                duration: 0.5,
                              }}
                              className="bg-blue-800 rounded-b-lg rounded-tl-lg pl-4 py-2 focus:duration-300 ease-in-out"
                            >
                              {atd.name}
                            </motion.span>
                          </AnimatePresence>
                        ) : (
                          <span
                            onClick={() => setSelectedType(atd.name)}
                            className="cursor-default hover:text-white hover:duration-300 ease-in-out text-blue-800"
                          >
                            {atd.name}
                          </span>
                        )}
                      </>
                    ))}
                  </div>
                </>
              )}
            </span>
          </HeaderDiv>
          <div className="relative h-14 hidden md:block">
            <div
              className="bg-white rounded-full w-full h-14 mt-5  relative"
              style={{
                zIndex: -1,
              }}
            ></div>

            <div
              className="w-full h-14 bg-transparent absolute flex items-center space-x-5 pl-10 text-xs top-0"
              style={{
                zIndex: 999,
              }}
            >
              {announcementStats.map((atd, index) => (
                <>
                  {atd.name == selectedType ? (
                    <span className="bg-blue-800 rounded-full px-4 py-2">
                      {atd.name}
                      {atd.name == "All"
                        ? " (" + announcementData.length + ")"
                        : " (" + atd.count + ")"}
                    </span>
                  ) : (
                    <span
                      onClick={() => setSelectedType(atd.name)}
                      className="cursor-default hover:bg-blue-800 hover:text-white hover:duration-300 ease-in-out border text-blue-800 border-blue-800 rounded-full px-4 py-2"
                    >
                      {atd.name}
                      {atd.name == "All"
                        ? " (" + announcementData.length + ")"
                        : " (" + atd.count + ")"}
                    </span>
                  )}
                </>
              ))}
            </div>
          </div>
        </>
      )}

      <HeaderDiv className="announcement-view relative text-white flex justify-between h-auto space-x-10">
        <div className="announcement-heading flex flex-col">
          <div className="announcement-card-container space-y-8">
            {announcementData
              ?.filter((ad, id) => {
                if (inHome) {
                  if (id < 3) {
                    return ad;
                  }
                } else if (selectedType == "All") {
                  return ad;
                } else if (ad.type.includes(selectedType)) {
                  return ad;
                }
              })
              .filter((ad1, index) => {
                if (isMobile) {
                  return ad1;
                } else if (index < 5) {
                  return ad1;
                }
              })
              .map((sd, index) => (
                <ExpandedCard
                  key={index}
                  heading={sd.heading}
                  list={sd.list}
                  download={sd?.download}
                  defaultExpanded={false}
                ></ExpandedCard>
              ))}
          </div>
          {inHome && (
            <span className="pt-2 md:pt-8 flex justify-end md:justify-start">
              <LxtButton
                text={"KNOW MORE"}
                color={"transparent"}
                borderColor="white"
                navigationLink="/announcement"
              />
            </span>
          )}
        </div>
        <div className="hidden md:flex flex-col pt-10 space-y-8">
          {!inHome && (
            <>
              {announcementData
                ?.filter((ad, id) => {
                  if (selectedType == "All") {
                    return ad;
                  } else if (ad.type.includes(selectedType)) {
                    return ad;
                  }
                })
                .filter((ad1, index) => {
                  if (index >= 5 && index < 10) {
                    return ad1;
                  }
                })
                .map((sd, index) => (
                  <ExpandedCard
                    key={index}
                    heading={sd.heading}
                    list={sd.list}
                    download={sd?.download}
                    defaultExpanded={false}
                  ></ExpandedCard>
                ))}
            </>
          )}
        </div>
        {inHome && (
          <div className="flex absolute -top-20 w-1/2 right-0 items-center pl-4 hidden md:flex">
            <img
              width={"100%"}
              src="https://res.cloudinary.com/djdyzefbx/image/upload/v1738503706/race_5_11zon_dko8r4.png"
            />
          </div>
        )}
      </HeaderDiv>
      <FreedomView></FreedomView>
    </SpacedSection>
  );
};

export default AnouncementView;
