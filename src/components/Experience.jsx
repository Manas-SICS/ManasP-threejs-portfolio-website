import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { experiences } from "../constants";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { expand, close } from "../assets";
import { useState } from "react";

const ExperienceCard = ({ experience }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <VerticalTimelineElement
        contentStyle={{ background: "#232323", color: "#F57C3E" }}
        contentArrowStyle={{ borderRight: "7px solid #232323" }}
        date={experience.date}
        iconStyle={{ background: experience.iconBg }}
        icon={
          <div className="flex justify-center items-center  w-full h-full">
            <img
              src={experience.icon}
              alt={experience.company_mame}
              className="w-[80%] h-[80%] rounded-full overflow-hidden object-contain"
            />
          </div>
        }
      >
        <div className="flex justify-between">
          <div>
            <h3 className="text-white w-3/4 text-[18px] md:text-[24px] font-bold">
              {experience.title}
            </h3>
            <p className="mt-2 text-orange text-[16px] font-semibold">
              {experience.company_name}
            </p>
          </div>
          <div className="w-1/4 flex justify-end">
            <img
              className="h-6 w-6 p-1 rounded-full md:hidden outline outline-[1px] outline-white"
              src={toggle ? close : expand}
              onClick={() => setToggle(!toggle)}
            />
          </div>
        </div>

        <ul
          className={` ${
            !toggle ? "hidden" : "flex flex-col"
          } md:flex md:flex-col mt-5 list-disc ml-5 space-y-2`}
        >
          {experience.points.map((point, index) => (
            <li
              key={`experience.point-${index}`}
              className="text-light-grey font-light text-[12px] md:text-[14px] pl-1 tracking-wider"
            >
              {point}
            </li>
          ))}
        </ul>
      </VerticalTimelineElement>{" "}
    </>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant(0)}>
        <p className={styles.sectionSubText}>
          “The only way to enjoy anything in this life is to earn it first.”
          <span className="italic"> – Ginger Rogers </span>
        </p>
        <h2 className={styles.sectionHeadText}>Education & Experience</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.25, 0.5)}
        className="mt-10 flex flex-col "
      >
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </motion.div>
      <div className=" flex w-full mt-10 xl:hidden justify-between items-center">
        <div className="w-full bg-orange h-[2px]">&nbsp;</div>
        <img className="w-[24px] h-[24px]" src={expand} />
        <div className="w-full bg-orange h-[2px]">&nbsp;</div>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "experience");
