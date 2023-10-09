import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <section className=" relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-orange" />
          <div className=" w-2 sm:h-80 h-40 orange-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-orange">Manas!</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white`}>
            An Interaction Designer
            <br />
            <span className="lg:block hidden">
              who is passionate about design <br />
              as a way of living.
            </span>
          </p>
          <p className={`${styles.heroSubText} mt-2 text-orange flex`}>
            #
            <Typewriter
              options={{
                strings: [
                  "UI Design",
                  "Front End Development",
                  "Content Writing",
                  "UX Research",
                  "Systems Design",
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                pauseFor: 1000,
              }}
            />
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full justify-center flex items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-[3px] border-light-grey flex justify-center items-start p-2 ">
            <motion.dev
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-light-grey mb-1 "
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
