"use client";

import { motion } from "framer-motion";
import React from "react";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";

const TechStack = () => {
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
                My Tech Stack
              </h1>
            </div>
          </div>
        </div>
        <div className="flex flex-row flex-wrap  items-center pt-5 gap-2 ">
          <Badge variant={"secondary"}>AI Developer</Badge>
          <Badge variant={"secondary"}>Big Tech</Badge>
          <Badge variant={"secondary"}>AI Model</Badge>
          <Badge variant={"secondary"}>NFT</Badge>
          <Badge variant={"secondary"}>Web3 Developer</Badge>
          <Badge variant={"secondary"}>Full-Stack Software Engineer</Badge>
          <Badge variant={"secondary"}>Python</Badge>
          <Badge variant={"secondary"}>Java</Badge>
          <Badge variant={"secondary"}>Objective-C</Badge>
          <Badge variant={"secondary"}>Swift</Badge>
          <Badge variant={"secondary"}>Networking</Badge>
          <Badge variant={"secondary"}>Automation</Badge>
          <Badge variant={"secondary"}>Website Development</Badge>
          <Badge variant={"secondary"}>Mobile Development</Badge>
        </div>
      </Card>
    </motion.div>
  );
};

export default TechStack;
