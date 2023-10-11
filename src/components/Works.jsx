import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { expand } from "../assets";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { useState, useEffect } from "react";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link_a,
  source_code_link_a_img,
  source_title_a,
  source_code_link_b,
  source_code_link_b_img,
  source_title_b,
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width : 500px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  return (
    <div className="flex flex-col">
      <Tilt
        tiltEnable={isMobile ? false : true}
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full flex-1 flex flex-col justify-between"
      >
        <div>
          <div className="relative w-full h-[230px]">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          <div className="mt-3 md:mt-5">
            <h3 className="text-orange font-bold text-[21px] md:text-[24px]">
              {name}
            </h3>
            <p className="mt-2 text-light-grey text-[12px] md:text-[14px]">
              {description}
            </p>
          </div>
          <div className="flex flex-col gap-2 justify-start mt-5">
            <div
              onClick={() => window.open(source_code_link_a, "_blank")}
              className="bg-secondary hover:bg-orange w-fit pl-3 md:pl-5 pr-5 h-8 md:h-10  text-[12px] md:text-[14px] rounded-full flex items-center cursor-pointer"
            >
              <img
                src={source_code_link_a_img}
                alt="project-link"
                className="w-1/2 h-1/2 mr-3 object-contain"
              />{" "}
              {source_title_a}
            </div>
            {source_code_link_b && (
              <div
                onClick={() => window.open(source_code_link_b, "_blank")}
                className="bg-secondary hover:bg-orange w-fit pl-3 md:pl-5 pr-5 h-8 md:h-10  text-[12px] md:text-[14px] rounded-full flex items-center cursor-pointer"
              >
                <img
                  src={source_code_link_b_img}
                  alt="project-link"
                  className="w-1/2 h-1/2 mr-3 object-contain"
                />{" "}
                {source_title_b}
              </div>
            )}
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={tag.name}
              className={`text-left text-[12px] md:text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant(0)}>
        <p className={styles.sectionSubText}>
          “You are not your resumé, you are your work.”{" "}
          <span className="italic"> — Seth Godin</span>
        </p>
        <h2 className={styles.sectionHeadText}>My Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.35, 0.5)}
          className="mt-3 text-light-grey text-[16px] max-w-3xl leading-[30px]"
        >
          <p className="mt-5 text-[12px] md:text-[16px] leading-[20px] md:leading-[30px] hidden md:block">
            Throughout my college life, I have done{" "}
            <strong>various projects</strong> through college courses,
            internships and a few one-off freelance opportunities. These
            projects have ranged from the fields of{" "}
            <strong>
              Graphic Design, Video Editing, Content Writing, and, obviously,
              Interaction Design.
            </strong>
          </p>
          <p className="mt-4 text-[12px] md:text-[16px] leading-[20px] md:leading-[30px]">
            While I have done a lot of design work in the past four years of
            college, these are the <strong>few projects</strong> (which aren't
            protected under NDAs) that I wish to <strong>highlight.</strong>{" "}
            They showcase <strong>my core skills</strong> and also, the fields
            that I am fascinated by. Thus, they also showcase the{" "}
            <strong>different kinds of work that I wish to undertake.</strong>
          </p>
        </motion.p>
      </div>

      <motion.div
        variants={fadeIn("", "", 0.6, 0.5)}
        className="mt-10 flex flex-wrap gap-7 items-stretch"
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
            className="flex-1"
          />
        ))}
      </motion.div>
      <div className=" flex w-full mt-10 xl:hidden justify-between items-center">
        <div className="w-full bg-orange h-[2px]">&nbsp;</div>
        <img className="w-[24px] h-[24px]" src={expand} />
        <div className="w-full bg-orange h-[2px]">&nbsp;</div>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
