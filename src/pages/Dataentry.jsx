// components/DataEntrySpecialistInfo.jsx
import React from 'react';
import { motion } from 'framer-motion';

const DataEntry= () => (
  <div className="max-w-5xl mx-auto p-6 space-y-6">
    <motion.h1 
      className="text-3xl md:text-4xl font-bold text-center text-blue-800"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      What Does a Data Entry Specialist Do?
    </motion.h1>

    <motion.div 
      className="bg-white p-6 rounded-xl shadow-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Overview</h2>
      <p className="text-gray-700 leading-7">
        A <strong>Data Entry Specialist</strong> is responsible for entering, updating, and maintaining accurate data in company databases, spreadsheets, and internal systems. In insurance companies, this role ensures that client, claim, billing, and policy records are consistently up to date and error-free.
        <br /><br />
        Precision and speed are vital, as the information handled is often time-sensitive and directly tied to customer service, claims processing, and financial records.
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
        <li>Accurately enter data into digital systems from paper or electronic sources.</li>
        <li>Review and verify data for errors or inconsistencies.</li>
        <li>Maintain confidentiality and ensure data security.</li>
        <li>Organize and file digital and physical documents systematically.</li>
        <li>Collaborate with claims and billing departments for real-time updates.</li>
        <li>Assist in generating periodic reports and records.</li>
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
        <li>Typing speed of 45+ words per minute with high accuracy.</li>
        <li>Experience with Microsoft Excel, Google Sheets, and data software.</li>
        <li>Attention to detail and commitment to accuracy.</li>
        <li>Organizational and multitasking abilities.</li>
        <li>Familiarity with CRM and data entry platforms.</li>
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
          <a href="https://www.youtube.com/watch?v=XOx2lO6ydGk&t=148s" target="_blank" rel="noopener noreferrer" className="underline">
            Data Entry Step by steps for Beginners – YouTube
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=wdNl0-IdXnY" target="_blank" rel="noopener noreferrer" className="underline">
            Automated Data Entry – YouTube
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=JMbMn7gy82I" target="_blank" rel="noopener noreferrer" className="underline">
            Data Entry Form in Excel – YouTube
          </a>
        </li>
      </ul>
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
          <a href="https://www.thebalancemoney.com/data-entry-job-description-2061862" target="_blank" rel="noopener noreferrer" className="underline">
            The Balance: Data Entry Job Description and Duties
          </a>
        </li>
        <li>
          <a href="https://www.upwork.com/resources/data-entry-skills" target="_blank" rel="noopener noreferrer" className="underline">
            Upwork: Data Entry Skills for Freelancers
          </a>
        </li>
      </ul>
    </motion.div>
  </div>
);

export default DataEntry;
