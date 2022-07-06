import axios from "axios";
import { motion } from "framer-motion";
import { animateDown, animateUp, titleCase } from "../../../../utils/helpers";
import { useState } from "react";
import { DeviceUpdatedRoms } from "../../../../components";

const device = ({ data }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [recovery, setRecovery] = useState(true);

  return (
    <motion.div initial="initial" animate="animate">
      <div className="mb-12">
        <motion.h1
          variants={animateDown}
          className="lg:text-6xl text-5xl mt-6 md:text-6xl font-extrabold mb-2"
        >
          {titleCase(data.model)}
        </motion.h1>
        <motion.p variants={animateUp} className="mb-6 text-gray-700">
          ({titleCase(data?.device.replaceAll("-", " "))})
        </motion.p>
        <motion.p variants={animateUp}>
          MIUI Ports is a collection of MIUI ports for Android Phones.
        </motion.p>
      </div>
      <div className="flex justify-between md:justify-center items-center mb-10">
        <motion.div
          variants={animateDown}
          className="md:w-1/2 text-center h-12"
        >
          <div
            className={`${
              recovery
                ? "text-black border-0 border-b-4 border-orange-500"
                : "text-gray-500"
            } text-3xl md:text-3xl font-bold cursor-pointer duration-300 inline-block`}
            onClick={() => setRecovery(true)}
          >
            Recovery
          </div>
        </motion.div>
        <motion.div
          variants={animateDown}
          className="md:w-1/2 text-center h-12"
        >
          <div
            className={`${
              recovery
                ? "text-gray-500"
                : "text-black border-0 border-b-4 border-orange-500"
            } text-3xl md:text-3xl font-bold cursor-pointer duration-300 inline-block`}
            onClick={() => setRecovery(false)}
          >
            Fastboot
          </div>
        </motion.div>
      </div>
      {recovery ? (
        <DeviceUpdatedRoms data={data.recovery} device={data} />
      ) : (
        <DeviceUpdatedRoms data={data.fastboot} device={data} />
      )}
    </motion.div>
  );
};

export const getStaticProps = async ({ params }) => {
  const deviceId = params.deviceId.replace("hm", "HM");
  const device = params.device;

  let res = {};
  try {
    res = await axios.get(
      `${process.env.REACT_APP_API_URL}/miuiupdates/devices/${deviceId}/${device}`,
      {
        responseType: "json",
      }
    );
  } catch (error) {
    console.log(error.message);
    res = await axios.get(
      `${process.env.REACT_APP_API_URL}/miuiupdates/devices/${deviceId}/${device}`,
      {
        responseType: "json",
      }
    );
  }

  const data = res.data.data;
  data["device"] = device;

  return { props: { data }, revalidate: 1000 };
};

export const getStaticPaths = async () => {
  let res = {};
  try {
    res = await axios.get(
      `${process.env.REACT_APP_API_URL}/miuiupdates/devices`,
      {
        responseType: "json",
      }
    );
  } catch (error) {
    console.log(error.message);
    res = await axios.get(
      `${process.env.REACT_APP_API_URL}/miuiupdates/devices`,
      {
        responseType: "json",
      }
    );
  }

  const devices = res?.data.data;

  const paths = [];

  devices.forEach((device) => {
    device.devices.map((subdevice) => {
      paths.push({
        params: {
          deviceId: device.deviceId,
          device: subdevice.id,
        },
      });
    });
  });

  return { paths, fallback: "blocking" };
};

export default device;
