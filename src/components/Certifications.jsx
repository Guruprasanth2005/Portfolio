import { motion } from "framer-motion";

const Certifications = () => {
  const certs = [
    "Industrial IoT – Enthutech",
    "Python for Data Science – IBM",
    "Web Development Masterclass – Infosys",
    "AWS Cloud Essentials – AWS",
    "GEN AI Basics – Tata"
  ];

  return (
    <section className="py-20 px-6 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-12 text-blue-700">
        Certifications
      </h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {certs.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true }}
            className="relative bg-white p-8 rounded-lg shadow-md hover:shadow-2xl transition border-t-8 border-blue-600"
          >
            {/* Decorative Ribbon Circle */}
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-blue-600 rounded-full shadow-lg flex items-center justify-center text-white font-bold">
              🏆
            </div>

            <p className="mt-6 text-gray-700 font-medium leading-relaxed">
              {cert}
            </p>

            <div className="mt-4 text-sm text-blue-500 font-semibold">
              Verified Certificate
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;