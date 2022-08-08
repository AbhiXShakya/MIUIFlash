import Image from "next/image";
import Link from "next/link";
import { Social } from "./social";
import { motion } from "framer-motion";
import { animateUp } from "../utils/helpers";

export function Footer() {
  return (
    <motion.footer
      initial="initial"
      animate="animate"
      variants={animateUp}
      className="bg-white dark:bg-black pclamp"
    >
      <div className="md:flex md:justify-between">
        <div className="mb-6 md:mb-0 select-none">
          <Link href="/">
            <div className="min-w-max">
              <h1 className="text-4xl font-extrabold cursor-pointer ">
                MIUI FLA
                <span className="px-[1px]">
                  <Image
                    src="/images/MiuiFlash_logo.png"
                    alt="MIUIFlash"
                    width={20}
                    height={25}
                  />
                </span>
                H
              </h1>
            </div>
          </Link>
          <p className="mt-3 mb-10 dark:text-gray-300 text-gray-700 text-sm font-normal max-w-[16rem] mr-10">
            Welcome Guys to MIUIFlash, here you will get all the required
            Information & Updates of MIUI. Lets Enjoy this Journey Together with
            a Flash
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 dar ">
          <div>
            <h2 className="mb-6 text-lg font-bold ">MIUI ROMs</h2>
            <ol className="dark:text-gray-300 text-gray-600">
              <li className="mb-4">
                <Link href="/ports" className="hover:underline">
                  Ports
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/roms" className="hover:underline">
                  ROMs
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/miuiupdates" className="hover:underline">
                  MIUI Updates
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  href="https://blog.miuiflash.com"
                  className="hover:underline"
                >
                  Blog
                </Link>
              </li>
            </ol>
          </div>
          <div>
            <h2 className="mb-6 text-lg font-bold ">Follow us</h2>
            <ol className="dark:text-gray-300 text-gray-600">
              <li className="mb-4">
                <a
                  href="https://telegram.me/miuiflash"
                  className="hover:underline "
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Telegram Channel
                </a>
              </li>
              {/* <li className="mb-4">
                <a
                  href="https://telegram.me/miuiflashers"
                  className="hover:underline "
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Telegram Group
                </a>
              </li> */}
              <li className="mb-4">
                <a
                  href="https://twitter.com/miuiflash"
                  className="hover:underline"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Twitter
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="https://instagram.com/miuiflash"
                  className="hover:underline "
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Instagram
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="https://facebook.com/MIUIFlash"
                  className="hover:underline "
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Facebook
                </a>
              </li>
            </ol>
          </div>
          <div>
            <h2 className="mb-6 text-lg font-bold ">Legal</h2>
            <ol className="dark:text-gray-300 text-gray-600">
              <li className="mb-4">
                <a
                  href="https://blog.miuiflash.com/privacy-policy"
                  className="hover:underline"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Privacy Policy
                </a>
              </li>
              {/* <li className="mb-4">
                <a href="#" className="hover:underline">
                  Terms &amp; Conditions
                </a>
              </li> */}
              <li className="mb-4">
                <a
                  href="https://blog.miuiflash.com/dmca"
                  className="hover:underline"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  DMCA
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="https://blog.miuiflash.com/about-us"
                  className="hover:underline"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  About Us
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="https://blog.miuiflash.com/contact-us/"
                  className="hover:underline"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Contact Us
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto" />
      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
          © {new Date().getFullYear()}{" "}
          <a href="https://miuiflash.com" className="hover:underline">
            MIUIFlash™
          </a>
          &nbsp;By{" "}
          <a
            className="atag"
            href="https://abhixshakya.me"
            target="_blank"
            rel="noreferrer noopener"
          >
            AbhiXShakya
          </a>
          .
        </span>
        <Social />
      </div>
    </motion.footer>
  );
}
