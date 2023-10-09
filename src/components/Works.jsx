import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link_a,
  source_code_link_a_img,
  source_code_link_b,
  source_code_link_b_img,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="flex flex-col"
    >
      <Tilt
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

            <div className="absolute inset-0 flex gap-2 justify-end m-3 card-img_hover">
              <div
                onClick={() => window.open(source_code_link_a, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={source_code_link_a_img}
                  alt="project-link"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
              {source_code_link_b && (
                <div
                  onClick={() => window.open(source_code_link_b, "_blank")}
                  className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                >
                  <img
                    src={source_code_link_b_img}
                    alt="project-link"
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              )}
            </div>
          </div>
          <div className="mt-5">
            <h3 className="text-orange font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-light-grey tex-[14px]">{description}</p>
          </div>
          <div className="mt-5">
            <p className="text-[12px] text-light-grey underline underline-offset-[3px] decoration-orange">
              Click on the icons at the top right of the card to view the full
              project.
            </p>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-left text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          “You are not your resume, you are your work.”{" "}
          <span className="italic"> — Seth Godin</span>
        </p>
        <h2 className={styles.sectionHeadText}>My Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-light-grey text-[16px] max-w-3xl leading-[30px]"
        >
          <p>
            Throughout my college life, I have done{" "}
            <strong>various projects</strong> through college courses,
            internships and a few one-off freelance opportunities. These
            projects have ranged from the fields of{" "}
            <strong>
              Graphic Design, Video Editing, Content Writing, and, obviously,
              Interaction Design.
            </strong>
          </p>
          <p className="mt-7">
            While I have done a lot of design work in the past four years of
            college, these are the <strong>few projects</strong> (which aren't
            protected under NDAs) that I wish to <strong>highlight.</strong>{" "}
            They showcase <strong>my core skills</strong> and also, the fields
            that I am fascinated by. Thus, they also showcase the{" "}
            <strong>different kinds of work that I wish to undertake.</strong>
          </p>
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7 items-stretch">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
            className="flex-1"
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
