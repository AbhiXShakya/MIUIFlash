import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { AButton, Breadcrumbs } from "../../components";
import { motion } from "framer-motion";
import { marked } from "marked";
import { animateDown, animateUp } from "../../utils/helpers";

const Rom = ({ data }) => {
  const breadcrumbs = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Blog",
      href: "/blog",
    },
  ];

  return (
    <motion.div
      initial="initial"
      animate="animate"
      className="flex justify-between flex-wrap"
    >
      <motion.div className="lg:max-w-[65%]">
        <motion.div variants={animateUp} className="mb-6 relative">
          <Image
            className="rounded-lg"
            src={data?.image}
            alt={`hi`}
            width={1600}
            height={900}
            priority={true}
          />
        </motion.div>
        <motion.div variants={animateDown}>
          <h1 className="font-extrabold text-4xl mb-4">{data?.title}</h1>
          <Breadcrumbs breadm={breadcrumbs} />
        </motion.div>
        <motion.div className="blog">
          <div
            dangerouslySetInnerHTML={{ __html: marked(data?.content) }}
          ></div>
        </motion.div>
      </motion.div>
      {/* sidebar */}
      <motion.div variants={animateDown} className="lg:max-w-[30%]">
        <h2 className="mb-6">Join Our Community</h2>
        <AButton txt="Telegram" href="https://telegram.me/MIUIFlash" />
        <AButton txt="Twitter" href="https://twitter.com/MIUIFlash" />
        <AButton txt="Facebook" href="https://www.facebook.com/MIUIFlash" />
        <AButton txt="Instagram" href="https://www.instagram.com/miuiflash/" />
      </motion.div>
    </motion.div>
  );
};

export async function getStaticProps(context) {
  let slug = context.params.slug;

  let portsRes = {};

  try {
    portsRes = await axios.get(
      `${process.env.REACT_APP_API_URL}/blogs/${slug}`,
      { responseType: "json" }
    );
  } catch (error) {
    console.log(error.message);
    portsRes = await axios.get(
      `${process.env.REACT_APP_API_URL}/blogs/${slug}`,
      { responseType: "json" }
    );
  }

  if (portsRes.data.success == false) {
    return {
      notFound: true,
    };
  }

  const data = portsRes.data.data;

  return {
    props: {
      data,
    },
  };
}

export async function getStaticPaths() {
  let romsRes = {};
  try {
    romsRes = await axios.get(`${process.env.REACT_APP_API_URL}/blogs`, {
      responseType: "json",
    });
  } catch (error) {
    console.log(error.message);
    romsRes = await axios.get(`${process.env.REACT_APP_API_URL}/blogs`, {
      responseType: "json",
    });
  }

  const blogs = romsRes.data.data;

  const paths = [];

  blogs.forEach((blog) => {
    paths.push({
      params: {
        slug: blog.slug,
      },
    });
  });

  return { paths, fallback: "blocking" };
}

export default Rom;
