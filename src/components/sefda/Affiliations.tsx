import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { algon_logo, bp_logo, cid_logo, eco_logo, lg_logo, osiwa_logo } from "../../assets";

const partners = [
  { name: "United Nations ECOSOC", logo: eco_logo },
  { name: "Open Society Initiative for West Africa", logo: osiwa_logo },
  { name: "Association of Local Governments of Nigeria", logo: algon_logo },
  { name: "Bureau of Public Service Reforms", logo: bp_logo },
  { name: "NDDC", logo: lg_logo },
  { name: "Centre for International Development", logo: cid_logo },
];

const Impact = () => {
  const [counters, setCounters] = useState({
    countries: 0,
    communities: 0,
    trained: 0,
  });
  const [hasAnimated, setHasAnimated] = useState(false);

  // Counter animation
  useEffect(() => {
    let animationFrame: number;

    const animate = (startTime: number) => {
      const duration = 2000; // 2 seconds in milliseconds
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      setCounters({
        countries: Math.floor(progress * 12),
        communities: Math.floor(progress * 200),
        trained: Math.floor(progress * 5000),
      });

      if (progress < 1) {
        animationFrame = requestAnimationFrame(() => animate(startTime));
      } else {
        setHasAnimated(true);
      }
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimated) {
          animate(Date.now());
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
    });

    const statsElement = document.querySelector('#stats-section');
    if (statsElement) observer.observe(statsElement);

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
      if (statsElement) observer.unobserve(statsElement);
    };
  }, [hasAnimated]);

  return (
    <section id="impact" className="bg-[#0b1120] text-white px-6 md:px-20 py-20 border-t border-blue-900/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold">Our Impact & Network</h2>
          <p className="mt-4 text-blue-100 max-w-2xl mx-auto">
            Collaborating globally to empower communities at scale.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Stats */}
          <motion.div
            id="stats-section"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="w-full lg:w-1/2 space-y-8"
          >
            <div className="space-y-1">
              <h3 className="text-2xl font-bold text-blue-400">By the Numbers</h3>
              <div className="h-1 w-20 bg-blue-500"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="bg-blue-900/20 p-6 rounded-xl border border-blue-800/30">
                <p className="text-4xl font-bold">{counters.countries}+</p>
                <p className="text-blue-100 mt-2">Countries</p>
              </div>
              <div className="bg-blue-900/20 p-6 rounded-xl border border-blue-800/30">
                <p className="text-4xl font-bold">{counters.communities}+</p>
                <p className="text-blue-100 mt-2">Communities</p>
              </div>
              <div className="bg-blue-900/20 p-6 rounded-xl border border-blue-800/30">
                <p className="text-4xl font-bold">{counters.trained}+</p>
                <p className="text-blue-100 mt-2">People Trained</p>
              </div>
            </div>

            <p className="text-gray-300">
              Since 1997, SEDFA has partnered with local and international organizations to implement sustainable development programs across Africa.
            </p>
          </motion.div>

          {/* Partners */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="w-full lg:w-1/2"
          >
            <div className="space-y-1 mb-8">
              <h3 className="text-2xl font-bold text-blue-400">Our Partners</h3>
              <div className="h-1 w-20 bg-blue-500"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {partners.map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-blue-900/10 hover:bg-blue-900/20 transition-all p-4 rounded-lg border border-blue-800/20 flex items-center justify-center"
                >
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="h-12 object-contain transition-all"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Impact;