import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react'; // ✅ Import icons
import { Link } from 'react-router-dom'; // Fixed import typo

const Hrm = () => {
  return (
    <motion.div 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
        <div className="flex flex-col items-center">
          <img 
            src="https://res.cloudinary.com/dxual7mk3/image/upload/v1754309173/ozuna_bof8hu.jpg" 
            alt="HRM Profile"
            className="w-36 h-36 rounded-full border-4 border-blue-300 shadow-lg mb-4 object-cover"
          />
          <h2 className="text-2xl font-semibold text-blue-700 mb-1">OZUNA HIDIE</h2>
          <p className="text-sm text-gray-500">Human Resource Manager</p>
        </div>

        <div className="mt-6 space-y-4 text-gray-700">
          <div>
            <h3 className="font-medium text-sm text-blue-500">Full Name</h3>
            <p className="text-lg font-semibold">Ozuna Hidie</p>
          </div>

          <div>
            <h3 className="font-medium text-sm text-blue-500">Email Address</h3>
            <p className="text-lg font-semibold flex items-center space-x-2 break-words whitespace-normal">
              <Mail className="w-5 h-5 text-blue-600 flex-shrink-0" />
              <a 
                href="mailto:headofhumanresourcesmanagement@securetrustsinsure.com"
                className="hover:underline text-blue-600 break-all"
              >
                headofhumanresourcesmanagement@securetrustsinsure.com
              </a>
            </p>
          </div>

          <div>
            <h3 className="font-medium text-sm text-blue-500">Mobile Number</h3>
            <p className="text-lg font-semibold flex items-center space-x-2">
              <Phone className="w-5 h-5 text-green-600 flex-shrink-0" />
              <span>[+1 283-212-0622]</span>
            </p>
          </div>
        </div>

        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="mt-6 text-center font-medium text-blue-800"
        >
          SEND YOUR RESUME TO THE ABOVE MAIL OR MOBILE NUMBER
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hrm;
