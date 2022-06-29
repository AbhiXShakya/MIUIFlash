import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Social } from "./social";
import { motion } from "framer-motion";
import { animateNav, easing } from "../utils/helpers";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <motion.header
      initial="initial"
      animate="animate"
      variants={animateNav}
      exit={{ y: "-30%", opacity: 0, transition: { ease: easing } }}
    >
      <div
        id="mobileNavbar"
        style={{
          opacity: isOpen ? 1 : 0,
        }}
        className={`absolute w-full h-[120%] duration-[0.8s] z-50 easeCustom ${
          isOpen ? "translate-y-0" : "-translate-y-[200vh]"
        } bg-white pclamp`}
      >
        <div className="translate-y-[34%]">
          <ul className="flex flex-col items-center justify-center w-full m-auto space-y-6 text-4xl font-bold linkHover">
            <li
              onClick={() => {
                setIsOpen(false);
              }}
              className={router.pathname == "/" ? "currentLink" : ""}
            >
              <Link href="/">Home</Link>
            </li>
            <li
              onClick={() => {
                setIsOpen(false);
              }}
              className={
                router.pathname.includes("/ports") ? "currentLink" : ""
              }
            >
              <Link href="/ports">Ports</Link>
            </li>
            <li
              onClick={() => {
                setIsOpen(false);
              }}
              className={router.pathname.includes("/roms") ? "currentLink" : ""}
            >
              <Link href="/roms">ROMs</Link>
            </li>
            <li
              onClick={() => {
                setIsOpen(false);
              }}
              className={
                router.pathname.includes("/miui-updates") ? "currentLink" : ""
              }
            >
              <Link href="#">MIUI Updates</Link>
            </li>
            <li
              onClick={() => {
                setIsOpen(false);
              }}
              className={
                router.pathname.includes("/about") ? "currentLink" : ""
              }
            >
              <Link href="#">Blog</Link>
            </li>
            <li
              onClick={() => {
                setIsOpen(false);
              }}
              className={
                router.pathname.includes("/contact") ? "currentLink" : ""
              }
            >
              <Link href="#">Dark Mode</Link>
            </li>
          </ul>
          <div className="flex justify-center w-full mt-9">
            <Social />
          </div>
        </div>
      </div>
      <nav className="flex justify-between pclamp">
        <Link href="/">
          <div className="z-50 select-none">
            <h1 className="hidden">MIUIFlash</h1>
            <h1 className="z-50 pt-1 text-4xl font-extrabold cursor-pointer">
              MIUI FLA
              <span className="px-[1px]">
                <Image
                  src="/images/MiuiFlash_logo.png"
                  alt="MIUIFlash"
                  width={20}
                  height={25}
                  priority={true}
                />
              </span>
              H
            </h1>
          </div>
        </Link>

        <div className="hidden lg:flex lg:items-center">
          <ul className="flex space-x-6 text-xl font-bold linkHover">
            <li className={router.pathname == "/" ? "currentLink" : ""}>
              <Link href="/">Home</Link>
            </li>
            <li
              className={
                router.pathname.includes("/ports") ? "currentLink" : ""
              }
            >
              <Link href="/ports">Ports</Link>
            </li>
            <li
              className={router.pathname.includes("/roms") ? "currentLink" : ""}
            >
              <Link href="/roms">ROMs</Link>
            </li>
            <li
              className={
                router.pathname.includes("/miui-updates") ? "currentLink" : ""
              }
            >
              <Link href="#">MIUI Updates</Link>
            </li>
            <li
              className={
                router.pathname.includes("/about") ? "currentLink" : ""
              }
            >
              <Link href="#">Blog</Link>
            </li>
            <li
              className={
                router.pathname.includes("/contact") ? "currentLink" : ""
              }
            >
              <Link href="#">Dark Mode</Link>
            </li>
          </ul>
        </div>
        <div className="z-50 flex items-center lg:hidden">
          <div
            onClick={() => setIsOpen(!isOpen)}
            className={isOpen ? "menuCross" : "menuHamburger"}
          ></div>
        </div>
      </nav>
    </motion.header>
  );
}
