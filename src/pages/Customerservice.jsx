// components/CustomerServiceInfo.jsx
import React from 'react';
import { motion } from 'framer-motion';

const CustomerService = () => (
  <div className="max-w-5xl mx-auto p-6 space-y-6">
    <motion.h1 
      className="text-3xl md:text-4xl font-bold text-center text-blue-800"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      What Does a Customer Service Representative Do?
    </motion.h1>

    <motion.div 
      className="bg-white p-6 rounded-xl shadow-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Overview</h2>
      <p className="text-gray-700 leading-7">
        A <strong>Customer Service Representative (CSR)</strong> is a frontline communicator who manages customer inquiries, resolves complaints, and ensures client satisfaction. Whether over the phone, email, or live chat, CSRs handle diverse customer needs, provide product or service information, and process orders or returns.
        <br /><br />
        Key traits for success include empathy, patience, problem-solving skills, and a deep understanding of the company’s services and procedures. They act as the bridge between the company and its customers.
      </p>
    </motion.div>

    <motion.div 
      className="bg-blue-50 p-6 rounded-xl shadow-inner"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <h3 className="text-xl font-semibold mb-3 text-blue-700">Key Responsibilities</h3>
      <ul className="list-disc pl-6 text-gray-700 space-y-2">
        <li>Respond to customer inquiries via phone, email, or chat.</li>
        <li>Resolve billing issues, account updates, and complaints.</li>
        <li>Use CRM software to log customer interactions accurately.</li>
        <li>Provide support with empathy, patience, and professionalism.</li>
        <li>Escalate complex problems to supervisors or technical departments.</li>
      </ul>
    </motion.div>

    <motion.div 
      className="bg-white p-6 rounded-xl shadow-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
    >
      <h3 className="text-xl font-semibold mb-3 text-indigo-700">Skills & Tools</h3>
      <ul className="list-disc pl-6 text-gray-700 space-y-2">
        <li>Excellent verbal and written communication skills.</li>
        <li>Proficiency in CRM systems like Zendesk, HubSpot, or Salesforce.</li>
        <li>Time management and ability to multitask.</li>
        <li>Conflict resolution and emotional intelligence.</li>
      </ul>
    </motion.div>

    <motion.div
      className="bg-white p-6 rounded-xl shadow-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.7 }}
    >
      <h3 className="text-xl font-semibold mb-3 text-green-700">Watch & Learn 📺</h3>
      <ul className="list-disc pl-6 text-blue-600 space-y-2">
        <li>
          <a href="https://www.youtube.com/watch?v=a99gQn9pkOM" target="_blank" rel="noopener noreferrer" className="underline">
            Real Day as a Customer Service (Interview + Job Duties)
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=tn0veQ7_stI" target="_blank" rel="noopener noreferrer" className="underline">
            What is Customer services | Real Call Center Tips
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=SsNfAOTZNZY" target="_blank" rel="noopener noreferrer" className="underline">
            Customer services training course
          </a>
          </li>
      </ul>
    </motion.div>

    <motion.div
      className="bg-blue-100 p-6 rounded-xl shadow-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.9 }}
    >
      
     
    </motion.div>

    <motion.div
      className="bg-white p-6 rounded-xl shadow"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.1 }}
    >
      <h3 className="text-xl font-semibold mb-3 text-red-700">Read More 📚</h3>
      <ul className="list-disc pl-6 text-red-600 space-y-2">
        <li>
          <a href="https://www.zendesk.com/blog/customer-service-skills/" target="_blank" rel="noopener noreferrer" className="underline">
            Zendesk: Top Customer Service Skills
          </a>
        </li>
        <li>
          <a href="https://www.helpscout.com/blog/customer-service-skills/" target="_blank" rel="noopener noreferrer" className="underline">
            HelpScout: The 15 Most Important Customer Service Skills
          </a>
        </li>
        <li>
          <a href="https://www.nice.com/engage/blog/how-to-improve-customer-service-2084/" target="_blank" rel="noopener noreferrer" className="underline">
            NICE: How to Improve Your Customer Service Experience
          </a>
        </li>
      </ul>
    </motion.div>
  </div>
);

export default CustomerService;
