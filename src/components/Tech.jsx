import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { technologies, skillCategories } from "../constants";
import { styles } from "../styles";

const TechCard = ({ index, name, icon }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Tilt className="xs:w-[140px] w-[120px]">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.15, 0.75)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative"
      >
        {/* Colorful border - making it more visible */}
        <div className="absolute inset-0 rounded-full green-pink-gradient" />

        {/* Content container */}
        <div className="relative bg-tertiary rounded-full py-5 px-5 flex justify-center items-center flex-col m-[2px] min-h-[140px]">
          <img
            src={icon}
            alt={name}
            className={`w-16 h-16 object-contain transition-all duration-300 ${
              isHovered ? "scale-75 mb-2" : "scale-100"
            }`}
          />

          {isHovered && (
            <div className="absolute bottom-8 left-0 right-0 text-center">
              <h3 className="text-white text-[16px] font-bold">{name}</h3>
            </div>
          )}
        </div>
      </motion.div>
    </Tilt>
  );
};

const CategorySection = ({ category, items }) => {
  return (
    <div className="mb-16">
      <h3 className="text-white text-[24px] font-bold mb-8 text-center py-2 rounded-lg shadow-md">
        {category}
      </h3>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {items.map((technology, index) => (
          <TechCard key={technology.name} index={index} {...technology} />
        ))}
      </div>
    </div>
  );
};

const Tech = () => {
  // Group technologies by category
  const groupedTechnologies = technologies.reduce((acc, tech) => {
    const category = tech.category || "Other";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(tech);
    return acc;
  }, {});

  // Order of categories to display
  const categoryOrder = [
    skillCategories.webDev,
    skillCategories.appDev,
    skillCategories.aiMl,
    skillCategories.backend,
    skillCategories.languages,
    "Tools",
    "Other",
  ];

  // Filter out categories that don't have any items
  const categoriesToShow = categoryOrder.filter(
    (category) => groupedTechnologies[category]?.length > 0
  );

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I work with</p>
        <h2 className={styles.sectionHeadText}>Skills & Technologies.</h2>
      </motion.div>

      <div className="mt-20">
        {categoriesToShow.map((category) => (
          <CategorySection
            key={category}
            category={category}
            items={groupedTechnologies[category]}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "skills");
