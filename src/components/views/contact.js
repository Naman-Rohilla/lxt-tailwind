import HeaderDiv from "../animatedDiv/headerDiv";
import SpacedSection from "../spacedSection/spacedSection";

export default function Contact() {
  return (
    <SpacedSection customStyling="pt-32">
      <div className="text-sm">
        <span className="text-gray-50 opacity-50">Home / </span>
        <span>Contact Us</span>
      </div>
      <HeaderDiv className="bg-white shadow-2xl w-full h-72 my-5 rounded-b-2xl rounded-tl-2xl"></HeaderDiv>
    </SpacedSection>
  );
}
