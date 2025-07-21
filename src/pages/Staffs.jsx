import React from 'react';
import { motion } from 'framer-motion';

const staffMembers = [
  {
    name: 'John Doe',
    title: 'Chief Executive Officer (CEO)',
    image: './ceo.jpg',
    details: 'Visionary leader with 40+ years in the insurance industry, driving growth and innovation.',
  },
  {
    name: 'Michael Tapley',
    title: 'Operations Manager',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    details: 'Oversees daily operations and ensures the company’s policies are efficiently implemented.',
  },
  {
    name: 'Jessica walter',
    title: 'Claims Supervisor',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    details: 'Manages all claim processes ensuring fair and fast settlements.',
  },
  {
    name: 'Samuel lawn',
    title: 'Underwriting Analyst',
    image: 'https://randomuser.me/api/portraits/men/85.jpg',
    details: 'Specialist in risk assessment and premium calculations.',
  },
  {
    name: 'maggies Adams',
    title: 'Customer Relations Officer',
    image: 'https://randomuser.me/api/portraits/women/29.jpg',
    details: 'Dedicated to maintaining strong client relationships and satisfaction.',
  },
  {
    name: 'John Peter',
    title: 'IT Support Engineer',
    image: 'https://randomuser.me/api/portraits/men/77.jpg',
    details: 'Ensures our digital systems stay online, secure, and up to date.',
  },
  {
    name: 'Grace joe',
    title: 'Office Assistant',
    image: 'https://randomuser.me/api/portraits/women/50.jpg',
    details: 'Handles admin tasks and keeps the office running smoothly.',
  },
];

const Staffs = () => {
  return (
    <div className="py-16 bg-gradient-to-r from-blue-50 to-white px-4 sm:px-8">
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">Meet Our Top Staff</h2>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {staffMembers.map((staff, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition duration-300 flex flex-col items-center text-center"
          >
            <img
              src={staff.image}
              alt={staff.name}
              className="w-24 h-24 rounded-full object-cover border-4 border-blue-500 mb-4"
            />
            <h3 className="text-xl font-semibold text-blue-800">{staff.name}</h3>
            <p className="text-sm text-gray-600 mb-2">{staff.title}</p>
            <p className="text-gray-500 text-sm">{staff.details}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Staffs;
