"use client";
import { useInView } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
import { motion } from "framer-motion";

const Iphone = () => {
  const ref1 = useRef(null);
  const isInView = useInView(ref1, { margin: "-75% 0% 20% 0%" });
  return (
    <>
      <div
        className="h-[100vh] grid grid-cols-3 grid-rows-1 w-full  gap-5 px-10"
        ref={ref1}
      >
        <motion.div
          className={`h-[40rem] ${
            isInView ? " origin-bottom ease-in-out" : " origin-top duration-100 delay-[0.5] ease-in-out"
          } `}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: isInView ? 1 : 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <Image
            width={500}
            height={500}
            src={"/images/img15.jpg"}
            className="object-cover w-full h-full rounded-tl-[10rem] "
          ></Image>
        </motion.div>
        <motion.div
          className={`h-[40rem] ${
            isInView ? " origin-bottom ease-in-out" : " origin-top duration-100 delay-[0.3] ease-in-out "
          } `}
          initial={{ scaleY: 0 }}
          // style={{ transformOrigin: isInView ? "bottom" : "top" }}
          animate={{ scaleY: isInView ? 1 : 0 }}
          transition={{ duration: 1.5, delay: 0.3 }}
        >
          <Image
            width={500}
            height={500}
            src={"/images/img16.jpg"}
            className="object-cover w-full h-full rounded-br-[10rem] "
          ></Image>
        </motion.div>
        <motion.div
          className={`h-[40rem] ${
            isInView ? " origin-bottom ease-in-out" : " origin-top duration-100 delay-[0.1] ease-in-out "
          } `}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: isInView ? 1 : 0 }}
          transition={{ duration: 1.5, delay: 0.1 }}
        >
          <Image
            width={500}
            height={500}
            src={"/images/img17.jpg"}
            className="object-cover w-full h-full rounded-bl-[10rem] "
          ></Image>
        </motion.div>
      </div>
    </>
  );
};

export default Iphone;
