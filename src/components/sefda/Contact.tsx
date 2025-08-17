import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaPaperPlane } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({
    username: '',
    email: '',
    subject: '',
    message: ''
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      username: '',
      email: '',
      subject: '',
      message: ''
    };

    if (!form.current?.username.value.trim()) {
      newErrors.username = 'Name is required';
      isValid = false;
    }

    if (!form.current?.email.value.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(form.current.email.value)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }

    if (!form.current?.subject.value.trim()) {
      newErrors.subject = 'Subject is required';
      isValid = false;
    }

    if (!form.current?.message.value.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Replace these with your actual EmailJS credentials
    emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, 
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
        form.current!, 
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then((result) => {
        console.log(result);
        toast.success('Message sent successfully!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        form.current?.reset();
      }, (error) => {
        console.error(error);
        toast.error('Failed to send message. Please try again.', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="bg-[#0b1120] text-white px-6 md:px-20 py-20 border-t border-blue-900/50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>
          <p className="mt-4 text-blue-100 max-w-2xl mx-auto">
            Reach out to collaborate or learn more about our initiatives.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 space-y-8"
          >
            <h3 className="text-2xl font-bold text-blue-400">Contact Information</h3>
            
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold">Headquarters</h4>
                  <p className="text-gray-300 mt-1">
                    SEDFA HOUSE, 127 Orlu Road, Owerri, Imo State, Nigeria
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <FaPhone className="text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold">Phone</h4>
                  <p className="text-gray-300 mt-1">
                    +234 803 666 9225<br />
                    +234 805 237 7427 (Dr. Amadi)
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <FaEnvelope className="text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold">Email</h4>
                  <p className="text-gray-300 mt-1">
                    sedfanigeria@gmail.com<br />
                    dolfmadi1981@gmail.com (Dr. Amadi)
                  </p>
                </div>
              </div>

              {/* Website */}
              {/* <div className="flex items-start gap-4">
                <FaGlobe className="text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold">Website</h4>
                  <a 
                    href="http://www.sedfa.org" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-300 hover:text-blue-200 transition-colors"
                  >
                    www.sedfa.org
                  </a>
                </div>
              </div> */}
            </div>

            {/* Map */}
            <div className="pt-6">
              <h4 className="text-xl font-bold text-blue-400 mb-4">Our Location</h4>
              <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden border border-blue-800/30">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d7.033484315266858!3d5.6035587959664715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1042f9b5b5b5b5b5%3A0x1b2b3b4b5b6b7b8b!2s127%20Orlu%20Rd%2C%20Owerri%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="rounded-xl"
                ></iframe>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="user_name" className="block text-sm font-medium text-blue-100 mb-1">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="user_name"
                    name="username"
                    className={`w-full bg-blue-900/20 border ${errors.username ? 'border-red-500' : 'border-blue-800/30'} rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="Your name"
                  />
                  {errors.username && <p className="mt-1 text-sm text-red-400">{errors.username}</p>}
                </div>
                <div>
                  <label htmlFor="user_email" className="block text-sm font-medium text-blue-100 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="user_email"
                    name="email"
                    className={`w-full bg-blue-900/20 border ${errors.email ? 'border-red-500' : 'border-blue-800/30'} rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="your@email.com"
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-blue-100 mb-1">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className={`w-full bg-blue-900/20 border ${errors.subject ? 'border-red-500' : 'border-blue-800/30'} rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  placeholder="Subject"
                />
                {errors.subject && <p className="mt-1 text-sm text-red-400">{errors.subject}</p>}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-blue-100 mb-1">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className={`w-full bg-blue-900/20 border ${errors.message ? 'border-red-500' : 'border-blue-800/30'} rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  placeholder="Your message..."
                ></textarea>
                {errors.message && <p className="mt-1 text-sm text-red-400">{errors.message}</p>}
              </div>
              
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white font-semibold px-6 py-3 rounded-full flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <FaPaperPlane /> Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Toast Container */}
      <ToastContainer 
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </section>
  );
};

export default Contact;