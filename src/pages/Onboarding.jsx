// components/OnboardingRoles.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const OnboardingData = [
  {
    title: 'Live chat Support',
    description: 'Provide real-time support to customers via chat. Must be quick, courteous, and efficient in handling queries.',
    link: '/chatsupport',
  },
  {
    title: 'Billings and Claim Support Agent',
    description: 'Assist customers with billing issues and insurance claim processes. Requires knowledge of insurance procedures.',
    link: '/billingandclaim',
  },
  {
    title: 'Customer Service Representative',
    description: 'Handle calls, respond to inquiries, and ensure customer satisfaction across all support channels.',
    link: '/customerservice',
  },
  {
    title: 'Virtual Assistant',
    description: 'Provide administrative support remotely. Tasks include calendar management, email sorting, and document prep.',
    link: '/virtualassistant',
  },
  {
    title: 'Data Entry Specialist',
    description: 'Input, update, and maintain accurate insurance-related data in digital systems. High attention to detail required.',
    link: '/dataentry',
  },
  {
    title: 'Social Media Marketer',
    description: 'Manage and grow our online presence. Create content, run campaigns, and engage with audiences.',
    link: '/socialmedia',
  },
];

const Onboarding = () => {
  return (
    <div className="p-4 md:p-10 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Onboarding Roles</h2>
      <div className="space-y-6">
        {OnboardingData.map((role, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white shadow-md rounded-xl p-6 border"
          >
            {role.link ? (
              <Link to={role.link}>
                <h3 className="text-xl font-semibold mb-2 text-blue-600 hover:underline">{role.title}</h3>
              </Link>
            ) : (
              <h3 className="text-xl font-semibold mb-2">{role.title}</h3>
            )}
            <p className="text-gray-700">{role.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};



export default Onboarding;