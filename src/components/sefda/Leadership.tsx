import { motion } from "framer-motion";
import { drAdolphe_potrait } from "../../assets"; // Update with your image path

const Leadership = () => {
  return (
    <section id="leadership" className="bg-[#0b1120] text-white px-6 md:px-20 py-20 border-t border-blue-900/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold">Our Leadership</h2>
          <p className="mt-4 text-blue-100 max-w-2xl mx-auto">
            Visionary leadership driving SEDFA’s mission forward.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Portrait - Updated to match Hero styling */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full md:w-[400px] flex-shrink-0 relative"
          >
            <img
              src={drAdolphe_potrait }
              alt="Dr. Adolphe Amadi"
              className="w-full object-cover drop-shadow-2xl relative z-10"
            />
            {/* Subtle bottom gradient fade (same as Hero) */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0b1120] via-[#0b1120]/80 to-transparent z-20 pointer-events-none"></div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full md:w-2/3"
          >
            <h3 className="text-2xl font-bold text-blue-400">Dr. Adolphe O. Amadi</h3>
            <p className="mt-2 text-lg font-medium">President, SEDFA</p>
            
            <p className="mt-6 text-gray-300">
              A seasoned development strategist and governance expert, Dr. Amadi founded SEDFA in 1997 to champion self-help empowerment as a tool for systemic change in Africa. His work has influenced policies in over 12 countries.
            </p>

            <ul className="mt-6 space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-blue-400">✓</span>
                <span>Led SEDFA’s UN ECOSOC consultative status accreditation (2011).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">✓</span>
                <span>Pioneered citizen accountability tools like the "Community Scorecard".</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">✓</span>
                <span>Published 3 books on governance and self-help development.</span>
              </li>
            </ul>

            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="mt-8 inline-block"
            >
              <a
                href="#"
                className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white font-semibold px-6 py-3 rounded-full"
              >
                Read Full Bio
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;