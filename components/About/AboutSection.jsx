"use client"

import { motion } from 'framer-motion'
import React from 'react'
import { Card } from '../ui/card'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'


const AboutSection = () => {
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
              About Me
            </h1>
          </div>
          <div className="flex flex-row gap-3 justify-center items-center">
            <div className="flex flex-row  rounded-full justify-center items-center gap-2">
              <Button size="sm">
                More
                <ArrowRight
                  size={15}
                  className="ml-1 text-secondary-foreground/50"
                />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col pt-2 gap-5">
        <p className="text-secondary-foreground/70 text-lg lg:text-2xl pt-4">
          At the end of 2022, I quit my job as a software engineer to go
          fulltime into building and scaling my own SaaS businesses. In
          the past, I pursued a double degree in computer science and
          business, interned at big tech companies in Silicon Valley, and
          competed in over 21 hackathons for fun. I also had the pleasure
          of being a part of the first ever in-person cohort of buildspace
          called buildspace sf1.
        </p>
        <p className="text-secondary-foreground/70 text-lg lg:text-2xl pt-4">
          AI Developer working in Big Tech in setting up and training AI
          Model. Also NFT expert and Web3 Developer, Full - Stack Software
          Engineer with 8 years of experience. Expertise in Python, Java,
          Objective-C, Swift. Specialization in Networking, Automation,
          Website Development, Mobile Development
        </p>
      </div>
    </Card>
  </motion.div>
  )
}

export default AboutSection