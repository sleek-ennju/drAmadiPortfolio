// File: src/components/About.tsx
import { motion } from 'motion/react'
import { FaHandsHelping, FaLightbulb, FaGlobe, FaChartLine } from 'react-icons/fa'
import { about1, about2 } from '../assets'

const philosophyCards = [
  {
    icon: <FaHandsHelping size={24} className="text-blue-600" />,
    title: "Collaboration",
    desc: "Building effective partnerships for sustainable development.",
  },
  {
    icon: <FaLightbulb size={24} className="text-blue-600" />,
    title: "Innovation",
    desc: "Creating novel solutions to complex challenges",
  },
  {
    icon: <FaGlobe size={24} className="text-blue-600" />,
    title: "Global Perspective",
    desc: "Leveraging international insights for local impact",
  },
  {
    icon: <FaChartLine size={24} className="text-blue-600" />,
    title: "Sustainable Growth",
    desc: "Using innovation to boost long-term prosperity.",
  },
]

const timeline = [
  {
    year: "1981",
    title: "Founding of Dolf Madi Consulting",
    desc: "Established as a franchise in capacity building, management consulting, and foreign trade facilitation in partnership with The Performance Group, Inc., Dallas, U.S.A.",
  },
  {
    year: "1980s–1990s",
    title: "International Expansion",
    desc: "Expanded operations through Dolf Madi International Ltd. in Nigeria, creating a bridge between international business practices and local development needs.",
  },
  {
    year: "2000s",
    title: "Co-founding of SEDFA",
    desc: "Founded Self-Help Development Facilitators (SEDFA) alongside Dr. (Mrs.) Rose Amadi, focusing on non-governmental development initiatives.",
  },
  {
    year: "2011",
    title: "UN Recognition",
    desc: "SEDFA was accorded the Special Consultative Status by the United Nations (ECOSOC), acknowledging its impact on global development.",
  },
  {
    year: "Present",
    title: "Continued Leadership",
    desc: "Continues to lead initiatives focused on capacity building, sustainable development, and international collaboration.",
  },
]

const About = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-20 text-gray-800">
      {/* Header */}
      <div className="text-center mb-16">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Dr. Amadi
        </motion.h2>
        <div className="w-16 h-1 bg-blue-600 mx-auto mb-4 rounded" />
        <p className="text-base md:text-lg max-w-3xl mx-auto text-gray-600">
          A distinguished consultant with over four decades of experience in capacity building, management consulting, and international trade facilitation.
        </p>
      </div>

      {/* Dual Containers */}
      <div className="flex flex-col md:flex-row gap-12 max-w-7xl mx-auto">
        {/* Left Box */}
        <div className="md:w-1/2 space-y-6">
          <img src={about1} alt="About 1" className="rounded-md" />

          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-2">Professional Philosophy</h3>
            <p className="text-base md:text-lg text-gray-600 mb-6">
                Dr. Adolphe Amadi, also known professionally as Dolf Madi, 
                has dedicated his career to empowering organizations and 
                communities through innovative consulting approaches and 
                sustainable development initiatives.
            </p>
            <p className="text-base md:text-lg text-gray-600 mb-6">
                His work bridges international business practices with local 
                development needs, creating frameworks that promote 
                sustainable growth and collaboration across sectors.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {philosophyCards.map((item, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 shadow-2xs">
                  <div className="mb-2">{item.icon}</div>
                  <h4 className="font-semibold text-lg md:text-xl">{item.title}</h4>
                  <p className="text-base text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Box */}
        <div className="md:w-1/2 space-y-6">
          <img src={about2} alt="About 2" className="rounded-md" />

          <div className="bg-white border border-gray-200 rounded-lg shadow-2xs p-6">
            <h3 className="text-xl font-bold mb-4">Professional Journey</h3>
            <div className="relative border-l-2 border-blue-500 pl-8 space-y-8">
                {timeline.map((item, idx) => (
                    <div key={idx} className="relative">
                    {/* Dot */}
                    <div className="absolute -left-[40px] top-0 w-4 h-4 bg-blue-500 rounded-sm z-10" />

                    {/* Text Block */}
                    <div className="space-y-1">
                        <p className="text-base text-blue-600 font-semibold">{item.year}</p>
                        <h4 className="text-base md:text-lg font-bold text-gray-800">{item.title}</h4>
                        <p className="text-base text-gray-600">{item.desc}</p>
                    </div>
                    </div>
                ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}


export default About;