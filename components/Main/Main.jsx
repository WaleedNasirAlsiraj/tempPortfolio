"use client";

import React, { useEffect, useRef, useState } from "react";

import { useTheme } from "next-themes";
import { MagicCard } from "../ui/magicCard";

import { motion, useScroll } from "framer-motion";

import Header from "./Header";
import AboutSection from "../About/AboutSection";
import ProjectSection from "../Projects/ProjectSection";
import TechStack from "./TechStack";
import Footer from "./Footer";
import Experience from "./Experience";
import { useStore } from "@/store/NavStore";

const Main = () => {
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
      className="z-10 "
    >
      <MagicCard
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        className="w-full rounded-xl  flex p-4 lg:p-8 flex-col justify-between gap-7 items-center"
      >
        <Header />
        <AboutSection />
        <ProjectSection />
        <TechStack />
        <Experience />
        <Footer />
      </MagicCard>
    </motion.div>
  );
};

export default Main;
