import { useState, useEffect } from "react";
import "./profileCard.scss";
import SliderControl from "./sliderControls";
import { AnimatePresence, motion } from "framer-motion";
import AnimatedSpan from "../animatedDiv/animatedSpan";

const profileData = [
  {
    description:
      "A skating coach plays many roles: advisor, mentor, trainer, and unwavering supporter. From teaching the basics to guiding advanced training, they shape skaters' journeys at every stage. Coaches are dedicated to turning dreams into reality, standing by their students as both teacher and cheerleader.",
    imgSrc: "profile1.png",
    mobSrc: "profile1.png",
    scale: 1,
    mScale: 1,
    customElements: "",
  },
  {
    description:
      "A skating coach plays many roles: advisor, mentor, trainer, and unwavering supporter. From teaching the basics to guiding advanced training, they shape skaters' journeys at every stage. Coaches are dedicated to turning dreams into reality, standing by their students as both teacher and cheerleader.",
    imgSrc: "rahul.png",
    mobSrc: "rahul.png",
    scale: 1.4,
    mScale: 1.2,
    bottomOrigin: true,
    customElements: "",
  },
  {
    description:
      "A skating coach plays many roles: advisor, mentor, trainer, and unwavering supporter. From teaching the basics to guiding advanced training, they shape skaters' journeys at every stage. Coaches are dedicated to turning dreams into reality, standing by their students as both teacher and cheerleader.",
    imgSrc: "profile2.jpeg",
    mobSrc: "mobImage.png",
    scale: 1.4,
    mScale: 1.2,
    bottomOrigin: false,
    customElements: "rounded-tl-3xl rounded-b-3xl ",
  },
  {
    description:
      "A skating coach plays many roles: advisor, mentor, trainer, and unwavering supporter. From teaching the basics to guiding advanced training, they shape skaters' journeys at every stage. Coaches are dedicated to turning dreams into reality, standing by their students as both teacher and cheerleader.",
    imgSrc: "profile3.jpeg",
    mobSrc: "profile3.jpeg",
    scale: 1.2,
    mScale: 1.2,
    bottomOrigin: false,
    customElements: "rounded-2xl w-1/2",
  },
  {
    description:
      "Pune has been felicitated with the most prestigious Sports award of Maharashtra State - Shiv Chhatrapati Award, 'Best Skating Coach for the year 2020-2021'. He has 36 years of skating and professional coaching experience. Multiple times National & International medalist, he is the only skater in India to win in all four disciplines - Speed, Artistic Solo, Pair Skating and Roller Hockey RSFI Nationals.",
    imgSrc: "profile5.png",
    mobSrc: "profile5.png",
    scale: 1.3,
    mScale: 1.4,
    bottomOrigin: false,
    customElements: "w-3/5",
  },
];

export default function ProfileCard({ isMobile }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(0);

  const size = profileData.length;
  const {
    description,
    imgSrc,
    scale,
    mScale,
    bottomOrigin,
    customElements,
    mobSrc,
  } = profileData[currentIndex];

  useEffect(() => {
    setPreviousIndex(currentIndex);
  }, [currentIndex]);

  const isNext = currentIndex > previousIndex;

  return (
    <AnimatePresence>
      <div className="profile-card h-auto md:h-500 w-full flex flex-col md:flex-row relative">
        <div className="flex items-end w-full px-5 justify-center">
          <motion.img
            initial={{
              opacity: 0,
              scale: isMobile ? mScale : scale,
              x: isNext ? (isMobile ? -10 : -200) : isMobile ? 10 : 100,
            }}
            animate={{
              opacity: 1,
              scale: isMobile ? mScale : scale,
              x: 0,
            }}
            exit={{
              opacity: 0,
              scale: isMobile ? mScale : scale,
            }}
            transition={{
              duration: 0.8,
            }}
            key={animationKey}
            className={`object-contain md:object-fill transform origin-center  ${
              bottomOrigin ? "md:origin-bottom" : "md:origin-center"
            } ${customElements} `}
            src={isMobile ? mobSrc : imgSrc}
            alt="Profile"
          />
        </div>
        <div className="overflow-hidden md:overflow-visible py-10 w-full md:w-3/4 px-5 lg:px-14 flex flex-col justify-between">
          <motion.div
            key={animationKey}
            className="flex flex-col overflow-hidden"
          >
            <AnimatedSpan
              duration="0.7"
              isNext={isNext}
              isMobile={isMobile}
              className="text-4xl lg:text-6xl"
            >
              <strong>Rahul</strong> Rane
            </AnimatedSpan>
            <AnimatedSpan
              duration="1"
              isNext={isNext}
              className="text-md lg:text-3xl pt-2"
            >
              Managing Director at <strong>LAZERXTECH</strong>
            </AnimatedSpan>
            <AnimatedSpan
              duration="1.1"
              isNext={isNext}
              className="text-xs lg:text-xl pt-2"
            >
              {description}
            </AnimatedSpan>
            <AnimatedSpan isNext={isNext} duration="1.4" className="pt-2">
              Read More
            </AnimatedSpan>
          </motion.div>
          <SliderControl
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
            size={size}
            setAnimationKey={setAnimationKey}
          ></SliderControl>
        </div>
      </div>
    </AnimatePresence>
  );
}
