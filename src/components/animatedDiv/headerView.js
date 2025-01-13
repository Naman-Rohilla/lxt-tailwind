import HeaderDiv from "./headerDiv";

const HeaderView = ({ heading, subheading }) => {
  return (
    <>
      <HeaderDiv className="flex flex-col">
        <span className="text-5xl md:text-12xl leading-none font-extrabold bg-gradient-to-b flex justify-center  from-40% from-blue-light   to-black bg-clip-text text-transparent">
          {heading}
        </span>
        <span className="text-sm md:text-5xl -translate-y-4 md:-translate-y-14 leading-none md:text-6xl flex justify-center font-extrabold">
          {subheading}
        </span>
      </HeaderDiv>
    </>
  );
};

export default HeaderView;
