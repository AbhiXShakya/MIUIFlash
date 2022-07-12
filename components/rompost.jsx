import {
  objectMap,
  parseCodename,
  parseDate,
  titleCase,
  animateDown,
  animateUp,
} from "../utils/helpers";
import Image from "next/image";
import { AButton } from ".";
import { motion } from "framer-motion";
import { Breadcrumbs } from ".";

export const RomPost = ({ rom, port, device }) => {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Ports", href: "/ports" },
    { name: titleCase(device?.codename), href: `/ports/${device?.codename}` },
    {
      name: titleCase(rom?.name),
      href: `/ports/${device?.codename}/${rom?.romId}`,
    },
  ];

  return (
    <motion.div initial="initial" animate="animate">
      <div className="mb-12">
        <div className="lg:items-center lg:flex lg:flex-row-reverse lg:justify-between">
          <motion.div
            variants={animateUp}
            className="mb-9 m-auto md:hidden relative"
          >
            <Image
              className="rounded-lg"
              src={port?.image}
              alt={`${rom?.name} ${port?.miuiVersion} Port for ${
                device?.name
              } (${parseCodename(device?.codename)})`}
              width={1600}
              height={900}
              priority={true}
            />
          </motion.div>
          <motion.div
            variants={animateUp}
            className="mr-[10%] translate-x-28 hidden relative w-56 h-56 lg:block"
          >
            <Image
              src={rom?.image}
              alt={`${rom?.name} ${port?.miuiVersion} Port for ${
                device?.name
              } (${parseCodename(device?.codename)})`}
              layout="fill"
              objectFit="contain"
              priority={true}
            />
          </motion.div>
          <div>
            <motion.div variants={animateDown}>
              <h1 className="font-extrabold text-4xl mb-4">
                {rom?.name}&nbsp;{port?.miuiVersion}
              </h1>
              <h2 className="text-2xl md:text-4xl mb-4 dark:text-gray-300 text-gray-800">
                ({parseCodename(device?.codename)})
              </h2>
            </motion.div>
            <motion.div variants={animateUp}>
              <Breadcrumbs breadm={breadcrumbs} />
              <p>All Details for the ROM is Listed Below</p>
              <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-x-auto">
                      <table className="min-w-full">
                        <tbody>
                          <tr className="border-b">
                            <td className="px-2 py-4 whitespace-nowrap text-lg font-bold dark:text-gray-300 text-gray-900">
                              MIUI Version
                            </td>
                            <td className="text-lg dark:text-gray-300 text-gray-900 font-medium px-2 py-4 whitespace-nowrap">
                              {port?.miuiVersion}
                            </td>
                          </tr>
                          <tr className="border-b">
                            <td className="px-2 py-4 whitespace-nowrap text-lg font-bold dark:text-gray-300 text-gray-900">
                              Android Version
                            </td>
                            <td className="text-lg dark:text-gray-300 text-gray-900 font-medium px-2 py-4 whitespace-nowrap">
                              {port?.androidVersion}
                            </td>
                          </tr>
                          <tr className="border-b">
                            <td className="px-2 py-4 whitespace-nowrap text-lg font-bold dark:text-gray-300 text-gray-900">
                              Device
                            </td>
                            <td className="text-lg dark:text-gray-300 text-gray-900 font-medium px-2 py-4 whitespace-nowrap">
                              {parseCodename(device?.codename)}
                            </td>
                          </tr>
                          <tr className="border-b">
                            <td className="px-2 py-4 whitespace-nowrap text-lg font-bold dark:text-gray-300 text-gray-900">
                              Maintainer
                            </td>
                            <td className="text-lg dark:text-gray-300 text-gray-900 font-medium px-2 py-4 whitespace-nowrap">
                              {port?.maintainer}
                            </td>
                          </tr>
                          <tr className="border-b">
                            <td className="px-2 py-4 whitespace-nowrap text-lg font-bold dark:text-gray-300 text-gray-900">
                              Status
                            </td>
                            <td className="text-lg dark:text-gray-300 text-gray-900 font-medium px-2 py-4 whitespace-nowrap">
                              {titleCase(port?.status)}
                            </td>
                          </tr>
                          <tr className="border-b">
                            <td className="px-2 py-4 whitespace-nowrap text-lg font-bold dark:text-gray-300 text-gray-900">
                              Updated
                            </td>
                            <td className="text-lg dark:text-gray-300 text-gray-900 font-medium px-2 py-4 whitespace-nowrap">
                              {parseDate(port?.updatedAt)}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <h3 className="font-bold text-3xl mt-12 mb-4">Supported Devices:</h3>
        <div className="customlist">
          <ul className="dark:text-gray-300 font-semibold">
            {device?.devices?.map((device) => (
              <li className="mt-2" key={device?.devices?.indexOf(device)}>
                {device}
              </li>
            ))}
          </ul>
        </div>
        <motion.div
          variants={animateDown}
          className="mt-10 mb-10 md:flex justify-between flex-wrap"
        >
          <div className="md:max-w-[40%] customlist">
            <h3 className="mt-8 font-bold text-3xl mb-4">MIUI Changelogs:</h3>
            <ol className="dark:text-gray-300  font-semibold">
              {port?.miuiChangelogs?.split("--").map((changelog) => (
                <li
                  className="mt-2"
                  key={port?.miuiChangelogs?.indexOf(changelog)}
                >
                  {changelog}
                </li>
              ))}
            </ol>
          </div>
          <div className="md:max-w-[40%] customlist">
            <h3 className="mt-8 font-bold text-3xl mb-4">Device Changelogs:</h3>
            <ol className="dark:text-gray-300 font-semibold">
              {port?.deviceChangelogs?.split("--").map((changelog) => (
                <li
                  className="mt-2"
                  key={port?.deviceChangelogs?.indexOf(changelog)}
                >
                  {changelog}
                </li>
              ))}
            </ol>
          </div>
        </motion.div>
        <motion.div
          variants={animateUp}
          className="mb-10 md:flex justify-between flex-wrap"
        >
          <div className="md:max-w-[40%] customlist">
            <h3 className="mt-8 font-bold text-3xl mb-4">Notes:</h3>
            <ol className=" font-semibold">
              {port?.notes?.split("--").map((note) => (
                <li className="mt-2" key={port?.notes?.indexOf(note)}>
                  {note}
                </li>
              ))}
            </ol>
          </div>
          <div className="md:max-w-[40%] customlist">
            <h3 className="mt-8 font-bold text-3xl mb-4">Credits:</h3>
            <ul className=" font-semibuld">
              {port?.credits?.split("--").map((credit) => (
                <li className="mt-2" key={port?.credits?.indexOf(credit)}>
                  {credit}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
        <motion.div variants={animateDown} className="mt-14">
          <h3 className="mt-8 font-bold text-3xl mb-4">Downloads:</h3>
          {objectMap(port?.downloadLinks, (name, link) => {
            return <AButton key={link} txt={name} href={link} />;
          })}
        </motion.div>
      </div>
    </motion.div>
  );
};
