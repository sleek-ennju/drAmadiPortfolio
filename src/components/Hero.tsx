import { motion } from "motion/react";
// images
import { drAdolphe_potrait } from "../assets";

const Hero = () => {
    return (
        <section className="relative min-h-screen bg-gradient-to-br from-[#0a1222] to-[#101d39] text-white flex items-center px-6 md:px-20 py-16">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-7xl mx-auto gap-10">
        
        {/* Left Text Content */}
        <motion.div
          className="text-center md:text-left max-w-xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Dr. Adolphe<br />O. Amadi
          </h1>
          <p className="text-lg md:text-xl font-medium text-gray-300 mb-2">
            HR Administrator & Development Consultant
          </p>
          <p className="text-sm md:text-base text-gray-400 mb-8">
            Former Director of Administration and Finance and Permanent Secretary
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#contact" className="bg-blue-600 hover:bg-blue-700  px-6 py-3 rounded-full text-white font-semibold text-sm shadow-md transition duration-300">
              Get in Touch
            </a>
            <a href="/cv.pdf" className="border border-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-white hover:text-[#0a1222] transition duration-300">
              Download CV
            </a>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="w-full max-w-sm md:max-w-md"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={drAdolphe_potrait}
            alt="Dr Amadi"
            className="w-full h-auto object-cover rounded-xl shadow-2xs"
          />
        </motion.div>
      </div>
    </section>
        // <section className="bg-[#0D1B2A] text-white min-h-screen flex items-center justify-center px-6 md:px-20">
        //   <div className="text-center max-w-3xl">
        //     <motion.img
        //       src={drAdolphe_potrait}
        //       alt="Dr Amadi"
        //       className="w-40 h-40 md:w-48 md:h-48 rounded-full mx-auto object-cover shadow-xl border-4 border-white mb-6"
        //       initial={{ opacity: 0, y: -40 }}
        //       animate={{ opacity: 1, y: 0 }}
        //       transition={{ duration: 0.8 }}
        //     />
    
        //     <motion.h1
        //       className="text-3xl md:text-5xl font-bold leading-tight mb-4"
        //       initial={{ opacity: 0 }}
        //       animate={{ opacity: 1 }}
        //       transition={{ delay: 0.3, duration: 0.6 }}
        //     >
        //       Dr. Adolphe O. Amadi
        //     </motion.h1>
    
        //     <motion.p
        //       className="text-lg md:text-xl text-gray-300 mb-8"
        //       initial={{ opacity: 0 }}
        //       animate={{ opacity: 1 }}
        //       transition={{ delay: 0.5, duration: 0.6 }}
        //     >
        //       Management Consultant & Development Facilitator
        //     </motion.p>
    
        //     <motion.div
        //       className="flex flex-col sm:flex-row gap-4 justify-center"
        //       initial={{ opacity: 0 }}
        //       animate={{ opacity: 1 }}
        //       transition={{ delay: 0.7, duration: 0.6 }}
        //     >
        //       <button className="bg-white text-[#0D1B2A] px-6 py-2 rounded-full font-semibold shadow hover:bg-gray-200 transition">
        //         Call Now
        //       </button>
        //       <button className="border border-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-[#0D1B2A] transition">
        //         Book a Meeting
        //       </button>
        //     </motion.div>
        //   </div>
        // </section>
      )
}

export default Hero