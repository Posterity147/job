// components/Navbar.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const navItems = [
  { name: 'Staffs', path: '/staffs' },
  { name: 'Openings', path: '/openings' },
  { name: 'HRM', path: '/hrm' },
  { name: 'Reviews', path: '/reviews' },
  { name: 'Employee Dashboard', path: '/dashboard' }, // ✅ NEW ITEM
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] shadow-lg sticky top-0 z-50">
      <div className="relative max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.h1
          className="text-3xl font-bold text-white"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link to="/">
            <img className="w-30 h-10" src="https://res.cloudinary.com/dxual7mk3/image/upload/v1754309309/secure_e9p8ua.png" alt="Logo" />
          </Link>
        </motion.h1>
        <p className='text-white'><i>SecureTrustInsure</i></p>

        {/* Hamburger Icon (mobile only) */}
        <div className="lg:hidden">
          {isOpen ? (
            <FiX
              className="text-white text-3xl cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-white text-3xl cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>

        {/* Navigation Menu */}
        <motion.ul
          className={`${
            isOpen ? 'flex' : 'hidden'
          } lg:flex flex-col lg:flex-row items-start lg:items-center gap-6 absolute lg:static top-20 left-0 w-full lg:w-auto bg-[#0f2027] lg:bg-transparent px-6 py-4 lg:p-0 z-50`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {navItems.map((item, idx) => (
            <motion.li
              key={idx}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 250 }}
              className="list-none"
            >
              <Link
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="text-white font-semibold text-lg relative group"
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-400 transition-all group-hover:w-full duration-300"></span>
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </header>
  );
};

export default Navbar;
