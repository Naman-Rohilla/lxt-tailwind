import HeaderDiv from "../animatedDiv/headerDiv";
import SpacedSection from "../spacedSection/spacedSection";

export default function Contact() {
  return (
    <SpacedSection customStyling="pt-32">
      <div className="text-sm pl-4">
        <span className="text-gray-50 opacity-50">Home / </span>
        <span>Contact Us</span>
      </div>
      <HeaderDiv className="bg-white shadow-2xl w-full h-auto md:h-72 my-5 rounded-b-2xl rounded-tl-2xl md:rounded-b-3xl md:rounded-tl-3xl">
        <div className="text-black font-extrabold pt-4 md:pt-8 px-4 md:px-10 text-md md:text-3xl">
          LXT SPEED SKATING TRACK & ROAD , KASARSAI
        </div>
        <div className="text-black  pt-4 px-4 md:px-10 md:text-2xl text-sm flex md:items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 24 24"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="black"
          >
            <g>
              <path d="M0,0h24v24H0V0z" fill="none" />
            </g>
            <g>
              <path d="M12,12c-1.1,0-2-0.9-2-2s0.9-2,2-2c1.1,0,2,0.9,2,2S13.1,12,12,12z M18,10.2C18,6.57,15.35,4,12,4s-6,2.57-6,6.2 c0,2.34,1.95,5.44,6,9.14C16.05,15.64,18,12.54,18,10.2z M12,2c4.2,0,8,3.22,8,8.2c0,3.32-2.67,7.25-8,11.8 c-5.33-4.55-8-8.48-8-11.8C4,5.22,7.8,2,12,2z" />
            </g>
          </svg>
          <span className="pl-1 font-light">
            Sr no 118/1 opp Saint Tukaram Sugar Factory, Kasarai Gaon , Taluka
            Mulshi, Mulshi, Pune, Maharashtra 410506
          </span>
        </div>
        <div className="text-black pt-4 px-4 md:px-10 text-sm md:text-2xl flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="gray"
            className="h-3 md:h-8"
          >
            <g>
              {" "}
              <path d="M0 0h24v24H0V0z" fill="none" />{" "}
            </g>
            <g>
              <path d="M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79h1.51m9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75l1.2-1.19M7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57-.1-.04-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.45-5.15-3.76-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1z" />
            </g>
          </svg>
          <span className="pl-1 font-extrabold text-sm md:text-2xl">
            09689426089
          </span>
        </div>
        <div className="text-black  pt-4 px-4 md:px-10 text-sm flex md:space-x-2 md:flex-row flex-col">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#5084C1"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
            <spam>Monday, 5:30-7:30pm</spam>
          </div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#5084C1"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
            <spam>Tuesday, 5:30-8:30pm</spam>
          </div>
          <div className="text-red-600 font-bold flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16px"
              viewBox="0 0 24 24"
              width="24px"
              fill="red"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
            <spam>Wednesday closed</spam>
          </div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#5084C1"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
            <spam>Thursday, 5:30-8:30pm</spam>
          </div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#5084C1"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
            <spam>Friday, 5:30-7:30pm</spam>
          </div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#5084C1"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
            <spam>Saturday, 9-10:30am - 5:30-8:30pm</spam>
          </div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#5084C1"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
            <spam>Sunday, 9-10:30am - 5:30-8:30pm</spam>
          </div>
        </div>
        <div className="mt-4 w-full px-2 md:px-10">
          <div
            className="bg-gray-100 w-full"
            style={{
              height: 1,
            }}
          ></div>
        </div>
        <div className="text-black  pt-4 px-4 md:px-10 text-sm flex flex-col md:flex-row md:items-center md:space-x-4 pb-4 md:pb-0 space-y-2 md:space-y-0">
          <div className="flex items-center">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16px"
                viewBox="0 0 24 24"
                width="24px"
                fill="gray"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />
              </svg>
            </span>
            <span className="pl-1">
              Email us at <a className="text-blue-500">rahul.rane@gmail.com</a>
            </span>
          </div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#999999"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z" />
            </svg>
            <span className="pl-1">
              Our Products{" "}
              <a href="http://www.lazerxtech.com" className="text-blue-500">
                http://www.lazerxtech.com
              </a>
            </span>
          </div>
        </div>
      </HeaderDiv>
      <div className="h-full w-full">
        <img src="map.png" className="pt-2 md:h-full h-52" />
      </div>
    </SpacedSection>
  );
}
