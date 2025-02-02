import HeaderDiv from "../animatedDiv/headerDiv";
import LxtButton from "../buttons/lxtButton";

const FreedomView = () => {
  return (
    <HeaderDiv className="py-10 md:py-40">
      <div className="bg-card-color hover:bg-blue-900 hover:duration-300 rounded-2xl h-auto md:h-96 w-auto p-4 py-6 md:p-10 flex flex-col md:flex-row justify-between">
        <div className="flex flex-col justify-between w-full items-center md:items-start md:w-2/5 text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
          <div className="flex flex-col">
            <strong>Skate to Freedom,</strong>
            <strong>Live with Passion</strong>
          </div>
          <span className="py-5 text-xl text-center md:text-start lg:text-3xl xl:text-4xl font-extralight">
            Push your limits with the support of a world-class coach and academy
          </span>
          <span className="pb-6 md:pb-0">
            <LxtButton text={"START TODAY"} color={"red"} />
          </span>
        </div>
        <div className="w-full h-80  flex justify-center md:w-1/2 xl:h-full object-cover overflow-hidden rounded-2xl">
          <img
            src="https://res.cloudinary.com/djdyzefbx/image/upload/v1738503702/feedomskating_1_11zon_hakepc.png"
            className="object-cover md:w-full px-1 py-2  md:-translate-y-10  md:py-0 scale-125 rounded-2xl"
          />
        </div>
      </div>
    </HeaderDiv>
  );
};

export default FreedomView;
