import { styles } from "../styles";
import { expand } from "../assets";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { Tooltip } from "./tooltip";
import { fadeIn, textVariant } from "../utils/motion";
import { motion } from "framer-motion";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant(0)}>
        <p className={styles.sectionSubText}>
          “Learning how to learn is life's most important skill.”
          <span className="italic"> – Tony Buzan</span>
        </p>
        <h2 className={styles.sectionHeadText}>My Skills</h2>
      </motion.div>
      <motion.div
        variants={fadeIn("", "", 0.35, 0.5)}
        className=" mt-5 xl:mt-10 text-light-grey text-[12px] md:text-[16px] leading-[20px] md:leading-[30px]  w-full flex flex-col"
      >
        <div>
          <p>
            These are some of the various technologies that I possess in my
            arsenal. These cater to diverse fields and have allowed me to
            express myself better as a designer. I have always found out that a
            problem requiring an unknown software is the best way to learn it.
          </p>
          <p className="mt-2 xl:mt-7">
            Hence, this coupled with an extreme interest in learning new
            softwares has enabled me to keep expanding this arsenal of mine.
          </p>
        </div>
        <div className="mt-10 flex flex-row max-w-4xl flex-wrap justify-start gap-10">
          {technologies.map((technology) => (
            <div className="mt-6">
              <Tooltip text={technology.name}>
                <div
                  className="h-20 w-20 md:h-28 md:w-28 p-[1px] justify-center items-center bg-orange rounded"
                  key={technology.name}
                >
                  <div className="h-full w-full m-2 p-3 bg-white outline outline-orange outline-1 rounded">
                    <img
                      src={technology.icon}
                      alt={`${technology.name} - logo`}
                      className="w-full h-full"
                    />
                  </div>
                </div>
              </Tooltip>{" "}
            </div>
          ))}
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

export default SectionWrapper(Tech, "");
