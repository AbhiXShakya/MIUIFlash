import Image from "next/image";
import { LinkButton } from "./buttons";

const HomeHero = () => {
  return (
    <div className="mt-2 flex flex-col items-center md:flex-row-reverse max-w-[1700px] justify-between">
      <div className="pl-[56px]">
        <Image
          src="/images/MIUIFlash_Hero.png"
          alt="MIUIFlash"
          title="MIUIFlash"
          width="290px"
          height="550px"
        />
      </div>
      <div className="text-center md:text-left md:w-[65%] mb-[60px]">
        <h2 className="mb-10 hclap">What is MIUIFlash</h2>
        <p className="max-w-xl mb-8 text-gray-700">
          Welcome Guys to MIUIFlash, here you will get all the required
          Information & Updates of MIUI. Lets Enjoy this Journey Together with a
          Flash Welcome Guys to MIUIFlash, here you will get all the required
          Information & Updates of MIUI. Lets Enjoy this Journey Together with a
          Flash
        </p>
        <LinkButton txt="Get Started" href="/ports" />
      </div>
    </div>
  );
};

export default HomeHero;
