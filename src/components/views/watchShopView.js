import LxtButton from "../buttons/lxtButton";
import SpacedSection from "../spacedSection/spacedSection";

const WatchShopView = ({ isMobile }) => {
  return (
    <SpacedSection
      position="sticky"
      customStyling="watch-shop-view sticky top-0 w-full md:w-[calc(100vw-2rem)] flex py-10 md:py-24"
    >
      {isMobile ? (
        <>
          <div className="flex flex-col w-full items-center space-y-5">
            <span className="text-5xl text-red-500">Shop Live</span>
            <img
              width={"60%"}
              src="https://res.cloudinary.com/djdyzefbx/image/upload/v1738500741/watch5_6_11zon_kdmvvz.png"
            />
            <video className="mobile-video object-cover" autoPlay loop muted>
              <source src="https://res.cloudinary.com/djdyzefbx/video/upload/v1738501443/watch6_e2qhdu.mp4"></source>
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
              <source src="https://res.cloudinary.com/djdyzefbx/video/upload/v1738501443/watch6_e2qhdu.mp4"></source>
            </video>
            <img src="https://res.cloudinary.com/djdyzefbx/image/upload/v1738500740/live_1_11zon_p77csc.png" />
          </div>
          <div className="img-center">
            <img
              width={"100%"}
              height={220}
              src="https://res.cloudinary.com/djdyzefbx/image/upload/v1738500742/watch2_3_11zon_hetgpt.png"
            />
            <span className="text-shop">Shop Live</span>
            <img
              width={"60%"}
              src="https://res.cloudinary.com/djdyzefbx/image/upload/v1738500741/watch5_6_11zon_kdmvvz.png"
            />
            <span
              style={{
                fontSize: "1rem",
              }}
            >
              <LxtButton text={"Watch & Shop"} color={"red"} />
            </span>
            <img
              width={"100%"}
              height={150}
              src="https://res.cloudinary.com/djdyzefbx/image/upload/v1738500741/watch1_2_11zon_dolc8r.png"
            />
          </div>
          <div className="img-right">
            <img
              className="h-full"
              src="https://res.cloudinary.com/djdyzefbx/image/upload/v1738500741/watch4_5_11zon_yhapj4.png"
            />
            <img />
          </div>
        </>
      )}
    </SpacedSection>
  );
};

export default WatchShopView;
