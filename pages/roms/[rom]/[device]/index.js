import { parseCodename, titleCase, parseDate } from "../../../../utils/helpers";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { Breadcrumbs, PortCards } from "../../../../components";
import { motion } from "framer-motion";
import {
  animateDown,
  animateExit,
  animateUp,
  easing,
} from "../../../../utils/helpers";

const Rom = ({ rom, device, ports }) => {
  const breadcrumbs = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Roms",
      href: "/roms",
    },
    {
      name: titleCase(rom?.name),
      href: `/roms/${rom?.romId}`,
    },
  ];

  return (
    <motion.div initial="initial" animate="animate">
      <div className="mb-12">
        <motion.div variants={animateDown}>
          <h1 className="pageH1 mb-4">{rom?.name}</h1>
          <h2 className="text-xl md:text-4xl mb-4 dark:text-gray-300 text-gray-800">
            ({titleCase(device?.name)})
          </h2>
        </motion.div>
        <motion.div variants={animateUp}>
          <Breadcrumbs breadm={breadcrumbs} />
          <p>
            All {rom?.name} Roms for {titleCase(device?.name)} (
            {parseCodename(device?.codename)}) are listed below
          </p>
        </motion.div>
      </div>
      <PortCards ports={ports} device={device} rom={rom} type={rom?.romId} />
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
