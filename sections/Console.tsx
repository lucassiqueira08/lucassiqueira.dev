"use client";

import { motion } from "framer-motion";

import { slideIn, staggerContainer, textVariant } from "~/utils/motion";
import styles from "~/styles";

const Console = () => (
  <section className={`${styles.yPaddings} pl-6 sm:pl-16`}>
    <motion.div
      variants={{ ...staggerContainer }}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col items-center justify-center`}
    >
      <motion.div
        variants={slideIn("back", "tween", 0.2, 1)}
        className="relative mt-[12px] w-full md:-mt-[20px]"
      >
        <div className="hero-gradient opacity-8 absolute -top-[30px] z-[0] h-[300px] w-full rounded-l-[140px]" />
        <div className="relative rounded-bl-[50px] rounded-tl-[160px] bg-black">
          <motion.div
            variants={textVariant(1.2)}
            className="align-center relative top-[40px] z-10 flex h-[350px] w-full flex-col justify-start gap-8 object-cover pl-20 sm:h-[500px]"
          >
            <motion.p
              variants={textVariant(1.2)}
              className="flex flex-col text-xl font-extrabold text-gray-300"
            >
              <span>{"> Software Engineer"}</span>
              <span className="pl-4 pb-4"></span>
              <span className="pl-4 pb-2"> {"|- Full Stack Developer"}</span>
              <span className="pl-8 pb-2"> {"|- Javascript"}</span>
              <span className="pl-8 pb-2"> {"|- Python"}</span>
              <span className="pl-8 pb-2"> {"|- Node.js"}</span>
              <span className="pl-8"> {"|- React"}</span>
            </motion.p>
            <motion.p
              variants={textVariant(1.4)}
              className="flex flex-col text-xl font-extrabold text-gray-300"
            >
              <span className="pl-4 pb-4"> {"|- Tech Lead"}</span>
            </motion.p>
            <motion.p
              variants={textVariant(1.5)}
              className="text-2xl font-extrabold text-gray-300"
            >
              {"> _"}
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Console;
