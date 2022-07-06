import Image from "next/image";
import Link from "next/link";
import {
  animateDown,
  animateUp,
  parseCodename,
  parseDate,
  randomColor,
  searchArray,
  titleCase,
} from "../utils/helpers";
import { motion } from "framer-motion";
import { stagger, fadeInUp, search } from "../utils/helpers";
import { useEffect, useState } from "react";
import { NoResults, AUpdatesButton } from ".";

export const DeviceCards = ({ data, type }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(data);
  const [notFound, setNotFound] = useState(false);
  const [isSearch, setIsSearch] = useState(false);

  useEffect(() => {
    if (data.length == 0) {
      setNotFound(true);
    }
  }, [data]);

  useEffect(() => {
    if (searchTerm.length > 0) {
      const results = search(searchTerm, data, ["name", "codename"]);
      console.log(results);
      if (results.length > 0) {
        setNotFound(false);
        setSearchResults(results);
      } else {
        setNotFound(true);
      }
    } else {
      setSearchResults(data);
    }
  }, [searchTerm]);

  return (
    <motion.div variants={stagger}>
      <motion.div
        variants={fadeInUp}
        className="flex justify-between md:justify-start"
      >
        <h2 className="text-3xl font-bold">Supported Devices</h2>
        <div
          className="mt-[0.19rem] md:ml-4 cursor-pointer select-text"
          onClick={() => {
            setIsSearch(!isSearch);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={4}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </motion.div>

      {isSearch ? (
        <motion.div variants={fadeInUp} className="relative">
          <input
            className={`${
              notFound
                ? "ring-2 ring-red-500 hover:ring-2 focus:ring-2 active:ring-2 hover:ring-red-500 focus:ring-red-500 active:ring-red-500"
                : "ring-1 ring-gray-300 hover:ring-1 focus:ring-1 active:ring-1 hover:ring-orange-500 focus:ring-orange-500 active:ring-orange-500"
            } outline-none w-full md:max-w-[20.1rem] rounded-md py-1 px-2`}
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {notFound ? (
            <motion.div className="absolute right-0 top-1/2 -translate-y-1/2 mr-2 md:left-[18.7rem]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                width={16}
                height={16}
                viewBox="0 0 256 256"
                xmlSpace="preserve"
              >
                <desc>Created with Fabric.js 1.7.22</desc>
                <defs></defs>
                <g transform="translate(128 128) scale(0.72 0.72)" style={{}}>
                  <g
                    style={{
                      stroke: "none",
                      strokeWidth: 0,
                      strokeDasharray: "none",
                      strokeLinecap: "butt",
                      strokeLinejoin: "miter",
                      strokeMiterlimit: 10,
                      fill: "none",
                      fillRule: "nonzero",
                      opacity: 1,
                    }}
                    transform="translate(-175.05 -175.05000000000004) scale(3.89 3.89)"
                  >
                    <path
                      d="M 45 90 C 20.187 90 0 69.813 0 45 C 0 20.187 20.187 0 45 0 c 24.813 0 45 20.187 45 45 C 90 69.813 69.813 90 45 90 z"
                      style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 10,
                        fill: "rgb(236,0,0)",
                        fillRule: "nonzero",
                        opacity: 1,
                      }}
                      transform=" matrix(1 0 0 1 0 0) "
                      strokeLinecap="round"
                    />
                    <path
                      d="M 28.902 66.098 c -1.28 0 -2.559 -0.488 -3.536 -1.465 c -1.953 -1.952 -1.953 -5.118 0 -7.07 l 32.196 -32.196 c 1.951 -1.952 5.119 -1.952 7.07 0 c 1.953 1.953 1.953 5.119 0 7.071 L 32.438 64.633 C 31.461 65.609 30.182 66.098 28.902 66.098 z"
                      style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 10,
                        fill: "rgb(255,255,255)",
                        fillRule: "nonzero",
                        opacity: 1,
                      }}
                      transform=" matrix(1 0 0 1 0 0) "
                      strokeLinecap="round"
                    />
                    <path
                      d="M 61.098 66.098 c -1.279 0 -2.56 -0.488 -3.535 -1.465 L 25.367 32.438 c -1.953 -1.953 -1.953 -5.119 0 -7.071 c 1.953 -1.952 5.118 -1.952 7.071 0 l 32.195 32.196 c 1.953 1.952 1.953 5.118 0 7.07 C 63.657 65.609 62.377 66.098 61.098 66.098 z"
                      style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 10,
                        fill: "rgb(255,255,255)",
                        fillRule: "nonzero",
                        opacity: 1,
                      }}
                      transform=" matrix(1 0 0 1 0 0) "
                      strokeLinecap="round"
                    />
                  </g>
                </g>
              </svg>
            </motion.div>
          ) : null}
        </motion.div>
      ) : null}
      {!notFound ? (
        <motion.div
          variants={animateDown}
          className="grid grid-flow-rows place-items-center gap-6 my-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          {searchResults?.map((item) => (
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
                  initial="initial"
                  animate="animate"
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
      ) : (
        <NoResults />
      )}
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
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(ports);
  const [notFound, setNotFound] = useState(false);
  const [isSearch, setIsSearch] = useState(false);

  useEffect(() => {
    if (ports.length == 0) {
      setNotFound(true);
    }
  }, [ports]);

  useEffect(() => {
    if (searchTerm.length > 0) {
      const results = search(searchTerm, ports, [
        "miuiVersion",
        "androidVersion",
        "miuiType",
        "updatedAt",
      ]);
      console.log(results);
      if (results.length > 0) {
        setNotFound(false);
        setSearchResults(results);
      } else {
        setNotFound(true);
      }
    } else {
      setSearchResults(ports);
    }
  }, [searchTerm]);

  return (
    <motion.div>
      <motion.div
        variants={fadeInUp}
        className="flex justify-between md:justify-start"
      >
        <h2 className="text-3xl font-bold">All Ports</h2>
        <div
          className="mt-[0.15rem] md:ml-4 cursor-pointer select-text"
          onClick={() => {
            setIsSearch(!isSearch);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={4}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </motion.div>
      {isSearch ? (
        <motion.div variants={fadeInUp} className="relative">
          <input
            className={`${
              notFound
                ? "ring-2 ring-red-500 hover:ring-2 focus:ring-2 active:ring-2 hover:ring-red-500 focus:ring-red-500 active:ring-red-500"
                : "ring-1 ring-gray-300 hover:ring-1 focus:ring-1 active:ring-1 hover:ring-orange-500 focus:ring-orange-500 active:ring-orange-500"
            } outline-none w-full rounded-md py-1 px-2`}
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {notFound ? (
            <motion.div className="absolute right-0 top-1/2 -translate-y-1/2 mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                width={16}
                height={16}
                viewBox="0 0 256 256"
                xmlSpace="preserve"
              >
                <desc>Created with Fabric.js 1.7.22</desc>
                <defs></defs>
                <g transform="translate(128 128) scale(0.72 0.72)" style={{}}>
                  <g
                    style={{
                      stroke: "none",
                      strokeWidth: 0,
                      strokeDasharray: "none",
                      strokeLinecap: "butt",
                      strokeLinejoin: "miter",
                      strokeMiterlimit: 10,
                      fill: "none",
                      fillRule: "nonzero",
                      opacity: 1,
                    }}
                    transform="translate(-175.05 -175.05000000000004) scale(3.89 3.89)"
                  >
                    <path
                      d="M 45 90 C 20.187 90 0 69.813 0 45 C 0 20.187 20.187 0 45 0 c 24.813 0 45 20.187 45 45 C 90 69.813 69.813 90 45 90 z"
                      style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 10,
                        fill: "rgb(236,0,0)",
                        fillRule: "nonzero",
                        opacity: 1,
                      }}
                      transform=" matrix(1 0 0 1 0 0) "
                      strokeLinecap="round"
                    />
                    <path
                      d="M 28.902 66.098 c -1.28 0 -2.559 -0.488 -3.536 -1.465 c -1.953 -1.952 -1.953 -5.118 0 -7.07 l 32.196 -32.196 c 1.951 -1.952 5.119 -1.952 7.07 0 c 1.953 1.953 1.953 5.119 0 7.071 L 32.438 64.633 C 31.461 65.609 30.182 66.098 28.902 66.098 z"
                      style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 10,
                        fill: "rgb(255,255,255)",
                        fillRule: "nonzero",
                        opacity: 1,
                      }}
                      transform=" matrix(1 0 0 1 0 0) "
                      strokeLinecap="round"
                    />
                    <path
                      d="M 61.098 66.098 c -1.279 0 -2.56 -0.488 -3.535 -1.465 L 25.367 32.438 c -1.953 -1.953 -1.953 -5.119 0 -7.071 c 1.953 -1.952 5.118 -1.952 7.071 0 l 32.195 32.196 c 1.953 1.952 1.953 5.118 0 7.07 C 63.657 65.609 62.377 66.098 61.098 66.098 z"
                      style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 10,
                        fill: "rgb(255,255,255)",
                        fillRule: "nonzero",
                        opacity: 1,
                      }}
                      transform=" matrix(1 0 0 1 0 0) "
                      strokeLinecap="round"
                    />
                  </g>
                </g>
              </svg>
            </motion.div>
          ) : null}
        </motion.div>
      ) : null}
      {!notFound ? (
        <div className="mt-8">
          <motion.div
            variants={animateUp}
            className="grid grid-flow-row grid-cols-1 mb-6 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {searchResults?.map((port) => (
              <Link
                key={port?._id}
                href={
                  type === "ports"
                    ? `/ports/${device?.codename}/${rom?.romId}/${port?.slug}`
                    : `/roms/${type}/${device?.codename}/${port?.slug}`
                }
              >
                <motion.div
                  initial="initial"
                  animate="animate"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="select-none cursor-pointer group"
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
      ) : (
        <NoResults />
      )}
    </motion.div>
  );
};

