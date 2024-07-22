"use client";

import React, { useRef } from "react";
import { Card } from "../ui/card";
import { useTheme } from "next-themes";
import { MagicCard } from "../ui/magicCard";
import { motion, useScroll } from "framer-motion";
import SecondaryFooter from "./SecondaryFooter";
import { useStore } from "@/store/NavStore";

const AboutPage = () => {
  const { theme } = useTheme();

  const { trigger, setTrigger } = useStore();

  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const check = (value) => {
    if (value > 0.97) {
      if (trigger === false) {
        setTrigger(true);
      }
    } else {
      if (trigger === true) {
        setTrigger(false);
      }
    }
  };

  scrollYProgress.on("change", (e) => {
    check(e);
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "smooth", delay: 0.3, duration: 1 }}
      ref={ref}
    >
      <MagicCard
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        className="w-full rounded-xl  flex p-4 lg:p-8 flex-col justify-between gap-7 items-center"
      >
        {/* about page content */}
        <>
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "smooth", duration: 0.7 }}
            className="p-5 flex w-full flex-row items-center justify-between gap-2"
          >
            <div className="flex flex-row gap-3 justify-center items-center">
              <div className="size-2 rounded-full bg-secondary-foreground/10"></div>
              <h1 className="text-xl lg:text-2xl font-medium text-secondary-foreground/70 ">
                About
              </h1>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "smooth", duration: 0.7 }}
            className="px-0 pt-0 lg:pt-10 flex w-full flex-col  justify-between gap-5"
          >
            <div className="flex px-5 flex-col gap-3">
              <h1 className="text-4xl lg:text-6xl font-semibold">
                It's Me Brian
              </h1>
            </div>

            <div className="px-5">
              <p className="text-secondary-foreground/70 text-lg lg:text-2xl pt-4">
                I'm Brian Do, a product designer with over 5 years of
                experience, currently residing in Jakarta, Indonesia. I have a
                deep passion for crafting purposeful interfaces and products. My
                main goal is to bridge the divide between people and technology,
                transforming intricate challenges into meaningful and seamless
                experiences.
              </p>
            </div>
            <div className="w-full flex justify-center items-center my-10">
              <Card className="p-5 w-fit  bg-secondary-foreground/5">
                <img
                  src="https://framerusercontent.com/images/45HDSppqu7RAJWEiDejaLDBP3Rc.png"
                  className="rounded-2xl max-w-[900px]  max-h-[900px] !w-full !h-full object-cover"
                />
              </Card>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "smooth", duration: 0.7 }}
            className=" pt-0 lg:pt-10 flex w-full flex-col  justify-between gap-5"
          >
            <div className="flex px-5 flex-col gap-3">
              <h1 className="text-4xl lg:text-6xl font-semibold">
                More About Me
              </h1>
            </div>

            <div className="px-5">
              <p className="text-secondary-foreground/70 text-lg lg:text-2xl pt-4">
                Brian Do holds a bachelor's degree in Graphic Design from a
                prestigious university in the United States and has a relentless
                drive for staying up-to-date with the latest technologies and
                design trends. Actively involved in the design community, Brian
                regularly participates in diverse design conferences and
                meetups.
              </p>
              <p className="text-secondary-foreground/70 text-lg lg:text-2xl pt-4">
                When he's not immersed in design work, he finds solace in
                playing the guitar and exploring new coffee shops in his local
                area. Brian firmly believes in maintaining a healthy work-life
                balance, making sure to take breaks and reenergize his
                creativity. In his spare time, he also volunteers at a local
                animal shelter on weekends.
              </p>
            </div>
          </motion.div>
        </> 
        {/* footer  */}
        <SecondaryFooter />
      </MagicCard>
    </motion.div>
  );
};

export default AboutPage;
