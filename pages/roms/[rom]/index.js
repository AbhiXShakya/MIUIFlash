import axios from "axios";
import { Breadcrumbs, DeviceCards } from "../../../components";
import { motion } from "framer-motion";
import Link from "next/link";
import { animateDown, animateUp, titleCase } from "../../../utils/helpers";

export function Rom({ rom, devices }) {
  const breadcrumbs = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Roms",
      href: "/roms",
    },
  ];

  return (
    <motion.div initial="initial" animate="animate">
      <div className="mb-12">
        <motion.div variants={animateDown}>
          <h1 className="pageH1 mb-4">{titleCase(rom?.name)}</h1>
          <h2 className="text-2xl md:text-4xl mb-4 text-gray-800">
            (By&nbsp;{titleCase(rom?.owner)})
          </h2>
        </motion.div>
        <motion.div variants={animateUp}>
          <Breadcrumbs breadm={breadcrumbs} />
          <p>All {rom?.name} Roms for Android Phones are listed below</p>
        </motion.div>
      </div>
      <DeviceCards data={devices} type={rom?.romId} />
    </motion.div>
  );
}

export async function getStaticProps({ params }) {
  let rom = params.rom;
  let res = {};
  try {
    res = await axios.get(`${process.env.REACT_APP_API_URL}/rom/${rom}`, {
      responseType: "json",
    });
  } catch (error) {
    console.log(error.message);
    res = await axios.get(`${process.env.REACT_APP_API_URL}/rom/${rom}`, {
      responseType: "json",
    });
  }

  rom = res.data.data.rom;
  const devices = res.data.data.devices;

  return { props: { devices, rom } };
}

export async function getStaticPaths() {
  let romsRes = {};
  try {
    romsRes = await axios.get(`${process.env.REACT_APP_API_URL}/roms`, {
      responseType: "json",
    });
  } catch (error) {
    console.log(error.message);
    romsRes = await axios.get(`${process.env.REACT_APP_API_URL}/roms`, {
      responseType: "json",
    });
  }

  const roms = romsRes.data.data;

  const paths = roms.map((rom) => ({
    params: {
      rom: rom.romId,
    },
  }));

  return { paths, fallback: "blocking" };
}

export default Rom;
