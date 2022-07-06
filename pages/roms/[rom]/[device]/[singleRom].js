import axios from "axios";
import { RomPost } from "../../../../components";

const SingleRom = ({ rom, device, port }) => {
  return <RomPost rom={rom} device={device} port={port} />;
};

export async function getStaticProps(context) {
  let device = context.params.device;
  let rom = context.params.rom;
  const singleRom = context.params.singleRom;
  let portRes = {};

  try {
    portRes = await axios.get(
      `${process.env.REACT_APP_API_URL}/miuiroms/${rom}/${device}/${singleRom}`,
      { responseType: "json" }
    );
  } catch (error) {
    console.log(error.message);
    portRes = await axios.get(
      `${process.env.REACT_APP_API_URL}/miuiroms/${rom}/${device}/${singleRom}`,
      { responseType: "json" }
    );
  }

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
    revalidate: 1000020,
  };
}

export async function getStaticPaths() {
  let miuiromsRes = {};

  try {
    miuiromsRes = await axios.get(`${process.env.REACT_APP_API_URL}/miuiroms`, {
      responseType: "json",
    });
  } catch (error) {
    console.log(error.message);
    miuiromsRes = await axios.get(`${process.env.REACT_APP_API_URL}/miuiroms`, {
      responseType: "json",
    });
  }

  const miuiroms = miuiromsRes.data.data;

  const paths = miuiroms.map((miuirom) => ({
    params: {
      device: miuirom?.device,
      rom: miuirom?.rom,
      singleRom: miuirom?.slug,
    },
  }));

  return { paths, fallback: "blocking" };
}

export default SingleRom;
