import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Quote = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    insuranceType: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Quote Request:', formData);
    // You can send this to a backend or email service
    alert('Quote request submitted!');
  };

  return (
    <motion.div
      className="bg-white p-8 rounded-2xl shadow-lg max-w-xl mx-auto my-10"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-6 text-blue-700">Get a Free Insurance Quote</h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <select
          name="insuranceType"
          value={formData.insuranceType}
          onChange={handleChange}
          className="w-full px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="">Select Insurance Type</option>
          <option value="Auto">Auto Insurance</option>
          <option value="Life">Life Insurance</option>
          <option value="Health">Health Insurance</option>
          <option value="Home">Home Insurance</option>
          <option value="Business">Business Insurance</option>
        </select>

        <textarea
          name="message"
          placeholder="Any specific concerns or needs?"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <motion.button
          whileHover={{ scale: 1.05 }}
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg w-full font-semibold hover:bg-blue-700 transition duration-300"
        >
          Submit Quote Request
        </motion.button>
      </form>
    </motion.div>
  );
};

export default Quote;
