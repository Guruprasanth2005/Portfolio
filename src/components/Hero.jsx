import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-6">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold text-blue-700"
      >
        Hi, I'm Guru Prasanth
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-4 max-w-xl text-gray-700"
      >
      Software Engineer | Full Stack Engineer | React | Spring Boot | ASP.NET Core
      </motion.p>
    </section>
  );
};

export default Hero;