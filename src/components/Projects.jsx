import { useEffect, useState } from "react"
import { assets, projectsData } from "../assets/assets"
import { motion } from "motion/react";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(projectsData.length);
      } else {
        setCardsToShow(1);
      }
    }
    updateCardsToShow();

    window.addEventListener('resize', updateCardsToShow);
    return () =>
      window.removeEventListener('resize', updateCardsToShow);
  }, []);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projectsData.length);
  };

  const previousProject = () => {
    setCurrentIndex((prev) => prev === 0 ? projectsData.length - 1 : prev - 1);
  };

  return (
    <motion.div id="Projects"
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="min-h-screen container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Projects&nbsp;
        <span className="underline underline-offset-4 decoration-1 under font-light">Completed</span>
      </h1>
      <p className="text-gray-500 max-w-80 text-center mb-8 capitalize mx-auto">Crafting Spaces, Providing Solutions-Explore Our Portfolio</p>
      {/* Slider buttons */}
      <div className="flex justify-end items-center mb-8">
        <button
          type="button"
          aria-label="Previous project"
          className="p-3 bg-gray-200 rounded mr-2"
          onClick={previousProject}
        >
          <img
            src={assets.left_arrow}
            alt="Previous"
          />
        </button>
        <button
          onClick={nextProject}
          type="button"
          aria-label="Next project"
          className="p-3 bg-gray-200 rounded mr-2"
        >
          <img
            src={assets.right_arrow}
            alt="Next"
          />
        </button>
      </div>
      {/* Project slider container */}
      <div className="overflow-hidden">
        <div className="flex gap-8 transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)` }}
        >
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-full sm:w-1/4"
            >
              <img src={project.image} alt={project.title} className="w-full h-auto mb-14" />
              <div className="absolute left-0 right-0 bottom-5 flex justify-center">
                <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md">
                  <h2 className="text-xl font-semibold text-gray-800">{project.title}</h2>
                  <p className="text-gray-500 text-sm">
                    {project.price}&nbsp;|&nbsp;{project.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default Projects
