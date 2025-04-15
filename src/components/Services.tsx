// src/components/Services.tsx
import { motion } from 'motion/react'
import { FaCheckCircle } from 'react-icons/fa'

const services = [
  {
    title: 'Management Consulting',
    points: [
      'Strategic Planning & Organizational Development',
      'Performance Systems Implementation',
      'Executive Coaching & Leadership Development',
      'Change Management & Transformation',
      'Business Process Reengineering',
    ],
  },
  {
    title: 'International Trade Facilitation',
    points: [
      'Market Entry Strategy',
      'Trade Partnership Development & Negotiation',
      'Cross-Cultural Business Communication',
      'Import/Export Regulatory Compliance',
      'Supply Chain Optimization',
    ],
  },
  {
    title: 'Development Facilitation',
    points: [
      'Community Development Planning',
      'PPCP Framework Design',
      'Stakeholder Engagement Strategies',
      'SDG Implementation Support',
      'Social Impact Evaluation',
    ],
  },
  {
    title: 'Capacity Building',
    points: [
      'Training Program Design & Facilitation',
      'Skills Assessment & Competency Development',
      'Institutional Strengthening',
      'Knowledge Systems Implementation',
      'Leadership & Management Skills',
    ],
  },
]

const Services = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-20 text-gray-800" id='services'>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.h2
            className="text-3xl md:text-4xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Services Offered
          </motion.h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mt-2 rounded" />
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto text-base md:text-lg">
            Dr. Amadi provides comprehensive consulting services through Dolf Madi Consulting and development facilitation via SEDFA.
          </p>
        </div>

        {/* Custom Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="relative bg-gradient-to-tr from-gray-50 to-white border border-gray-200 rounded-2xl p-6 shadow-2xs hover:shadow-sm transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Floating Title Tag */}
              <span className="absolute -top-4 left-4 bg-blue-600 text-white text-sm md:text-base px-4 py-1 rounded-full shadow">
                {service.title}
              </span>

              {/* List */}
              <ul className="mt-6 space-y-3">
                {service.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-base md:text-lg text-gray-700">
                    <FaCheckCircle className="text-blue-500 mt-1" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


export default Services;