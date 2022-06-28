import Image from "next/image";
import { LinkButton } from "./buttons";
import { motion } from "framer-motion";
import { animateDown, stagger, fadeInUp, animateUp } from "../utils/helpers";

export function HomeHero() {
  return (
    <motion.div
      variants={stagger}
      className="mt-2 flex flex-col items-center md:flex-row-reverse max-w-[1700px] justify-between"
    >
      <motion.div variants={fadeInUp} className="pl-[56px]">
        <Image
          src="/images/MIUIFlash_Hero.png"
          alt="MIUIFlash"
          title="MIUIFlash"
          width="290px"
          height="550px"
        />
      </motion.div>
      <div className="text-center md:text-left md:w-[65%] mb-[60px]">
        <motion.h2 variants={animateDown} className="mb-10 hclap">
          What is MIUIFlash
        </motion.h2>
        <motion.div variants={animateUp}>
          <p className="max-w-xl mb-8 text-gray-700">
            Welcome Guys to MIUIFlash, here you will get all the required
            Information & Updates of MIUI. Lets Enjoy this Journey Together with
            a Flash Welcome Guys to MIUIFlash, here you will get all the
            required Information & Updates of MIUI. Lets Enjoy this Journey
            Together with a Flash
          </p>
          <LinkButton Button txt="Get Started" href="/ports" />
        </motion.div>
      </div>
    </motion.div>
  );
}
