import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { parseCodename } from "../../utils/helpers";

export default function Ports({ data }) {
  return (
    <>
      <div className="mb-12">
        <h1 className="pageH1">MIUI Ports</h1>
        <p>MIUI Ports is a collection of MIUI ports for Android Phones.</p>
      </div>
      <h2 className="text-3xl font-bold">Select Your Device</h2>
      <div className="grid grid-flow-rows place-items-center gap-6 my-14 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {data.map((item) => (
          <Link key={item._id} href={`/ports/${item.codename}`}>
            <div className="card">
              <div className="relative w-full h-44 mb-6">
                <Image
                  src={item.image}
                  alt={`MIUI Ports for ${item.name} (${parseCodename(
                    item.codename
                  )})`}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div className="text-center">
                <h3 className="font-bold text-xl">{item.name}</h3>
                <p className="text-sm text-gray-700 mt-1 font-medium">
                  ({parseCodename(item.codename)})
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const res = await axios.get(`${process.env.REACT_APP_API_URL}/devices`, {
    responseType: "json",
  });
  const data = res.data.data;

  return { props: { data } };
}
