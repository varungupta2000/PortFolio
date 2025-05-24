/* eslint-disable react/no-unknown-property */
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

// eslint-disable-next-line react/prop-types
const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Welcome to my portfolio! I’m Varun Gupta, a self-taught and results-driven Software Development Engineer with over three years of experience building high-performance, scalable web applications. I specialize in front-end development with React and Next.js, complemented by hands-on backend expertise using Java, Spring Boot, and Node.js.
        <br />
        <br />
        Currently, I’m part of the engineering team at Pine Labs, where I’ve developed dashboards and configuration tools that streamline payment processes and campaign management. Before this, I led full-stack development at Avataar Skincare Technologies, enhancing web and mobile platforms with performance-optimized interfaces, dynamic booking systems, and CMS-driven content updates. My journey began at Primathon Technology Pvt. Ltd., where I delivered impactful solutions like real-time 2D modeling APIs and interactive data visualization for diverse clients.{" "}
        <br />
        <br />
        I thrive on creating seamless user experiences and love solving complex technical challenges with clean, efficient code.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
