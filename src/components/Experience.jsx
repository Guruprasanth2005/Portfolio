import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section className="py-20 px-6 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-12 text-blue-700">
        Internship Experience
      </h2>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.02 }}
        className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition text-left"
      >
        <h3 className="text-2xl font-semibold text-blue-600 mb-2">
          Software Engineer Intern
        </h3>

        <p className="text-gray-500 mb-6">
          VolcanMind Tech Solutions | Dec 2025
        </p>

        <ul className="list-disc pl-6 space-y-4 text-gray-700 leading-relaxed">
          <li>
            Developed and tested RESTful APIs using Spring Boot following
            MVC architecture and industry best practices.
          </li>
          <li>
            Integrated PostgreSQL database and implemented secure
            CRUD operations with validation and exception handling.
          </li>
          <li>
            Optimized backend performance by debugging API response time
            and resolving data consistency issues.
          </li>
          <li>
            Collaborated with frontend developers to ensure seamless API
            integration and improved overall user experience.
          </li>
        </ul>
      </motion.div>
    </section>
  );
};

export default Experience;