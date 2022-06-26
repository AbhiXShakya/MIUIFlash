import { useRouter } from "next/router";
import { parseCodename, titleCase, parseDate } from "../../../../utils/helpers";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";

const Rom = ({ rom, device, ports }) => {
  return (
    <>
      <div className="mb-12">
        <h1 className="pageH1 mb-4">{rom.name}</h1>
        <h2 className="text-xl md:text-4xl mb-4 text-gray-800">
          ({titleCase(device.name)})
        </h2>
        <p className="mb-10 text-sm font-semibold text-orange-500">
          <Link href="/">Home</Link>
          <span className="text-gray-700">&nbsp;&gt;&nbsp;</span>
          <Link href="/ports">Ports</Link>
          <span className="text-gray-700">&nbsp;&gt;&nbsp;</span>
          <Link href={`/ports/${device.codename}`}>
            {parseCodename(device.codename)}
          </Link>
        </p>
        <p>
          All {rom.name} Ported Roms for {titleCase(device.name)} (
          {parseCodename(device.codename)}) are listed below
        </p>
      </div>
      <h2 className="text-3xl font-bold">All Ports</h2>
      <div className="mt-8">
        <div className="grid grid-flow-row grid-cols-1 mb-6 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ports.map((port) => (
            <Link
              key={port._id}
              href={`/ports/${device.codename}/${rom.romId}/${port.slug}`}
            >
              <div className="cursor-pointer group">
                <Image
                  src={port.image}
                  alt={`${port.name} Port for ${rom.name} (${
                    device.name
                  } (${parseCodename(device.codename)}))`}
                  className="object-cover object-center w-full rounded-lg shadow-md"
                  width={1600}
                  height={900}
                />
                <div className="relative px-4 -mt-10">
                  <div className="p-5 card group-hover:border-orange-500 bg-white">
                    <h2 className="text-xl mb-2 font-extrabold">
                      {rom.name}&nbsp;
                      {port.miuiVersion}
                    </h2>
                    <p className="text-sm text-gray-700 font-medium">
                      {parseDate(port.updatedAt)}
                    </p>
                    <div className="mt-1">
                      <p className="text-sm text-gray-600 min-h-[2rem]">
                        Build by {port.maintainer}
                      </p>
                    </div>
                    <div className="flex flex-wrap items-baseline mb-3">
                      <span className="inline-block px-2 py-1 pt-[5px] mr-1 text-[0.6rem] font-semibold tracking-wide text-black rounded-full bg-gray-200 group-hover:bg-orange-100">
                        {titleCase(port.miuiType)}
                      </span>
                      <span className="inline-block px-2 py-1 pt-[5px] mr-1 text-[0.6rem] font-semibold tracking-wide text-black rounded-full bg-gray-200 group-hover:bg-orange-100">
                        Android {port.androidVersion}
                      </span>
                      <span className="inline-block px-2 py-1 pt-[5px] mr-1 text-[0.6rem] font-semibold tracking-wide text-black rounded-full bg-gray-200 group-hover:bg-orange-100">
                        {titleCase(port.status)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export async function getStaticProps(context) {
  let device = context.params.device;
  let rom = context.params.rom;

  const portsRes = await axios.get(
    `${process.env.REACT_APP_API_URL}/miuiroms/${rom}/${device}`,
    { responseType: "json" }
  );

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
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const romsRes = await axios.get(`${process.env.REACT_APP_API_URL}/roms`, {
    responseType: "json",
  });

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
