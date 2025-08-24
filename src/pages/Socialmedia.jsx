// components/SocialMediaMarketerInfo.jsx
import React from 'react';
import { motion } from 'framer-motion';

const SocialMedia = () => (
  <div className="max-w-5xl mx-auto p-6 space-y-6">
    <motion.h1 
      className="text-3xl md:text-4xl font-bold text-center text-blue-800"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      What Does a Social Media Marketer Do?
    </motion.h1>

    <motion.div 
      className="bg-white p-6 rounded-xl shadow-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Overview</h2>
      <p className="text-gray-700 leading-7">
        A <strong>Social Media Marketer</strong> is responsible for managing a company’s presence across social platforms like Facebook, Twitter (X), Instagram, LinkedIn, TikTok, and others. Their role is not just about posting content, but also about engaging with audiences, increasing brand awareness, running paid ad campaigns, tracking performance, and aligning content strategy with business goals.
        <br /><br />
        In an insurance company, they help build trust, educate the public, attract clients, and handle reputation management online. They stay up to date with social trends, platform algorithms, and best practices to maximize visibility and engagement.
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
        <li>Create and schedule content for various social media channels.</li>
        <li>Develop strategies to grow followers and increase engagement.</li>
        <li>Monitor comments, mentions, and inboxes, and engage with followers.</li>
        <li>Run and optimize paid advertising campaigns (Facebook Ads, etc.).</li>
        <li>Track analytics to evaluate campaign performance and ROI.</li>
        <li>Collaborate with designers and copywriters on creative content.</li>
      </ul>
    </motion.div>

    <motion.div 
      className="bg-white p-6 rounded-xl shadow-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
    >
      <h3 className="text-xl font-semibold mb-3 text-indigo-700">Core Skills</h3>
      <ul className="list-disc pl-6 text-gray-700 space-y-2">
        <li>Strong copywriting and content planning abilities.</li>
        <li>Proficiency in tools like Canva, Buffer, Hootsuite, Meta Business Suite.</li>
        <li>Understanding of SEO, hashtags, trends, and audience targeting.</li>
        <li>Analytical mindset and ability to use data for strategy.</li>
        <li>Creativity, consistency, and strong visual communication skills.</li>
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
          <a href="https://www.youtube.com/watch?v=y-n1RUbYq6Q" target="_blank" rel="noopener noreferrer" className="underline">
            How to Become a Social Media Manager – YouTube
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=WP4e6BeTa08" target="_blank" rel="noopener noreferrer" className="underline">
            what do social media manager do?– YouTube
          </a>
        </li>
         <li>
          <a href="https://www.youtube.com/watch?v=glrnJtq-mq8" target="_blank" rel="noopener noreferrer" className="underline">
            Surviving as a social media manager– YouTube
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
          <a href="https://socialmarketingwriting.com/wp-content/uploads/2016/04/socialmarketingwriting.com-The-Complete-Guide-to-Being-a-Successful-Social-Media-Manager.pdf?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="underline">
            The Complete Guide to Being a Successful Social Media Manager
          </a>
        </li>
        <li>
          <a href="https://carta.fiu.edu/gsc-creative/wp-content/uploads/sites/46/2020/02/Social-Content-and-Media-Planning-eBook.pdf?utm_source=chatgpt.com/" target="_blank" rel="noopener noreferrer" className="underline">
            Social Content and Media Planning -
          </a>
        </li>
      </ul>
    </motion.div>
  </div>
);

export default SocialMedia;
