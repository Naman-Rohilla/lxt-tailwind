import HeaderDiv from "../animatedDiv/headerDiv";
import SpacedSection from "../spacedSection/spacedSection";

const HeaderView = () => {
  return (
    <>
      <HeaderDiv className="flex flex-col">
        <span className="text-12xl font-extrabold bg-gradient-to-b  from-40% from-blue-light   to-black bg-clip-text text-transparent">
          ABOUT US
        </span>
        <span className="text-6xl -translate-y-24 flex justify-center font-extrabold">
          Let me to introduce myself
        </span>
      </HeaderDiv>
    </>
  );
};

export default function About() {
  return (
    <>
      <SpacedSection customStyling="pt-24 flex justify-center">
        <HeaderView></HeaderView>
      </SpacedSection>
    </>
  );
}
