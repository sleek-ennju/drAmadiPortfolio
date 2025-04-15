
// File: src/components/Framework.tsx
import { motion } from 'motion/react'
import { ppcp } from '../assets';

const Framework = () => {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-20 text-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-2xl md:text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          PPCP Look East Stakeholders' Engagement Framework
        </motion.h2>

        <div className="w-16 h-1 bg-blue-600 mx-auto mb-6 rounded" />

        <motion.p
          className="text-gray-600 max-w-3xl mx-auto mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          This model highlights the sequence of stakeholder engagement steps – from policy formation to measurable results – with collaborative consultation and co-implementation in between.
        </motion.p>

        {/* Framework Image */}
        <motion.div
          className="rounded-lg shadow-2xs overflow-hidden max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={ppcp}
            alt="P-P-C-P Framework Diagram"
            className="w-full h-auto object-contain"
          />
        </motion.div>
      </div>
    </section>
  )
}

export  default Framework;