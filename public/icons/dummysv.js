"use client";
import { useInView, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Dummysv = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: " -75% 0%  15% 0% " });
  // const { scrollYProgress } = useScroll();
  // const strokeDashoffset = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  // const pathLength = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  // const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  const pathVariants = {
    hidden: {
      pathLength: 0,
      opacity: 0,
      strokeDashoffset: 1,
      transition: {
        duration: 2.2,
        ease: "easeInOut",
      },
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

  // useEffect(() => {
  //   console.log(pathLength);

  //   return () => {};
  // }, [pathLength]);

  return (
    <div ref={ref}>
      {" "}
      <motion.svg
        id="Layer_2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1496.01 357.42"
        width="843"
        height="203"
      >
        <motion.path
          variants={pathVariants}
          initial={"hidden"}
          animate={isInView ? "visible" : "hidden"}
          stroke={2}
          class="cls-3"
          d="M168.27,124.42c-2.54-46.18-42.86-65.22-84.18-56.2C.77,80.4,3.71,240.31,86.62,247.72c40.77,6.03,77.52-15.88,76.84-62.64"
        />
        <motion.path
          variants={pathVariants}
          initial={"hidden"}
          animate={isInView ? "visible" : "hidden"}
          stroke={2}
          class="cls-3"
          d="M876.27,129.29c-2.54-46.18-42.86-65.22-84.18-56.2-83.32,12.18-80.38,172.09,2.53,179.5,40.77,6.03,77.52-15.88,76.84-62.64"
        />
        <motion.path
          variants={pathVariants}
          initial={"hidden"}
          animate={isInView ? "visible" : "hidden"}
          stroke={2}
          class="cls-3"
          d="M1185.76,195.15c.81,42.22,41.29,65.41,81.66,56.68,54.56-7.53,68.99-67.59,61.52-113.35-5.4-34.73-29.64-67.62-70.85-67.43-16.93-.83-38.93,4.03-54.2,19.62-10.65,10.49-16.82,27.16-17.86,42.82-1.13,74.59.05,149.23-.27,223.84"
        />
        <motion.path
          variants={pathVariants}
          initial={"hidden"}
          animate={isInView ? "visible" : "hidden"}
          stroke={2}
          class="cls-3"
          d="M1430.27.56c-1.56,63.83-5.8,127.66-5.68,191.53.29,6.15.97,12.23,2.04,18.22,4.37,29.33,29.58,58.73,61.7,52.46"
        />
        <motion.path
          variants={pathVariants}
          initial={"hidden"}
          animate={isInView ? "visible" : "hidden"}
          stroke={2}
          class="cls-3"
          d="M1378.82,76.2c39,.33,78,.65,116.99.98"
        />
        <motion.path
          variants={pathVariants}
          initial={"hidden"}
          animate={isInView ? "visible" : "hidden"}
          stroke={2}
          class="cls-3"
          d="M1083.46,189.94c.52,40.61-26.7,63.09-62.39,63.55-51.29,2.46-77.17-41.36-77.58-84.6-1.91-37.14,11.83-86.78,59.03-95.56,29.76-6.83,60.57,1.54,75.23,29.78,8.67,16.02,10.59,33.63,10.82,41.28.05,1.18-.16,2.37-1.41,3.09-46.03,3.3-93.36-.07-139.72.95"
        />
        <motion.path
          variants={pathVariants}
          initial={"hidden"}
          animate={isInView ? "visible" : "hidden"}
          stroke={2}
          class="cls-3"
          d="M360.85,79.11c-27.67-18.18-67.15-17.34-93.7,2.68-12.71,9.51-21.5,23.47-26.34,38.46-18.42,54.5,10.25,125.58,70.14,136.66,24.03,4.38,50.31-2.65,67.86-19.92,13.86-14.26,24.19-35.79,26.43-56.15,3.93-39.77-8.31-79.14-44.22-101.63l-.17-.11Z"
        />
        <motion.path
          variants={pathVariants}
          initial={"hidden"}
          animate={isInView ? "visible" : "hidden"}
          stroke={2}
          class="cls-3"
          d="M494.46,267.28c-.49-33.85-1.22-63.76-.66-96.4-.24-39.89-1.03-86.73,47.97-95.03,30.72-5.04,71.67.53,85.36,32.24,7.64,19.43,6.55,41.01,6.77,61.44-.13,12.39.4,24.67.74,36.99.42,20.18-.5,39.75-.5,62.66"
        />
      </motion.svg>
    </div>
  );
};

export default Dummysv;
