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
      className="bg-white pclamp"
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
          <p className="mt-3 mb-10 text-gray-700 text-sm font-normal max-w-[16rem] mr-10">
            Welcome Guys to MIUIFlash, here you will get all the required
            Information & Updates of MIUI. Lets Enjoy this Journey Together with
            a Flash
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
          <div>
            <h2 className="mb-6 text-lg font-bold ">MIUI ROMs</h2>
            <ul className="text-gray-600">
              <li className="mb-4">
                <Link href="/ports" className="hover:underline">
                  Ports
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/ports" className="hover:underline">
                  ROMs
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/ports" className="hover:underline">
                  MIUI Updates
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/ports" className="hover:underline">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-lg font-bold ">Follow us</h2>
            <ul className="text-gray-600">
              <li className="mb-4">
                <a href="https://github.com/" className="hover:underline ">
                  Telegram Channel
                </a>
              </li>
              <li className="mb-4">
                <a href="https://github.com/" className="hover:underline ">
                  Telegram Group
                </a>
              </li>
              <li className="mb-4">
                <a href="" className="hover:underline">
                  Twitter
                </a>
              </li>
              <li className="mb-4">
                <a href="https://github.com/" className="hover:underline ">
                  Instagram
                </a>
              </li>
              <li className="mb-4">
                <a href="https://github.com/" className="hover:underline ">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-lg font-bold ">Legal</h2>
            <ul className="text-gray-600">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Terms &amp; Conditions
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  DMCA
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto" />
      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-gray-500 sm:text-center">
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
