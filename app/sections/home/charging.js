"use client";
import { delay, useInView } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
import { motion } from "framer-motion";

const Charging = () => {
  const ref1 = useRef(null);
  const isInView = useInView(ref1, { once: false });
  return (
    <>
      <div className="h-[100vh] relative top-10 ">
        <div className="flex flex-col gap-y-12 absolute top-20  left-[20rem] ">
          <div className="flex flex-col gap-y-5 ">
            <div className="w-[18rem] ">
              {" "}
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
              doloribus ipsa iure nemo numquam voluptatum sed velit
              necessitatibus, placeat quidem.
            </div>
            <div className="w-[20rem] ">
              {" "}
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
              doloribus ipsa iure nemo doloribus ipsa iure nemo numquam
              voluptatum sed velit necessitatibus, placeat quidem.
            </div>
          </div>

          <div className="flex border border-black w-[8rem] items-center justify-between px-2 h-[2.5rem] ">
            <div>preorder</div>{" "}
            <div className="w-[1.5rem] h-[1.5rem] ">
              <Image
                width={500}
                height={500}
                src={"/images/img9.png"}
                className="object-cover w-full h-full "
              ></Image>{" "}
            </div>
          </div>
        </div>
        <div className="flex absolute bottom-[16rem] left-20 gap-52 ">
          <div>Specs</div>
          <div className="flex flex-col gap-5 ">
            <div className="flex gap-10 ">
              <motion.div
                className="w-44 leading-none"
                initial={{ y: 30 }}
                ref={ref1}
                animate={{ y: isInView ? 0 : 70, opacity: isInView ? 0.9 : 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                {" "}
                <ul className="list-disc ">
                  <li>Upto 50vw wireless power output</li>
                </ul>{" "}
              </motion.div>{" "}
              <motion.div
                className="w-44 leading-none"
                initial={{ y: 30 }}
                ref={ref1}
                animate={{ y: isInView ? 0 : 70, opacity: isInView ? 0.9 : 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                <ul className="list-disc ">
                  <li>power adapter card length 15m</li>
                </ul>{" "}
              </motion.div>{" "}
              <motion.div
                className="w-32 leading-none"
                initial={{ y: 30 }}
                ref={ref1}
                animate={{ y: isInView ? 0 : 70, opacity: isInView ? 0.9 : 0 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                <ul className="list-disc ">
                  <li>USB c power input</li>
                </ul>
              </motion.div>
            </div>
            <div className="flex gap-10">
              {" "}
              <motion.div
                className="w-44 leading-none"
                initial={{ y: 30 }}
                ref={ref1}
                animate={{ y: isInView ? 0 : 70, opacity: isInView ? 0.9 : 0 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                <ul className="list-disc ">
                  <li>LED wireless charging indicator</li>
                </ul>
              </motion.div>{" "}
              <motion.div
                className="w-44 leading-none"
                initial={{ y: 30 }}
                ref={ref1}
                animate={{ y: isInView ? 0 : 70, opacity: isInView ? 0.9 : 0 }}
                transition={{ duration: 1, delay: 1 }}
              >
                <ul className="list-disc ">
                  <li>magnetic padded leather surface</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="absolute right-[10rem] ">
        <motion.div
          initial={{ y: 0 }}
          ref={ref1}
          animate={{ y: isInView ? 0 : 50 }}
          transition={{ duration:1 ,  }}
        >
          {" "}
          <Image
            width={500}
            height={500}
            src={"/images/img10.png"}
            className="object-cover w-full h-full "
          ></Image>
        </motion.div>
        <div
          className="absolute top-[8rem] w-[30rem] right-[5.5rem] "
          initial={{ y: 0 }}
          ref={ref1}
          animate={{ y: isInView ? 100 : 0 }}
          transition={{ duration: 1 ,  }}
        >
          {" "}
          <Image
            width={500}
            height={500}
            src={"/images/img11.png"}
            className="object-cover w-full h-full "
          ></Image>
        </div>
      </div>
      </div>
    </>
  );
};

export default Charging;
