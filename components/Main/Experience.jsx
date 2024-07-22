"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Card } from "../ui/card";
import ExperienceItem from "./ExperienceItem";

const Experience = () => {

    const [hoveredIndex, setHoveredIndex] = useState(null);

    const experiences = [
        {
          date: "2024 - PRESENT",
          title: "Senior FrontEnd Developer",
          company: "Apple",
          link: "https://apple.com",
          description: "Developed and styled interactive web apps for Apple Music, including the user interface of Apple Music’s embeddable web player widget for in-browser user authorization and full song playback.",
          tags: ["Ember", "JavaScript", "SCSS"],
        },
        {
          date: "2021 - 2024",
          title: "AI Developer",
          company: "Google",
          link: "https://google.com",
          description: "Set up and trained AI models for various projects, contributing to the advancement of machine learning technologies in the company.",
          tags: ["AI", "Machine Learning", "Python"],
        },
        {
          date: "2018 - 2021",
          title: "Web3 Developer",
          company: "Ethereum Foundation",
          link: "https://ethereum.org",
          description: "Developed and maintained decentralized applications (dApps) and smart contracts on the Ethereum blockchain, enhancing the Web3 ecosystem.",
          tags: ["Web3", "Solidity", "Blockchain"],
        },
        {
          date: "2016 - 2018",
          title: "Full-Stack Software Engineer",
          company: "Amazon",
          link: "https://amazon.com",
          description: "Worked on both front-end and back-end development of e-commerce solutions, optimizing performance and user experience.",
          tags: ["Full-Stack", "JavaScript", "AWS"],
        },
      ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ type: "smooth", duration: 0.7 }}
    >
      <Card className="w-full p-5 bg-secondary-foreground/5 border-0">
        <div className=" w-full">
          <div className=" flex w-full flex-row items-center justify-between gap-5">
            <div className="flex flex-row gap-3 justify-center items-center">
              <div className="size-2 rounded-full bg-secondary-foreground/10"></div>
              <h1 className="text-xl font-medium text-secondary-foreground/70 ">
                My Expeirence
              </h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col pt-5 gap-2">
      {experiences.map((experience, index) => (
        <motion.div
          key={index}
          className="w-full"
          onHoverStart={() => setHoveredIndex(index)}
          onHoverEnd={() => setHoveredIndex(null)}
          animate={{
            opacity: hoveredIndex === null || hoveredIndex === index ? 1 : 0.5,
          }}
        >
          <ExperienceItem {...experience} />
        </motion.div>
      ))}
    </div>
      </Card>
    </motion.div>
  );
};

export default Experience;
