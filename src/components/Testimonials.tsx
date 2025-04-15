
import { motion } from 'motion/react';
import { FaStar } from 'react-icons/fa';
import { testimonial_1, testimonial_2, testimonial_3, testimonial_4 } from '../assets';

const testimonials = [
  {
    name: 'Dr. James Mwangi',
    title: 'International Development Agency',
    quote: `Dr. Amadi’s PPCP framework revolutionized our approach to community development. His ability to bring together diverse stakeholders and create sustainable solutions is unmatched in the field.`,
    img: testimonial_2,
  },
  {
    name: 'Sarah Chen',
    title: 'CEO, Global Enterprises',
    quote: `Working with Dolf Madi Consulting transformed our organization’s approach to international trade. Dr. Amadi’s insights into cross-cultural business practices opened new markets and opportunities.`,
    img: testimonial_3,
  },
  {
    name: 'Hon. Michael Ochieng',
    title: 'Local Government Official',
    quote: `SEFDA’s capacity-building programs have had a transformative impact on our community. Dr. Amadi’s commitment to sustainability and hands-on guidance brought real change.`,
    img: testimonial_4,
  },
  {
    name: 'Prof. Amina Ndao',
    title: 'Director, Regional Development Institute',
    quote: `Dr. Amadi’s Look East Stakeholders’ Engagement Framework is a breakthrough for tackling development challenges. His blueprint connects international standards with local impact.`,
    img: testimonial_1,
  },
]

const Testimonials = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-20 text-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.h2
            className="text-3xl md:text-4xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Testimonials
          </motion.h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mt-2 rounded" />
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto text-base md:text-lg">
            What clients and partners say about working with Dr. Amadi and his organizations.
          </p>
        </div>

        {/* Grid of Testimonials */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              className="relative bg-white border border-gray-200 rounded-xl p-6 shadow-2xs hover:shadow-sm transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-4 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} size={16} />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 text-sm md:text-base italic mb-6">
                “{t.quote}”
              </p>

              {/* Footer - Author */}
              <div className="flex items-center gap-4 mt-auto">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-blue-500"
                />
                <div>
                  <p className="font-bold text-sm md:text-base">{t.name}</p>
                  <p className="text-xs md:text-sm text-gray-500">{t.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials;