import { motion } from "framer-motion";
import React from "react";
import { expand } from "../assets";

import { styles } from "../styles";
import { slideIn, textVariant } from "../utils/motion";

import { SectionWrapper } from "../hoc";

import { profileimg, medium, linkedin } from "../assets";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant(0.0)}>
        <p className={styles.sectionSubText}>
          “People are not your most important asset. The right people are.”
          <span className="italic"> – Jim Collins</span>
        </p>
        <h2 className={styles.sectionHeadText}>About Me</h2>
      </motion.div>
      <div className="mt-5 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden items-center">
        <motion.div variants={slideIn("left", "tween", 0.35, 0.5)}>
          <p className="text-light-grey text-[12px] md:text-[16px]  w-full xl:max-w-3xl leading-[20px] md:leading-[30px]">
            I am an Interaction Designer specialising in{" "}
            <strong>UI and System Design.</strong> With a wide range of software
            capability ranging from Photoshop to Figma to After Effects and
            even, the Google Docs Editors suite, I have the ability to{" "}
            <strong>fit into multifunctional teams with ease.</strong>
          </p>
          <p className="mt-4 text-light-grey text-[12px] md:text-[16px] w-full xl:max-w-3xl leading-[20px] md:leading-[30px] hidden md:block">
            As an afficianado of technical processes, I can also dabble a bit
            into development. I have a decent understanding of{" "}
            <strong>
              HTML, CSS, JS, ReactJS and have also started to play around with
              the world of Python.
            </strong>
          </p>
          <p className="mt-4 text-light-grey text-[12px] md:text-[16px] w-full xl:max-w-3xl leading-[20px] md:leading-[30px] hidden md:block">
            I am quite <strong>proficient in the English Language</strong> and
            hold an A grade in CAIE A level English. Writing, in fact, is one of
            my favourite hobbies. My writings pertaining to design are available{" "}
            <strong>on my blog on Medium.</strong> You can check it out by
            visiting the link below.
          </p>
          <p className="mt-4 text-light-grey text-[12px] md:text-[16px] w-full xl:max-w-3xl leading-[20px] md:leading-[30px]">
            <strong>
              I love to deep dive into processes and improve systems
            </strong>
            . I am constantly on the look out for environments that are
            challenging and thus, pathways for learning and growth.
          </p>
        </motion.div>
        <motion.div variants={slideIn("right", "tween", 0.35, 0.5)}>
          <img
            className="rounded-full mt-5 xl:mt-0 xl:w-[400px] w-[200px] object-cover"
            src={profileimg}
            alt="Profile Photo"
          />
        </motion.div>
      </div>
      <motion.div variants={textVariant(0.8)}>
        <p className=" mt-5 xl:mt-10 font-bold text-orange text-[14px] md:text-[16px] max-w-3xl leading-[20px] md:leading-[30px]">
          If you feel like that is something that you are looking for,{" "}
          <br className="hidden md:block" />
          you can connect with me over Linkedin.
        </p>

        <div className=" mt-5 xl:mt-10  flex gap-5">
          <a
            href="https://medium.com/@manas.prabhutendolkar"
            target="_blank"
            className=" bg-tertiary outline-none overflow-y-hidden h-[50px] w-fit text-white flex font-bold shadow-md shadow-primary rounded-[10px]"
          >
            <img
              src={medium}
              alt="Blog-on-Medium"
              className="w-[150px] object-cover"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/manas-prabhutendolkar-5a6671150/"
            target="_blank"
            className="bg-tertiary outline-none overflow-y-hidden h-[50px] w-fit text-white flex font-bold shadow-md shadow-primary rounded-[10px]"
          >
            <img
              src={linkedin}
              alt="LinkedIn-Profile"
              className="w-[150px] object-cover"
            />
          </a>
        </div>
      </motion.div>
      <div className=" flex w-full mt-10 xl:hidden justify-between items-center">
        <div className="w-full bg-orange h-[2px]">&nbsp;</div>
        <img className="w-[24px] h-[24px]" src={expand} />
        <div className="w-full bg-orange h-[2px]">&nbsp;</div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
