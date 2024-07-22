"use client";

import { motion, useScroll } from "framer-motion";
import React, { useRef } from "react";
import { MagicCard } from "../ui/magicCard";
import { useTheme } from "next-themes";
import { Card } from "../ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import Link from "next/link";
import { CirclePlus, Copy, Instagram, Linkedin, Twitter } from "lucide-react";
import { ConfettiButton } from "../ui/animation";
import { AnimatedSubscribeButton } from "../ui/subscribedBtn";
import BlurIn from "../ui/blurin";
import { Button } from "../ui/button";
import { useStore } from "@/store/NavStore";

const SingleProjectPage = () => {
  5;

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
      className="w-full"
      ref={ref}
    >
      <MagicCard
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        className="w-full rounded-xl  flex  flex-col justify-between items-center"
      >
        <div className="lg:p-5 p-2">
          <Card className="p-5 bg-secondary-foreground/5 flex flex-row gap-10 justify-start items-center">
            <div className="space-y-2 lg:text-lg text-base">
              <p className="text-secondary-foreground/60">Client</p>
              <p className="text-secondary-foreground/60">Company</p>
              <p className="text-secondary-foreground/60">Project Type</p>
              <p className="text-secondary-foreground/60">Year</p>
            </div>
            <div className="space-y-2 lg:text-lg text-base">
              <p>Nur Praditya</p>
              <p>Morva labs</p>
              <p>Visual design, Branding</p>
              <p>2023</p>
            </div>
          </Card>
        </div>
        <div className="p-4 lg:p-8 flex flex-col gap-5">
          <img
            className="size-20"
            src="https://framerusercontent.com/images/11rNeoQ4cbIflUKMKRcTruAT4.svg"
          />
          <h1 className="lg:text-6xl text-xl font-bold">Morva Labs</h1>
          <p className="lg:text-xl text-base text-secondary-foreground/60">
            Enhance your company's workforce management with a cutting-edge
            website. Enjoy seamless user experience, efficient employee
            management, and a competitive edge.
          </p>
          <img
            src="https://framerusercontent.com/images/sG7Sc4AiEVMDeTC25LUJZLLrVFM.png"
            alt=""
          />
          <p className="lg:text-xl text-base text-secondary-foreground/60">
            A business owner enlisted my expertise as a product designer to
            develop a website that would boost their brand awareness and
            conversions. Crafting a modern, professional website, my priority
            was to set them apart from competitors and attract new customers.
          </p>
          <img
            src="https://framerusercontent.com/images/5UvpW5dlDn4j8MR0qGg0FJKToMQ.png"
            alt=""
          />
          <p className="lg:text-xl text-base text-secondary-foreground/60">
            To tackle this endeavor, our approach revolved around shaping a
            unique brand identity that adeptly conveyed Rectangle's fundamental
            principles of sustainability, innovation, and authenticity. Our team
            devoted meticulous attention to crafting an all-encompassing brand
            strategy, encompassing both product design and website development,
            geared towards establishing a visually captivating and unforgettable
            brand persona, distinguishing Rectangle amidst its competition.
          </p>
        </div>
        <div className="p-4 lg:p-8 flex flex-col gap-5">
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
        </div>
      </MagicCard>
    </motion.div>
  );
};

export default SingleProjectPage;
