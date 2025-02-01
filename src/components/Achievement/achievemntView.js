import HeaderDiv from "../animatedDiv/headerDiv";
import FullRoundedButton from "../buttons/fullRoundedButton";
import LxtButton from "../buttons/lxtButton";

const PictureView = () => {
  return (
    <>
      <div className="flex w-60 flex-col space-y-4 shrink-0">
        <img className="h-80 rounded-2xl" src="picture1.png" />
        <img className="h-36 rounded-2xl" src="ach1.jpg" />
      </div>
      <div className="flex items-center shrink-0">
        <img className="h-80 w-64 rounded-2xl" src="ach2.jpg" />
      </div>
      <div className="flex w-60 flex-col space-y-4 shrink-0">
        <img className="h-36 rounded-2xl" src="ach3.jpg" />
        <img className="h-80 rounded-2xl" src="ach10.png" />
      </div>
      <div className="flex items-center shrink-0">
        <img className="h-80 w-64  rounded-2xl" src="ach5.jpg" />
      </div>
      <div className="flex w-60 flex-col space-y-4 shrink-0">
        <img className="h-80 rounded-2xl" src="ach11.jpeg" />
        <img className="h-36 rounded-2xl" src="ach7.jpeg" />
      </div>
      <div className="flex w-60 h-full items-center shrink-0">
        <img
          className="rounded-2xl"
          style={{
            height: "480px",
          }}
          src="profile2.jpeg"
        />
      </div>
      <div className="flex w-60 flex-col space-y-4 shrink-0">
        <img className="h-44 rounded-2xl" src="ach6.jpg" />
        <img className="h-72 rounded-2xl" src="ach9.jpeg" />
      </div>
    </>
  );
};

export default function AchievementView() {
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
        <FullRoundedButton text="Personel Milstones"></FullRoundedButton>
        <FullRoundedButton
          text="Team Success as a Coach"
          backgroundColor="#FFFFFFB2"
          textColor="#2E2E2E"
        ></FullRoundedButton>
      </div>
      <div className="h-auto content-box slider-hidden-scrollbar overflow-x-auto flex flex-nowrap space-x-5 md:py-10">
        <PictureView></PictureView>
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
