/* eslint-disable @next/next/no-img-element */
"use client";

import Image from 'next/image'
import { motion } from "framer-motion";

import styles from "~/styles";
import { navVariants } from "~/utils/motion";

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView={"show"}
    className={`${styles.xPaddings} relative py-8`}
  >
    <div className="gradient-01 absolute inset-0 w-[50%]" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <Image
        src="/search.svg"
        alt="Search"
        className="h-[24px] w-[24px] object-contain"
      />
      <h2 className="text-[24px] font-extrabold leading-[30px] text-white">
        METAVERSUS
      </h2>
      <Image
        src="/menu.svg"
        alt="menu"
        className="h-[24px] w-[24px] object-contain"
      />
    </div>
  </motion.nav>
);

export default Navbar;
