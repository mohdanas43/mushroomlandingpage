"use client";
import { useInView, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Svg1 from "@/public/icons/svg1";
import Mushsvg from "@/public/icons/mushsvg";

const Hero = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  const text = useTransform(scrollYProgress, [0, 0.9], [0.5, 2.8]);
  const ref2 = useRef();
  const { scroll } = useScroll({ target: ref });
  const translate = useTransform(scrollYProgress, [0.5, 0.9], [70, 0]);
  const ref1 = useRef(null);
  const isInView = useInView(ref1, { once: true });
  const ref3 = useRef(null);
  const isInView3 = useInView(ref3, { once: false });

  return (
    <>
      <div className=" h-[300vh] relative z-0   " ref={ref}>
        <motion.div
          className={
            "h-[100vh] bg-transparent sticky top-0 font-bold  w-full flex justify-center items-center "
          }
          style={{ scale: text }}
        >
          <Mushsvg />
        </motion.div>

        <motion.div
          className=" h-screen flex justify-between absolute bottom-[5rem] w-full z-10  px-20 py-20"
          ref={ref2}
        >
          <div className="flex gap-5 ">
            <motion.div
              className=""
              // initial={{ y: 30 }}
              // ref={ref1}
              // animate={{ y: isInView ? 0 : 70 }}
              // transition={{ duration: 1 }}
              style={{ translateY: translate }}
            >
              Specs
            </motion.div>
            <div>About</div>
            <motion.div
              // initial={{ y: 40 }}
              // animate={{ y: isInView ? 0 : 80 }}
              // transition={{ duration: 1 }}
              style={{ translateY: translate }}
            >
              Store
            </motion.div>
          </div>
          <div className=" flex gap-5">
            <motion.div
              className="w-[1.5rem] h-[1.5rem] "
              style={{ translateY: translate }}
              // initial={{ y: 30 }}
              // ref={ref1}
              // animate={{ y: isInView ? 0 : 70 }}
              // transition={{ duration: 1 }}
            >
              <Image
                width={500}
                height={500}
                src={"/images/img6.png"}
                className="object-cover w-full h-full "
              ></Image>{" "}
            </motion.div>
            <div className="w-[1.5rem]  h-[1.5rem]">
              <Image
                width={500}
                height={500}
                src={"/images/img7.png"}
                className="object-cover w-full h-full "
              ></Image>{" "}
            </div>
            <motion.div
              className="w-[1.5rem] h-[1.5rem] "
              style={{ translateY: translate }}
              // initial={{ y: 30 }}
              // ref={ref1}
              // animate={{ y: isInView ? 0 : 70 }}
              // transition={{ duration: 1 }}
            >
              <Image
                width={500}
                height={500}
                src={"/images/img8.png"}
                className="object-cover w-full h-full "
              ></Image>{" "}
            </motion.div>
          </div>
        </motion.div>

        <div className="absolute bottom-0  px-20 flex flex-col gap-10 ">
          <div className="flex gap-20 items-center w-full h-full justify-center  ">
            <motion.div
              className="flex items-center "
              initial={{ y: 100 }}
              ref={ref3}
              animate={{ y: isInView3 ? 0 : 150 }}
              transition={{ duration: 1 }}
            >
              <div className="text-[1.5rem] pb-[0.5rem] ">$</div>
              <div className="text-[2rem] ">129</div>
            </motion.div>
            <motion.div
              className="w-[18rem] pt-20 "
              initial={{ y: 100 }}
              ref={ref3}
              animate={{ y: isInView3 ? 0 : 150 }}
              transition={{ duration: 1 }}
            >
              mushroom is a wireless charger, characterized by a simple and
              essential design, defined by soft and rounded lines.{" "}
            </motion.div>
          </div>
          <motion.div
            className="flex border border-black w-[8rem] items-center justify-between px-2 h-[2.5rem] "
            initial={{ x: -100 }}
            ref={ref3}
            animate={{ x: isInView3 ? 140 : -50 }}
            transition={{ duration: 1 }}
          >
            <div>preorder</div>{" "}
            <div className="w-[1.5rem] h-[1.5rem] ">
              <Image
                width={500}
                height={500}
                src={"/images/img9.png"}
                className="object-cover w-full h-full "
              ></Image>{" "}
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-[-1rem] right-44  ">
          {" "}
          <motion.div
            ref={ref1}
            className=" w-[36rem] "
            initial={{ y: 0 }}
            animate={{ y: isInView ? 50 : 200 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {" "}
            <Image
              width={500}
              height={500}
              src={"/images/img1.png"}
              className="object-cover w-full h-full "
            ></Image>
          </motion.div>{" "}
          <motion.div
            className=" relative right-44  w-[36rem] "
            initial={{ y: 0 }}
            animate={{ y: isInView ? 40 : 200 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {" "}
            <Image
              width={500}
              height={500}
              src={"/images/img2.png"}
              className="object-cover w-full h-full "
            ></Image>
          </motion.div>{" "}
          <motion.div
            className=" w-[36rem] "
            initial={{ y: 0 }}
            animate={{ y: isInView ? 40 : 230 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            {" "}
            <Image
              width={500}
              height={500}
              src={"/images/img3.png"}
              className="object-cover w-full h-full "
            ></Image>
          </motion.div>{" "}
          <motion.div
            className="relative right-44  w-[36rem] "
            initial={{ y: 0 }}
            animate={{ y: isInView ? 40 : 200 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            {" "}
            <Image
              width={500}
              height={500}
              src={"/images/img4.png"}
              className="object-cover w-full h-full "
            ></Image>
          </motion.div>{" "}
          <motion.div
            className=" w-[36rem]"
            initial={{ y: 0 }}
            animate={{ y: isInView ? 20 : 150 }}
            transition={{ duration: 0.7, delay: 0.9 }}
          >
            {" "}
            <Image
              width={500}
              height={500}
              src={"/images/img5.png"}
              className="object-cover w-full h-full "
            ></Image>
          </motion.div>{" "}
        </div>
      </div>
    </>
  );
};

export default Hero;
