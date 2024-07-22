"use client";

import React, { useRef } from "react";
import { Card } from "../ui/card";
import {
  ArrowRight,
  CheckIcon,
  ChevronRightIcon,
  CirclePlus,
  Copy,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import { Button } from "../ui/button";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import Link from "next/link";
import { TooltipContent } from "../ui/tooltip";
import { useTheme } from "next-themes";
import { MagicCard } from "../ui/magicCard";
import { ConfettiButton } from "../ui/animation";
import { motion, useScroll } from "framer-motion";
import BlurIn from "../ui/blurin";
import { AnimatedSubscribeButton } from "../ui/subscribedBtn";
import Projectitem from "../Main/Projectitem";
import { useStore } from "@/store/NavStore";

const ProjectsPage = () => {
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
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "smooth", duration: 0.7 }}
          className="p-5 flex w-full flex-row items-center justify-between gap-2"
        >
          <div className="flex flex-row gap-3 justify-center items-center">
            <div className="size-2 rounded-full bg-secondary-foreground/10"></div>
            <h1 className="text-xl lg:text-2xl font-medium text-secondary-foreground/70 ">
              Projects
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
            <h1 className="text-4xl lg:text-6xl font-semibold">My Works</h1>
          </div>

          <div className="px-5">
            <p className="text-secondary-foreground/70 text-lg lg:text-2xl pt-4">
              Discover my portfolio, where purposeful interfaces meet
              captivating design. My work strives to enhance experiences and
              inspire.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "smooth", duration: 0.7 }}
        >
          <Card className="w-full p-5 mt-10 bg-secondary-foreground/5 border-0">
            <div className=" pb-10 gap-4 relative grid grid-cols-3  w-full ">
              <Projectitem
                src="https://framerusercontent.com/images/11rNeoQ4cbIflUKMKRcTruAT4.svg"
                title="Morva Labs"
                description="Visual Desgin, Branding"
                link="/projects/morva-labs"
              />
              <Projectitem
                src="https://framerusercontent.com/images/lkLwoc5QonpfJtmxeyujVtespnI.svg"
                title="Rectangle"
                description="Product design, Icon design"
                link="/projects/rectangle"
              />
              <Projectitem
                src="https://framerusercontent.com/images/GYZJhZwKqD1jeRCg4q155yCAVM.svg"
                title="Simply"
                description="Landing page, Illustration design"
                link="/projects/simply"
              />
              <Projectitem
                src="https://framerusercontent.com/images/11rNeoQ4cbIflUKMKRcTruAT4.svg"
                title="Morva Labs"
                description="Visual Desgin, Branding"
                link="/projects/morva-labs"
              />
              <Projectitem
                src="https://framerusercontent.com/images/lkLwoc5QonpfJtmxeyujVtespnI.svg"
                title="Rectangle"
                description="Product design, Icon design"
                link="/projects/rectangle"
              />
            </div>
          </Card>
        </motion.div>

        <Card className="p-5 bg-secondary-foreground/5 border-0 mt-10">
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "smooth", duration: 0.7 }}
            className="p-5 py-10 lg:py-40 flex w-full flex-col items-center justify-center text-center gap-5"
          >
            <div className="flex flex-col gap-3">
              <BlurIn
                word="Let’s work together"
                className="text-4xl lg:text-7xl font-semibold"
              />
              <p className="text-secondary-foreground/70 text-lg lg:text-3xl">
                Creating user experience and visual appealing design
              </p>
              <div className="flex w-full items-center justify-center flex-row gap-3">
                <Button size="sm">
                  <CirclePlus
                    size={15}
                    className="mr-1 text-secondary-foreground/50"
                  />
                  Hire Me
                </Button>

                <AnimatedSubscribeButton
                  subscribeStatus={false}
                  initialText={
                    <ConfettiButton size="sm">
                      <Copy
                        size={15}
                        className="mr-1 text-secondary-foreground/50"
                      />
                      Copy Email
                    </ConfettiButton>
                  }
                  changeText={
                    <Button variant="outline" size="sm">
                      <Copy
                        size={15}
                        className="mr-1 text-secondary-foreground/50"
                      />
                      Copied
                    </Button>
                  }
                />
              </div>
            </div>
          </motion.div>
        </Card>
        {/* <motion.div
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "smooth", duration: 0.7 }}
          className="flex flex-col w-full justify-center items-center gap-5"
        >
          <Card className="w-full bg-secondary-foreground/5 border-0">
            <div className="p-5 flex w-full flex-row items-center justify-between gap-5">
              <div className="flex flex-row gap-3 justify-center items-center">
                <div className="size-2 rounded-full bg-secondary-foreground/10"></div>
                <h1 className="text-xl lg:text-2xl font-medium text-secondary-foreground/70 ">
                  Follow Me
                </h1>
              </div>
              <div className="flex flex-row gap-3 justify-center items-center">
                <TooltipProvider delayDuration={200}>
                  <Tooltip>
                    <TooltipTrigger>
                      <div
                        className={`hover:bg-secondary-foreground/10 transition-all duration-500 p-2 rounded-full`}
                      >
                        <Link
                          className="opacity-60 hover:opacity-100 transition-all duration-500"
                          href={"/"}
                        >
                          <Twitter size={25} strokeWidth={2} />
                        </Link>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Twitter</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider delayDuration={200}>
                  <Tooltip>
                    <TooltipTrigger>
                      <div
                        className={`hover:bg-secondary-foreground/10 transition-all duration-500 p-2 rounded-full`}
                      >
                        <Link
                          className="opacity-60 hover:opacity-100 transition-all duration-500"
                          href={"/"}
                        >
                          <Instagram size={25} strokeWidth={2} />
                        </Link>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Instagram</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider delayDuration={200}>
                  <Tooltip>
                    <TooltipTrigger>
                      <div
                        className={`hover:bg-secondary-foreground/10 transition-all duration-500 p-2 rounded-full`}
                      >
                        <Link
                          className="opacity-60 hover:opacity-100 transition-all duration-500"
                          href={"/"}
                        >
                          <Linkedin size={25} strokeWidth={2} />
                        </Link>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Linkedin</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </Card>
          <Card className="w-full bg-secondary-foreground/5 border-0">
            <div className="p-5 py-10 text-center flex w-full flex-col items-center justify-center gap-2">
              <p className="text-sm lg:text-base text-secondary-foreground/70">
                © 2024 Brian Do
              </p>
              <p className="text-sm lg:text-base text-secondary-foreground/70">
                Made by{" "}
                <span>
                  <a
                    className="underline text-primary hover:text-secondary-foreground/70"
                    href="/"
                  >
                    Waleed
                  </a>
                </span>
              </p>
            </div>
          </Card>
        </motion.div> */}
      </MagicCard>
    </motion.div>
  );
};

export default ProjectsPage;