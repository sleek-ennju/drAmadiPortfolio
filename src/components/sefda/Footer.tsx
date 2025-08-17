import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0b1120] text-white border-t border-blue-900/50">
      <div className="container mx-auto px-6 md:px-20 py-12">
        {/* Footer Grid */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12"
        >
          {/* About Column */}
          <div>
            <h3 className="text-xl font-bold text-blue-400 mb-4">About SEDFA</h3>
            <p className="text-gray-300">
              Empowering communities through self-help development initiatives since 1997.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-blue-400 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#home" className="hover:text-blue-300 transition-colors">Home</a></li>
              <li><a href="#programmes" className="hover:text-blue-300 transition-colors">Programmes</a></li>
              <li><a href="#impact" className="hover:text-blue-300 transition-colors">Our Impact</a></li>
              <li><a href="#contact" className="hover:text-blue-300 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-blue-400 mb-4">Contact</h3>
            <address className="not-italic text-gray-300 space-y-2">
              <p>SEDFA HOUSE, 127 Orlu Road</p>
              <p>Owerri, Imo State, Nigeria</p>
              <p>+234 803 666 9225</p>
              <a href="mailto:sedfanigeria@gmail.com" className="hover:text-blue-300 transition-colors">
                sedfanigeria@gmail.com
              </a>
            </address>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold text-blue-400 mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <motion.a 
                href="https://facebook.com/sedfa" 
                target="_blank"
                whileHover={{ y: -3 }}
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                <FaFacebook size={20} />
              </motion.a>
              <motion.a 
                href="https://twitter.com/sedfa" 
                target="_blank"
                whileHover={{ y: -3 }}
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                <FaTwitter size={20} />
              </motion.a>
              <motion.a 
                href="https://linkedin.com/company/sedfa" 
                target="_blank"
                whileHover={{ y: -3 }}
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                <FaLinkedin size={20} />
              </motion.a>
              <motion.a 
                href="https://youtube.com/sedfa" 
                target="_blank"
                whileHover={{ y: -3 }}
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                <FaYoutube size={20} />
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-blue-900/30 text-center text-gray-400"
        >
          <p>© {currentYear} Self-Help Development Facilitators (SEDFA). All rights reserved.</p>
          <p className="mt-2 text-sm">
            Registered with Corporate Affairs Commission, Nigeria (RC: 10730)
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;