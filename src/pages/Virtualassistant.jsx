// components/VirtualAssistantInfo.jsx
import React from 'react';
import { motion } from 'framer-motion';

const VirtualAssistant= () => (
  <div className="max-w-5xl mx-auto p-6 space-y-6">
    <motion.h1 
      className="text-3xl md:text-4xl font-bold text-center text-blue-800"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      What Does a Virtual Assistant Do?
    </motion.h1>

    <motion.div 
      className="bg-white p-6 rounded-xl shadow-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Overview</h2>
      <p className="text-gray-700 leading-7">
        A <strong>Virtual Assistant (VA)</strong> provides remote administrative and organizational support to businesses or professionals. Their tasks can range from managing emails and calendars to handling data entry, research, customer communication, and project coordination.
        <br /><br />
        VAs help increase productivity by taking over routine and time-consuming tasks, allowing executives or teams to focus on higher-level work. The role requires strong communication, self-discipline, and multitasking skills.
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
        <li>Managing and responding to emails and correspondence.</li>
        <li>Scheduling meetings, managing calendars, and organizing appointments.</li>
        <li>Data entry, file management, and maintaining cloud storage systems.</li>
        <li>Customer follow-ups and handling inquiries when required.</li>
        <li>Online research and compiling relevant data for projects.</li>
        <li>Creating reports, presentations, and internal documents.</li>
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
        <li>Proficiency with tools like Google Workspace, MS Office, and Slack.</li>
        <li>Excellent written and verbal communication.</li>
        <li>Organizational and time management skills.</li>
        <li>Familiarity with task managers like Trello, Asana, or ClickUp.</li>
        <li>Discretion and confidentiality handling sensitive information.</li>
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
          <a href="https://www.youtube.com/watch?v=D2Q42APFhwk" target="_blank" rel="noopener noreferrer" className="underline">
            How to Become a Virtual Assistant (Complete Guide) - YouTube
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=YUrMGJeY0eo" target="_blank" rel="noopener noreferrer" className="underline">
            Complete steps on how to become a virtual Assistant - YouTube
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
          <a href="https://www.freelancer.com/articles/skills/virtual-assistant-job-description" target="_blank" rel="noopener noreferrer" className="underline">
            Freelancer: Virtual Assistant Job Description
          </a>
        </li>
        <li>
          <a href="https://blog.hubstaff.com/virtual-assistant-skills/" target="_blank" rel="noopener noreferrer" className="underline">
            Hubstaff: 13 Virtual Assistant Skills You Need to Succeed
          </a>
        </li>
      </ul>
    </motion.div>
  </div>
);

export default VirtualAssistant;
