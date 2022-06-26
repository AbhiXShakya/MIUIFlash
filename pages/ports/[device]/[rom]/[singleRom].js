import { useRouter } from "next/router";
import {
  objectMap,
  parseCodename,
  parseDate,
  titleCase,
} from "../../../../utils/helpers";
import Link from "next/link";
import Image from "next/image";
import { AButton } from "../../../../components/buttons";
import axios from "axios";

const SingleRom = ({ rom, device, port }) => {
  return (
    <>
      <div className="mb-12">
        <div className="lg:items-center lg:flex lg:flex-row-reverse lg:justify-between">
          <div className="mb-9 m-auto md:hidden relative">
            <Image
              className="rounded-lg"
              src={port.image}
              alt={`${rom.name} ${port.miuiVersion} Port for ${
                device.name
              } (${parseCodename(device.codename)})`}
              width={1600}
              height={900}
              priority={true}
            />
          </div>
          <div className="m-auto translate-x-28 hidden relative w-56 h-56 lg:block">
            <Image
              src={rom.image}
              alt={`${rom.name} ${port.miuiVersion} Port for ${
                device.name
              } (${parseCodename(device.codename)})`}
              layout="fill"
              objectFit="contain"
              priority={true}
            />
          </div>
          <div>
            <h1 className="font-extrabold text-4xl mb-4">
              {rom.name}&nbsp;{port.miuiVersion}
            </h1>
            <h2 className="text-2xl md:text-4xl mb-4 text-gray-800">
              ({parseCodename(device.codename)})
            </h2>
            <p className="mb-10 text-sm font-semibold text-orange-500">
              <Link href="/">Home</Link>
              <span className="text-gray-700">&nbsp;&gt;&nbsp;</span>
              <Link href="/ports">Ports</Link>
              <span className="text-gray-700">&nbsp;&gt;&nbsp;</span>
              <Link href={`/ports/${device.codename}`}>
                {titleCase(device.codename)}
              </Link>
              <span className="text-gray-700">&nbsp;&gt;&nbsp;</span>
              <Link href={`/ports/${device.codename}/${rom.romId}`}>
                {titleCase(rom.name)}
              </Link>
            </p>
            <p>All Details for the ROM is Listed Below</p>
            <div className="flex flex-col">
              <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="overflow-x-auto">
                    <table className="min-w-full">
                      <tbody>
                        <tr className="border-b">
                          <td className="px-2 py-4 whitespace-nowrap text-lg font-bold text-gray-900">
                            MIUI Version
                          </td>
                          <td className="text-lg text-gray-900 font-medium px-2 py-4 whitespace-nowrap">
                            {port.miuiVersion}
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="px-2 py-4 whitespace-nowrap text-lg font-bold text-gray-900">
                            Android Version
                          </td>
                          <td className="text-lg text-gray-900 font-medium px-2 py-4 whitespace-nowrap">
                            {port.androidVersion}
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="px-2 py-4 whitespace-nowrap text-lg font-bold text-gray-900">
                            Device
                          </td>
                          <td className="text-lg text-gray-900 font-medium px-2 py-4 whitespace-nowrap">
                            {parseCodename(device.codename)}
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="px-2 py-4 whitespace-nowrap text-lg font-bold text-gray-900">
                            Maintainer
                          </td>
                          <td className="text-lg text-gray-900 font-medium px-2 py-4 whitespace-nowrap">
                            {port.maintainer}
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="px-2 py-4 whitespace-nowrap text-lg font-bold text-gray-900">
                            Status
                          </td>
                          <td className="text-lg text-gray-900 font-medium px-2 py-4 whitespace-nowrap">
                            {port.status}
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="px-2 py-4 whitespace-nowrap text-lg font-bold text-gray-900">
                            Updated
                          </td>
                          <td className="text-lg text-gray-900 font-medium px-2 py-4 whitespace-nowrap">
                            {parseDate(port.updatedAt)}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h3 className="font-bold text-3xl mt-12 mb-4">Supported Devices:</h3>
        <ul className="list-disc list-inside font-semibold">
          {device?.devices?.map((device) => (
            <li className="mt-2" key={device?.devices?.indexOf(device)}>
              {device}
            </li>
          ))}
        </ul>
        <div className="mt-10 mb-10 md:flex justify-between flex-wrap">
          <div className="md:max-w-[40%]">
            <h3 className="mt-8 font-bold text-3xl mb-4">MIUI Changelogs:</h3>
            <ul className="list-decimal list-inside font-semibold">
              {port?.miuiChangelogs?.split("--").map((changelog) => (
                <li
                  className="mt-2"
                  key={port?.miuiChangelogs?.indexOf(changelog)}
                >
                  {changelog}
                </li>
              ))}
            </ul>
          </div>
          <div className="md:max-w-[40%]">
            <h3 className="mt-8 font-bold text-3xl mb-4">Device Changelogs:</h3>
            <ul className="list-decimal list-inside font-semibold">
              {port?.deviceChangelogs?.split("--").map((changelog) => (
                <li
                  className="mt-2"
                  key={port?.deviceChangelogs?.indexOf(changelog)}
                >
                  {changelog}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mb-10 md:flex justify-between flex-wrap">
          <div className="md:max-w-[40%]">
            <h3 className="mt-8 font-bold text-3xl mb-4">Notes:</h3>
            <ul className="list-decimal list-inside font-semibold">
              {port?.notes?.split("--").map((note) => (
                <li className="mt-2" key={port?.notes?.indexOf(note)}>
                  {note}
                </li>
              ))}
            </ul>
          </div>
          <div className="md:max-w-[40%]">
            <h3 className="mt-8 font-bold text-3xl mb-4">Credits:</h3>
            <ul className="list-decimal list-inside font-semibold">
              {port?.credits?.split("--").map((credit) => (
                <li className="mt-2" key={port?.credits?.indexOf(credit)}>
                  {credit}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-14">
          <h3 className="mt-8 font-bold text-3xl mb-4">Downloads:</h3>
          {objectMap(port.downloadLinks, (name, link) => {
            return <AButton key={name} txt={name} href={link} />;
          })}
        </div>
      </div>
    </>
  );
};

export async function getStaticProps(context) {
  let device = context.params.device;
  let rom = context.params.rom;
  const singleRom = context.params.singleRom;

  const portRes = await axios.get(
    `${process.env.REACT_APP_API_URL}/miuiroms/${rom}/${device}/${singleRom}`,
    { responseType: "json" }
  );

  if (portRes.data.success == false) {
    return {
      notFound: true,
    };
  }

  rom = portRes.data.data.rom;
  device = portRes.data.data.device;
  const port = portRes.data.data.miuirom;

  return {
    props: {
      rom,
      device,
      port,
    },
    revalidate: 120,
  };
}

export async function getStaticPaths() {
  const miuiromsRes = await axios.get(
    `${process.env.REACT_APP_API_URL}/miuiroms`,
    {
      responseType: "json",
    }
  );

  const miuiroms = miuiromsRes.data.data;

  const paths = miuiroms.map((miuirom) => ({
    params: {
      device: miuirom.device,
      rom: miuirom.rom,
      singleRom: miuirom.slug,
    },
  }));

  return { paths, fallback: "blocking" };
}

export default SingleRom;
