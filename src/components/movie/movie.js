import { useRef } from "react";
import LxtButton from "../buttons/lxtButton";
import SpacedSection from "../spacedSection/spacedSection";
import HeaderDiv from "../animatedDiv/headerDiv";
import ReactPlayer from "react-player";

export default function Movie({ isMobile }) {
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
        <div
          src="https://www.youtube.com/embed/JQbjS0_ZfJ0?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&disablekb=1"
          className="h-full w-full rounded-b-2xl rounded-tl-2xl overflow-hidden relative"
          allow="autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope;"
          allowFullScreen
        >
          <ReactPlayer
            url="https://youtu.be/hzE3Qm0szIw?si=LMTGbPIc_CurSUkX"
            playing
            muted
            controls={false}
            loop={true}
            width="100%"
            height="100%"
            style={{
              background:
                "linear-gradient(3.75deg, rgba(4, 44, 113, 0.8) 14.25%, #02173A 87.99%)",
              transform: isMobile ? "scale(5)" : "scale(2)",
              objectFit: "cover",
            }}
          >
            {" "}
          </ReactPlayer>
          <div
            className="absolute top-0 left-0 h-full w-full"
            style={{
              background:
                "linear-gradient(3.75deg, rgba(4, 44, 113, 0.8) 14.25%, #02173A 87.99%)",
            }}
          ></div>
        </div>
        {/* <video
          src="https://www.youtube.com/watch?v=OOevVQwQ-LM"
          className="h-full w-full object-cover z-1 rounded-b-2xl rounded-tl-2xl"
          muted
          autoPlay
          loop
        ></video> */}
        <SpacedSection>
          <HeaderDiv className="absolute bottom-12 border-box w-3/4  space-y-2 md:space-y-6 flex flex-col">
            <span className="text-xs md:text-xl tracking-[0.25em]">
              DREAM BUILDER
            </span>
            <span className="text-xl md:text-8xl">Rahul Rane</span>
            <span className="text-lg md:text-4xl">
              Managing Director at LAZERXTECH
            </span>
            <span className="text-xs md:text-xl w-full md:w-1/2">
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
