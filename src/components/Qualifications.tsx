// src/components/Qualifications.tsx
import { motion } from 'motion/react'

const qualifications = [
  {
    degree: "Ph.D.",
    field: "Communication",
    year: 1979,
    school: "Columbia P. University, U.S.A",
  },
  {
    degree: "M.L.S.",
    field: "Information and Library Science",
    year: 1975,
    school: "State University of New York, Buffalo, U.S.A",
  },
  {
    degree: "M.A.",
    field: "Humanities",
    year: 1973,
    school: "State University of New York, Buffalo, U.S.A",
  },
  {
    degree: "B.A. (Hons.)",
    field: "French and English",
    year: 1967,
    school: "University of Ibadan, Nigeria",
  },
]

const Qualifications = () => {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-20 text-gray-800">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Academic Qualifications
          </motion.h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mt-2 rounded" />
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-base md:text-lg">
            Dr. Adolphe O. Amadi’s academic journey spans international universities, with credentials in communication, humanities, and information science.
          </p>
        </div>

        {/* List of Qualifications */}
        <div className="grid grid-cols-1 gap-6">
          {qualifications.map((q, idx) => (
            <motion.div
              key={idx}
              className="bg-white border border-gray-200 rounded-lg p-6 shadow-2xs hover:shadow-sm transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="text-lg md:text-xl font-semibold text-blue-800 mb-1">
                {q.degree} — <span className="text-gray-800">{q.field}</span>
              </div>
              <div className="text-sm md:text-base text-gray-600">
                {q.year}, {q.school}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


export default Qualifications;