import { assets, testimonialsData } from "../assets/assets"
import { motion } from "motion/react";

const Testimonials = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      id="Testimonials"
      className="min-h-screen container mx-auto py-10 lg:px-32 my-20 w-full overflow-hidden"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Customer&nbsp;
        <span className="underline underline-offset-4 decoration-1 under font-light">Testimonials</span>
      </h1>
      <p className="text-gray-500 max-w-80 text-center mb-8 capitalize mx-auto">
        Discover our clients' journeys from house hunting to home ownership
      </p>

      <div className="flex flex-wrap justify-center gap-8">
        {testimonialsData.map((testimony, index) => (
          <div
            key={index}
            className="max-w-[340px] border border-gray-200 shadow-lg rounded px-8 py-12 text-center"
          >
            <img src={testimony.image} alt={testimony.alt} className="w-20 h-20 rounded-full mx-auto mb-4" />
            <h2 className="text-xl text-gray-700 font-medium">{testimony.name}</h2>
            <p className="text-gray-500 mb-4 text-sm">{testimony.title}</p>
            <div className="flex justify-center gap-1 mb-4 text-yellow-500">
              {Array.from({ length: testimony.rating }, (item, index) => (
                <img key={index} src={assets.star_icon} alt="Rating stars" />
              ))}
            </div>
            <p className="text-gray-600">{testimony.text}</p>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default Testimonials
