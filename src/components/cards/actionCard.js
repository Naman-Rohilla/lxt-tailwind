import { useState } from "react";
import "./actionCard.scss";

export default function ActionCard({ heading, list, defaultExpanded = true }) {
  const [expanded, setExpanded] = useState(defaultExpanded);
  return (
    <>
      <div
        style={{
          // height: expanded ? "auto" : "",
          // paddingBlock: expanded ? "20px" : "30px",
          // paddingBottom: expanded ? "80px" : "30px",
          // paddingInline: expanded ? "50px" : "",
          backgroundColor: expanded ? "#022359" : "",
        }}
        className={`action-card-vie shrink-0 flex text-base flex-col w-full ${
          expanded
            ? "px-8 md:px-10 pb-20 pt-10"
            : "px-0 md:px-4 py-3 pb-5 md:py-10 md:pb-10"
        }  `}
      >
        <div className="action-card-heading pb-4 flex justify-between">
          {!defaultExpanded ? (
            <>
              {expanded ? (
                <h2 className="flex justify-between w-full">
                  <strong className="text-xl md:text-2xl">{heading}</strong>
                  <img
                    height={30}
                    width={30}
                    onClick={() => setExpanded(!expanded)}
                    src="arrowdown.png"
                  />
                </h2>
              ) : (
                <>
                  <strong className="text-xl md:text-2xl">{heading}</strong>
                  <strong onClick={() => setExpanded(!expanded)}>
                    <img
                      height={30}
                      width={30}
                      onClick={() => setExpanded(!expanded)}
                      src="arrowdown.png"
                      className="rotate-180"
                    />
                  </strong>
                </>
              )}
            </>
          ) : (
            <span className="">
              <span className="md:pr-20 text-md md:text-2xl">{heading}</span>
            </span>
          )}
        </div>
        {expanded ? (
          <>
            {list?.map((lt) => (
              <span
                className="text-6xs md:text-base pt-4 md:leading-6 leading-4"
                style={{
                  color: "#84BED6",
                }}
              >
                {lt}
              </span>
            ))}
          </>
        ) : (
          <>
            {list && (
              <span
                className="pt-0 md:pt-2 text-lg md:text-xl"
                style={{
                  color: "#84BED6",
                }}
              >
                {list[0]}
              </span>
            )}
          </>
        )}
      </div>
    </>
  );
}
