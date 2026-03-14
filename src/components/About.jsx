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
        Welcome to my portfolio! I’m Varun Gupta, a Full Stack Developer with 3.5+ years of experience building scalable, high-performance web applications and backend services. My core expertise lies in React.js, Next.js, JavaScript, TypeScript, Java, Spring Boot, MySQL, and PostgreSQL, and I enjoy working across the full development lifecycle—from designing intuitive user interfaces to developing robust APIs and backend systems. I am passionate about creating products that are not only technically strong but also practical, user-friendly, and impactful.
        <br />
        <br />
        Over the course of my career, I have worked on enterprise and fintech-focused applications where performance, reliability, and maintainability are critical. I have built responsive dashboards, role-based configuration platforms, and automation-driven workflows that improved usability, reduced manual effort, and supported large-scale operations. My work has involved optimizing load times, integrating REST APIs, improving frontend architecture, and contributing to CI/CD pipelines and testing practices to ensure smoother releases and better product stability.        <br />
        <br />
        I bring a strong focus on continuous learning, ownership, and delivering measurable outcomes, whether it is improving user experience, accelerating development, or building systems that scale with business needs.
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
