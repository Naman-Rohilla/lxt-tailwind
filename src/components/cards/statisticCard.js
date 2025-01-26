import { motion, useInView } from "framer-motion";
import HeaderDiv from "../animatedDiv/headerDiv";
import { useEffect, useRef } from "react";
import "./statisticCard.scss";

export default function StatisticCard({ cardData }) {
  const cardLength = cardData.length;
  const divideWidth = 100 / cardLength;

  return (
    <>
      <HeaderDiv
        autoSlide={true}
        style={{
          backgroundColor: "#022359",
        }}
        className={
          "slider-hidden-scrollbar flex justify-between py-5 md:py-10 overflow-scroll rounded-b-2xl rounded-tl-2xl"
        }
      >
        {cardData && (
          <>
            {cardData?.map((sc, index) => (
              <>
                <div
                  className="px-5 min-w-72 transition-transform duration-300 ease-in-out"
                  style={{
                    borderRight: index != 3 && "1px solid #022f77",
                  }}
                  key={sc.id}
                >
                  <div className="flex">
                    <img src={sc.icon} className="md:h-10 md:w-10 h-8 w-8" />
                    <div className="pl-2 xl:pl-5 font-bold md:text-base text-xs">
                      {sc.heading}
                    </div>
                  </div>
                  <div className="pt-3 font-extralight px-2 md:text-base text-xs">
                    {sc.summary}
                  </div>
                </div>
              </>
            ))}
          </>
        )}
      </HeaderDiv>
    </>
  );
}
