import { motion } from "framer-motion";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-12 text-blue-700">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.03 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-md hover:shadow-2xl transition"
          >
            <h3 className="text-2xl font-semibold text-blue-600 mb-2">
              {project.title}
            </h3>

            <p className="text-sm text-blue-500 font-medium mb-4">
              {project.tech}
            </p>

            <p className="text-gray-700 leading-relaxed">
              {project.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;