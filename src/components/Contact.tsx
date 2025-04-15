// src/components/Contact.tsx
import { useState } from 'react'
import Swal from 'sweetalert2'
import { motion } from 'motion/react'
import { FaPhone, FaEnvelope, FaLinkedin, FaTwitter, FaFacebook, FaYoutube, FaSpinner, FaLongArrowAltRight } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     const res = await fetch('https://formspree.io/f/xldjvkpa', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(formData),
//     })

//     if (res.ok) {
//       Swal.fire({
//         title: 'Message Sent!',
//         text: 'Thank you for reaching out. Dr. Amadi will get back to you shortly.',
//         icon: 'success',
//         confirmButtonColor: '#2563eb',
//         confirmButtonText: 'Okay',
//         customClass: {
//           popup: 'rounded-xl text-base',
//         },
//       })
//       setFormData({ name: '', email: '', subject: '', message: '' })
//     } else {
//       Swal.fire({
//         title: 'Oops!',
//         text: 'Something went wrong. Please try again later.',
//         icon: 'error',
//         confirmButtonColor: '#2563eb',
//       })
//     }
//   }
const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
  
    const res = await fetch('https://formspree.io/f/xldjvkpa', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
  
    if (res.ok) {
      Swal.fire({
        title: 'Message Sent!',
        text: 'Thank you for reaching out. Dr. Amadi will get back to you shortly.',
        icon: 'success',
        confirmButtonColor: '#2563eb',
      })
      setFormData({ name: '', email: '', subject: '', message: '' })
    } else {
      Swal.fire({
        title: 'Oops!',
        text: 'Something went wrong. Please try again later.',
        icon: 'error',
        confirmButtonColor: '#2563eb',
      })
    }
  
    setLoading(false)
  }
  

  return (
    <section className="bg-white py-20 px-6 md:px-20 text-gray-800" id="contact">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.h2
            className="text-3xl md:text-4xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Contact Dr. Amadi
          </motion.h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mt-2 rounded" />
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-base md:text-lg">
            Let’s work together to make impact-driven decisions and lasting change.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Left: Contact Info */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 md:w-1/2 space-y-4 shadow">
            <h3 className="text-lg md:text-xl font-bold mb-4">Get in Touch</h3>
            <div className="text-base md:text-lg text-gray-700 flex flex-col gap-1">
              <p>House 9, Road 35, Efab City Estate, Life Camp, Abuja, Nigeria</p>
              <p>261 Sutherland St. West, Caledonia, Ontario, N3W 1B4, Canada</p>
            </div>
            <div className="flex gap-2 items-center text-base md:text-lg text-gray-700">
                <FaPhone className="text-blue-600" /> 
                <div>
                    <p>+234 803 666 9225,</p>
                    <p> +234 813 400 0065</p>
                </div>
            </div>
            <div className="flex gap-2 items-center text-base md:text-lg text-gray-700">
              <FaEnvelope className="text-blue-600" />
              <a href="mailto:dolfmadi1981@gmail.com" className="text-blue-700 hover:underline">dolfmadi1981@gmail.com</a>
            </div>
            <div className="text-base md:text-lg text-gray-700">
              Canada Tel: +1 437 224 4022
            </div>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-blue-600 hover:text-blue-800"><FaLinkedin size={22} /></a>
              <a href="#" className="text-blue-400 hover:text-blue-600"><FaTwitter size={22} /></a>
              <a href="#" className="text-blue-700 hover:text-blue-900"><FaFacebook size={22} /></a>
              <a href="#" className="text-red-600 hover:text-red-800"><FaYoutube size={22} /></a>
            </div>
          </div>

          {/* Right: Form */}
          <form onSubmit={handleSubmit} className="md:w-1/2 space-y-4">
            <div>
              <label className="block mb-1 font-semibold text-base md:text-lg">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="text-base w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold text-base md:text-lg">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="text-base w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold text-base md:text-lg">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="text-base w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold text-base md:text-lg">Your Message</label>
              <textarea
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="text-base w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>
            <button
                type="submit"
                className="group bg-blue-600 text-white text-base md:text-lg px-6 py-3 rounded-md hover:bg-blue-700 transition-all duration-300 cursor-pointer flex items-center justify-center gap-3"
                disabled={loading}
                >
                {loading ? (
                    <>
                        Sending
                        <FaSpinner className="animate-spin" />
                    </>
                ) : (
                    <>
                        Send Message
                        <FaLongArrowAltRight className='transform group-hover:translate-x-1 transition-all duration-300' />
                    </>
                )}
            </button>

          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact;
