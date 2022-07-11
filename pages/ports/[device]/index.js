import { parseCodename, titleCase } from "../../../utils/helpers";
import Link from "next/link";
import axios from "axios";
import { Breadcrumbs, RomCards } from "../../../components";
import { motion } from "framer-motion";
import {
  animateDown,
  animateExit,
  animateUp,
  easing,
} from "../../../utils/helpers";

const Device = ({ deviceRoms, device }) => {
  const breadcrumbs = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Ports",
      href: "/ports",
    },
  ];

  return (
    <motion.div initial="initial" animate="animate">
      <div className="mb-12">
        <motion.div variants={animateDown}>
          <h1 className="pageH1 mb-4">{parseCodename(device?.codename)}</h1>
          <h2 className="text-2xl md:text-4xl mb-4 dark:text-gray-300 text-gray-800">
            ({titleCase(device?.name)})
          </h2>
        </motion.div>
        <motion.div variants={animateUp}>
          <Breadcrumbs breadm={breadcrumbs} />
        </motion.div>
      </div>
      <RomCards data={deviceRoms} device={device} />
    </motion.div>
  );
};

export async function getStaticProps(context) {
  let device = context.params.device;

  let romsRes = {};

  try {
    romsRes = await axios.get(
      `${process.env.REACT_APP_API_URL}/roms/${device}`,
      {
        responseType: "json",
      }
    );
  } catch (error) {
    console.log(error.message);
    romsRes = await axios.get(
      `${process.env.REACT_APP_API_URL}/roms/${device}`,
      {
        responseType: "json",
      }
    );
  }

  if (romsRes.data.success == false) {
    return {
      notFound: true,
    };
  }

  device = romsRes.data.data.device;
  const deviceRoms = romsRes.data.data.roms;

  return {
    props: {
      deviceRoms,
      device,
    },
  };
}

export async function getStaticPaths() {
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
  const devices = res.data.data;

  const paths = devices.map((post) => ({
    params: { device: post.codename },
  }));

  return { paths, fallback: "blocking" };
}

export default Device;
