"use client";
import { useInView, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Dummysv = () => {
  const ref = useRef(null);

  // const { scrollYProgress } = useScroll();
  // const strokeDashoffset = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  // const pathLength = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  // const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  const pathVariants = {
    hidden: {
      pathLength: 0,
      opacity: 0,
      strokeDashoffset: 1,
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      strokeDashoffset: 0,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  // useEffect(() => {
  //   console.log(pathLength);

  //   return () => {};
  // }, [pathLength]);

  return (
    <div ref={ref} className="h-[100vh] flex justify-center items-center ">
      {" "}
      <motion.svg
        width="643"
        height="103"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 329.15 181.64"
      >
        <motion.path
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          stroke={2}
          class="cls-1"
          d="M130.63,28.84c-30.38-19.7-75.01-13.05-98.32,14.66-23.31,27.71-22.24,72.81,2.37,99.38s69.5,31.08,98.91,9.95"
        />
        <motion.path
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          stroke={2}
          class="cls-1"
          d="M291.49,33.63c26.94,24.59,29.76,71.07,5.98,98.73-23.78,27.66-70.17,31.84-98.51,8.88s-33.89-69.2-11.77-98.2c22.11-29.01,71.2-39.61,104.31-9.4Z"
        />
      </motion.svg>
    </div>
  );
};

export default Dummysv;
