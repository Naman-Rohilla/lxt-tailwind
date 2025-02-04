import { useState } from "react";
import HeaderDiv from "../animatedDiv/headerDiv";
import FullRoundedButton from "../buttons/fullRoundedButton";
import LxtButton from "../buttons/lxtButton";
import { AnimatePresence, motion } from "framer-motion";
import SpacedSection from "../spacedSection/spacedSection";
import HeaderView from "../animatedDiv/headerView";
import FreedomView from "../views/freedomView";

const PictureView = ({ state, inHome }) => {
  return (
    <>
      {inHome ? (
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
                  : "https://res.cloudinary.com/djdyzefbx/image/upload/v1738503701/picture1_2_11zon_u2rqjn.png"
              }`}
            />
            <img
              className="h-36 rounded-2xl md:opacity-60 md:hover:opacity-100 md:ease-in-out md:duration-200"
              src={
                state
                  ? "https://res.cloudinary.com/djdyzefbx/image/upload/v1738394847/q8dbtqpd6jv1akdnt34g.jpg"
                  : "https://res.cloudinary.com/djdyzefbx/image/upload/v1738499992/ach1-min_dnofzn.jpg"
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
                  : "https://res.cloudinary.com/djdyzefbx/image/upload/v1738499993/ach2-min_pxjg19.jpg"
              }
            />
          </div>
          <div className="flex w-60 flex-col space-y-4 shrink-0">
            <img
              className="h-36 rounded-2xl md:opacity-60 md:hover:opacity-100 md:ease-in-out md:duration-200"
              src={
                state
                  ? "https://res.cloudinary.com/djdyzefbx/image/upload/v1738394847/nw76ubtp91pwrys0lxgx.jpg"
                  : "https://res.cloudinary.com/djdyzefbx/image/upload/v1738499993/ach3-min_u9kqov.jpg"
              }
            />
            <img
              className="h-80 rounded-2xl md:opacity-60 md:hover:opacity-100 md:ease-in-out md:duration-200"
              src={
                state
                  ? "https://res.cloudinary.com/djdyzefbx/image/upload/v1738394848/c6kcdo9zpukuawjqv7sy.jpg"
                  : "https://res.cloudinary.com/djdyzefbx/image/upload/v1738500469/ach10_11zon_ws7p58.png"
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
                  : "https://res.cloudinary.com/djdyzefbx/image/upload/v1738499993/ach5-min_gbqznh.jpg"
              }
            />
          </div>
          <div className="flex w-60 flex-col space-y-4 shrink-0">
            <img
              className="h-80 rounded-2xl md:opacity-60 md:hover:opacity-100 md:ease-in-out md:duration-200"
              src={
                state
                  ? "https://res.cloudinary.com/djdyzefbx/image/upload/v1738394849/n6ph3h1o7slxborlme2k.jpg"
                  : "https://res.cloudinary.com/djdyzefbx/image/upload/v1738499995/ach11-min_dkpkxq.jpg"
              }
            />
            <img
              className="h-36 rounded-2xl md:opacity-60 md:hover:opacity-100 md:ease-in-out md:duration-200"
              src={
                state
                  ? "https://res.cloudinary.com/djdyzefbx/image/upload/v1738394847/cxzte5df3up5svbll568.jpg"
                  : "https://res.cloudinary.com/djdyzefbx/image/upload/v1738499994/ach7-min_tckckh.jpg"
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
                  : "https://res.cloudinary.com/djdyzefbx/image/upload/v1738503204/profile2_4_11zon_h7qugl.jpg"
              }
            />
          </div>
          <div className="flex w-60 flex-col space-y-4 shrink-0">
            <img
              className="h-44 rounded-2xl md:opacity-60 md:hover:opacity-100 md:ease-in-out md:duration-200"
              src={
                state
                  ? "https://res.cloudinary.com/djdyzefbx/image/upload/v1738394847/dlecnf80qlcrlpq9yuet.jpg"
                  : "https://res.cloudinary.com/djdyzefbx/image/upload/v1738499993/ach6-min_txi8q4.jpg"
              }
            />
            <img
              className="h-72 rounded-2xl md:opacity-60 md:hover:opacity-100 md:ease-in-out md:duration-200"
              src={
                state
                  ? "https://res.cloudinary.com/djdyzefbx/image/upload/v1738395535/WhatsApp_Image_2025-02-01_at_12.33.37_PM_1_tfnr21.jpg"
                  : "https://res.cloudinary.com/djdyzefbx/image/upload/v1738500205/ach9-min_hjtvdg.jpg"
              }
            />
          </div>
        </>
      ) : (
        <>
          <div
            className={
              "flex flex-col space-y-4 shrink-0 md:shrink md:shrink-1 " +
              `${state ? "w-32 md:w-72" : "w-28 md:w-60"}`
            }
          >
            <motion.img
              className="h-40 md:h-80 rounded-2xl opacity-80 md:duration-200"
              src={`${
                state
                  ? "https://res.cloudinary.com/djdyzefbx/image/upload/v1738394848/rswsb09rkiej3ppah2md.jpg"
                  : "https://res.cloudinary.com/djdyzefbx/image/upload/v1738503701/picture1_2_11zon_u2rqjn.png"
              }`}
            />
            <img
              className="h-16 md:h-36 rounded-2xl md:duration-200"
              src={
                state
                  ? "https://res.cloudinary.com/djdyzefbx/image/upload/v1738394847/q8dbtqpd6jv1akdnt34g.jpg"
                  : "https://res.cloudinary.com/djdyzefbx/image/upload/v1738499992/ach1-min_dnofzn.jpg"
              }
            />
            <img
              className={
                "w-64 rounded-2xl md:duration-200 " +
                `${
                  state
                    ? "w-40 md:w-80 h-36 md:h-72"
                    : "w-32 md:w-64 h-40 md:h-80"
                }`
              }
              src={
                state
                  ? "https://res.cloudinary.com/djdyzefbx/image/upload/v1738394848/d4xtbf8epjj9vxzlyaw9.jpg"
                  : "https://res.cloudinary.com/djdyzefbx/image/upload/v1738499993/ach2-min_pxjg19.jpg"
              }
            />
            <motion.img
              className="h-40 md:h-80 rounded-2xl opacity-80 md:duration-200"
              src={`${
                state
                  ? "https://res.cloudinary.com/djdyzefbx/image/upload/v1738394848/rswsb09rkiej3ppah2md.jpg"
                  : "https://res.cloudinary.com/djdyzefbx/image/upload/v1738503701/picture1_2_11zon_u2rqjn.png"
              }`}
            />
            <img
              className="h-16 md:h-36 rounded-2xl md:duration-200"
              src={
                state
                  ? "https://res.cloudinary.com/djdyzefbx/image/upload/v1738394847/q8dbtqpd6jv1akdnt34g.jpg"
                  : "https://res.cloudinary.com/djdyzefbx/image/upload/v1738499992/ach1-min_dnofzn.jpg"
              }
            />
          </div>
          <div className="flex flex-col shrink-0 md:shrink md:shrink-1 justify-center space-y-4">
            <img
              className={
                "rounded-2xl md:duration-200 " +
                `${
                  state
                    ? "w-40 md:w-80 h-36 md:h-72"
                    : "w-32 md:w-64 h-40 md:h-80"
                }`
              }
              src={
                state
                  ? "https://res.cloudinary.com/djdyzefbx/image/upload/v1738394848/d4xtbf8epjj9vxzlyaw9.jpg"
                  : "https://res.cloudinary.com/djdyzefbx/image/upload/v1738499993/ach2-min_pxjg19.jpg"
              }
            />
            <img
              className="rounded-2xl md:duration-200 h-[240px] md:h-[480px]"
              src={
                state
                  ? "https://res.cloudinary.com/djdyzefbx/image/upload/v1738394847/fyhtroz7a96bcbwsgqei.jpg"
                  : "https://res.cloudinary.com/djdyzefbx/image/upload/v1738503204/profile2_4_11zon_h7qugl.jpg"
              }
            />
            <img
              className={
                "rounded-2xl md:duration-200 " +
                `${
                  state
                    ? "w-40 md:w-80 h-36 md:h-72"
                    : "w-32 md:w-64 h-40 md:h-80"
                }`
              }
              src={
                state
                  ? "https://res.cloudinary.com/djdyzefbx/image/upload/v1738394848/d4xtbf8epjj9vxzlyaw9.jpg"
                  : "https://res.cloudinary.com/djdyzefbx/image/upload/v1738499993/ach2-min_pxjg19.jpg"
              }
            />
          </div>
          <div className="flex w-28 md:w-60 flex-col shrink-0 md:shrink md:shrink-1 space-y-4">
            <img
              className="h-16 md:h-36 rounded-2xl md:duration-200"
              src={
                state
                  ? "https://res.cloudinary.com/djdyzefbx/image/upload/v1738394847/nw76ubtp91pwrys0lxgx.jpg"
                  : "https://res.cloudinary.com/djdyzefbx/image/upload/v1738499993/ach3-min_u9kqov.jpg"
              }
            />
            <img
              className="h-40 md:h-80 rounded-2xl md:duration-200"
              src={
                state
                  ? "https://res.cloudinary.com/djdyzefbx/image/upload/v1738394848/c6kcdo9zpukuawjqv7sy.jpg"
                  : "https://res.cloudinary.com/djdyzefbx/image/upload/v1738500469/ach10_11zon_ws7p58.png"
              }
            />
            <img
              className={
                "rounded-2xl md:duration-200 " +
                `${
                  state
                    ? "w-40 md:w-80 h-36 md:h-72"
                    : "w-32 md:w-64 h-40 md:h-80"
                }`
              }
              src={
                state
                  ? "https://res.cloudinary.com/djdyzefbx/image/upload/v1738394848/f75quc5vhkcqnfebe7in.jpg"
                  : "https://res.cloudinary.com/djdyzefbx/image/upload/v1738499993/ach5-min_gbqznh.jpg"
              }
            />
            <img
              className="h-16 md:h-36 rounded-2xl md:duration-200"
              src={
                state
                  ? "https://res.cloudinary.com/djdyzefbx/image/upload/v1738394847/nw76ubtp91pwrys0lxgx.jpg"
                  : "https://res.cloudinary.com/djdyzefbx/image/upload/v1738499993/ach3-min_u9kqov.jpg"
              }
            />
            <img
              className="h-40 md:h-80 rounded-2xl md:duration-200"
              src={
                state
                  ? "https://res.cloudinary.com/djdyzefbx/image/upload/v1738394848/c6kcdo9zpukuawjqv7sy.jpg"
                  : "https://res.cloudinary.com/djdyzefbx/image/upload/v1738500469/ach10_11zon_ws7p58.png"
              }
            />
          </div>
          <div className="flex flex-col shrink-0 md:shrink md:shrink-1 justify-center space-y-4">
            <img
              className={
                "rounded-2xl md:duration-200 " +
                `${
                  state
                    ? "w-40 md:w-80 h-36 md:h-72"
                    : "w-32 md:w-64 h-40 md:h-80"
                }`
              }
              src={
                state
                  ? "https://res.cloudinary.com/djdyzefbx/image/upload/v1738394848/f75quc5vhkcqnfebe7in.jpg"
                  : "https://res.cloudinary.com/djdyzefbx/image/upload/v1738499993/ach5-min_gbqznh.jpg"
              }
            />
            <img
              className="h-20 md:h-44 rounded-2xl md:duration-200"
              src={
                state
                  ? "https://res.cloudinary.com/djdyzefbx/image/upload/v1738394847/dlecnf80qlcrlpq9yuet.jpg"
                  : "https://res.cloudinary.com/djdyzefbx/image/upload/v1738499993/ach6-min_txi8q4.jpg"
              }
            />
            <img
              className="h-36 md:h-72 rounded-2xl md:duration-200"
              src={
                state
                  ? "https://res.cloudinary.com/djdyzefbx/image/upload/v1738395535/WhatsApp_Image_2025-02-01_at_12.33.37_PM_1_tfnr21.jpg"
                  : "https://res.cloudinary.com/djdyzefbx/image/upload/v1738500205/ach9-min_hjtvdg.jpg"
              }
            />
            <img
              className={
                "w-64 rounded-2xl md:duration-200 " +
                `${
                  state
                    ? "w-40 md:w-80 h-36 md:h-72"
                    : "w-32 md:w-64 h-40 md:h-80"
                }`
              }
              src={
                state
                  ? "https://res.cloudinary.com/djdyzefbx/image/upload/v1738394848/f75quc5vhkcqnfebe7in.jpg"
                  : "https://res.cloudinary.com/djdyzefbx/image/upload/v1738499993/ach5-min_gbqznh.jpg"
              }
            />
          </div>
          <div className="flex w-28 md:w-60 shrink-0 md:shrink flex-col space-y-4">
            <img
              className="h-40 md:h-80 rounded-2xl md:duration-200"
              src={
                state
                  ? "https://res.cloudinary.com/djdyzefbx/image/upload/v1738394849/n6ph3h1o7slxborlme2k.jpg"
                  : "https://res.cloudinary.com/djdyzefbx/image/upload/v1738499995/ach11-min_dkpkxq.jpg"
              }
            />
            <img
              className="h-16 md:h-36 rounded-2xl md:duration-200"
              src={
                state
                  ? "https://res.cloudinary.com/djdyzefbx/image/upload/v1738394847/cxzte5df3up5svbll568.jpg"
                  : "https://res.cloudinary.com/djdyzefbx/image/upload/v1738499994/ach7-min_tckckh.jpg"
              }
            />
            <img
              className={
                "rounded-2xl md:duration-200 " +
                `${
                  state
                    ? "w-40 md:w-80 h-36 md:h-72"
                    : "w-32 md:w-64 h-40 md:h-80"
                }`
              }
              src={
                state
                  ? "https://res.cloudinary.com/djdyzefbx/image/upload/v1738394848/f75quc5vhkcqnfebe7in.jpg"
                  : "https://res.cloudinary.com/djdyzefbx/image/upload/v1738499993/ach5-min_gbqznh.jpg"
              }
            />
            <img
              className="h-40 md:h-80 rounded-2xl md:duration-200"
              src={
                state
                  ? "https://res.cloudinary.com/djdyzefbx/image/upload/v1738394849/n6ph3h1o7slxborlme2k.jpg"
                  : "https://res.cloudinary.com/djdyzefbx/image/upload/v1738499995/ach11-min_dkpkxq.jpg"
              }
            />
            <img
              className="h-16 md:h-36 rounded-2xl md:duration-200"
              src={
                state
                  ? "https://res.cloudinary.com/djdyzefbx/image/upload/v1738394847/cxzte5df3up5svbll568.jpg"
                  : "https://res.cloudinary.com/djdyzefbx/image/upload/v1738499994/ach7-min_tckckh.jpg"
              }
            />
          </div>
          <div className="flex flex-col shrink-0 md:shrink justify-center space-y-4">
            <img
              className={
                "rounded-2xl md:duration-200 " +
                `${
                  state
                    ? "w-40 md:w-80 h-36 md:h-72"
                    : "w-32 md:w-64 h-40 md:h-80"
                }`
              }
              src={
                state
                  ? "https://res.cloudinary.com/djdyzefbx/image/upload/v1738394848/d4xtbf8epjj9vxzlyaw9.jpg"
                  : "https://res.cloudinary.com/djdyzefbx/image/upload/v1738499993/ach2-min_pxjg19.jpg"
              }
            />
            <img
              className={
                "rounded-2xl md:duration-200 " +
                `${
                  state
                    ? "w-40 md:w-80 h-36 md:h-72"
                    : "w-32 md:w-64 h-40 md:h-80"
                }`
              }
              src={
                state
                  ? "https://res.cloudinary.com/djdyzefbx/image/upload/v1738394849/n6ph3h1o7slxborlme2k.jpg"
                  : "https://res.cloudinary.com/djdyzefbx/image/upload/v1738499995/ach11-min_dkpkxq.jpg"
              }
            />
            <img
              className="h-16 md:h-36 rounded-2xl md:duration-200"
              src={
                state
                  ? "https://res.cloudinary.com/djdyzefbx/image/upload/v1738394847/cxzte5df3up5svbll568.jpg"
                  : "https://res.cloudinary.com/djdyzefbx/image/upload/v1738499994/ach7-min_tckckh.jpg"
              }
            />
            <img
              className={
                "rounded-2xl md:duration-200 " +
                `${
                  state
                    ? "w-40 md:w-80 h-36 md:h-72"
                    : "w-32 md:w-64 h-40 md:h-80"
                }`
              }
              src={
                state
                  ? "https://res.cloudinary.com/djdyzefbx/image/upload/v1738394848/d4xtbf8epjj9vxzlyaw9.jpg"
                  : "https://res.cloudinary.com/djdyzefbx/image/upload/v1738499993/ach2-min_pxjg19.jpg"
              }
            />
          </div>
          {/* <div className="flex w-60 h-full items-center">
            <img
              className="rounded-2xl md:opacity-60 md:hover:opacity-100 md:ease-in-out md:duration-200"
              style={{
                height: "480px",
              }}
              src={
                state
                  ? "https://res.cloudinary.com/djdyzefbx/image/upload/v1738394847/fyhtroz7a96bcbwsgqei.jpg"
                  : "https://res.cloudinary.com/djdyzefbx/image/upload/v1738503204/profile2_4_11zon_h7qugl.jpg"
              }
            />
          </div>
          <div className="flex w-60 flex-col space-y-4">
            <img
              className="h-44 rounded-2xl md:opacity-60 md:hover:opacity-100 md:ease-in-out md:duration-200"
              src={
                state
                  ? "https://res.cloudinary.com/djdyzefbx/image/upload/v1738394847/dlecnf80qlcrlpq9yuet.jpg"
                  : "https://res.cloudinary.com/djdyzefbx/image/upload/v1738499993/ach6-min_txi8q4.jpg"
              }
            />
            <img
              className="h-72 rounded-2xl md:opacity-60 md:hover:opacity-100 md:ease-in-out md:duration-200"
              src={
                state
                  ? "https://res.cloudinary.com/djdyzefbx/image/upload/v1738395535/WhatsApp_Image_2025-02-01_at_12.33.37_PM_1_tfnr21.jpg"
                  : "https://res.cloudinary.com/djdyzefbx/image/upload/v1738500205/ach9-min_hjtvdg.jpg"
              }
            />
          </div> */}
        </>
      )}
    </>
  );
};

export default function AchievementView({ inHome = false }) {
  const [state, setState] = useState(0);
  const [type, setType] = useState(0);

  return (
    <SpacedSection customStyling={`${inHome ? "" : "pt-24"}`}>
      <HeaderDiv
        className={"flex flex-col " + `${inHome ? "" : "overflow-hidden"}`}
      >
        {!inHome && (
          <>
            <HeaderView
              heading={"Achievement"}
              subheading={"Honored for Consistent Excellence"}
            ></HeaderView>
            <div
              style={{
                background:
                  "linear-gradient(146.18deg, #9CDAFF 17.06%, #DFFDFF 74.12%)",
              }}
              className=" h-[530px] w-full flex md:flex-row flex-col flex-reverse justify-between rounded-b-2xl rounded-tl-2xl relative mb-14"
            >
              <span className="hidden md:flex"></span>
              <div className="flex flex-col justify-center px-5 bottom-0 md:top-0 md:pl-28 absolute text-[#0065B3]">
                <span className="text-3xl text-center md:text-start md:text-7xl w-full font-extrabold uppercase">
                  Chhatrapati shivaji
                </span>
                <span className="text-3xl md:text-7xl text-center md:text-start w-full font-extrabold uppercase">
                  Maharaj Award
                </span>
                <span className="pt-2 text-xl text-center md:text-start md:text-4xl md:leading-[3rem] md:w-[800px]">
                  Rahul Sir winning the Chhatrapati Shivaji Maharaj Award in
                  skating
                </span>
                <span className="pt-4 md:pt-10 md:mb-10 mb-4 flex justify-center md:justify-start">
                  <LxtButton text={"READ MORE"} color={"red"}></LxtButton>
                </span>
              </div>
              <img
                src="https://s3-alpha-sig.figma.com/img/c0bd/bb6b/b98e27238e95d4f0412d963a03cf1350?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Df8rK0TUOBt6ck5YnQLb1misehmSwzjXbFT88OtbmOaKC0vx3L0MR1y4DbRwa4dxnwm2EDeP5l--bN9vTNRkBK9mqT1jcG77yZ2CV09Jv0ubajIsxAuUsheMKb9oZHFJWkB7z1jfJMf0Ng6Wihjnt7Ze7BXlAe65rYtH~HYpU~W1Uvw02VG8z4Gz2VVnnVoIxrUlz6Kqkj5qX9ydAp3tj9NVNKR94mUv0mbkF1EoLDBLyzHTPjrjTAO0AQp8m80IDjLUe3iDo5diykrBIFYL2rSqFiAyrtrWBhxV~WsLQdITTzGgy9rIfmdqTcT2IEyI4lcevGaeJm6ZCpZykDVdew__"
                className="h-[500px] md:h-[830px]"
              />
            </div>
          </>
        )}
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
        {inHome && (
          <span className="text-sm md:text-lg pt-4">
            Honored for Consistent Excellence in Skating and Cycling
            Performances
          </span>
        )}
        {inHome ? (
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
        ) : (
          <div className="relative h-14 block pt-2">
            <div
              className="h-16 bg-white w-fit rounded-full flex items-center space-x-5 px-4 text-xs top-0"
              style={{
                zIndex: 999,
              }}
            >
              <>
                <span
                  className={
                    state
                      ? "cursor-default hover:bg-blue-800 hover:text-white hover:duration-300 ease-in-out border text-blue-800 border-blue-800 rounded-full px-4 md:px-8 md:py-2.5 py-2"
                      : "bg-blue-800 rounded-full px-4 md:px-8 md:py-2.5 py-2"
                  }
                  onClick={() => setState(0)}
                >
                  Personel Milstones
                </span>

                <span
                  className={
                    !state
                      ? "cursor-default hover:bg-blue-800 hover:text-white hover:duration-300 ease-in-out border text-blue-800 border-blue-800 rounded-full px-4 md:px-8 md:py-2.5 py-2"
                      : "bg-blue-800 rounded-full px-4 md:px-8 md:py-2.5 py-2"
                  }
                  onClick={() => setState(1)}
                >
                  Team Success as a Coach
                </span>
              </>
            </div>
          </div>
        )}

        <div className="relative">
          <div className="h-screen absolute mt-10 z-10 w-full bg-gradient-to-r from-gray-900/40 via-transparent to-gray-900/40"></div>
          <div
            className={
              "h-auto content-box slider-hidden-scrollbar flex flex-nowrap space-x-5 relative  " +
              `${inHome ? "md:py-10 overflow-x-auto" : "pt-10 -translate-x-20"}`
            }
          >
            <PictureView state={state} inHome={inHome}></PictureView>
          </div>
        </div>
        {inHome && (
          <div className="flex justify-end pt-10 md:justify-start">
            <LxtButton
              text="DISCOVER MORE"
              color="transparent"
              borderColor="white"
            ></LxtButton>
          </div>
        )}
      </HeaderDiv>
      <FreedomView padding={"24"}></FreedomView>
    </SpacedSection>
  );
}
