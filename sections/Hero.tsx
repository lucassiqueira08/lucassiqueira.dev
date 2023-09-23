"use client";

import { motion } from "framer-motion";

import { slideIn, staggerContainer, textVariant } from "~/utils/motion";
import styles from "~/styles";

const Hero = () => (
  <section className={`${styles.yPaddings} pl-6 sm:pl-16`}>
    <motion.div
      variants={{ ...staggerContainer }}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col items-center justify-center`}
    >
      <div className="relative flex h-full w-full items-center justify-center">
        <motion.div
          className={styles.fancyImageBorder}
          variants={slideIn("up", "tween", 0.2, 0.2)}
        >
          <motion.img
            src="/lucas.jpg"
            alt="my photo"
            className={styles.fancyImage}
          />
        </motion.div>
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center">
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-col items-center justify-center mt-10"
        >
          <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
            Welcome
          </motion.h1>
          <motion.h1 className="text-2xl font-bold uppercase text-fuchsia-700">
            To my personal universe
          </motion.h1>
        </motion.div>
      </div>
      <div className="relative flex justify-center align-text-top mb-20">
        <a className="text-gray-300 font-bold text-sm underline leading-10" href="mailto:lucassiqueira.dev@gmail.com">Contact me</a>
      </div>
    </motion.div>
  </section>
);

export default Hero;
