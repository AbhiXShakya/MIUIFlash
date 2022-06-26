import { useRouter } from "next/router";
import { parseCodename, titleCase } from "../../../utils/helpers";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";

const Device = ({ deviceRoms, device }) => {
  return (
    <>
      <div className="mb-12">
        <h1 className="pageH1 mb-4">{parseCodename(device.codename)}</h1>
        <h2 className="text-2xl md:text-4xl mb-4 text-gray-800">
          ({titleCase(device.name)})
        </h2>
        <p className="mb-10 text-sm font-semibold text-orange-500">
          <Link href="/">Home</Link>
          <span className="text-gray-700">&nbsp;&gt;&nbsp;</span>
          <Link href="/ports">Ports</Link>
        </p>
        <p>
          All Ported Roms for {titleCase(device.name)} (
          {parseCodename(device.codename)}) are listed below
        </p>
      </div>
      <h2 className="text-3xl font-bold mb-0">Supported Roms</h2>
      <div className="grid grid-flow-rows place-items-center gap-6 my-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {deviceRoms.map((rom) => (
          <Link key={rom._id} href={`/ports/${device.codename}/${rom.romId}`}>
            <div className="card">
              <div className="relative w-full h-44 mb-6">
                <Image
                  src={rom.image}
                  alt={`${rom.name} Ports for ${device.name} (${parseCodename(
                    device.codename
                  )})`}
                  layout="fill"
                  objectFit="contain"
                  priority={true}
                />
              </div>
              <div className="text-center">
                <h3 className="font-bold text-xl">{rom.name}</h3>
                <p className="text-sm text-gray-700 mt-1 font-medium">
                  (by {rom.owner})
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export async function getStaticProps(context) {
  try {
    let device = context.params.device;
    const romsRes = await axios.get(
      `${process.env.REACT_APP_API_URL}/roms/${device}`,
      {
        responseType: "json",
      }
    );

    device = romsRes.data.data.device;
    const deviceRoms = romsRes.data.data.roms;

    return {
      props: {
        deviceRoms,
        device,
      },
      revalidate: 1,
    };
  } catch (e) {
    return {
      notFound: true,
    };
  }
}

export async function getStaticPaths() {
  const res = await axios.get(`${process.env.REACT_APP_API_URL}/devices`, {
    responseType: "json",
  });
  const devices = res.data.data;

  const paths = devices.map((post) => ({
    params: { device: post.codename },
  }));

  return { paths, fallback: "blocking" };
}

export default Device;
