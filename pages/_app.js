import { Footer } from "../components";
import { Navbar } from "../components";
import "../styles/globals.css";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps, router }) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  useEffect(() => {
    const defMode = localStorage.getItem("dark");
    if (defMode != null) {
      if (defMode == "true") {
        setDark(true);
        document.documentElement.classList.add("dark");
      } else if (defMode == "false") {
        setDark(false);
        document.documentElement.classList.remove("dark");
      }
    } else {
      localStorage.setItem("dark", false);
    }
  }, []);

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Navbar dark={dark} setDark={setDark} key={`nav${router.route}`} />
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
