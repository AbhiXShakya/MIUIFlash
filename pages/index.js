import HomeHero from "../components/homeHero";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div initial="initial" animate="animate">
      <HomeHero />
    </motion.div>
  );
}
