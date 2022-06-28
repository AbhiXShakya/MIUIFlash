import { Footer } from "../components";
import { Navbar } from "../components";
import "../styles/globals.css";
import { AnimatePresence, motion } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Navbar key={`nav${router.route}`} />
        <motion.div
          initial="pageInitial"
          animate="pageAnimate"
          variants={{
            pageInitial: {
              opacity: 0,
            },
            pageAnimate: {
              opacity: 1,
            },
          }}
          exit={{ opacity: 0 }}
          key={router.route}
          className="pclamp pt-2 lg:py-8 lg:px-40"
        >
          <Component {...pageProps} />
        </motion.div>
        <Footer key={`footer${router.route}`} />
      </AnimatePresence>
    </>
  );
}

export default MyApp;
