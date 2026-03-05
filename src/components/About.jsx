import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-700">
          About Me
        </h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-6 text-gray-700 leading-relaxed"
        >
          I am a highly motivated  B.Tech Information Technology Graduate
           with strong expertise in <span className="text-blue-600 font-medium">Full Stack Engineer</span>,
          <span className="text-blue-600 font-medium"> REST API Development</span>,
          and modern web technologies. I am passionate about designing and
          building scalable, secure, and user-friendly web applications that
          solve real-world problems.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mb-6 text-gray-700 leading-relaxed"
        >
          I have hands-on experience working with 
          <span className="text-blue-600 font-medium"> React.js</span>, 
          <span className="text-blue-600 font-medium"> Spring Boot</span>, 
          <span className="text-blue-600 font-medium"> ASP.NET Core</span>, 
          <span className="text-blue-600 font-medium"> SQL</span> and
          <span className="text-blue-600 font-medium"> PostgreSQL</span>.
           
           During my internship, I developed backend services, implemented 
          CRUD operations, optimized database queries, and ensured smooth 
          API integration with frontend applications.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="text-gray-700 leading-relaxed"
        >
          I continuously focus on improving my problem-solving abilities,
          writing clean and maintainable code, and following best software
          engineering practices. My goal is to contribute to innovative
          development teams and grow as a professional Full Stack Developer
          in a challenging and dynamic environment.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default About;