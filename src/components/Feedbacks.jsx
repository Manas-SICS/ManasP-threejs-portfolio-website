import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { certifications } from "../constants";

const FeedbackCard = ({
  index,
  credentialid,
  certification,
  company,
  issued,
  image,
  credentialurl,
}) => (
  <div className="bg-black-100 outline outline-orange outline-1 p-5 rounded-3xl xs:w-[320px] w-full">
    <div className="mt-1 flex flex-col justify-between">
      <div className="flex flex-grow justify-between items-center">
        <img
          src={image}
          alt={`${certification}-image`}
          className="w-24 h-24 rounded-full object-cover"
        />
        <p className="ml-3 text-white tracking-wider text-[14px]">
          {certification}
        </p>
      </div>

      <div className="mt-3 flex flex-grow justify-between items-between">
        <div className="flex flex-col">
          <p className="text-light-grey text-[12px]">Issued By </p>
          <p className="text-white font-bold text-[16px]">{company}</p>
        </div>
        <div className="flex flex-col">
          <p className="text-white text-[14px]">{issued}</p>
          <a href={`${credentialurl}`} target="_blank">
            <p className="text-orange font-light text-[12px]">{credentialid}</p>
          </a>
        </div>
      </div>
    </div>
  </div>
);

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-200 rounded-[20px]">
      <div
        className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}
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
        className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}
      >
        {certifications.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "certifications");
