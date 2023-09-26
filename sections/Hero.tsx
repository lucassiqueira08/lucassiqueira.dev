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
          className="mt-10 flex flex-col items-center justify-center"
        >
          <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
            Welcome
          </motion.h1>
          <motion.h1 className="text-2xl font-bold uppercase text-fuchsia-700">
            To my personal universe
          </motion.h1>
        </motion.div>
      </div>
      <div className="relative mb-20 flex justify-center align-text-top">
        <a
          className="mt-2 rounded-3xl bg-fuchsia-700 px-4 text-sm font-bold leading-10 text-gray-300"
          href="mailto:lucassiqueira.dev@gmail.com"
        >
          Contact me
        </a>
      </div>
    </motion.div>
  </section>
);

export default Hero;
