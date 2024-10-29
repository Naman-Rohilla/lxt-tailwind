export default function NewsCard({ isMobile }) {
  return (
    <div
      style={{
        height: isMobile ? "auto" : "43vh",
      }}
      className="shrink-[0.05] md:shrink background-primary-color shadow-xl w-96 rounded-2xl bg-red-100 relative flex flex-col"
    >
      <div className="p-4">
        <div className="h-48 md:h-44 lg:h-48">
          <img className="h-full w-full rounded-2xl" src="news1.png"></img>
        </div>
        <span className="h-60 flex flex-col justify-between">
          <div className="pt-4 text-md  md:text-md xl:text-2xl">
            Shiv Chhatrapati Award, Best Skating Coach
          </div>
          <div className="pt-4 pb-16 md:pb-24 sm:pb-8 md:pb-24 text-sm sm:text-base md:text-6xs lg:text-md">
            Rahul Ramesh Rane of Pune has been felicitated with the most
            prestigious Sports...
          </div>
        </span>
      </div>
      <div
        style={{
          backgroundColor: "#0C6AB0",
        }}
        className="px-4 text-sm pb-4 pt-2 bg-blue-500 absolute bottom-0 h-16 w-full rounded-b-2xl flex justify-between"
      >
        <div className="flex flex-col text-md sm:text-base md:text-6xs lg:text-md xl:text-base justify-between space-y-1">
          <span>Date</span>
          <span>September 7, 2024</span>
        </div>
        <div className="mt-3 text-md sm:text-base md:text-6xs lg:text-md xl:text-base">
          Read More
        </div>
      </div>
    </div>
  );
}
