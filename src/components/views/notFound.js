import LxtButton from "../buttons/lxtButton";

export default function NotFound() {
  return (
    <>
      <div className="h-screen w-full flex justify-center items-center">
        <LxtButton text={"Oops! 404, Page is not found"} color={"red"} />
      </div>
    </>
  );
}
