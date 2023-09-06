import React from "react";
import { motion } from "framer-motion";
import { AiFillIeCircle} from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";
import { FaReact } from "react-icons/fa";

const Services = () => {
  const animations = {
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1,
    },
    one: {
      opacity: 0,
      x: "-100%",
    },
    twoAndThree: {
      opacity: 0,
      y: "-100%",
    },

    four: {
      opacity: 0,
      x: "100%",
    },
  };

  return (
    <div id="services">
      <h2>Work Experience</h2>
      <section>
        <motion.div
          className="serviceBox1"
          whileInView={animations.whileInView}
          initial={animations.one}
        >
          <p>Experience in JAVA,<br /> JS, React, nextJS<br />MongoDB, Express <br />Node JS</p>
        </motion.div>

        <motion.div
          className="serviceBox2"
          whileInView={animations.whileInView}
          initial={animations.twoAndThree}
        >
          <AiFillIeCircle />
          <span>Web Development</span>
        </motion.div>

        <motion.div
          className="serviceBox3"
          whileInView={animations.whileInView}
          initial={animations.twoAndThree}
          transition={{
            delay: 0.2,
          }}
        >
          <FaReact />
          <span>React JS</span>
        </motion.div>


        <motion.div
          className="serviceBox4"
          whileInView={animations.whileInView}
          initial={animations.four}
        >
          <SiLeetcode />
          <span>LeetCode Problem Solving</span>
        </motion.div>

      </section>
    </div>
  );
};

export default Services;
