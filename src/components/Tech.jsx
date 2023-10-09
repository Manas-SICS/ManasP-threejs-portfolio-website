import { BallCanvas } from "./canvas";
import { styles } from "../styles";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { Tooltip } from "./tooltip";
import { fadeIn, textVariant } from "../utils/motion";
import { motion } from "framer-motion";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant(0.25)}>
        <p className={styles.sectionSubText}>
          “Learning how to learn is life's most important skill.”
          <span className="italic"> – Tony Buzan</span>
        </p>
        <h2 className={styles.sectionHeadText}>My Skills</h2>
      </motion.div>
      <motion.div
        variants={fadeIn("", "", 0.75, 1)}
        className="mt-10 text-light-grey text-[21px]  w-full flex flex-col leading-[30px]"
      >
        <div>
          <p>
            These are some of the various technologies that I possess in my
            arsenal. These cater to diverse fields and have allowed me to
            express myself better as a designer. I have always found out that a
            problem requiring an unknown software is the best way to learn it.
          </p>
          <p className="mt-7">
            Hence, this coupled with an extreme interest in learning new
            softwares has enabled me to keep expanding this arsenal of mine.
          </p>
        </div>
        <div className="mt-10 flex flex-row flex-wrap justify-start gap-10">
          {technologies.map((technology) => (
            <Tooltip text={technology.name}>
              <div className="w-28 h-28" key={technology.name}>
                <BallCanvas icon={technology.icon} />
              </div>
            </Tooltip>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Tech, "");
