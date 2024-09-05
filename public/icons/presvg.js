"use client";
import { useInView, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Presvg = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: " -45% 0%  15% 0% " });
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
      <motion.svg
        id="Layer_2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1604.05 391.61"
        width="643"
        height="204"
      >
        <motion.path
          variants={pathVariants}
          stroke={2}
          initial={"hidden"}
          animate={isInView ? "visible" : "hidden"}
          class="cls-3"
          d="M1401.71,223.42c-6.22,103.53-147.32,72.41-140.07-22.87-2.07-37.64,15.08-85.93,57.97-93.52,34.83-8.43,68.72,4.28,81.08,39.89,3.36,8.54,8.62,32.12,4.72,33.57-45.8,4.63-93.42-.04-139.72,1.42"
        />
        <motion.path
          variants={pathVariants}
          stroke={2}
          initial={"hidden"}
          animate={isInView ? "visible" : "hidden"}
          class="cls-3"
          d="M543.71,223.42c-6.22,103.53-147.32,72.41-140.07-22.87-2.07-37.64,15.08-85.93,57.97-93.52,34.83-8.43,68.72,4.28,81.08,39.89,3.36,8.54,8.62,32.12,4.72,33.57-45.8,4.63-93.42-.04-139.72,1.42"
        />
        <motion.path
          variants={pathVariants}
          stroke={2}
          initial={"hidden"}
          animate={isInView ? "visible" : "hidden"}
          class="cls-3"
          d="M23.9,228.74c2.45,74.49,113.95,76.31,136.07,13.43,26.51-63.51-4.76-155.02-86.54-135.27-21.5,4.77-40.8,21.58-46.4,44.06-8.37,79.24-.71,160.16-3.12,239.96"
        />
        <motion.path
          variants={pathVariants}
          stroke={2}
          initial={"hidden"}
          animate={isInView ? "visible" : "hidden"}
          class="cls-3"
          d="M1174.69,162.87c-2.45-74.49-113.95-76.31-136.07-13.43-26.51,63.51,4.76,155.02,86.54,135.27,21.5-4.77,40.8-21.58,46.4-44.06,8.37-79.24.71-160.16,3.12-239.96"
        />
        <motion.path
          variants={pathVariants}
          stroke={2}
          initial={"hidden"}
          animate={isInView ? "visible" : "hidden"}
          class="cls-3"
          d="M747.05,112.73c-32.8-21.58-82.49-16.12-106.8,15.77-62.52,80.33,38.49,219.28,125.86,141.07,40.77-44,34.02-124.26-19.06-156.84Z"
        />
        <motion.path
          variants={pathVariants}
          stroke={2}
          initial={"hidden"}
          animate={isInView ? "visible" : "hidden"}
          class="cls-3"
          d="M264.6,91.95c.83,66.73,1.67,133.46,2.5,200.2"
        />
        <motion.path
          variants={pathVariants}
          stroke={2}
          initial={"hidden"}
          animate={isInView ? "visible" : "hidden"}
          class="cls-3"
          d="M264.6,159.57c16.86-33.02,66.33-56.6,102.55-48.71"
        />
        <motion.path
          variants={pathVariants}
          stroke={2}
          initial={"hidden"}
          animate={isInView ? "visible" : "hidden"}
          class="cls-3"
          d="M880.6,95.71c.83,66.73,1.67,133.46,2.5,200.2"
        />
        <motion.path
          variants={pathVariants}
          stroke={2}
          initial={"hidden"}
          animate={isInView ? "visible" : "hidden"}
          class="cls-3"
          d="M880.6,163.33c16.86-33.02,66.33-56.6,102.55-48.71"
        />
        <motion.path
          variants={pathVariants}
          stroke={2}
          initial={"hidden"}
          animate={isInView ? "visible" : "hidden"}
          class="cls-3"
          d="M1496.6,91.95c.83,66.73,1.67,133.46,2.5,200.2"
        />
        <motion.path
          variants={pathVariants}
          stroke={2}
          initial={"hidden"}
          animate={isInView ? "visible" : "hidden"}
          class="cls-3"
          d="M1496.6,159.57c16.86-33.02,66.33-56.6,102.55-48.71"
        />
      </motion.svg>
    </div>
  );
};

export default Presvg;
