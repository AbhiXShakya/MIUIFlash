import { LinkButton } from "../components";

export default function FourOhFour() {
  return (
    <>
      <div className="w-full">
        <h1 className="text-center font-extrabold text-8xl md:text-[16rem] lg:text-[20rem] text-orange-500 ">
          404
        </h1>
        <p className="text-center font-extrabold text-4xl md:text-[4rem] lg:text-[5rem] dark:text-gray-300 text-gray-800">
          Page Not Found
        </p>
      </div>
      <div className="relative w-full h-20 md:h-44">
        <div className="absolute mt-2 md:mt-16 md:mb-16 translate-x-1/2 right-1/2">
          <LinkButton Button txt="Go Home" href="/" />
        </div>
      </div>
    </>
  );
}
