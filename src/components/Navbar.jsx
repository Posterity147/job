
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const navItems = [
  { name: 'Staffs', path: '/staffs' },
  { name: 'Openings', path: '/openings' },
  { name: 'HRM', path: '/hrm' },
  { name: 'Reviews', path: '/reviews' },
  { name: 'Employee Dashboard', path: '/dashboard' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo + Title */}
        <div className="flex items-center space-x-4">
          <Link to="/">
            <img
              src="https://res.cloudinary.com/dxual7mk3/image/upload/v1754309309/secure_e9p8ua.png"
              alt="Logo"
              className="w-28 h-auto"
            />
          </Link>
          <span className="text-white text-lg font-medium italic tracking-wide">
            SecureTrustInsure
          </span>
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden">
          {isOpen ? (
            <FiX className="text-white text-3xl cursor-pointer" onClick={() => setIsOpen(false)} />
          ) : (
            <FiMenu className="text-white text-3xl cursor-pointer" onClick={() => setIsOpen(true)} />
          )}
        </div>

        {/* Nav Items */}
        <motion.ul
          className={`${
            isOpen ? 'flex' : 'hidden'
          } lg:flex flex-col lg:flex-row items-start lg:items-center absolute lg:static top-20 left-0 w-full lg:w-auto bg-[#0f2027] lg:bg-transparent px-6 py-4 lg:p-0 z-50 gap-8 lg:gap-10`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {navItems.map((item, idx) => (
            <motion.li
              key={idx}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 250 }}
              className="list-none"
            >
              <Link
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="text-white font-medium text-base tracking-wide hover:text-cyan-300 transition duration-300"
              >
                {item.name}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </header>
  );
};

export default Navbar;


