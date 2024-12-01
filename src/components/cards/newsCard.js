export default function NewsCard({ isMobile, src, heading, summary, date }) {
  return (
    <div className="shrink-[0.05] bg-card-color md:shrink w-96 md:w-auto flex flex-col hover:bg-blue-900 hover:scale-105 rounded-2xl hover:duration-300 hover:ease-in-out">
      <div
        style={{
          height: isMobile ? "auto" : "auto",
        }}
        className=" shadow-xl  rounded-t-2xl relative flex flex-col"
      >
        <div className="p-4">
          <div className="h-48 md:h-44 lg:h-48">
            <img className="h-full w-full rounded-2xl" src={src}></img>
          </div>
          <span className="h-auto min-h-32 flex flex-col justify-between">
            <div className="pt-4 text-md  md:text-md xl:text-2xl">
              {heading}
            </div>
            <div className="pt-4 text-sm sm:text-base md:text-xs lg:text-md">
              {summary}
            </div>
          </span>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#0C6AB0",
        }}
        className="px-4 text-sm pb-4 pt-2 bg-blue-500  h-16 w-full rounded-b-2xl flex justify-between"
      >
        <div className="flex flex-col text-md sm:text-base md:text-6xs lg:text-md xl:text-base justify-between space-y-1">
          <span>Date</span>
          <span>{date}</span>
        </div>
        <div className="mt-3 text-md sm:text-base md:text-6xs lg:text-md xl:text-base">
          Read More
        </div>
      </div>
    </div>
  );
}
