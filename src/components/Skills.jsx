import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    "React.js",
    "Spring Boot",
    "ASP.NET Core",
    "REST APIs",
    "SQL",
    "PostgreSQL",
    "Firebase",
    "Git"
  ];

  return (
    <section className="py-20 px-6 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-12 text-blue-700">
        Technical Skills
      </h2>

      <div className="flex flex-wrap justify-center gap-10 max-w-5xl mx-auto">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
            viewport={{ once: true }}
            className="w-32 h-32 flex items-center justify-center 
                       rounded-full bg-white shadow-lg 
                       text-blue-600 font-semibold text-center
                       hover:shadow-2xl cursor-pointer transition"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;