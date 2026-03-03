import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-12 text-blue-700">
        Contact Me
      </h2>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        whileHover={{ scale: 1.03 }}
        viewport={{ once: true }}
        className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition"
      >
        {/* Email */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="text-2xl">📧</span>
          <a
            href="mailto:guruprasanth.karthi@gmail.com"
            className="text-blue-600 font-medium hover:underline"
          >
            guruprasanth.karthi@gmail.com
          </a>
        </div>

        {/* LinkedIn */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="text-2xl">💼</span>
          <a
            href="https://www.linkedin.com/in/guru-prasanth-k"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-medium hover:underline"
          >
            LinkedIn Profile
          </a>
        </div>

        {/* Phone */}
        <div className="flex items-center justify-center gap-3">
          <span className="text-2xl">📱</span>
          <a
            href="tel:7010655517"
            className="text-blue-600 font-medium hover:underline"
          >
            +91 7010655517
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;