export const MiuiUpdateDevices = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(data);
  const [notFound, setNotFound] = useState(false);
  const [isSearch, setIsSearch] = useState(false);

  useEffect(() => {
    if (data.length == 0) {
      setNotFound(true);
    }
  }, [data]);

  useEffect(() => {
    if (searchTerm.length > 0) {
      const results = searchArray(searchTerm, data);
      console.log(results);
      if (results.length > 0) {
        setNotFound(false);
        setSearchResults(results);
      } else {
        setNotFound(true);
      }
    } else {
      setSearchResults(data);
    }
  }, [searchTerm]);

  return (
    <motion.div variants={stagger}>
      <motion.div
        variants={fadeInUp}
        className="flex justify-between md:justify-start"
      >
        <h2 className="text-3xl font-bold">Supported Devices</h2>
        <div
          className="mt-[0.19rem] md:ml-4 cursor-pointer select-text"
          onClick={() => {
            setIsSearch(!isSearch);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={4}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </motion.div>

      {isSearch ? (
        <motion.div variants={fadeInUp} className="relative">
          <input
            className={`${
              notFound
                ? "ring-2 ring-red-500 hover:ring-2 focus:ring-2 active:ring-2 hover:ring-red-500 focus:ring-red-500 active:ring-red-500"
                : "ring-1 ring-gray-300 hover:ring-1 focus:ring-1 active:ring-1 hover:ring-orange-500 focus:ring-orange-500 active:ring-orange-500"
            } outline-none w-full md:max-w-[20.1rem] rounded-md py-1 px-2`}
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {notFound ? (
            <motion.div className="absolute right-0 top-1/2 -translate-y-1/2 mr-2 md:left-[18.7rem]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                width={16}
                height={16}
                viewBox="0 0 256 256"
                xmlSpace="preserve"
              >
                <desc></desc>
                <defs></defs>
                <g transform="translate(128 128) scale(0.72 0.72)" style={{}}>
                  <g
                    style={{
                      stroke: "none",
                      strokeWidth: 0,
                      strokeDasharray: "none",
                      strokeLinecap: "butt",
                      strokeLinejoin: "miter",
                      strokeMiterlimit: 10,
                      fill: "none",
                      fillRule: "nonzero",
                      opacity: 1,
                    }}
                    transform="translate(-175.05 -175.05000000000004) scale(3.89 3.89)"
                  >
                    <path
                      d="M 45 90 C 20.187 90 0 69.813 0 45 C 0 20.187 20.187 0 45 0 c 24.813 0 45 20.187 45 45 C 90 69.813 69.813 90 45 90 z"
                      style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 10,
                        fill: "rgb(236,0,0)",
                        fillRule: "nonzero",
                        opacity: 1,
                      }}
                      transform=" matrix(1 0 0 1 0 0) "
                      strokeLinecap="round"
                    />
                    <path
                      d="M 28.902 66.098 c -1.28 0 -2.559 -0.488 -3.536 -1.465 c -1.953 -1.952 -1.953 -5.118 0 -7.07 l 32.196 -32.196 c 1.951 -1.952 5.119 -1.952 7.07 0 c 1.953 1.953 1.953 5.119 0 7.071 L 32.438 64.633 C 31.461 65.609 30.182 66.098 28.902 66.098 z"
                      style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 10,
                        fill: "rgb(255,255,255)",
                        fillRule: "nonzero",
                        opacity: 1,
                      }}
                      transform=" matrix(1 0 0 1 0 0) "
                      strokeLinecap="round"
                    />
                    <path
                      d="M 61.098 66.098 c -1.279 0 -2.56 -0.488 -3.535 -1.465 L 25.367 32.438 c -1.953 -1.953 -1.953 -5.119 0 -7.071 c 1.953 -1.952 5.118 -1.952 7.071 0 l 32.195 32.196 c 1.953 1.952 1.953 5.118 0 7.07 C 63.657 65.609 62.377 66.098 61.098 66.098 z"
                      style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 10,
                        fill: "rgb(255,255,255)",
                        fillRule: "nonzero",
                        opacity: 1,
                      }}
                      transform=" matrix(1 0 0 1 0 0) "
                      strokeLinecap="round"
                    />
                  </g>
                </g>
              </svg>
            </motion.div>
          ) : null}
        </motion.div>
      ) : null}
      {!notFound ? (
        <motion.div
          variants={animateDown}
          className="grid grid-flow-rows place-items-center gap-6 my-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          {searchResults?.map((item) => (
            <Link
              key={item?.deviceId}
              href={`/miuiupdates/${item?.deviceId.toLowerCase()}`}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0 }}
                className="card"
              >
                <motion.div
                  initial="animate"
                  animate="animate"
                  variants={fadeInUp}
                  className="w-full h-20 mb-6"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-20 w-20 m-auto"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </motion.div>
                <div className="text-center">
                  <h3 className="font-bold text-black text-3xl mb-5">
                    {titleCase(item?.deviceId)}
                  </h3>
                  <ul>
                    {item?.devices.map((device) => (
                      <li
                        key={device?.id}
                        className="text-base text-gray-700 mb-1"
                      >
                        ({device?.name})
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      ) : (
        <NoResults />
      )}
    </motion.div>
  );
};

