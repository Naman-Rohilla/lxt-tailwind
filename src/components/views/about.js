import AchievementView from "../Achievement/achievemntView";
import HeaderDiv from "../animatedDiv/headerDiv";
import ProfileCard from "../cards/profileCard";
import SpacedSection from "../spacedSection/spacedSection";

const HeaderView = () => {
  return (
    <>
      <HeaderDiv className="flex flex-col">
        <span className="text-6xl md:text-12xl leading-none font-extrabold bg-gradient-to-b  from-40% from-blue-light   to-black bg-clip-text text-transparent">
          ABOUT US
        </span>
        <span className="text-xl -translate-y-4 md:-translate-y-14 leading-none md:text-6xl flex justify-center font-extrabold">
          Let me to introduce myself
        </span>
      </HeaderDiv>
    </>
  );
};

const CardView = () => {
  return (
    <HeaderDiv
      style={{
        height: "550px",
      }}
      className="bg-card-color flex md:flex-row flex-col"
    >
      <img
        src="profile1.png"
        className="origin-bottom md:scale-110  md:translate-x-20"
      />
      <div className="h-full md:h-auto flex flex-col items-center justify-center w-full">
        <span className="text-7xl md:text-9xl font-bold">Rahul Rane</span>
        <span className="text-xl md:text-4xl tracking-wider">
          Managing Director at LAZERXTECH
        </span>
      </div>
    </HeaderDiv>
  );
};

const TextView = () => {
  return (
    <div className="flex flex-col space-y-5 text-justify md:text-left">
      <span>
        When you think about coaching the roles of a skating coach seem
        unlimited.
      </span>
      <span>
        They are there to serve as an adviser, an assessor, a counselor, a
        demonstrator, friend, mentor, an endless fountain of wisdom and
        knowledge, role model, your manager and your number one supporter.
        Furthermore, a coach's job seems never-ending. They are needed in the
        "newbie" stages of a sport to teach an skater the rules of the game, how
        they'll train and what is important to overall success.
      </span>
      <span>
        Then, once the skater has shown that they understand the basics of their
        sport, then the coach must work hand-in-hand with the trainer to discuss
        and come to an agreement on what training methods and requirements are
        appropriate. Finally, after an athlete understands the ins and outs of
        their sport, a coach is still needed to serve as a mentor and
        "cheerleader" of sorts whenever required at times.
      </span>
      <span>A coach is working hard to make his students dreams come true</span>
    </div>
  );
};

const StickyTextView = () => {
  return (
    <div
      className="leading-none text-7xl md:text-22xl"
      style={{
        color: "rgba(255,255,255,0.05)",
      }}
    >
      Rahul Rane
    </div>
  );
};

export default function About() {
  return (
    <>
      <SpacedSection customStyling="pt-10 md:-pt-4 flex items-end justify-center translate-y-24 md:translate-y-40">
        <HeaderView></HeaderView>
      </SpacedSection>
      <SpacedSection
        position="sticky"
        customStyling="flex justify-center"
        customPadding="px-2 pt-20 md:pt-10"
        backgroundColor="transparent"
      >
        <StickyTextView></StickyTextView>
      </SpacedSection>
      <SpacedSection backgroundColor="transparent">
        <CardView></CardView>
      </SpacedSection>
      <SpacedSection
        backgroundColor="transparent"
        customStyling="pt-14 text-xl font-extralight"
      >
        <TextView></TextView>
      </SpacedSection>
      <SpacedSection backgroundColor="transparent" customStyling="pt-40">
        <AchievementView></AchievementView>
      </SpacedSection>
    </>
  );
}
