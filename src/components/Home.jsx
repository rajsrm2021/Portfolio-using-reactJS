import React, { useRef } from "react";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import me from "../assets/bg1.png";

const Home = () => {
  const clientCount = useRef(null);
  const projectCount = useRef(null);

  const animationClientsCount = () => {
    animate(0, 150, {
      duration: 3,
      onUpdate: (v) => (clientCount.current.textContent = v.toFixed()),
    });
  };
  const animationProjectsCount = () => {
    animate(0, 50, {
      duration: 3,
      onUpdate: (v) => (projectCount.current.textContent = v.toFixed()),
    });
  };
  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,

      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
      transition: {
        delay: 0.2,
      },
    },
  };
  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animations.h1}>
            Hi, I Am <br /> Raj Jaiswal
          </motion.h1>

          <Typewriter
            options={{
              strings: ["A Developer", "A Passionate Programmer", "Problem Solver"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />

          <div>
            <a href="mailto:rajjaiswal2060@gmail.com">Hire Me</a>
            <a href="#work">
              Projects <BsArrowUpRight />
            </a>
          </div>

          <article>
            <p>
              +{" "}
              <motion.span
                whileInView={animationClientsCount}
                ref={clientCount}
              ></motion.span>
            </p>
            <span>LeetCode Questions Solved</span>
          </article>

          <aside>
            <article>
              <p>
                +
                <motion.span
                  ref={projectCount}
                  whileInView={animationProjectsCount}
                >
                  500
                </motion.span>
              </p>
              <span>Projects Made</span>
            </article>

            <article data-special>
              <p>Contact</p>
              <span>rajjaiswal2060@gmail.com</span>
            </article>
          </aside>
        </div>
      </section>
      <section>
        <img src={me} alt="Raj" />
      </section>
      <BsChevronDown />
    </div>
  );
};

export default Home;
