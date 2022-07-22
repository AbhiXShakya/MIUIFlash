import axios from "axios";
import { BlogCards, DeviceCards } from "../../components";
import { motion } from "framer-motion";
import { animateDown, animateUp } from "../../utils/helpers";

export default function Ports({ data }) {
  return (
    <motion.div initial="initial" animate="animate">
      <div className="mb-12">
        <motion.h1 variants={animateDown} className="pageH1">
          Blogs
        </motion.h1>
        <motion.p variants={animateUp}>We have a collection of blogs.</motion.p>
      </div>
      <BlogCards data={data} type="ports" />
    </motion.div>
  );
}

export async function getStaticProps() {
  let res = {};
  try {
    res = await axios.get(
      `${process.env.REACT_APP_API_URL}/blogs?key=THISISSECRET`,
      {
        responseType: "json",
      }
    );
  } catch (error) {
    console.log(error.message);
    res = await axios.get(
      `${process.env.REACT_APP_API_URL}/blogs?key=THISISSECRET`,
      {
        responseType: "json",
      }
    );
  }

  const data = res.data.data;

  return { props: { data } };
}
