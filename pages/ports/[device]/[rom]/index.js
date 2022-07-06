import { parseCodename, titleCase, parseDate } from "../../../../utils/helpers";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { PortCards } from "../../../../components";
import { motion } from "framer-motion";
import {
  animateDown,
  animateExit,
  animateUp,
  easing,
} from "../../../../utils/helpers";

const Rom = ({ rom, device, ports }) => {
  return (
    <motion.div initial="initial" animate="animate">
      <div className="mb-12">
        <motion.div variants={animateDown}>
          <h1 className="pageH1 mb-4">{rom?.name}</h1>
          <h2 className="text-xl md:text-4xl mb-4 text-gray-800">
            ({titleCase(device?.name)})
          </h2>
        </motion.div>
        <motion.div variants={animateUp}>
          <p className="mb-10 text-sm font-semibold text-orange-500">
            <Link href="/">Home</Link>
            <span className="text-gray-700">&nbsp;&gt;&nbsp;</span>
            <Link href="/ports">Ports</Link>
            <span className="text-gray-700">&nbsp;&gt;&nbsp;</span>
            <Link href={`/ports/${device?.codename}`}>
              {parseCodename(device?.codename)}
            </Link>
          </p>
          <p>
            All {rom?.name} Ported Roms for {titleCase(device?.name)} (
            {parseCodename(device?.codename)}) are listed below
          </p>
        </motion.div>
      </div>
      <PortCards ports={ports} device={device} rom={rom} type="ports" />
    </motion.div>
  );
};

export async function getStaticProps(context) {
  let device = context.params.device;
  let rom = context.params.rom;

  let portsRes = {};

  try {
    portsRes = await axios.get(
      `${process.env.REACT_APP_API_URL}/miuiroms/${rom}/${device}`,
      { responseType: "json" }
    );
  } catch (error) {
    console.log(error.message);
    portsRes = await axios.get(
      `${process.env.REACT_APP_API_URL}/miuiroms/${rom}/${device}`,
      { responseType: "json" }
    );
  }

  if (portsRes.data.success == false) {
    return {
      notFound: true,
    };
  }

  rom = portsRes.data.data.rom;
  device = portsRes.data.data.device;
  let ports = portsRes.data.data.miuiroms;

  return {
    props: {
      rom,
      device,
      ports,
    },
    revalidate: 10000,
  };
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

  const paths = [];

  for (const rom of roms) {
    for (const device of rom.devices) {
      paths.push({
        params: {
          device: device,
          rom: rom.romId,
        },
      });
    }
  }

  return { paths, fallback: "blocking" };
}

export default Rom;
