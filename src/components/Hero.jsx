import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets"; // Import GitHub icon

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto bg-hero-pattern bg-cover bg-no-repeat">
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent">
        <div
          className={`max-w-7xl mx-auto ${styles.paddingX} flex flex-col items-start justify-center h-full gap-5`}
        >
          {/* Vertical line with dot */}
          <div className="flex items-start gap-5">
            <div className="flex flex-col justify-center items-center mt-5">
              <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
              <div className="w-1 sm:h-80 h-40 violet-gradient" />
            </div>

            <div className="flex flex-col gap-5">
              {/* Main heading */}
              <h1 className={`${styles.heroHeadText} text-white`}>
                Hi, I'm <span className="text-[#915EFF]">Sarthak</span>
              </h1>

              {/* Description with emoji */}
              <div className="text-white text-[20px] sm:text-[24px] leading-relaxed max-w-3xl">
                <p>
                  A Full Stack Engineer 💻 crafting scalable, secure 🔒, and
                  efficient applications ⚙️
                </p>
                <p className="mt-2">
                  with expertise in AI/ML and Flutter development 🚀
                </p>
              </div>

              {/* Action buttons and social icons */}
              <div className="flex flex-wrap items-center gap-5 mt-8">
                {/* Resume button with border */}
                <a
                  href="https://drive.google.com/file/d/128rgWjrtlxhuNqg_Co3kupWmlrENQQnZ/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#915EFF] hover:bg-[#7d4de0] text-white font-medium py-3 px-8 rounded-full text-lg border-2 border-white/30 hover:border-white/80 transition-all duration-300"
                >
                  Resume
                </a>

                {/* Social Media Icons */}
                <div className="flex gap-4">
                  <a
                    href="https://github.com/SarthakRathi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-tertiary hover:bg-gray-700 p-3 rounded-full transition-all flex items-center justify-center"
                  >
                    <img
                      src={github}
                      alt="GitHub"
                      className="w-6 h-6 object-contain"
                    />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/sarthakrathi27/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-tertiary hover:bg-gray-700 p-3 rounded-full transition-all flex items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="#fff"
                      className="w-6 h-6"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
