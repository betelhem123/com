import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    setSubmitted(true);
  };

  return (
    <section className="min-h-screen bg-black text-white font-poppins flex flex-col md:flex-row items-center justify-center px-6 md:px-20 py-16 relative overflow-hidden">
      {/* Left side graphic with 3D tilt */}
      <motion.div
        className="w-full md:w-1/2 mb-12 md:mb-0"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        whileHover={{ rotateY: 15, rotateX: 10, scale: 1.05 }}
        style={{ perspective: 1200 }}
      >
        {/* You can replace this SVG or div with a cool graphic or pattern */}
        <div className="relative mx-auto w-80 h-80 rounded-xl bg-gradient-to-tr from-cyan-600 to-teal-400 shadow-lg shadow-cyan-500/50 flex items-center justify-center">
          <svg
            className="w-40 h-40 text-white opacity-80"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 64 64"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M32 2v60M2 32h60M10 10l44 44M54 10L10 54" />
          </svg>
          <span className="absolute bottom-6 text-white font-bold text-2xl tracking-wide select-none">Contact Us</span>
        </div>
      </motion.div>

      {/* Right side form */}
      <motion.div
        className="w-full md:w-1/2 bg-gray-900 bg-opacity-90 rounded-3xl p-10 shadow-cyan-600 shadow-xl border-2 border-transparent hover:border-cyan-400 transition relative"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-extrabold mb-2 text-cyan-400 drop-shadow-md">Let’s Talk</h2>
        <p className="text-gray-300 mb-10 leading-relaxed">
          Questions, feedback, or a cool project idea? We want to hear from you! Fill out the form and we’ll respond within 24 hours.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-8">
            {['name', 'email', 'message'].map((field) => (
              <div key={field} className="relative">
                <input
                  id={field}
                  name={field}
                  type={field === 'email' ? 'email' : 'text'}
                  value={formData[field]}
                  onChange={handleChange}
                  required
                  placeholder=" "
                  rows={field === 'message' ? 5 : undefined}
                  className={`peer block w-full rounded-lg bg-transparent border-b-2 border-gray-700 text-white placeholder-transparent focus:outline-none focus:border-cyan-400 transition px-2 py-3 ${
                    field === 'message' ? 'resize-none h-32' : ''
                  }`}
                />
                <label
                  htmlFor={field}
                  className="absolute left-2 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-focus:top-[-8px] peer-focus:text-cyan-400 peer-focus:text-sm select-none"
                >
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
              </div>
            ))}

            <motion.button
              type="submit"
              className="w-full py-3 bg-cyan-500 rounded-lg font-semibold text-black shadow-lg hover:shadow-cyan-600 hover:bg-cyan-600 transition relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
              <span className="absolute top-0 left-0 w-full h-full bg-cyan-300 opacity-20 rounded-lg animate-pulse pointer-events-none"></span>
            </motion.button>
          </form>
        ) : (
          <motion.div
            className="text-center text-green-400 font-semibold text-xl mt-10 select-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Thanks for reaching out! We’ll get back to you soon.
          </motion.div>
        )}

        {/* Social media icons */}
        <div className="flex justify-center space-x-8 mt-14 text-gray-400">
          {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, i) => (
            <motion.a
              key={i}
              href="#"
              className="text-xl hover:text-cyan-400 transition-shadow"
              whileHover={{ scale: 1.3, textShadow: '0 0 8px cyan' }}
              aria-label="social link"
            >
              <Icon />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
