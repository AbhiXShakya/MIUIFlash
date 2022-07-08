import { motion } from "framer-motion";
import { Breadcrumbs, MiuiDevices } from "../../../components";
import { animateDown, animateUp, titleCase } from "../../../utils/helpers";
import axios from "axios";

const MiuiUpdates = ({ data }) => {
  const breadcrumbs = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Miui Updates",
      href: "/miuiupdates",
    },
  ];

  return (
    <motion.div initial="initial" animate="animate">
      <div className="mb-12">
        <motion.h1
          variants={animateDown}
          className="lg:text-7xl text-5xl mt-6 md:text-6xl font-extrabold mb-4"
        >
          {titleCase(data.deviceId)}
        </motion.h1>
        <Breadcrumbs breadm={breadcrumbs} />
        <motion.p variants={animateUp}>
          MIUI Ports is a collection of MIUI ports for Android Phones.
        </motion.p>
      </div>
      <MiuiDevices data={data} />
    </motion.div>
  );
};

export async function getStaticProps({ params }) {
  const deviceId = params.deviceId.replace("hm", "HM");

  let res = {};
  try {
    res = await axios.get(
      `${process.env.REACT_APP_API_URL}/miuiupdates/devices/${deviceId}`,
      {
        responseType: "json",
      }
    );
  } catch (error) {
    console.log(error.message);
    res = await axios.get(
      `${process.env.REACT_APP_API_URL}/miuiupdates/devices/${deviceId}`,
      {
        responseType: "json",
      }
    );
  }

  const data = res.data.data;

  return { props: { data }, revalidate: 10000 };
}

export async function getStaticPaths() {
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
  const devices = res.data.data;

  const paths = devices.map((device) => ({
    params: { deviceId: device.deviceId.toLowerCase() },
  }));

  return { paths, fallback: "blocking" };
}

export default MiuiUpdates;
