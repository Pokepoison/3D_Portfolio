import React from "react";
import { Tilt } from "react-tilt";
// import Tilt from 'react-tilt/src/ReactTilt'; // Replace with the actual path

import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt={title}
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a skilled software developer with experience in JavaScript,
        and expertise in frameworks like React, Node.js, Handlebars.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        make creative, efficient, and user-friendly websites that solve
        real-world problems. Let's work together to bring your ideas to life!
        <br>
        </br>
        <br>
        </br>
        <h3 className={`${styles.heroHeadText}
           text-white`}>My => <span className="text-[#915eff]"><a href="https://docs.google.com/document/d/1AdRTN0U2sh2zBBdRXr_e8k2_Lioio3qpeIMKlHiviGE/edit" target="_blank">Resume</a></span></h3>
         

      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");