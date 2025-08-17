import { motion } from "framer-motion";
// Import icons (e.g., from react-icons)
import { FaShieldAlt, FaHandshake, FaChartLine, FaUsers, FaLightbulb, FaFistRaised } from "react-icons/fa";

const Programmes = () => {
  // Programme data from PDF
  const programmes = [
    {
      icon: <FaShieldAlt className="text-blue-400 text-3xl" />,
      title: "Good Governance & Democratic Participation",
      description: "Strengthening institutions and citizen engagement to combat corruption.",
    },
    {
      icon: <FaHandshake className="text-blue-400 text-3xl" />,
      title: "Best Practices Capacity Building",
      description: "Training communities in project management and adult learning methods.",
    },
    {
      icon: <FaChartLine className="text-blue-400 text-3xl" />,
      title: "Economic Empowerment",
      description: "Financial intermediation and entrepreneurship development.",
    },
    {
      icon: <FaUsers className="text-blue-400 text-3xl" />,
      title: "Accountability & Local Capacity",
      description: "Tools like citizen scorecards and integrity pacts.",
    },
    {
      icon: <FaLightbulb className="text-blue-400 text-3xl" />,
      title: "Human Needs & Entrepreneurship",
      description: "Addressing poverty through self-reliance initiatives.",
    },
    {
      icon: <FaFistRaised className="text-blue-400 text-3xl" />,
      title: "Sports Diplomacy for Youth",
      description: "Building trust between youth and law enforcement in Africa.",
    },
  ];

  return (
    <section id="programmes" className="bg-[#0b1120] text-white px-6 md:px-20 py-20 border-t border-blue-900/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold">Our Core Programmes</h2>
          <p className="mt-4 text-blue-100 max-w-2xl mx-auto">
            Driving sustainable change through targeted, community-led initiatives.
          </p>
        </motion.div>

        {/* Programme Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programmes.map((programme, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-blue-900/10 hover:bg-blue-900/20 transition-all duration-300 border border-blue-800/30 rounded-xl p-6"
            >
              <div className="flex items-center gap-4 mb-4">
                {programme.icon}
                <h3 className="text-xl font-semibold">{programme.title}</h3>
              </div>
              <p className="text-gray-300">{programme.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="#full-programmes" // Link to a dedicated programmes page
            className="inline-block border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-[#0b1120] transition-all duration-300 font-medium px-6 py-3 rounded-full"
          >
            Partner With Us
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Programmes;