export const MiuiDevices = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(data.devices);
  const [notFound, setNotFound] = useState(false);
  const [isSearch, setIsSearch] = useState(false);

  useEffect(() => {
    if (data.length == 0) {
      setNotFound(true);
    }
  }, [data]);

  useEffect(() => {
    if (searchTerm.length > 0) {
      const results = searchArray(searchTerm, data.devices);
      console.log(results);
      if (results.length > 0) {
        setNotFound(false);
        setSearchResults(results);
      } else {
        setNotFound(true);
      }
    } else {
      setSearchResults(data.devices);
    }
  }, [searchTerm]);

  return (
    <motion.div variants={stagger}>
      <motion.div
        variants={fadeInUp}
        className="flex justify-between md:justify-start"
      >
        <h2 className="text-3xl font-bold">Supported Devices</h2>
        <div
          className="mt-[0.19rem] md:ml-4 cursor-pointer select-text"
          onClick={() => {
            setIsSearch(!isSearch);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={4}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </motion.div>

      {isSearch ? (
        <motion.div variants={fadeInUp} className="relative">
          <input
            className={`${
              notFound
                ? "ring-2 ring-red-500 hover:ring-2 focus:ring-2 active:ring-2 hover:ring-red-500 focus:ring-red-500 active:ring-red-500"
                : "ring-1 ring-gray-300 hover:ring-1 focus:ring-1 active:ring-1 hover:ring-orange-500 focus:ring-orange-500 active:ring-orange-500"
            } outline-none w-full md:max-w-[20.1rem] rounded-md py-1 px-2`}
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {notFound ? (
            <motion.div className="absolute right-0 top-1/2 -translate-y-1/2 mr-2 md:left-[18.7rem]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                width={16}
                height={16}
                viewBox="0 0 256 256"
                xmlSpace="preserve"
              >
                <desc></desc>
                <defs></defs>
                <g transform="translate(128 128) scale(0.72 0.72)" style={{}}>
                  <g
                    style={{
                      stroke: "none",
                      strokeWidth: 0,
                      strokeDasharray: "none",
                      strokeLinecap: "butt",
                      strokeLinejoin: "miter",
                      strokeMiterlimit: 10,
                      fill: "none",
                      fillRule: "nonzero",
                      opacity: 1,
                    }}
                    transform="translate(-175.05 -175.05000000000004) scale(3.89 3.89)"
                  >
                    <path
                      d="M 45 90 C 20.187 90 0 69.813 0 45 C 0 20.187 20.187 0 45 0 c 24.813 0 45 20.187 45 45 C 90 69.813 69.813 90 45 90 z"
                      style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 10,
                        fill: "rgb(236,0,0)",
                        fillRule: "nonzero",
                        opacity: 1,
                      }}
                      transform=" matrix(1 0 0 1 0 0) "
                      strokeLinecap="round"
                    />
                    <path
                      d="M 28.902 66.098 c -1.28 0 -2.559 -0.488 -3.536 -1.465 c -1.953 -1.952 -1.953 -5.118 0 -7.07 l 32.196 -32.196 c 1.951 -1.952 5.119 -1.952 7.07 0 c 1.953 1.953 1.953 5.119 0 7.071 L 32.438 64.633 C 31.461 65.609 30.182 66.098 28.902 66.098 z"
                      style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 10,
                        fill: "rgb(255,255,255)",
                        fillRule: "nonzero",
                        opacity: 1,
                      }}
                      transform=" matrix(1 0 0 1 0 0) "
                      strokeLinecap="round"
                    />
                    <path
                      d="M 61.098 66.098 c -1.279 0 -2.56 -0.488 -3.535 -1.465 L 25.367 32.438 c -1.953 -1.953 -1.953 -5.119 0 -7.071 c 1.953 -1.952 5.118 -1.952 7.071 0 l 32.195 32.196 c 1.953 1.952 1.953 5.118 0 7.07 C 63.657 65.609 62.377 66.098 61.098 66.098 z"
                      style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 10,
                        fill: "rgb(255,255,255)",
                        fillRule: "nonzero",
                        opacity: 1,
                      }}
                      transform=" matrix(1 0 0 1 0 0) "
                      strokeLinecap="round"
                    />
                  </g>
                </g>
              </svg>
            </motion.div>
          ) : null}
        </motion.div>
      ) : null}
      {!notFound ? (
        <motion.div
          variants={animateDown}
          className="grid grid-flow-rows place-items-center gap-6 my-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          {searchResults?.map((item) => (
            <Link
              key={item?.id}
              href={`/miuiupdates/${data?.deviceId.toLowerCase()}/${item?.id
                .toLowerCase()
                .replaceAll("_", "-")}`}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0 }}
                className="card"
              >
                <motion.div
                  initial="animate"
                  animate="animate"
                  variants={fadeInUp}
                  className="w-full h-20 mb-6"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-20 w-20 m-auto"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </motion.div>
                <div className="text-center">
                  <h3 className="font-bold text-black text-3xl mb-5">
                    {titleCase(item?.name)}
                  </h3>
                  <ul>
                    <li className="text-base text-gray-700 mb-1">
                      ( {titleCase(item?.id.replaceAll("_", " "))} )
                    </li>
                  </ul>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      ) : (
        <NoResults />
      )}
    </motion.div>
  );
};

