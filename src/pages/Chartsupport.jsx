// components/LiveChatSupportInfo.jsx
import React from 'react';
import { motion } from 'framer-motion';

const LiveChatSupportInfo = () => (
  <div className="max-w-5xl mx-auto p-6 space-y-6">
    <motion.h1 
      className="text-3xl md:text-4xl font-bold text-center text-blue-800"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      What Does a Live Chat Support Agent Do?
    </motion.h1>

    <motion.div 
      className="bg-white p-6 rounded-xl shadow-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Overview</h2>
      <p className="text-gray-700 leading-7">
        A <strong>Live Chat Support Agent</strong> is a key front-line professional responsible for offering real-time assistance to customers via messaging interfaces. They provide support, answer inquiries, resolve issues, and guide users — all through text-based platforms integrated into websites or apps.
        <br /><br />
        This role demands strong typing skills, emotional intelligence, multitasking ability, and outstanding written communication. Agents often juggle multiple chats simultaneously, follow scripts or policies, maintain brand tone, and use tools like CRMs or AI bots.
        <br /><br />
        They ensure customer satisfaction, handle feedback, document interactions, and escalate technical problems as needed. Their role is essential in improving customer retention, boosting trust, and reducing support costs.
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
        <li>Respond promptly to customer inquiries using live chat tools.</li>
        <li>Guide users through product setup, usage, or troubleshooting.</li>
        <li>Log chat details in ticketing systems (e.g., Zendesk, Freshdesk).</li>
        <li>Escalate unresolved issues to the appropriate teams.</li>
        <li>Assist with chatbot integration or FAQ content improvement.</li>
        <li>Measure satisfaction scores (CSAT), chat durations, and resolutions.</li>
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
        <li>Typing speed of at least 40–60 WPM.</li>
        <li>Proficiency with CRM platforms like Intercom, LiveChat, or HubSpot.</li>
        <li>Empathy, active listening, and written clarity.</li>
        <li>Basic technical troubleshooting skills.</li>
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
          <a href="https://www.youtube.com/watch?v=OmyN5Lm36ZY" target="_blank" rel="noopener noreferrer" className="underline">
            How to Excel a Live Chat Support Agent
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=fX_KeM5IMqk" target="_blank" rel="noopener noreferrer" className="underline">
            10 Tips for Chat Agents - YouTube
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=7DYe1B2Fwzk" target="_blank" rel="noopener noreferrer" className="underline">
            Chat Etiquette & Handling Angry Customers
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
          <a href="https://cdn2.hubspot.net/hubfs/543330/EBooks/How-To%20Guide-Live%20Chat%20Customer%20Support.pdf?utm_source=chatgpt.com/" target="_blank" rel="noopener noreferrer" className="underline">
            How-To Guide: Live Chat Customer Support by Olark
          </a>
        </li>
        <li>
          <a href="https://argyleforum.com/wp-content/uploads/2020/06/Live_Chat_Handbook_Moxie1.pdf?utm_source=chatgpt.com/" target="_blank" rel="noopener noreferrer" className="underline">
            Live Chat Handbook by Moxie Software
          </a>
        </li>
        <li>
          <a href="https://www.userlike.com/en/blog/live-chat-support?utm_source=chatgpt.com/" target="_blank" rel="noopener noreferrer" className="underline">
            Complete Beginner Guide to Live Chat Support by Userlike
          </a>
        </li>
        <li>
          <a href="https://www.slideshare.net/slideshow/comprehensive-guide-to-live-chat-support-pdf/270799404?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="underline">
            Comprehensive Guide to Live Chat Support by Kayako
          </a>
        </li>
      </ul>
    </motion.div>
  </div>
);

export default LiveChatSupportInfo;
