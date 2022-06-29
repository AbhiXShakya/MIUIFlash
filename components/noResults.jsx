import { motion } from "framer-motion";
import { fadeInUp } from "../utils/helpers";

export const NoResults = () => {
  return (
    <motion.div
      variants={fadeInUp}
      className="h-28 w-full text-center relative"
    >
      <p className="absolute text-base left-1/2 -translate-x-1/2 top-1/2 text-gray-500">
        No Results Found
      </p>
    </motion.div>
  );
};
