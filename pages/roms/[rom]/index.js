import axios from "axios";
import { DeviceCards } from "../../../components";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  animateDown,
  animateExit,
  animateUp,
  easing,
  titleCase,
} from "../../../utils/helpers";

export function Rom({ rom, devices }) {
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
          <p className="mb-10 text-sm font-semibold text-orange-500">
            <Link href="/">Home</Link>
            <span className="text-gray-700">&nbsp;&gt;&nbsp;</span>
            <Link href="/roms">Roms</Link>
          </p>
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

  return { props: { devices, rom }, revalidate: 1000 };
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
