import { motion } from "framer-motion";
// Update imports for your assets (e.g., SEDFA logo/imagery)
import { sedfa_logo } from "../../assets";

const Hero = () => {
  return (
    <section className="relative bg-[#0b1120] text-white overflow-hidden px-6 md:px-20 py-24">
      {/* Background Blob (kept for visual consistency) */}
      <div className="absolute -top-20 -left-32 w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[120px] z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Text Content */}
        <div className="max-w-2xl text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center md:justify-start gap-3 mb-4"
          >
            {/* SEDFA Logo (optional) */}
            <img src={sedfa_logo} alt="SEDFA Logo" className="h-12" />
            <span className="text-blue-400 font-medium">Since 1997</span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl font-extrabold leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Self-Help Development Facilitators
          </motion.h1>
          
          <motion.p
            className="mt-4 text-lg md:text-xl font-medium text-blue-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Empowering communities through governance, accountability, and sustainable development.
          </motion.p>

          <motion.p
            className="mt-4 text-base md:text-lg text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Led by <strong>Dr. Adolphe O. Amadi</strong>, SEDFA pioneers poverty reduction via self-help initiatives across Africa.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="mt-8 flex gap-4 justify-center md:justify-start flex-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <a
              href="#programmes"
              className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white font-semibold px-6 py-3 rounded-full"
            >
              Our Programmes
            </a>
            <a
              href="#leadership"
              className="border border-white text-white hover:bg-white hover:text-blue-700 transition-all duration-300 font-semibold px-6 py-3 rounded-full"
            >
              Meet Our President
            </a>
          </motion.div>
        </div>

        {/* Right-side Graphic (replace with SEDFA imagery) */}
        <motion.div
          className="w-full md:w-[400px] flex-shrink-0 relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div className="w-full h-80 bg-blue-900/30 rounded-xl border border-blue-800/50 flex items-center justify-center">
            <p className="text-blue-200">SEDFA in Action</p>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0b1120] via-[#0b1120]/80 to-transparent z-20 pointer-events-none"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;