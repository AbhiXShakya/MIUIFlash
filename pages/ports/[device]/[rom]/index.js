import { parseCodename, titleCase, parseDate } from "../../../../utils/helpers";
import Link from "next/link";
import axios from "axios";
import { Breadcrumbs, PortCards } from "../../../../components";
import { motion } from "framer-motion";
import {
  animateDown,
  animateExit,
  animateUp,
  easing,
} from "../../../../utils/helpers";
import { marked } from "marked";

const Rom = ({ rom, device, ports }) => {
  const breadcrumbs = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Ports",
      href: "/ports",
    },
    {
      name: parseCodename(device?.codename),
      href: `/ports/${device?.codename}`,
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
          <motion.div className="blog customlist">
            <div
              dangerouslySetInnerHTML={{ __html: marked(rom?.description) }}
            ></div>
          </motion.div>
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
      `${process.env.REACT_APP_API_URL}/miuiroms/${rom}/${device}?key=THISISSECRET`,
      { responseType: "json" }
    );
  } catch (error) {
    console.log(error.message);
    portsRes = await axios.get(
      `${process.env.REACT_APP_API_URL}/miuiroms/${rom}/${device}?key=THISISSECRET`,
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
    romsRes = await axios.get(
      `${process.env.REACT_APP_API_URL}/roms?key=THISISSECRET`,
      {
        responseType: "json",
      }
    );
  } catch (error) {
    console.log(error.message);
    romsRes = await axios.get(
      `${process.env.REACT_APP_API_URL}/roms?key=THISISSECRET`,
      {
        responseType: "json",
      }
    );
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
