import axios from "axios";
import { AllRomCards } from "../../components";
import { motion } from "framer-motion";
import {
  animateDown,
  animateExit,
  animateUp,
  easing,
} from "../../utils/helpers";

export default function Roms({ data }) {
  return (
    <motion.div initial="initial" animate="animate">
      <div className="mb-12">
        <motion.h1 variants={animateDown} className="pageH1">
          MIUI ROMs
        </motion.h1>
        <motion.p variants={animateUp}>
          MIUI ROMs is a collection of MIUI ROMs for Android Phones.
        </motion.p>
      </div>
      <AllRomCards data={data} />
    </motion.div>
  );
}

export async function getStaticProps() {
  let res = {};
  try {
    res = await axios.get(`${process.env.REACT_APP_API_URL}/roms`, {
      responseType: "json",
    });
  } catch (error) {
    console.log(error.message);
    res = await axios.get(`${process.env.REACT_APP_API_URL}/roms`, {
      responseType: "json",
    });
  }

  const data = res.data.data;

  return { props: { data }, revalidate: 10000 };
}
