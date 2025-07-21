// components/InsuranceServices.jsx
import React from 'react';
import { motion } from 'framer-motion';
import {
  CarFront,
  Home,
  HeartPulse,
  Briefcase,
  ShieldCheck,
  Plane,
  Smartphone,
  Dog,
  Users,
  Banknote,
  GraduationCap,
  Ship,
  PiggyBank,
  Landmark,
  LifeBuoy,
  Wallet,
  BookUser,
  Building2,
  Waves,
  Globe,
  Factory,
} from 'lucide-react';

const services = [
  {
    icon: <HeartPulse className="w-8 h-8 text-red-500" />,
    title: 'Health Insurance',
    description: 'Comprehensive health coverage including dental, vision, and critical illness.',
  },
  {
    icon: <CarFront className="w-8 h-8 text-yellow-500" />,
    title: 'Auto Insurance',
    description: 'Coverage for vehicles, accidents, theft, liability, and damage.',
  },
  {
    icon: <Home className="w-8 h-8 text-green-600" />,
    title: 'Home Insurance',
    description: 'Safeguard your home against fire, theft, natural disasters, and more.',
  },
  {
    icon: <Briefcase className="w-8 h-8 text-purple-500" />,
    title: 'Business Insurance',
    description: 'Protect your company from financial loss, lawsuits, and employee-related risks.',
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-indigo-500" />,
    title: 'Liability Insurance',
    description: 'Covers personal and commercial liabilities, including general and professional.',
  },
  {
    icon: <Plane className="w-8 h-8 text-blue-500" />,
    title: 'Travel Insurance',
    description: 'Coverage for medical emergencies, trip cancellation, and lost luggage.',
  },
  {
    icon: <Smartphone className="w-8 h-8 text-pink-500" />,
    title: 'Cyber Insurance',
    description: 'Protects businesses and individuals against cyber-attacks and data breaches.',
  },
  {
    icon: <Dog className="w-8 h-8 text-orange-500" />,
    title: 'Pet Insurance',
    description: 'Healthcare coverage for your pets including illness, injury, and vet visits.',
  },
  {
    icon: <Users className="w-8 h-8 text-cyan-600" />,
    title: 'Group & Employee Benefits',
    description: 'Health and life plans tailored for organizations and employee welfare.',
  },
  {
    icon: <Banknote className="w-8 h-8 text-emerald-500" />,
    title: 'Income Protection Insurance',
    description: 'Ensures a steady income if you’re unable to work due to illness or injury.',
  },
  {
    icon: <GraduationCap className="w-8 h-8 text-violet-500" />,
    title: 'Education Insurance',
    description: 'Plan for your child’s future education costs with smart coverage plans.',
  },
  {
    icon: <Ship className="w-8 h-8 text-sky-600" />,
    title: 'Marine Insurance',
    description: 'Covers cargo, ships, and transport against maritime risks.',
  },
  {
    icon: <PiggyBank className="w-8 h-8 text-amber-600" />,
    title: 'Savings & Investment Insurance',
    description: 'Insurance that grows your wealth while keeping you protected.',
  },
  {
    icon: <Landmark className="w-8 h-8 text-lime-500" />,
    title: 'Property Insurance',
    description: 'For commercial or private properties — cover against loss, theft, and damage.',
  },
  {
    icon: <LifeBuoy className="w-8 h-8 text-teal-600" />,
    title: 'Life Insurance',
    description: 'Ensure your loved ones are financially protected in your absence.',
  },
  {
    icon: <Wallet className="w-8 h-8 text-fuchsia-500" />,
    title: 'Microinsurance',
    description: 'Affordable protection for low-income individuals and communities.',
  },
  {
    icon: <BookUser className="w-8 h-8 text-rose-600" />,
    title: 'Professional Indemnity Insurance',
    description: 'Protects professionals against negligence claims or legal disputes.',
  },
  {
    icon: <Building2 className="w-8 h-8 text-yellow-700" />,
    title: 'Commercial Property Insurance',
    description: 'Safeguards your office, warehouse, and equipment from risks.',
  },
  {
    icon: <Waves className="w-8 h-8 text-blue-700" />,
    title: 'Flood Insurance',
    description: 'Specialized coverage against flooding and water-related disasters.',
  },
  {
    icon: <Globe className="w-8 h-8 text-indigo-700" />,
    title: 'International Insurance',
    description: 'Global coverage for expats, students, and travelers.',
  },
  {
    icon: <Factory className="w-8 h-8 text-slate-700" />,
    title: 'Industrial Insurance',
    description: 'Heavy-duty insurance for factories, machinery, and labor liabilities.',
  },
];

const Services = () => {
  return (
    <div className="bg-white py-20 px-6 md:px-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Our <span className="text-blue-600">Insurance Services</span>
        </h2>
        <p className="text-center text-gray-600 text-lg max-w-3xl mx-auto mb-12">
          At Secure Trust Insurance, we offer a wide range of insurance solutions designed to meet the diverse needs
          of individuals, families, and businesses. Explore our most popular services below.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-gray-50 rounded-xl p-6 shadow hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-white rounded-full shadow">{service.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800">{service.title}</h3>
              </div>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Services;
