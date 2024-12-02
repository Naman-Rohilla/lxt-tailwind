import { useEffect, useRef, useState } from "react";
import LxtButton from "../buttons/lxtButton";
import SpacedSection from "../spacedSection/spacedSection";
import HeaderDiv from "../animatedDiv/headerDiv";
import ReactPlayer from "react-player";

const movieUrl = [
  "https://youtu.be/hzE3Qm0szIw?si=LMTGbPIc_CurSUkX",
  "https://youtu.be/nd4D-hcyEAQ?si=J1OfQGNuljIRZQvl",
  "https://youtu.be/WFl39V88KyM?si=5mUv2v_aoCdyRPxq",
  "https://youtu.be/TmfVBdC85yU?si=lmgelF34RgzZCAIw",
];

export default function Movie({ isMobile }) {
  const [state, setState] = useState(1);
  const [isVideoReady, setIsVideoReady] = useState(false);

  let link = movieUrl[state - 1];

  function increamentState() {
    if (state < movieUrl.length) {
      setState(state + 1);
    }
  }

  function decreamentState() {
    if (state > 1) {
      setState(state - 1);
    }
  }

  function updateState(index) {
    setState(index);
  }

  return (
    <SpacedSection zIndex={0} customPadding={"px-4 md:px-6"}>
      <div className="h-screen pt-20 md:pt-24 pb-8 relative">
        {/* <iframe
          src="https://www.youtube.com/watch?v=JQbjS0_ZfJ0"
          className="h-screen w-full absolute z-10 top-0 left-0 rounded-b-2xl rounded-tl-2xl"
          allow="autoplay; fullscreen; picture-in-picture"
        >
          {" "}
        </iframe> */}
        <div className="h-full w-full rounded-b-2xl rounded-tl-2xl overflow-hidden relative">
          <ReactPlayer
            url={link}
            playing
            muted
            controls={false}
            loop={true}
            width="100%"
            height="100%"
            style={{
              transform: isMobile ? "scale(5)" : "scale(1.5)",
              objectFit: "cover",
              display: isVideoReady ? "" : "none",
            }}
            config={{
              youtube: {
                playerVars: {
                  modestbranding: 1,
                  showinfo: 0,
                  disablekb: 1,
                  rel: 0,
                },
              },
            }}
            onReady={() => setIsVideoReady(true)}
          >
            {" "}
          </ReactPlayer>

          <div
            className="absolute top-0 left-0 h-full w-full"
            style={{
              background:
                "linear-gradient(10.75deg, rgba(4, 44, 113, 0.8) 84.25%, #02173A 97.99%)",
            }}
          ></div>
          <div className="absolute bottom-7 md:bottom-20 right-0 pr-4 md:pr-14 2xl:pr-40">
            <div className="z-10 bg-black h-9 w-20 md:h-12 md:w-32 rounded-full flex items-center px-5 md:px-7 space-x-1">
              {Array.from(
                { length: movieUrl.length },
                (_, index) => index + 1
              ).map((num) => (
                <>
                  {state == num ? (
                    <span
                      key={num}
                      className="h-1 md:h-1.5 w-4 md:w-8 bg-white rounded-full"
                    ></span>
                  ) : (
                    <span
                      key={num}
                      onClick={() => updateState(num)}
                      className="h-1 md:h-1.5 w-1 md:w-1.5 bg-gray-50 rounded-full"
                    ></span>
                  )}
                </>
              ))}
            </div>
          </div>
        </div>
        {/* <video
          src="https://www.youtube.com/watch?v=OOevVQwQ-LM"
          className="h-full w-full object-cover z-1 rounded-b-2xl rounded-tl-2xl"
          muted
          autoPlay
          loop
        ></video> */}
        <div className="absolute hidden bottom-16 md:bottom-32 w-10 md:flex md:flex-col items-center right-0 2xl:left-3 space-y-4">
          <img className="h-16" src="follow.png" />
          <img className="h-3" src="insta.png" />
          <img className="h-3" src="twt.png" />
          <img className="h-3" src="fb.png" />
        </div>
        {state < movieUrl.length && (
          <div
            onClick={() => increamentState()}
            className="absolute md:flex hidden right-14 bottom-1/2 "
          >
            <img src="arrowright.svg" className="arrow p-4 rounded-full" />
          </div>
        )}
        {state > 1 && (
          <div
            onClick={() => decreamentState()}
            className="absolute md:flex hidden left-14 bottom-1/2 "
          >
            <img
              src="arrowright.svg"
              className="arrow p-4 rotate-180 rounded-full"
            />
          </div>
        )}
        <SpacedSection>
          <HeaderDiv className="absolute bottom-7 md:bottom-24 border-box w-3/4  space-y-2 md:space-y-3 flex flex-col">
            <span className="text-xs md:text-xl font-extralight tracking-[0.25em]">
              DREAM BUILDER
            </span>
            <span className="text-xl md:text-9xl">
              <span className="font-extrabold">Rahul</span>{" "}
              <span className="font-extralight">Rane</span>
            </span>
            <span className="text-lg md:text-4xl">
              <span className="font-extralight">Managing Director at </span>
              <span className="font-extrabold">LAZERXTECH</span>
            </span>
            <span className="text-xs md:text-xl w-full md:w-1/2 font-extralight">
              They are there to serve as an adviser, an assessor, a counsellor,
              a demonstrator, friend, mentor, an endless fountain of wisdom and
              knowledge, role model, your manager and your number one supporter.
            </span>
            <span className="space-x-2 md:space-x-4 pt-2">
              <LxtButton text={"READ MORE"} color={"red"} />
              <LxtButton
                text={"BECOME A COACH"}
                color={"transparent"}
                borderColor={"white"}
              />
            </span>
          </HeaderDiv>
        </SpacedSection>
      </div>
    </SpacedSection>
  );
}
