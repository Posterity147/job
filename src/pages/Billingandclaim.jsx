// components/BillingClaimSupportInfo.jsx
import React from 'react';
import { motion } from 'framer-motion';

const BillingClaim = () => (
  <div className="max-w-5xl mx-auto p-6 space-y-6">
    <motion.h1 
      className="text-3xl md:text-4xl font-bold text-center text-blue-800"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      What Does a Billing and Claim Support Agent Do?
    </motion.h1>

    <motion.div 
      className="bg-white p-6 rounded-xl shadow-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Overview</h2>
      <p className="text-gray-700 leading-7">
        A <strong>Billing and Claim Support Agent</strong> plays a crucial role in ensuring customers understand their insurance bills, payments, and the process of filing and tracking claims. They act as a liaison between the customer and the insurance company, helping to interpret billing statements, correct discrepancies, and guide users through claim submission or appeals.
        <br /><br />
        This role requires a good understanding of insurance terminology, billing cycles, payment methods, claim forms, reimbursement processes, and compliance. Agents must be detailed, patient, and highly organized to handle sensitive financial and medical information securely and accurately.
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
        <li>Explain billing charges, deductibles, and insurance coverage to customers.</li>
        <li>Guide customers in submitting and tracking insurance claims.</li>
        <li>Verify policy information and ensure claim forms are completed accurately.</li>
        <li>Resolve billing discrepancies and initiate refunds or corrections.</li>
        <li>Maintain detailed records of claim status, calls, and billing interactions.</li>
        <li>Collaborate with underwriters, adjusters, and other departments.</li>
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
        <li>Familiarity with insurance billing and claims terminology (e.g., CPT, ICD codes).</li>
        <li>Experience using systems like ClaimCenter, Guidewire, or medical billing software.</li>
        <li>Knowledge of HIPAA and data privacy regulations.</li>
        <li>Excellent documentation and problem-solving skills.</li>
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
          <a href="https://www.youtube.com/watch?v=uXV-aOs2_oo" target="_blank" rel="noopener noreferrer" className="underline">
            A day in the life of a claim Rep - YouTube
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=aeWGQqp-M70" target="_blank" rel="noopener noreferrer" className="underline">
             A day in the life of a claim Rep
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
          <a href="https://www.investopedia.com/terms/i/insurance-claim.asp" target="_blank" rel="noopener noreferrer" className="underline">
            Investopedia: Understanding Insurance Claims
          </a>
        </li>
        <li>
          <a href="https://www.verywellhealth.com/what-is-medical-billing-2317141" target="_blank" rel="noopener noreferrer" className="underline">
            Verywell Health: Medical Billing Basics
          </a>
        </li>
        <li>
          <a href="https://www.insuranceopedia.com/definition/168/billing" target="_blank" rel="noopener noreferrer" className="underline">
            Insuranceopedia: What is Billing in Insurance?
          </a>
        </li>
      </ul>
    </motion.div>
  </div>
);

export default BillingClaim;
