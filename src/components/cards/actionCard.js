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
        className="action-card-view flex text-base flex-col w-full px-8 md:px-10 pt-10 pb-20"
      >
        <div className="action-card-heading pb-4">
          {!defaultExpanded ? (
            <>
              {expanded ? (
                <h2>
                  <strong>{heading}</strong>
                  <img
                    height={30}
                    width={30}
                    onClick={() => setExpanded(!expanded)}
                    src="arrowdown.png"
                  />
                </h2>
              ) : (
                <>
                  <strong>{heading}</strong>
                  <strong onClick={() => setExpanded(!expanded)}>^</strong>
                </>
              )}
            </>
          ) : (
            <span>
              <strong className="pr-20">{heading}</strong>
              <span className="bg-red-100 invisible"></span>
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
                style={{
                  paddingTop: "10px",
                  color: "#84BED6",
                  fontSize: "1.3rem",
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
