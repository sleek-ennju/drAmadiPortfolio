// src/components/FrameworkOverview.tsx
import { motion } from 'motion/react'
import { FaUsers, FaHandshake, FaGlobeAsia, FaChartBar, FaCheckSquare, FaTools } from 'react-icons/fa'

const principles = [
  {
    heading: "Principle 1",
    icon: <FaUsers className="text-blue-600 text-xl" />,
    title: "Community Engagement",
    desc: "Ensuring active participation and voice from all community stakeholders throughout the development process.",
  },
  {
    heading: "Principle 2",
    icon: <FaHandshake className="text-blue-600 text-xl" />,
    title: "Public-Private Synergy",
    desc: "Creating collaborative frameworks that align government objectives with private sector efficiency and resources.",
  },
  {
    heading: "Principle 3",
    icon: <FaGlobeAsia className="text-blue-600 text-xl" />,
    title: "East-West Knowledge Transfer",
    desc: "Incorporating successful Asian development models and adapting them to African contexts for sustainable growth.",
  },
  {
    heading: "Principle 4",
    icon: <FaChartBar className="text-blue-600 text-xl" />,
    title: "Sustainable Development",
    desc: "Ensuring initiatives create lasting positive impact while respecting environmental and social considerations.",
  },
  {
    heading: "Principle 5",
    icon: <FaCheckSquare className="text-blue-600 text-xl" />,
    title: "Measurable Outcomes",
    desc: "Implementing robust metrics and evaluation systems to assess progress and impact of development initiatives.",
  },
  {
    heading: "Implementation",
    icon: <FaTools className="text-blue-600 text-xl" />,
    title: "Practical Application",
    desc: "The framework has been successfully implemented across various sectors including infrastructure, healthcare, education, and agriculture.",
  },
]

const FrameworkOverview = () => {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-20 text-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-left mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Framework Overview
          </motion.h2>
          <p className="max-w-4xl text-base md:text-lg text-gray-600">
            The PPCP (Public-Private Community Partnership) Look East Framework represents Dr. Amadi's holistic approach to stakeholder engagement and sustainable development. This framework leverages international best practices while respecting and incorporating local contexts and community needs.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {principles.map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              {/* Blue Header */}
              <div className="bg-blue-600 text-white px-4 py-2 text-sm font-semibold">
                {item.heading}
              </div>

              {/* Content */}
              <div className="p-5 space-y-2">
                <div>{item.icon}</div>
                <h3 className="font-bold text-lg md:text-xl">{item.title}</h3>
                <p className="text-base md:text-lg text-gray-600">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


export default FrameworkOverview;