"use client";

import { motion } from "framer-motion";
import { socials } from "~/constants";

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
      <h2 className="text-[24px] font-extrabold leading-[30px] text-white">
        Lucas Siqueira <span className="align-middle text-sm">| Dev</span>
      </h2>
      <div className="flex gap-4">
        {socials.map((social) => (
          <a href={social.link} target="blank" key={social.name}>
            <img
              key={social.name}
              src={social.url}
              alt={social.name}
              className="h-[24px] w-[24px] cursor-pointer object-contain"
            />
          </a>
        ))}
      </div>
    </div>
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <span className="text-yellow-500">I&apos;m building this site ⚙️</span>
    </div>
  </motion.nav>
);

export default Navbar;
