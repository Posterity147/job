// components/InsuranceFAQ.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What is an insurance premium?",
    answer: "An insurance premium is the amount you pay to your insurance company in exchange for coverage. It can be paid monthly, quarterly, or annually depending on your policy.",
  },
  {
    question: "What is a deductible?",
    answer: "A deductible is the amount you agree to pay out-of-pocket before your insurance coverage kicks in. Higher deductibles usually mean lower premiums.",
  },
  {
    question: "Do I need life insurance if I'm single?",
    answer: "Life insurance can still be beneficial for covering debts, funeral expenses, or providing support to loved ones, even if you're single.",
  },
  {
    question: "What does home insurance cover?",
    answer: "Home insurance typically covers damage to your home due to fire, theft, vandalism, and certain natural disasters. It can also cover liability for injuries on your property.",
  },
  {
    question: "Is health insurance mandatory?",
    answer: "In many countries, having health insurance is required by law or incentivized. Even when not mandatory, it is highly recommended to avoid high medical bills.",
  },
  {
    question: "Can I have more than one insurance policy?",
    answer: "Yes, you can have multiple insurance policies like health, auto, life, and property insurance. In fact, bundling them may save money.",
  },
  {
    question: "What is term life insurance?",
    answer: "Term life insurance provides coverage for a set period (e.g., 10, 20, 30 years) and pays a benefit if the insured dies during that term.",
  },
  {
    question: "How can I lower my car insurance rates?",
    answer: "You can lower your rates by maintaining a clean driving record, bundling policies, raising your deductible, or taking a defensive driving course.",
  },
];

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-100 py-20 px-6 md:px-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Frequently Asked <span className="text-blue-600">Questions</span>
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-xl p-5 shadow hover:shadow-md transition-all"
            >
              <button
                className="flex justify-between items-center w-full text-left"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-medium text-gray-800">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-blue-600" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-blue-600" />
                )}
              </button>

              {openIndex === index && (
                <motion.p
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 text-gray-600 text-sm"
                >
                  {faq.answer}
                </motion.p>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Faqs;
