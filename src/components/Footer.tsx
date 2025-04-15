// src/components/Footer.tsx
import { FaLinkedin, FaTwitter, FaFacebook, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-[#1e2530] text-gray-300 py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Bio */}
        <div>
          <h3 className="text-white text-xl md:text-2xl font-bold mb-2">Dr. Adolphe O. Amadi</h3>
          <p className="text-base md:text-lg leading-relaxed">
            Management Consultant & Development Facilitator with over four decades of international experience.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-2 text-base md:text-lg">Quick Links</h4>
          <ul className="space-y-1 text-base md:text-lg">
            <li><a href="#about" className="hover:text-white transition-all duration-300">About</a></li>
            <li><a href="#framework" className="hover:text-white transition-all duration-300">PPCP Framework</a></li>
            <li><a href="#recognition" className="hover:text-white transition-all duration-300">Achievements</a></li>
            <li><a href="#services" className="hover:text-white transition-all duration-300">Services</a></li>
          </ul>
        </div>

        {/* Organizations */}
        <div>
          <h4 className="text-white font-semibold mb-2 text-base md:text-lg">Organizations</h4>
          <ul className="space-y-1 text-base md:text-lg">
            <li><a href="#" className="hover:text-white transition-all duration-300">Dolf Madi Consulting</a></li>
            <li><a href="#" className="hover:text-white transition-all duration-300">SEDFA</a></li>
            <li><a href="#" className="hover:text-white transition-all duration-300">International Partners</a></li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-600 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Dr. Adolphe O. Amadi. All rights reserved.</p>

        <div className="flex gap-4 mt-4 sm:mt-0">
          <a href="#" className="hover:text-white"><FaLinkedin size={18} /></a>
          <a href="#" className="hover:text-white"><FaTwitter size={18} /></a>
          <a href="#" className="hover:text-white"><FaFacebook size={18} /></a>
          <a href="#" className="hover:text-white"><FaYoutube size={18} /></a>
        </div>
      </div>
    </footer>
  )
}


export default Footer;