import { useState, useEffect } from "react";
import "./profileCard.scss";
import SliderControl from "./sliderControls";

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

export default function ProfileCard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);

  const size = profileData.length;

  const { description, imgSrc } = profileData[currentIndex];

  return (
    <div className="profile-card h-auto flex flex-col md:flex-row relative">
      <div className="flex items-end w-full  justify-start">
        <img
          key={animationKey}
          className={`profile-img object-fill h-auto transform origin-bottom-right md:origin-bottom scale-110 md:scale-150`}
          src={imgSrc}
          alt="Profile"
        />
      </div>
      <div className="profile-text py-10 w-full md:w-3/4 px-5 lg:px-14 flex flex-col justify-between">
        <div className="flex flex-col">
          <span className="text-4xl lg:text-6xl">
            <strong>Rahul</strong> Rane
          </span>
          <span className="text-md lg:text-3xl pt-2">
            Managing Director at <strong>LAZERXTECH</strong>
          </span>
          <span className="text-xs lg:text-xl pt-2">{description}</span>
          <span className="pt-2">Read More</span>
        </div>
        <SliderControl
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          size={size}
          setAnimationKey={setAnimationKey}
          customStyling="flex items-center justify-start md:justify-center lg:justify-start"
        ></SliderControl>
      </div>
    </div>
  );
}
