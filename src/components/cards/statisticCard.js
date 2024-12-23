import { motion, useInView } from "framer-motion";
import HeaderDiv from "../animatedDiv/headerDiv";

export default function StatisticCard({ cardData }) {
  const cardLength = cardData.length;
  const divideWidth = 100 / cardLength;

  return (
    <>
      <HeaderDiv
        style={{
          backgroundColor: "#022359",
        }}
        className="slider-hidden-scrollbar flex justify-between py-10 overflow-scroll rounded-b-2xl rounded-tl-2xl"
      >
        {cardData && (
          <>
            {cardData?.map((sc, index) => (
              <>
                <div
                  className="px-5  min-w-72 transition-transform duration-300 ease-in-out"
                  style={{
                    borderRight: index != 3 && "1px solid #022f77",
                  }}
                  key={sc.id}
                >
                  <div className="flex">
                    <img src={sc.icon} className="h-10 w-10" />
                    <div className="pl-2 xl:pl-5 font-bold">{sc.heading}</div>
                  </div>
                  <div className="pt-3 font-extralight px-2">{sc.summary}</div>
                </div>
              </>
            ))}
          </>
        )}
      </HeaderDiv>
    </>
  );
}
