import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_8ua0aor",
        "template_a3fr2ra",
        {
          from_name: form.name,
          to_name: "Manas Prabhutendolkar",
          from_email: form.email,
          to_email: "manasmanast24@gmail.com",
          message: form.message,
        },
        "6cTDKvrvBTXQQ_tWk"
      )
      .then(
        () => {
          setLoading(false);
          alert(
            "Thank you for your email. I shall get back to you as soon as possible."
          );

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);

          alert("Something went wrong. Try again.");
        }
      );
  };

  return (
    <div className="xl:mt-12 mt-5 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.05, 0.5)}
        className="flex-[0.75] bg-tertiary  outline-orange  p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h2 className={styles.sectionHeadText}>Contact</h2>

        <form
          className="mt-12 flex flex-col gap-8"
          ref={formRef}
          onSubmit={handleSubmit}
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-secondary py-4 px-6 placeholder:text-light-grey/[0.6] text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-secondary py-4 px-6 placeholder:text-light-grey/[0.6] text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-secondary py-4 px-6 placeholder:text-light-grey/[0.6] text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-orange hover:bg-secondary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.05, 0.5)}
        className="xl:flex-1 xl:h-auto hidden sm:flex md:h-[550px] h-[350px] "
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
