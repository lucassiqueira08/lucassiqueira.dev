"use client";

import { motion } from "framer-motion";

import styles from "~/styles";
import { navVariants } from "~/utils/motion";

const personalLinkedin = "https://www.linkedin.com/in/lucassiqueira08/";
const personalGithub = "https://github.com/lucassiqueira08";

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView={"show"}
    className={`${styles.xPaddings} relative py-8`}
  >
    <div className="gradient-01 absolute inset-0 w-[50%]" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <h2 className="text-[24px] font-extrabold leading-[30px] text-white">
        Lucas Siqueira
      </h2>
      <div className="flex gap-4">
        <a href={personalGithub} target="blank">
          <img
            src="/github.svg"
            alt="My Github"
            className="h-[24px] w-[24px] cursor-pointer object-contain"
          ></img>
        </a>
        <a href={personalLinkedin} target="blank">
          <img
            src="/linkedin.svg"
            alt="My professional Linkedin"
            className="h-[24px] w-[24px] cursor-pointer object-contain"
          ></img>
        </a>
      </div>
    </div>
  </motion.nav>
);

export default Navbar;
