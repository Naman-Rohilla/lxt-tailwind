import LxtButton from "../buttons/lxtButton";
import SpacedSection from "../spacedSection/spacedSection";

export default function Movie() {
  return (
    <SpacedSection zIndex={0} paddingInline={"px-6"}>
      <div className="h-screen pt-24 pb-8 relative">
        <div
          src="https://www.youtube.com/watch?v=OOevVQwQ-LM"
          className="h-full  rounded-b-2xl rounded-tl-2xl"
          style={{
            background:
              "linear-gradient(31.75deg, rgba(4, 44, 113, 0) 14.25%, rgba(255, 255, 255, 1) 87%)",
          }}
          allow="autoplay; fullscreen; picture-in-picture"
        >
          {" "}
        </div>
        <SpacedSection>
          <div className="absolute bottom-12 border-box w-3/4  space-y-2 md:space-y-6 flex flex-col">
            <span className="text-xs">Dream Builder</span>
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
          </div>
        </SpacedSection>
      </div>
    </SpacedSection>
  );
}
