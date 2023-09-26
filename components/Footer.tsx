"use client";

import { motion } from "framer-motion";
import { socials } from "../constants";

import styles from "../styles";
import { footerVariants } from "../utils/motion";

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} relative py-8`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-[24px] font-extrabold leading-[30px] text-white">
            Lucas Siqueira <span className="align-middle text-sm">| Dev</span>
          </h2>
          <p className="text-[14px] font-normal text-white opacity-50">
            Copyright © 2023.
          </p>

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
      </div>
    </div>
  </motion.footer>
);

export default Footer;
