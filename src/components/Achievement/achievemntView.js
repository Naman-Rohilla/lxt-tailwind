import { useState } from "react";
import HeaderDiv from "../animatedDiv/headerDiv";
import FullRoundedButton from "../buttons/fullRoundedButton";
import LxtButton from "../buttons/lxtButton";
import { AnimatePresence, motion } from "framer-motion";

const PictureView = ({ state }) => {
  return (
    <>
      <div
        className={
          "flex flex-col space-y-4 shrink-0 " + `${state ? "w-72" : "w-60"}`
        }
      >
        <motion.img
          className="h-80 rounded-2xl opacity-80 md:opacity-60 md:hover:opacity-100 md:ease-in-out md:duration-200"
          src={`${
            state
              ? "https://res.cloudinary.com/djdyzefbx/image/upload/v1738394848/rswsb09rkiej3ppah2md.jpg"
              : "picture1.png"
          }`}
        />
        <img
          className="h-36 rounded-2xl md:opacity-60 md:hover:opacity-100 md:ease-in-out md:duration-200"
          src={
            state
              ? "https://res.cloudinary.com/djdyzefbx/image/upload/v1738394847/q8dbtqpd6jv1akdnt34g.jpg"
              : "ach1.jpg"
          }
        />
      </div>
      <div className="flex items-center shrink-0">
        <img
          className={
            "w-64 rounded-2xl md:opacity-60 md:hover:opacity-100 md:ease-in-out md:duration-200 " +
            `${state ? "w-80 h-72" : "w-64 h-80"}`
          }
          src={
            state
              ? "https://res.cloudinary.com/djdyzefbx/image/upload/v1738394848/d4xtbf8epjj9vxzlyaw9.jpg"
              : "ach2.jpg"
          }
        />
      </div>
      <div className="flex w-60 flex-col space-y-4 shrink-0">
        <img
          className="h-36 rounded-2xl md:opacity-60 md:hover:opacity-100 md:ease-in-out md:duration-200"
          src={
            state
              ? "https://res.cloudinary.com/djdyzefbx/image/upload/v1738394847/nw76ubtp91pwrys0lxgx.jpg"
              : "ach3.jpg"
          }
        />
        <img
          className="h-80 rounded-2xl md:opacity-60 md:hover:opacity-100 md:ease-in-out md:duration-200"
          src={
            state
              ? "https://res.cloudinary.com/djdyzefbx/image/upload/v1738394848/c6kcdo9zpukuawjqv7sy.jpg"
              : "ach10.png"
          }
        />
      </div>
      <div className="flex items-center shrink-0">
        <img
          className={
            "w-64 rounded-2xl md:opacity-60 md:hover:opacity-100 md:ease-in-out md:duration-200 " +
            `${state ? "w-80 h-72" : "w-64 h-80"}`
          }
          src={
            state
              ? "https://res.cloudinary.com/djdyzefbx/image/upload/v1738394848/f75quc5vhkcqnfebe7in.jpg"
              : "ach5.jpg"
          }
        />
      </div>
      <div className="flex w-60 flex-col space-y-4 shrink-0">
        <img
          className="h-80 rounded-2xl md:opacity-60 md:hover:opacity-100 md:ease-in-out md:duration-200"
          src={
            state
              ? "https://res.cloudinary.com/djdyzefbx/image/upload/v1738394849/n6ph3h1o7slxborlme2k.jpg"
              : "ach11.jpeg"
          }
        />
        <img
          className="h-36 rounded-2xl md:opacity-60 md:hover:opacity-100 md:ease-in-out md:duration-200"
          src={
            state
              ? "https://res.cloudinary.com/djdyzefbx/image/upload/v1738394847/cxzte5df3up5svbll568.jpg"
              : "ach7.jpeg"
          }
        />
      </div>
      <div className="flex w-60 h-full items-center shrink-0">
        <img
          className="rounded-2xl md:opacity-60 md:hover:opacity-100 md:ease-in-out md:duration-200"
          style={{
            height: "480px",
          }}
          src={
            state
              ? "https://res.cloudinary.com/djdyzefbx/image/upload/v1738394847/fyhtroz7a96bcbwsgqei.jpg"
              : "profile2.jpeg"
          }
        />
      </div>
      <div className="flex w-60 flex-col space-y-4 shrink-0">
        <img
          className="h-44 rounded-2xl md:opacity-60 md:hover:opacity-100 md:ease-in-out md:duration-200"
          src={
            state
              ? "https://res.cloudinary.com/djdyzefbx/image/upload/v1738394847/dlecnf80qlcrlpq9yuet.jpg"
              : "ach6.jpg"
          }
        />
        <img
          className="h-72 rounded-2xl md:opacity-60 md:hover:opacity-100 md:ease-in-out md:duration-200"
          src={
            state
              ? "https://res.cloudinary.com/djdyzefbx/image/upload/v1738395535/WhatsApp_Image_2025-02-01_at_12.33.37_PM_1_tfnr21.jpg"
              : "ach9.jpeg"
          }
        />
      </div>
    </>
  );
};

export default function AchievementView() {
  const [state, setState] = useState(0);

  return (
    <HeaderDiv className="flex flex-col">
      <span className="text-4xl md:text-6xl font-extrabold">
        Achieve
        <span
          style={{
            color: "#0C6AB0",
          }}
        >
          ment
        </span>
      </span>
      <span className="text-sm md:text-lg pt-4">
        Honored for Consistent Excellence in Skating and Cycling Performances
      </span>
      <div className="py-5 flex space-x-4">
        <span onClick={() => setState(0)}>
          {state ? (
            <FullRoundedButton
              text="Personel Milstones"
              backgroundColor="#FFFFFFB2"
              textColor="#2E2E2E"
            ></FullRoundedButton>
          ) : (
            <FullRoundedButton text="Personel Milstones"></FullRoundedButton>
          )}
        </span>
        <span onClick={() => setState(1)}>
          {state ? (
            <>
              <FullRoundedButton text="Team Success as a Coach"></FullRoundedButton>
            </>
          ) : (
            <>
              <FullRoundedButton
                text="Team Success as a Coach"
                backgroundColor="#FFFFFFB2"
                textColor="#2E2E2E"
              ></FullRoundedButton>
            </>
          )}
        </span>
      </div>
      <div className="h-auto content-box slider-hidden-scrollbar overflow-x-auto flex flex-nowrap space-x-5 md:py-10">
        <PictureView state={state}></PictureView>
      </div>
      <div className="flex justify-end pt-10 md:justify-start">
        <LxtButton
          text="DISCOVER MORE"
          color="transparent"
          borderColor="white"
        ></LxtButton>
      </div>
    </HeaderDiv>
  );
}
