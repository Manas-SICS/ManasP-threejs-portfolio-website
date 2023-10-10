import { motion } from "framer-motion";
import React from "react";

import { styles } from "../styles";
import { slideIn, textVariant } from "../utils/motion";

import { SectionWrapper } from "../hoc";

import { profileimg } from "../assets";

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
          <p className="mt-4 text-light-grey text-[17px] max-w-3xl leading-[30px]">
            I am an Interaction Designer specialising in{" "}
            <strong>UI and System Design.</strong> With a wide range of software
            capability ranging from Photoshop to Figma to After Effects and
            even, the Google Docs Editors suite, I have the ability to{" "}
            <strong>fit into multifunctional teams with ease.</strong>
          </p>
          <p className="mt-4 text-light-grey text-[17px] max-w-3xl leading-[30px]">
            As an afficianado of technical processes, I can also dabble a bit
            into development. I have a decent understanding of{" "}
            <strong>
              HTML, CSS, JS, ReactJS and have also started to play around with
              the world of Python.
            </strong>
          </p>
          <p className="mt-4 text-light-grey text-[17px] max-w-3xl leading-[30px]">
            I am quite <strong>proficient in the English Language</strong> and
            hold an A grade in CAIE A level English. Writing, in fact, is one of
            my favourite hobbies. My writings pertaining to design are available{" "}
            <strong>on my blog on Medium.</strong> You can check it out by
            visiting the link below.
          </p>
          <p className="mt-4 text-light-grey text-[17px] max-w-2xl leading-[30px]">
            <strong>
              I love to deep dive into processes and improve systems
            </strong>
            . I am constantly on the look out for environments that are
            challenging and thus, pathways for learning and growth.
          </p>
        </motion.div>
        <motion.div variants={slideIn("right", "tween", 0.35, 0.5)}>
          <img
            className="rounded-full w-[400px] object-cover"
            src={profileimg}
          />
        </motion.div>
      </div>
      <motion.div variants={textVariant(0.8)}>
        <p className=" mt-10 font-bold text-orange text-[17px] max-w-3xl leading-[30px]">
          If you feel like that is something that you are looking for, <br />
          you can connect with me over LinkedIn.
        </p>

        <div className=" mt-10 flex gap-5">
          <a
            href="https://medium.com/@manas.prabhutendolkar"
            target="_blank"
            className=" bg-tertiary outline-none overflow-y-hidden h-[50px] w-fit text-white flex font-bold shadow-md shadow-primary rounded-[10px]"
          >
            <img
              src="https://miro.medium.com/v2/resize:fit:1200/1*jfdwtvU6V6g99q3G7gq7dQ.png"
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
              src="https://i0.wp.com/www.alphr.com/wp-content/uploads/2023/08/1637655738-linkedin-101-hero2x.jpg?resize=738%2C320&ssl=1"
              alt="LinkedIn-Profile"
              className="w-[150px] object-cover"
            />
          </a>
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(About, "about");
