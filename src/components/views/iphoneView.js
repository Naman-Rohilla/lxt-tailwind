import LxtButton from "../buttons/lxtButton";
import "../../styles/iphoneView.scss";

const IphoneView = () => {
  return (
    <div className="iphone-view pr-10 md:pr-10 lg:pr-40 2xl:pr-80 h-screen w-1/2 sticky top-0 items-start hidden md:block">
      <div className="iphone ">
        <img src="iphone.png" alt="iPhone" className="2xl:h-[700px] 2xl:w-[350px] md:h-[45%] md:w-[52%]" />
        <video
          src="https://res.cloudinary.com/djdyzefbx/video/upload/v1738504450/iphone_ug3ukp.mp4"
          autoPlay
          loop
          muted
          style={{ objectFit: "cover" }}
          className="md:h-[47%] md:-translate-y-2 md:translate-x-1 md:w-[59%] xl:w-[53%] xl:rounded-[60px] md:rounded-[3rem] 2xl:h-[700px] 2xl:w-[350px] 2xl:rounded-[65px] 2xl:-translate-y-0 2xl:translate-x-0 "
        />
        <div className="iphone-button md:-translate-y-72 md:translate-x-8 2xl:-translate-y-0 2xl:translate-x-0">
          <LxtButton text={"BOOK A TICKET"} color="red" />
        </div>
      </div>
    </div>
  );
};

export default IphoneView;
