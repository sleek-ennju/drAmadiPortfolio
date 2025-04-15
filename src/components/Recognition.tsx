// src/components/Recognition.tsx
import { motion } from 'motion/react'
import { FaGlobe, FaHandshake, FaUsers, FaBookOpen, FaProjectDiagram, FaExchangeAlt } from 'react-icons/fa'
import { recognition, silverMedal } from '../assets';

const Recognition = () => {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-20 text-gray-800" id='recognition'>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Achievements & Recognition
          </motion.h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-10 rounded" />
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-base md:text-lg">
            Throughout his distinguished career, Dr. Amadi has received significant recognition for his contributions to consulting and international development.
          </p>
        </div>

        {/* International Recognition Section */}
        <div className="flex flex-col md:flex-row gap-12 items-start mb-16">
          {/* Left Text + Awards */}
          <div className="md:w-1/2 space-y-4">
            <h3 className="text-xl md:text-2xl font-semibold">International Recognition</h3>
            <p className="text-gray-600 text-base md:text-lg">
              Dr. Amadi’s work has been recognized by prestigious international organizations for his innovative approach to development and capacity building.
            </p>
            <p className="text-gray-600 text-base md:text-lg">
              The Special Consultative Status accorded to SEDFA by the United Nations ECOSOC in 2011 stands as a testament to the global impact of his initiatives.
            </p>

            {/* Award Cards */}
            <div className="space-y-4">
              <div className="flex items-center gap-1.5 bg-white border border-gray-200 shadow-2xs p-4 rounded-md">
                <img src={silverMedal} alt="Silver medal" className='w-8 h-auto object-contain' />
                <div>
                    <p className="text-blue-600 font-semibold">UN ECOSOC Special Consultative Status</p>
                    <p className="text-gray-500 text-sm">Awarded 2011</p>
                </div>
              </div>
              <div className="flex items-center gap-1.5 bg-white border border-gray-200 shadow-2xs p-4 rounded-md">
                <img src={silverMedal} alt="Silver medal" className='w-8 h-auto object-contain' />
                <div>
                    <p className="text-blue-600 font-semibold">International Development Excellence Award</p>
                    <p className="text-gray-500 text-sm">Awarded 2015</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2">
            <img
              src={recognition}
              alt="Recognition Event"
              className="rounded-md shadow-2xs w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Recognition Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <FaGlobe size={24} className="text-blue-600" />,
              title: 'UN ECOSOC Recognition',
              desc: 'Granted Special Consultative Status in 2011 for contributions to global development goals.',
            },
            {
              icon: <FaHandshake size={24} className="text-blue-600" />,
              title: 'International Partnerships',
              desc: 'Built alliances with international orgs, governments, and private sectors across Africa, Asia, Europe, and North America.',
            },
            {
              icon: <FaUsers size={24} className="text-blue-600" />,
              title: 'Capacity Development',
              desc: 'Trained thousands of professionals and leaders through workshops on sustainable development.',
            },
            {
              icon: <FaBookOpen size={24} className="text-blue-600" />,
              title: 'Published Works',
              desc: 'Authored several publications on trade, public-private partnerships, and development policy.',
            },
            {
              icon: <FaProjectDiagram size={24} className="text-blue-600" />,
              title: 'Development Projects',
              desc: 'Led large-scale implementation in sectors like healthcare, agriculture, and education.',
            },
            {
              icon: <FaExchangeAlt size={24} className="text-blue-600" />,
              title: 'Trade Facilitation',
              desc: 'Advanced Africa-focused investment initiatives and economic cooperation models.',
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6 shadow-2xs hover:shadow-sm transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="mb-2">{item.icon}</div>
              <h3 className="font-bold text-lg md:text-xl mb-1">{item.title}</h3>
              <p className="text-base md:text-lg text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


export default Recognition;