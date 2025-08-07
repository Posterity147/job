import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const EmployeeLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logging in with:', { email, password });
    // Add your backend API login logic here
  };

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-gray-100 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="max-w-md w-full bg-white shadow-lg rounded-2xl p-8 space-y-6">
        <h2 className="text-2xl font-bold text-center text-blue-700">Employee Dashboard Login</h2>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
<Link to='/onboarding'>
    <motion.button
    
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      type="submit"
      className="w-full py-2 px-4 bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:bg-blue-800 transition"
    >
      Login
    </motion.button>
   </Link>
        </form>

        <div className="text-center text-sm text-gray-500">
          <p>Forgot password? <a href="#" className="text-blue-600 hover:underline">Reset here</a></p>
        </div>
      </div>
    </motion.div>
  );
};

export default EmployeeLogin;
