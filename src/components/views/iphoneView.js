import LxtButton from "../buttons/lxtButton";
import "../../styles/iphoneView.scss";

const IphoneView = () => {
  return (
    <div className="iphone-view pr-10 md:pr-10 lg:pr-40 2xl:pr-80 h-screen w-1/2 sticky top-0 items-start hidden md:block">
      <div className="iphone">
        <img src="iphone.png" alt="iPhone" />
        <video
          src="https://res.cloudinary.com/djdyzefbx/video/upload/v1738504450/iphone_ug3ukp.mp4"
          autoPlay
          loop
          muted
          style={{ objectFit: "cover" }}
        />
        <div className="iphone-button">
          <LxtButton text={"BOOK A TICKET"} color="red" />
        </div>
      </div>
    </div>
  );
};

export default IphoneView;
