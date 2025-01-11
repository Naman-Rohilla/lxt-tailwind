import LxtButton from "../buttons/lxtButton";
import SpacedSection from "../spacedSection/spacedSection";

const WatchShopView = ({ isMobile }) => {
  return (
    <SpacedSection
      position="sticky"
      customStyling="watch-shop-view sticky top-0 w-full md:w-screen flex py-10 md:py-24"
    >
      {isMobile ? (
        <>
          <div className="flex flex-col w-full items-center space-y-5">
            <span className="text-5xl text-red-500">Shop Live</span>
            <img width={"60%"} src="watchshop/watch5.png" />
            <video className="mobile-video object-cover" autoPlay loop muted>
              <source src="watchshop/watch6.mp4"></source>
            </video>
            <LxtButton
              text={"Watch & Shop"}
              color={"red"}
              customStyling="text-lg py-3 px-6"
            />
          </div>
        </>
      ) : (
        <>
          <div className="img-left relative">
            <video className="h-full object-cover" autoPlay loop muted>
              <source src="watchshop/watch6.mp4"></source>
            </video>
            <img src="watchshop/live.png" />
          </div>
          <div className="img-center">
            <img width={"100%"} height={220} src="watchshop/watch2.png" />
            <span className="text-shop">Shop Live</span>
            <img width={"60%"} src="watchshop/watch5.png" />
            <span
              style={{
                fontSize: "1rem",
              }}
            >
              <LxtButton text={"Watch & Shop"} color={"red"} />
            </span>
            <img width={"100%"} height={150} src="watchshop/watch1.png" />
          </div>
          <div className="img-right">
            <img className="h-full" src="watchshop/watch4.png" />
            <img />
          </div>
        </>
      )}
    </SpacedSection>
  );
};

export default WatchShopView;
