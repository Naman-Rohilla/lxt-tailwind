import HeaderDiv from "./headerDiv";

const SummerText = ({ color = "white" }) => {
  return (
    <HeaderDiv
      className="text-xs pt-2 md:pt-1 text-light md:text-xl flex items-center text-bold"
      style={{
        color: { color },
        zIndex: 999,
      }}
    >
      LXT Speed Skating Summer Camp & Speed Clinic 2025
      <a
        href="https://res.cloudinary.com/djdyzefbx/image/upload/v1743690131/LXT_Speed_Skating_Summer_Camp_Speed_Clinic_2025_ffxqqu.pdf"
        download="Lxt_Summer_Camp.pdf"
        target="_blank"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          // height="20px"
          viewBox="0 -960 960 960"
          // width="20px"
          fill="red"
          className="ml-4 md:mt-1 cursor-pointer h-4 w-4 md:h-6 md:w-6"
        >
          <path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" />
        </svg>
      </a>
    </HeaderDiv>
  );
};

export default SummerText;
