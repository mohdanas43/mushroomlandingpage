"use client";
import { useInView } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import Svg3 from "@/public/icons/svg3";

const PREORDER = () => {
  const ref1 = useRef(null);
  const isInView = useInView(ref1, { once: false });
  return (
    <>
      <div className="bg-[#FFFFFF] h-[100vh] ">
        <div className="relative top-0 ">
          {" "}
          <motion.div
            className="w-[30rem] absolute top-20 right-44  "
            initial={{ y: 100 }}
            ref={ref1}
            animate={{ y: isInView ? 70 : 150 }}
            transition={{ duration: 1 }}
          >
            {" "}
            <Image
              width={500}
              height={500}
              src={"/images/img18.png"}
              className="object-cover w-full h-full "
            ></Image>
          </motion.div>
        </div>
        <div className="flex flex-col gap-5 pt-20 pl-[20rem] ">
          <div className="text-[2rem] ">
            Preorder now on Kickstarter for $129{" "}
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
        <div className=" pt-[3rem] px-10  font-bold "><Svg3/></div>

        <div className="relative top-20 flex justify-center items-center w-[80%]">
          {" "}
          <motion.div
            className="w-[30rem] absolute   "
            initial={{ y: 100 }}
            animate={{ y: isInView ? 70 : 150 }}
            transition={{ duration: 1 }}
          >
            {" "}
            <Image
              width={500}
              height={500}
              src={"/images/img19.png"}
              className="object-cover w-full h-full "
            ></Image>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default PREORDER;
