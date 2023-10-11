import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { certifications } from "../constants";
import { expand } from "../assets";

const CertificationCard = ({
  index,
  credentialid,
  certification,
  company,
  issued,
  image,
  credentialurl,
}) => (
  <div className="bg-black-100 outline outline-orange outline-1 p-4 md:p-5 rounded-3xl xs:w-[320px] w-full">
    <div className="mt-1 flex flex-col justify-between">
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center">
        <img
          src={image}
          alt={`${certification}-image`}
          className=" w-16 md:w-24 h-16 md:h-24 rounded-full object-cover"
        />
        <p className="md:ml-3 md:mt-0 mt-2 text-white tracking-wider text-center md:text-right text-[16px] md:text-[14px]">
          {certification}
        </p>
      </div>

      <div className="h-[1px] mt-3 w-full bg-orange hidden md:flex">&nbsp;</div>

      <div className="mt-3 flex flex-col md:flex-row justify-center md:justify-between items-center md:items-between">
        <div className="flex md:flex-col flex-row">
          <p className="text-light-grey text-[12px]">Issued By </p>
          <p className="text-white  md:font-bold text-[12px] md:text-[16px] ml-1 md:ml-0">
            {company}
          </p>
        </div>
        <div className="flex flex-col items-center md:items-right ">
          <p className="text-white text-[14px]">{issued}</p>
          <a className="mt-4 md:mt-0" href={`${credentialurl}`} target="_blank">
            <p className="text-orange font-light text-[12px]">{credentialid}</p>
          </a>
        </div>
      </div>
    </div>
  </div>
);

const Certifications = () => {
  return (
    <>
      <div className="bg-tertiary rounded-[20px]">
        <div
          className={`${styles.padding} bg-secondary rounded-2xl min-h-[250px] md:min-h-[300px]`}
        >
          <motion.div variants={textVariant(0)}>
            <p className={styles.sectionSubText}>
              "Try to learn something about everything and everything about
              something." <span className="italic"> – Thomas Huxley</span>
            </p>
            <h2 className={styles.sectionHeadText}>Certifications</h2>
          </motion.div>
        </div>

        <motion.div
          variants={fadeIn("", "spring", 0.35, 0.5)}
          className={`${styles.paddingX} -mt-12 md:-mt-20 pb-14 flex flex-wrap justify-center gap-7`}
        >
          {certifications.map((certification, index) => (
            <CertificationCard
              key={certification.name}
              index={index}
              {...certification}
            />
          ))}
        </motion.div>
      </div>
      <div className=" flex w-full mt-10 xl:hidden justify-between items-center">
        <div className="w-full bg-orange h-[2px]">&nbsp;</div>
        <img className="w-[24px] h-[24px]" src={expand} />
        <div className="w-full bg-orange h-[2px]">&nbsp;</div>
      </div>
    </>
  );
};

export default SectionWrapper(Certifications, "certifications");
