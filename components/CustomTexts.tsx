"use client";

import { motion } from "framer-motion";
import { textContainer, textVariant2 } from "~/utils/motion";

export const TypingText = ({
  title = '',
  textStyles = '',
}: {
  title: string | React.ReactNode;
  textStyles?: string;
}) => (
  <motion.p
    variants={textContainer}
    className={`text-[14px] font-normal text-secondary-white ${textStyles}`}
  >
    {typeof title === 'string' ? (
      <>
        {Array.from(title).map((letter, index) => (
          <motion.span variants={textVariant2} key={index}>
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </>
    ) : (
      <TitleText title={title} textStyles={textStyles} />
    )}
  </motion.p>
);

export const TitleText = ({
  title,
  textStyles,
}: {
  title: React.ReactNode;
  textStyles: string;
}) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] text-[40px] font-bold text-white md:text-[64px] ${textStyles}`}
  >
    {title}
  </motion.h2>
);
