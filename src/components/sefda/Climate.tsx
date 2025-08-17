import { motion } from "framer-motion";
import { FaTractor, FaLeaf, FaBalanceScale, FaWater, FaFemale } from "react-icons/fa";

const ClimateSmartAgriculture = () => {
  const features = [
    {
      icon: <FaTractor className="text-blue-400 text-2xl" />,
      title: "100 Tractors Provided",
      description: "Initial deployment for women-led farms in Enugu State"
    },
    {
      icon: <FaLeaf className="text-blue-400 text-2xl" />,
      title: "Climate-Resilient Crops",
      description: "Adapted to regional climate risks"
    },
    {
      icon: <FaBalanceScale className="text-blue-400 text-2xl" />,
      title: "Gender Equity Focus",
      description: "Targeting systemic barriers for women farmers"
    },
    {
      icon: <FaWater className="text-blue-400 text-2xl" />,
      title: "Water Management",
      description: "Solutions for drought & flood-prone regions"
    },
    {
      icon: <FaFemale className="text-blue-400 text-2xl" />,
      title: "Women's Cooperatives",
      description: "Strengthening collective bargaining power"
    }
  ];

  return (
    <section className="bg-[#0b1120] text-white px-6 md:px-20 py-20 border-t border-blue-900/50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold">Climate Smart Agriculture Initiative</h2>
          <p className="mt-4 text-blue-100 max-w-3xl mx-auto">
            Women-led climate adaptation for food security in Enugu State (2026-2031)
          </p>
        </motion.div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Text */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 space-y-6"
          >
            <h3 className="text-2xl font-bold text-blue-400">
              Partnership with NOTRA Tractors & Enugu State Government
            </h3>
            
            <p className="text-gray-300">
              SEDFA has launched a 5-year pilot providing <strong>100 tractors</strong> and establishing a <strong>Tractor Assembly Plant</strong> in Enugu State. This women-led initiative addresses:
            </p>

            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-blue-400">•</span>
                <span><strong>Climate Risks</strong>: Regional adaptation for drought, floods, and erosion</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">•</span>
                <span><strong>Gender Gaps</strong>: Only 16.7% of women access formal agricultural loans</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">•</span>
                <span><strong>Mechanization</strong>: Overcoming subsistence farming through equipment access</span>
              </li>
            </ul>

            <div className="pt-4">
              <a
                href="#contact"
                className="inline-block bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white font-semibold px-6 py-3 rounded-full"
              >
                Support This Initiative
              </a>
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-blue-900/10 hover:bg-blue-900/20 transition-all p-6 rounded-xl border border-blue-800/30"
                >
                  <div className="flex items-center gap-4">
                    {feature.icon}
                    <div>
                      <h4 className="font-bold">{feature.title}</h4>
                      <p className="text-sm text-gray-300 mt-1">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClimateSmartAgriculture;