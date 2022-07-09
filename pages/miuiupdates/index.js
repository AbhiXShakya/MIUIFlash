import { motion } from "framer-motion";
import { MiuiUpdateDevices } from "../../components";
import { animateDown, animateUp } from "../../utils/helpers";
import axios from "axios";

const MiuiUpdates = ({ data }) => {
  return (
    <motion.div initial="initial" animate="animate">
      <div className="mb-12">
        <motion.h1 variants={animateDown} className="pageH1">
          MIUI Updates
        </motion.h1>
        <motion.p variants={animateUp}>
          MIUI Ports is a collection of MIUI ports for Android Phones.
        </motion.p>
      </div>
      <MiuiUpdateDevices data={data} />
    </motion.div>
  );
};

export async function getStaticProps() {
  let res = {};
  try {
    res = await axios.get(
      `${process.env.REACT_APP_API_URL}/miuiupdates/devices`,
      {
        responseType: "json",
      }
    );
  } catch (error) {
    console.log(error.message);
    res = await axios.get(
      `${process.env.REACT_APP_API_URL}/miuiupdates/devices`,
      {
        responseType: "json",
      }
    );
  }

  const data = res.data.data;

  return { props: { data } };
}

export default MiuiUpdates;
