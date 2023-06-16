/* eslint-disable @next/next/no-img-element */
"use client";
import {
  slideIn,
  staggerContainer,
  textVariant,
} from "~/utils/motion";
import { motion } from "framer-motion";
import styles from "~/styles";

const Hero = () => (
  <section className={`${styles.yPaddings} pl-6 sm:pl-16`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="relative z-10 flex flex-col items-center justify-center">
        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
          Metaverse
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row items-center justify-center"
        >
          <h1 className={`${styles.heroHeading}`}>Ma</h1>
          <h1 className={styles.heroDText} />
          <h1 className={styles.heroHeading}>Ness</h1>
        </motion.div>
      </div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="relative -mt-[12px] w-full md:-mt-[20px]"
      >
        <div className="hero-gradient rounded-tl-[140px] absolute -top-[30px] z-[0] h-[300px] w-full"/>
          <img
            src="/cover.png"
            alt="cover"
            className="relative z-10 h-[350px] w-full rounded-tl-[140px] object-cover sm:h-[500px]"
          />
          <a href="#explore">
            <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
              <img src="/stamp.png" alt="stamp" className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain">
              </img>
            </div>
          </a>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
