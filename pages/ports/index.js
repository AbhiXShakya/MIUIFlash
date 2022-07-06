import axios from "axios";
import { DeviceCards } from "../../components";
import { motion } from "framer-motion";
import {
  animateDown,
  animateExit,
  animateUp,
  easing,
} from "../../utils/helpers";

export default function Ports({ data }) {
  return (
    <motion.div initial="initial" animate="animate">
      <div className="mb-12">
        <motion.h1 variants={animateDown} className="pageH1">
          MIUI Ports
        </motion.h1>
        <motion.p variants={animateUp}>
          MIUI Ports is a collection of MIUI ports for Android Phones.
        </motion.p>
      </div>
      <DeviceCards data={data} type="ports" />
    </motion.div>
  );
}

export async function getStaticProps() {
  let res = {};
  try {
    res = await axios.get(`${process.env.REACT_APP_API_URL}/devices`, {
      responseType: "json",
    });
  } catch (error) {
    console.log(error.message);
    res = await axios.get(`${process.env.REACT_APP_API_URL}/devices`, {
      responseType: "json",
    });
  }

  const data = res.data.data;

  return { props: { data }, revalidate: 10000 };
}