export const DeviceUpdatedRoms = ({ data, device }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(data);
  const [notFound, setNotFound] = useState(false);
  const [isSearch, setIsSearch] = useState(false);

  const gradients = {
    0: "from-[#673AB7] to-[#512DA8]",
    1: "from-[#B993D6] to-[#8CA6DB",
    2: "from-[#00d2ff] to-[#3a7bd5]",
    3: "from-[#D3959B] to-[#BFE6BA]",
    4: "from-[#f2709c] to-[#ff9472]",
    5: "from-[#E6DADA] to-[#274046]",
    6: "from-[#ddd6f3] to-[#faaca8]",
    7: "from-[#50C9C3] to-[#96DEDA]",
    8: "from-[#c21500] to-[#ffc500]",
    9: "from-[#DE6262] to-[#FFB88C]",
    10: "from-[#f857a6] to-[#ff5858]",
  };

  useEffect(() => {
    if (data.length == 0) {
      setNotFound(true);
    }
  }, [data]);

  useEffect(() => {
    setSearchResults(data);
  }, [data]);

  useEffect(() => {
    if (searchTerm.length > 0) {
      const results = searchArray(searchTerm, data);
      console.log(results);
      if (results.length > 0) {
        setNotFound(false);
        setSearchResults(results);
      } else {
        setNotFound(true);
      }
    } else {
      setSearchResults(data);
    }
  }, [searchTerm]);

  return (
    <motion.div initial="initial" animate="animate">
      <motion.div
        variants={fadeInUp}
        className="flex justify-between md:justify-start"
      >
        <h2 className="text-3xl font-bold">Available Roms</h2>
        <div
          className="mt-[0.19rem] md:ml-4 cursor-pointer select-text"
          onClick={() => {
            setIsSearch(!isSearch);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={4}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </motion.div>

      {isSearch ? (
        <motion.div variants={fadeInUp} className="relative">
          <input
            className={`${
              notFound
                ? "ring-2 ring-red-500 hover:ring-2 focus:ring-2 active:ring-2 hover:ring-red-500 focus:ring-red-500 active:ring-red-500"
                : "ring-1 ring-gray-300 hover:ring-1 focus:ring-1 active:ring-1 hover:ring-orange-500 focus:ring-orange-500 active:ring-orange-500"
            } outline-none w-full md:max-w-[20.1rem] rounded-md py-1 px-2`}
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {notFound ? (
            <motion.div className="absolute right-0 top-1/2 -translate-y-1/2 mr-2 md:left-[18.7rem]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                width={16}
                height={16}
                viewBox="0 0 256 256"
                xmlSpace="preserve"
              >
                <desc></desc>
                <defs></defs>
                <g transform="translate(128 128) scale(0.72 0.72)" style={{}}>
                  <g
                    style={{
                      stroke: "none",
                      strokeWidth: 0,
                      strokeDasharray: "none",
                      strokeLinecap: "butt",
                      strokeLinejoin: "miter",
                      strokeMiterlimit: 10,
                      fill: "none",
                      fillRule: "nonzero",
                      opacity: 1,
                    }}
                    transform="translate(-175.05 -175.05000000000004) scale(3.89 3.89)"
                  >
                    <path
                      d="M 45 90 C 20.187 90 0 69.813 0 45 C 0 20.187 20.187 0 45 0 c 24.813 0 45 20.187 45 45 C 90 69.813 69.813 90 45 90 z"
                      style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 10,
                        fill: "rgb(236,0,0)",
                        fillRule: "nonzero",
                        opacity: 1,
                      }}
                      transform=" matrix(1 0 0 1 0 0) "
                      strokeLinecap="round"
                    />
                    <path
                      d="M 28.902 66.098 c -1.28 0 -2.559 -0.488 -3.536 -1.465 c -1.953 -1.952 -1.953 -5.118 0 -7.07 l 32.196 -32.196 c 1.951 -1.952 5.119 -1.952 7.07 0 c 1.953 1.953 1.953 5.119 0 7.071 L 32.438 64.633 C 31.461 65.609 30.182 66.098 28.902 66.098 z"
                      style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 10,
                        fill: "rgb(255,255,255)",
                        fillRule: "nonzero",
                        opacity: 1,
                      }}
                      transform=" matrix(1 0 0 1 0 0) "
                      strokeLinecap="round"
                    />
                    <path
                      d="M 61.098 66.098 c -1.279 0 -2.56 -0.488 -3.535 -1.465 L 25.367 32.438 c -1.953 -1.953 -1.953 -5.119 0 -7.071 c 1.953 -1.952 5.118 -1.952 7.071 0 l 32.195 32.196 c 1.953 1.952 1.953 5.118 0 7.07 C 63.657 65.609 62.377 66.098 61.098 66.098 z"
                      style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 10,
                        fill: "rgb(255,255,255)",
                        fillRule: "nonzero",
                        opacity: 1,
                      }}
                      transform=" matrix(1 0 0 1 0 0) "
                      strokeLinecap="round"
                    />
                  </g>
                </g>
              </svg>
            </motion.div>
          ) : null}
        </motion.div>
      ) : null}
      {!notFound ? (
        <motion.div
          variants={animateDown}
          className="grid grid-flow-rows place-items-center gap-6 my-10 grid-cols-1 md:grid-cols-1 lg:grid-cols-2"
        >
          {searchResults?.map((item) => (
            <motion.div
              key={item?.miuiVersion}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0 }}
              className="card"
            >
              <motion.div
                initial="animate"
                animate="animate"
                variants={fadeInUp}
                className="w-full h-20 mb-6"
              >
                <h1
                  className={`text-center font-extrabold text-transparent text-7xl bg-clip-text bg-gradient-to-r ${
                    gradients[Math.floor(Math.random() * 11)]
                  }`}
                >
                  MIUI
                </h1>
              </motion.div>
              <div className="text-center">
                <h3 className="font-bold text-black text-3xl mb-1">
                  {titleCase(item?.miuiVersion)}
                </h3>
                <ul>
                  <li className="text-base text-gray-700 mb-1">
                    ( {titleCase(item?.status ? item.status : "stable")} )
                  </li>
                </ul>
              </div>
              <div className="flex flex-col p-6">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-x-auto">
                      <table className="min-w-full">
                        <tbody>
                          <tr className="border-b">
                            <td className="px-2 py-4 whitespace-nowrap text-sm md:text-lg font-bold text-gray-900">
                              MIUI Version
                            </td>
                            <td className="text-sm md:text-lg text-gray-900 font-medium px-2 py-4 whitespace-wrap">
                              {item?.miuiVersion}
                            </td>
                          </tr>
                          <tr className="border-b">
                            <td className="px-2 py-4 whitespace-nowrap text-sm md:text-lg font-bold text-gray-900">
                              Android Version
                            </td>
                            <td className="text-sm md:text-lg text-gray-900 font-medium px-2 py-4 whitespace-wrap">
                              {item?.androidVersion}
                            </td>
                          </tr>
                          <tr className="border-b">
                            <td className="px-2 py-4 whitespace-nowrap text-sm md:text-lg font-bold text-gray-900">
                              Codename
                            </td>
                            <td className="text-sm md:text-lg text-gray-900 font-medium px-2 py-4 whitespace-wrap">
                              {device?.deviceId}
                            </td>
                          </tr>
                          <tr className="border-b">
                            <td className="px-2 py-4 whitespace-nowrap text-sm md:text-lg font-bold text-gray-900">
                              Updated
                            </td>
                            <td className="text-sm md:text-lg text-gray-900 font-medium px-2 py-4 whitespace-wrap">
                              {parseDate(item?.date)}
                            </td>
                          </tr>
                          <tr className="border-b">
                            <td className="px-2 py-4 whitespace-nowrap text-sm md:text-lg font-bold text-gray-900">
                              Size
                            </td>
                            <td className="text-sm md:text-lg text-gray-900 font-medium px-2 py-4 whitespace-wrap">
                              {item?.fileSize}
                            </td>
                          </tr>
                          {item?.otaFor ? (
                            <tr className="border-b">
                              <td className="px-2 py-4 whitespace-nowrap text-sm md:text-lg font-bold text-gray-900">
                                OTA Apply For
                              </td>
                              <td className="text-sm md:text-lg text-gray-900 font-medium px-2 py-4 whitespace-wrap">
                                {item?.otaFor}
                              </td>
                            </tr>
                          ) : null}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <AUpdatesButton txt="Download" href={item?.fileUrl} />
                {item?.otaLink ? (
                  <AUpdatesButton txt="OTA" href={item?.otaLink} />
                ) : null}
              </div>
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <NoResults />
      )}
    </motion.div>
  );
};
