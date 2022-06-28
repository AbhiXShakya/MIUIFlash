import Image from "next/image";
import Link from "next/link";
import {
  animateDown,
  animateUp,
  parseCodename,
  parseDate,
  titleCase,
} from "../utils/helpers";
import { motion } from "framer-motion";
import { stagger, fadeInUp } from "../utils/helpers";

export const DeviceCards = ({ data, type }) => {
  return (
    <motion.div variants={stagger}>
      <motion.h2
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        className="text-3xl font-bold"
      >
        Select Your Device
      </motion.h2>
      <motion.div
        variants={animateDown}
        className="grid grid-flow-rows place-items-center gap-6 my-14 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      >
        {data?.map((item) => (
          <Link
            key={item?._id}
            href={
              type === "ports"
                ? `/ports/${item.codename}`
                : `/roms/${type}/${item.codename}`
            }
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0 }}
              className="card"
            >
              <motion.div
                variants={fadeInUp}
                className="relative w-full h-44 mb-6"
              >
                <Image
                  src={item?.image}
                  alt={`MIUI ${type} for ${item?.name} (${parseCodename(
                    item?.codename
                  )})`}
                  layout="fill"
                  objectFit="contain"
                />
              </motion.div>
              <div className="text-center">
                <h3 className="font-bold text-xl">{item?.name}</h3>
                <p className="text-sm text-gray-700 mt-1 font-medium">
                  ({parseCodename(item?.codename)})
                </p>
              </div>
            </motion.div>
          </Link>
        ))}
      </motion.div>
    </motion.div>
  );
};

export const RomCards = ({ data, device }) => {
  return (
    <motion.div>
      <motion.h2
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        className="text-3xl font-bold mb-0"
      >
        Supported Roms
      </motion.h2>
      <div className="grid grid-flow-rows place-items-center gap-6 my-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {data?.map((rom) => (
          <Link
            key={rom?._id}
            href={`/ports/${device?.codename}/${rom?.romId}`}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0 }}
              className="card"
            >
              <motion.div
                variants={fadeInUp}
                className="relative w-full h-44 mb-6"
              >
                <Image
                  src={rom?.image}
                  alt={`${rom?.name} Ports for ${device?.name} (${parseCodename(
                    device?.codename
                  )})`}
                  layout="fill"
                  objectFit="contain"
                  priority={true}
                />
              </motion.div>
              <div className="text-center">
                <h3 className="font-bold text-xl">{rom?.name}</h3>
                <p className="text-sm text-gray-700 mt-1 font-medium">
                  (by {rom?.owner})
                </p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
};

export const AllRomCards = ({ data }) => {
  return (
    <motion.div>
      <motion.h2
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        className="text-3xl font-bold mb-0"
      >
        Supported Roms
      </motion.h2>
      <div className="grid grid-flow-rows place-items-center gap-6 my-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {data?.map((rom) => (
          <Link key={rom?._id} href={`/roms/${rom?.romId}`}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0 }}
              className="card"
            >
              <motion.div
                variants={fadeInUp}
                className="relative w-full h-44 mb-6"
              >
                <Image
                  src={rom?.image}
                  alt={`All Latest ${rom?.name} ROMs`}
                  layout="fill"
                  objectFit="contain"
                  priority={true}
                />
              </motion.div>
              <div className="text-center">
                <h3 className="font-bold text-xl">{rom?.name}</h3>
                <p className="text-sm text-gray-700 mt-1 font-medium">
                  (by {rom?.owner})
                </p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
};

export const PortCards = ({ ports, device, rom, type }) => {
  return (
    <motion.div>
      <h2 className="text-3xl font-bold">All Ports</h2>
      <div className="mt-8">
        <motion.div
          variants={animateUp}
          className="grid grid-flow-row grid-cols-1 mb-6 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {ports?.map((port) => (
            <Link
              key={port?._id}
              href={
                type === "ports"
                  ? `/ports/${device?.codename}/${rom?.romId}/${port?.slug}`
                  : `/roms/${type}/${device?.codename}/${port?.slug}`
              }
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="cursor-pointer group"
              >
                <Image
                  src={port?.image}
                  alt={`${port?.name} Port for ${rom?.name} (${
                    device?.name
                  } (${parseCodename(device?.codename)}))`}
                  className="object-cover object-center w-full rounded-lg shadow-md"
                  width={1600}
                  height={900}
                />
                <div className="relative px-4 -mt-10">
                  <motion.div className="p-5 card group-hover:border-orange-500 bg-white">
                    <h2 className="text-xl mb-2 font-extrabold">
                      {rom?.name}&nbsp;
                      {port?.miuiVersion}
                    </h2>
                    <p className="text-sm text-gray-700 font-medium">
                      {parseDate(port?.updatedAt)}
                    </p>
                    <div className="mt-1">
                      <p className="text-sm text-gray-600 min-h-[2rem]">
                        Build by {port?.maintainer}
                      </p>
                    </div>
                    <div className="flex flex-wrap items-baseline mb-3">
                      <span className="inline-block px-2 py-1 pt-[5px] mr-1 text-[0.6rem] font-semibold tracking-wide text-black rounded-full bg-gray-200 group-hover:bg-orange-100">
                        {titleCase(port?.miuiType)}
                      </span>
                      <span className="inline-block px-2 py-1 pt-[5px] mr-1 text-[0.6rem] font-semibold tracking-wide text-black rounded-full bg-gray-200 group-hover:bg-orange-100">
                        Android {port?.androidVersion}
                      </span>
                      <span className="inline-block px-2 py-1 pt-[5px] mr-1 text-[0.6rem] font-semibold tracking-wide text-black rounded-full bg-gray-200 group-hover:bg-orange-100">
                        {titleCase(port?.status)}
                      </span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};
