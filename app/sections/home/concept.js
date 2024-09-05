"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Svg2 from "@/public/icons/svg2";
import Dummysv from "@/public/icons/dummysv";

const Concept = () => {
  const ref1 = useRef(null);
  const isInView = useInView(ref1, { once: false });
  // const ref = useRef();
  // const { scrollYProgress } = useScroll({ target: ref });
  // const translate = useTransform(scrollYProgress, [0.6, 0.9], [ 0 ,150 ]);
  return (
    <>
      <div className=" relative top-0 h-[100vh] pt-10 overflow-hidden"   >
        <div className="flex flex-col gap-y-5 absolute top-[16rem]  left-[20rem] ">
          <div className="w-[18rem] ">
            {" "}
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
            doloribus ipsa iure nemo numquam voluptatum sed velit
            necessitatibus, placeat quidem.
          </div>
          <div className="w-[20rem] ">
            {" "}
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
            doloribus ipsa iure nemo doloribus ipsa iure nemo numquam voluptatum
            sed velit necessitatibus, placeat quidem.
          </div>
        </div>
        <div className="font-bold absolute bottom-0   ">
        <Dummysv/>
        </div>

        <div className="relative right-10 top-20 ">
          <motion.div 
            className="w-[50rem]  absolute top-[-3rem]  right-[-13rem] "
            initial={{ y: 100, rotate:"35deg" }}
            
            animate={{ y: isInView ? 70 : 150 }}
            transition={{ duration: 1 }}  
           
           
          >
            {" "}
            <Image
              width={500}
              height={500}
              src={"/images/img5.png"}
              className="object-cover w-full h-full "
            ></Image>
          </motion.div>
          <motion.div
            className=" w-[40rem] absolute top-[8rem] left-[50rem] "
            initial={{ y: 60 }}
            animate={{ y: isInView ? 0 : 100 }}
            transition={{ duration: 1,  }}
            // style={{ translateY: translate }}
          >
            {" "}
            <Image
              width={500}
              height={500}
              src={"/images/img13.png"}
              className="object-cover w-full h-full "
            ></Image>
          </motion.div>
          <motion.div 
            className=" w-[40rem] absolute right-[-7rem] top-[28rem] "
            ref={ref1}
            initial={{ y: 60 }}
            animate={{ y: isInView ? 0 : 100 }}
            transition={{ duration: 1, 
              
             }}
          >
            {" "}
            <Image
              width={500}
              height={500}
              src={"/images/img12.png"}
              className="object-cover w-full h-full "
            ></Image>
          </motion.div>
        </div>
       
      </div>
    </>
  );
};

export default Concept;
