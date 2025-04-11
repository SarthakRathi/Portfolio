import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { education } from "../constants";

const EducationCard = ({
  index,
  degree,
  institution,
  date,
  percentage,
  logo,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
  >
    <p className="text-white font-black text-[48px]">"</p>

    <div className="mt-1">
      <div className="flex flex-col">
        <h3 className="text-white text-[24px] font-bold">{institution}</h3>
      </div>

      <div className="mt-5 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-medium text-[16px]">
            <span className="blue-text-gradient">@</span> {degree}
          </p>
          <p className="mt-1 text-secondary text-[14px]">{percentage}</p>
        </div>

        {logo && (
          <img
            src={logo}
            alt={`${institution}-logo`}
            className="w-16 h-16 rounded-full object-contain"
          />
        )}
      </div>
    </div>
  </motion.div>
);

const Education = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My academic background</p>
          <h2 className={styles.sectionHeadText}>Education.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {education.map((edu, index) => (
          <EducationCard key={edu.institution} index={index} {...edu} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Education, "education");
