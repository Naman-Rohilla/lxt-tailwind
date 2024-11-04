import { useState, useEffect } from "react";
import "./profileCard.scss";
import SliderControl from "./sliderControls";
import { AnimatePresence, motion } from "framer-motion";

const profileData = [
  {
    description:
      "A skating coach plays many roles: advisor, mentor, trainer, and unwavering supporter. From teaching the basics to guiding advanced training, they shape skaters' journeys at every stage.",
    imgSrc: "rahul.png",
  },
  {
    description:
      "Jane1 is a visionary leader driving innovation in the tech space. She has a passion for turning dreams into reality and shaping the future of technology.",
    imgSrc: "rahul.png",
  },
  {
    description:
      "Jane2 is a visionary leader driving innovation in the tech space. She has a passion for turning dreams into reality and shaping the future of technology.",
    imgSrc: "rahul.png",
  },
  {
    description:
      "Jane3 is a visionary leader driving innovation in the tech space. She has a passion for turning dreams into reality and shaping the future of technology.",
    imgSrc: "rahul.png",
  },
  {
    description:
      "Jane4 is a visionary leader driving innovation in the tech space. She has a passion for turning dreams into reality and shaping the future of technology.",
    imgSrc: "rahul.png",
  },
];

export default function ProfileCard({ isMobile }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(0);

  const size = profileData.length;
  const { description, imgSrc } = profileData[currentIndex];

  useEffect(() => {
    setPreviousIndex(currentIndex);
  }, [currentIndex]);

  const isNext = currentIndex > previousIndex;

  return (
    <AnimatePresence>
      <div className="profile-card h-auto flex flex-col md:flex-row relative">
        <div className="flex items-end w-full  justify-start">
          <motion.img
            initial={{
              opacity: 0,
              scale: isMobile ? 1.2 : 1.5,
              x: isNext ? -200 : 100,
            }}
            animate={{
              opacity: 1,
              scale: isMobile ? 1.2 : 1.5,
              x: 10,
            }}
            exit={{
              opacity: 0,
              scale: isMobile ? 1.2 : 1.5,
            }}
            transition={{
              duration: 0.8,
            }}
            key={animationKey}
            className={`profile-img object-fill h-auto transform origin-bottom-right md:origin-bottom`}
            src={imgSrc}
            alt="Profile"
          />
        </div>
        <div className="profile-text py-10 w-full md:w-3/4 px-5 lg:px-14 flex flex-col justify-between">
          <motion.div key={animationKey} className="flex flex-col">
            <motion.span
              initial={{
                opacity: 0,
                x: isNext ? -200 : 200,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 0.7,
              }}
              className="text-4xl lg:text-6xl"
            >
              <strong>Rahul</strong> Rane
            </motion.span>
            <motion.span
              initial={{
                opacity: 0,
                x: isNext ? -200 : 200,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 1,
              }}
              className="text-md lg:text-3xl pt-2"
            >
              Managing Director at <strong>LAZERXTECH</strong>
            </motion.span>
            <motion.span
              initial={{
                opacity: 0,
                x: isNext ? -200 : 200,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 1.1,
              }}
              className="text-xs lg:text-xl pt-2"
            >
              {description}
            </motion.span>
            <motion.span
              initial={{
                opacity: 0,
                x: isNext ? -200 : 200,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 1.4,
              }}
              className="pt-2"
            >
              Read More
            </motion.span>
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
