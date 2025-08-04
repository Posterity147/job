// components/Openings.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const jobs = [
  {
    title: 'Live Chat Support',
    description: 'Provide real-time support to customers via chat. Must be quick, courteous, and efficient in handling queries.',
  },
  {
    title: 'Billings and Claim Support Agent',
    description: 'Assist customers with billing issues and insurance claim processes. Requires knowledge of insurance procedures.',
  },
  {
    title: 'Customer Service Representative',
    description: 'Handle calls, respond to inquiries, and ensure customer satisfaction across all support channels.',
  },
  {
    title: 'Virtual Assistant',
    description: 'Provide administrative support remotely. Tasks include calendar management, email sorting, and document prep.',
  },
  {
    title: 'Data Entry Specialist',
    description: 'Input, update, and maintain accurate insurance-related data in digital systems. High attention to detail required.',
  },
  {
    title: 'Social Media Marketer',
    description: 'Manage and grow our online presence. Create content, run campaigns, and engage with audiences.',
  },
];

const Opening = () => {
  return (
    <section className="min-h-screen bg-gradient-to-r from-blue-50 via-white to-blue-100 py-10 px-6 md:px-20">
      <div className="text-center mb-12">
        <motion.h2
          className="text-4xl font-bold text-blue-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Join Our Team
        </motion.h2>
        <p className="text-gray-600 mt-2">Explore current job openings and grow your career with us.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-all duration-300 border border-gray-100"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <h3 className="text-xl font-semibold text-blue-700">{job.title}</h3>
            <p className="text-gray-600 mt-2">{job.description}</p>
          <Link to="/hrm">  <button className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700">
              Apply Now
            </button>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Opening;
