import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, X } from 'lucide-react';

const ContactUs = () => {
  return (
    <motion.div
      className="bg-white px-6 py-10 md:px-20 text-gray-800 shadow-xl rounded-2xl max-w-4xl mx-auto my-10"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-700">
        Contact Us
      </h2>
      <p className="mb-8 text-gray-600">
        We'd love to hear from you. Whether it's a claim, quote request, or a question—reach out through any of the options below.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex items-start space-x-4">
          <Mail className="text-blue-600 mt-1" />
          <div>
            <h4 className="font-semibold text-lg">Email Us</h4>
            <p className="text-gray-600">info@securetrustsinsure.site</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <Phone className="text-green-600 mt-1" />
          <div>
            <h4 className="font-semibold text-lg">Call Us</h4>
            <p className="text-gray-600">+1 (509)-518-8618</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <Linkedin className="text-blue-700 mt-1" />
          <div>
            <h4 className="font-semibold text-lg">LinkedIn</h4>
            <a
              href="http/Delvin Lang"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Delvin Lang
            </a>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <X className="text-black mt-1" />
          <div>
            <h4 className="font-semibold text-lg">X (Twitter)</h4>
            <a
              href="https://x.com/securetrustin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:underline"
            >
              @securetrusin
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactUs;
