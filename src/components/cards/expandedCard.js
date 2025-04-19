import { useState } from "react";
import "./actionCard.scss";
import { AnimatePresence, motion } from "framer-motion";

export default function ExpandedCard({
  heading,
  highlightList,
  list,
  defaultExpanded = "disabled",
  isActive,
  download,
}) {
  const [expanded, setExpanded] = useState(defaultExpanded);

  return (
    <AnimatePresence>
      <motion.div
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className={`action-card-view relative flex text-base flex-col w-full hover:duration-300 ease-in-out hover:duration-300 ease-in-out py-4 px-2 ${expanded ? "bg-blue-900 px-4 md:px-8 md:py-8" : ""
          }  `}
      >
        <div className="action-card-heading pb-1 flex justify-between">
          {!defaultExpanded ? (
            <>
              {expanded ? (
                <h2 className="flex justify-between w-full">
                  <strong className="text-xl md:text-2xl">{heading}</strong>
                  <strong className="shrink-0 absolute right-0 top-0 py-4 px-2">
                    <img
                      height={30}
                      width={30}
                      onClick={() => setExpanded(!expanded)}
                      src="arrowdown.png"
                      className=""
                    />
                  </strong>
                </h2>
              ) : (
                <>
                  <strong className="text-xl md:text-2xl flex">{heading}</strong>
                  <strong
                    className="shrink-0 absolute right-0 top-0 py-4 px-2"
                    onClick={() => setExpanded(!expanded)}
                  >
                    <img
                      height={30}
                      width={30}
                      onClick={() => setExpanded(!expanded)}
                      src="arrowdown.png"
                      className="rotate-180 "
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
            {highlightList != undefined ? (
              <>
                {list?.slice().map((lt, index) => (
                  <motion.span
                    key={lt} // Add key here for list rendering
                    className="text-lg pt-1 md:leading-6 flex"
                    style={{ color: "#84BED6" }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-white mt-1.5 md:mt-2 shrink-0"></div>{" "}
                    <span className="pl-3">
                      <span className="font-bold text-white">
                        {highlightList[index]}
                      </span>
                      : {lt}
                    </span>
                  </motion.span>
                ))}
              </>
            ) : (
              <>
                {list?.slice(1).map((lt) => (
                  <motion.span
                    key={lt} // Add key here for list rendering
                    className="text-base md:text-lg md:pt-2"
                    style={{ color: "#84BED6" }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                  >
                    {lt}
                  </motion.span>
                ))}
              </>
            )}
          </>
        ) : (
          <>
            {list && (
              <motion.span
                className="pt-0 md:pt-2 text-lg md:text-xl flex"
                style={{ color: "#84BED6" }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
              >
                {list[0]} {download && (
                  <span> <a href={download} target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 -960 960 960"
                      fill="red"
                      className="ml-2 mt-1 cursor-pointer h-4 w-4 md:h-6 md:w-6"
                    >
                      <path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" />
                    </svg>
                  </a></span>
                )}
              </motion.span>
            )}
          </>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
