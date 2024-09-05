"use client";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const Svg1 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
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
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div ref={ref}>
      <motion.svg
        width="643"
        height="103"
        id="Layer_2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 222.97 33.83"
      >
        <motion.path
          variants={pathVariants}
          initial={"hidden"}
          animate={isInView ? "visible" : "hidden"}
          class="cls-2"
          d="M3.03,8.49c-.01,7.65-.02,15.31-.03,22.96"
        />
        <motion.path
          variants={pathVariants}
          initial={"hidden"}
          animate={isInView ? "visible" : "hidden"}
          class="cls-2"
          d="M3,16.66c1.99-5.37,10.39-9.71,13.59-3.05,1.32,5.86.02,12.29.45,18.22"
        />
        <motion.path
          variants={pathVariants}
          initial={"hidden"}
          animate={isInView ? "visible" : "hidden"}
          class="cls-2"
          d="M17.04,15.75c2.03-4.84,9.12-8.04,12.67-3,2.24,5.68.28,12.63.89,18.71"
        />
        <motion.path
          variants={pathVariants}
          initial={"hidden"}
          animate={isInView ? "visible" : "hidden"}
          class="cls-2"
          d="M192.19,8.62l-.03,22.96"
        />
        <motion.path
          variants={pathVariants}
          initial={"hidden"}
          animate={isInView ? "visible" : "hidden"}
          class="cls-2"
          d="M192.15,16.66c1.99-5.37,10.39-9.71,13.59-3.05,1.32,5.86.02,12.29.45,18.22"
        />
        <motion.path
          variants={pathVariants}
          initial={"hidden"}
          animate={isInView ? "visible" : "hidden"}
          class="cls-2"
          d="M206.19,15.75c2.03-4.84,9.12-8.04,12.67-3,2.24,5.68.28,12.63.89,18.71"
        />
        <motion.path
          variants={pathVariants}
          initial={"hidden"}
          animate={isInView ? "visible" : "hidden"}
          class="cls-2"
          d="M39.72,8.49c.36,5.26-1,12.51,1.9,17.52,4.07,5.23,10.94,3.54,14.41-1.35"
        />
        <motion.path
          variants={pathVariants}
          initial={"hidden"}
          animate={isInView ? "visible" : "hidden"}
          class="cls-2"
          d="M56.94,8.49c-.4,7.92-.61,16.43-.61,23.95"
        />
        <motion.path
          variants={pathVariants}
          initial={"hidden"}
          animate={isInView ? "visible" : "hidden"}
          class="cls-2"
          d="M79.95,15.73c1.95-8.34-12.18-8.85-12.7-1.29-.22,7.39,10.82,3.13,12.61,9.06,1.91,9.67-12.91,9.5-14.29,1.09"
        />
        <motion.path
          variants={pathVariants}
          initial={"hidden"}
          animate={isInView ? "visible" : "hidden"}
          class="cls-2"
          d="M91.22,0c0,10.64.33,21.31.33,31.83"
        />
        <motion.path
          variants={pathVariants}
          initial={"hidden"}
          animate={isInView ? "visible" : "hidden"}
          class="cls-1"
          d="M91.4,16.95c.56-6.57,9.23-9.35,12.8-3.4,2.29,5.49.58,12.02,1.23,17.9"
        />
        <motion.path
          variants={pathVariants}
          initial={"hidden"}
          animate={isInView ? "visible" : "hidden"}
          class="cls-2"
          d="M116.21,9.12c.09,7.45.19,14.89.28,22.34"
        />
        <motion.path
          variants={pathVariants}
          initial={"hidden"}
          animate={isInView ? "visible" : "hidden"}
          class="cls-2"
          d="M116.21,16.66c1.89-3.68,7.4-6.31,11.44-5.43"
        />
        <motion.path
          variants={pathVariants}
          initial={"hidden"}
          animate={isInView ? "visible" : "hidden"}
          class="cls-2"
          d="M148.09,10.14c-14.65-7.28-19.72,15.52-6.55,20.09,12,3.28,15.96-14.64,6.55-20.09Z"
        />
        <motion.path
          variants={pathVariants}
          initial={"hidden"}
          animate={isInView ? "visible" : "hidden"}
          class="cls-2"
          d="M176.13,10.14c-14.65-7.28-19.72,15.52-6.55,20.09,12,3.28,15.96-14.64,6.55-20.09Z"
        />
      </motion.svg>
    </div>
  );
};

export default Svg1;
