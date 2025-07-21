import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ClaimForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    policyNumber: '',
    insuranceType: '',
    reason: '',
    description: '',
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'file') {
      setFormData({ ...formData, file: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Claim Submitted:', formData);
    alert('Your insurance claim has been submitted!');
    // Here you can connect to a backend, email service, or database
  };

  return (
    <motion.div
      className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl mx-auto my-10"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold text-blue-700 mb-6">Insurance Claim Form</h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          required
          value={formData.fullName}
          onChange={handleChange}
          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          name="policyNumber"
          placeholder="Policy Number"
          required
          value={formData.policyNumber}
          onChange={handleChange}
          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select
          name="insuranceType"
          required
          value={formData.insuranceType}
          onChange={handleChange}
          className="w-full px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select Insurance Type</option>
          <option value="Health">Health Insurance</option>
          <option value="Auto">Auto Insurance</option>
          <option value="Life">Life Insurance</option>
          <option value="Home">Home Insurance</option>
          <option value="Business">Business Insurance</option>
        </select>

        <input
          type="text"
          name="reason"
          placeholder="Claim Reason (e.g., accident, illness, damage)"
          required
          value={formData.reason}
          onChange={handleChange}
          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <textarea
          name="description"
          placeholder="Describe the situation in detail..."
          rows={4}
          required
          value={formData.description}
          onChange={handleChange}
          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="file"
          name="file"
          accept="image/*,.pdf"
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg bg-gray-50 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200"
        />

        <motion.button
          type="submit"
          whileHover={{ scale: 1.03 }}
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
        >
          Submit Claim
        </motion.button>
      </form>
    </motion.div>
  );
};

export default ClaimForm;
