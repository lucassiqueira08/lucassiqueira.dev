"use client";

import { motion } from "framer-motion";

import styles from "~/styles";
import { fadeIn, staggerContainer } from "~/utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={{ ...staggerContainer }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} mt-10 flex-col`}
    >
      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] text-center text-[20px] 
        font-normal text-secondary-white sm:text-[32px] max-w-full px-10"
      >
        <span className="font-bold text-white">Hey there!</span>
        <br />
        <span className="text-2xl font-normal">
          I&apos;m a full-stack web developer from sunny Brazil. <br /> I&apos;ve got a
          genuine passion for creating digital experiences, and I&apos;ve even had the chance to
          lead some awesome developer teams.
        </span>
        <br />
        <span className="text-2xl">
          For the past five years, I&apos;ve been deep in the world of software
          development, picking up a bunch of skills and working on some pretty
          cool projects.
        </span>
      </motion.p>
      <motion.span
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="text-white text-2xl font-bold mt-[28px]"
      >
        Check out the highlights of my journey below!
      </motion.span>
      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="mt-2 h-[20px] w-[18px] object-contain"
      ></motion.img>
    </motion.div>
  </section>
);

export default About;
