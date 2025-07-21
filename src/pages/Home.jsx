import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Life Insurance',
    description: 'Comprehensive life plans for your family’s financial security. Includes term life, whole life, and universal life options tailored to your needs. Also includes add-ons like accidental death benefits and critical illness coverages.',
  },
  {
    title: 'Health Insurance',
    description: 'Affordable plans with access to top medical care providers, covering hospitalization, surgeries, preventive care, prescription drugs, mental health services, and wellness programs.',
  },
  {
    title: 'Auto Insurance',
    description: 'Reliable coverage for personal or commercial vehicles. Options include liability, collision, comprehensive, and uninsured motorist coverage. Roadside assistance and rental car reimbursement available.',
  },
  {
    title: 'Home Insurance',
    description: 'Protect your property from unexpected events such as fire, theft, floods, and natural disasters. Includes building, contents, and personal liability protection.',
  },
  {
    title: 'Travel Insurance',
    description: 'Emergency medical coverage, trip cancellation protection, and travel assistance services worldwide. Covers baggage loss, flight delays, and emergency evacuations.',
  },
  {
    title: 'Business Insurance',
    description: 'Secure your business with general liability, professional indemnity, workers compensation, and business interruption coverage. Custom plans for SMEs and large enterprises.',
  },
  {
    title: 'Pet Insurance',
    description: 'Affordable care plans for your pets covering illness, injuries, routine vet visits, diagnostics, and preventive care. Choose from customizable tiers and vet networks.',
  },
  {
    title: 'Cyber Insurance',
    description: 'Safeguard your digital assets against cyber threats, data breaches, and liability risks. Includes incident response, legal support, and data recovery solutions.',
  },
  {
    title: 'Education Insurance',
    description: 'Secure your child’s future education with savings-linked plans and tuition coverage in case of emergencies.',
  },
  {
    title: 'Marine Insurance',
    description: 'Coverage for cargo, vessels, and marine liabilities. Suitable for import/export businesses and shipping operators.',
  },
];

const insuranceFacts = [
  { term: 'Premium', definition: 'The amount you pay for your insurance policy, typically monthly or annually.' },
  { term: 'Deductible', definition: 'The amount you pay out-of-pocket before your insurance kicks in.' },
  { term: 'Beneficiary', definition: 'A person or entity you designate to receive insurance benefits.' },
  { term: 'Underwriting', definition: 'The process insurers use to assess risk and determine coverage eligibility.' },
  { term: 'Policyholder', definition: 'The person who owns the insurance policy.' },
  { term: 'Rider', definition: 'An add-on to a basic insurance policy that provides additional benefits.' },
];

const testimonials = [
  {
    quote: "Their claim process was quick and transparent. Truly dependable!",
    name: "Jane Williams",
    image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe",
  },
  {
    quote: "I finally feel secure knowing my family's future is protected.",
    name: "Michael Chen",
    image: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7",
  },
];

const moreQuotes = [
  "A policy in hand is peace in heart.",
  "Insurance doesn’t prevent the storm, it gives you shelter.",
  "In a world full of risks, be insured.",
  "Good insurance is a silent partner in your peace of mind.",
];

const LandingPage = () => {
  return (
    <section className="bg-white text-gray-900 w-full overflow-hidden">
      <div className="container mx-auto px-6 py-16 flex flex-col-reverse lg:flex-row items-center gap-12">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-blue-900">
            Your Trusted Partner in Insurance
          </h1>
          <p className="text-lg mb-6 text-gray-700">
            Protecting lives, assets, and businesses for over <span className="text-blue-700 font-semibold">7years</span>. With more than <span className="text-blue-700 font-semibold">50,000 clients</span> nationwide, our commitment to excellence is unmatched.
          </p>
       <Link to="Quote" >  <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-full transition duration-300 shadow-md">
            Get a Quote
          </button> </Link>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className="flex-1">
          <img src="./ins.jpg" alt="Insurance illustration" className="w-full rounded-xl shadow-lg" />
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="py-16 bg-gray-50 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Services</h2>
          <p className="text-gray-600 mb-10">We offer a wide range of insurance solutions tailored to your needs.</p>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <motion.div key={index} whileHover={{ scale: 1.05 }} className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-2 text-blue-700">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="bg-white py-16 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-800 mb-8">Understanding Insurance</h2>
          <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
            Whether you're new to insurance or a seasoned policyholder, understanding key terms can help you make better decisions.
          </p>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {insuranceFacts.map((fact, index) => (
              <motion.div key={index} whileHover={{ scale: 1.03 }} className="bg-gray-50 p-6 rounded-xl shadow">
                <h3 className="text-blue-700 font-semibold text-xl mb-2">{fact.term}</h3>
                <p className="text-gray-700 text-sm">{fact.definition}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="bg-blue-50 py-16 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">Insurance in Action</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <img src="./fam.webp" alt="Family Insurance" className="rounded-xl w-full shadow-md h-60" />
              <p className="mt-4 text-blue-700 font-medium">Protecting Families</p>
            </div>
            <div>
              <img src="./OIPp.webp" alt="Health Insurance" className="rounded-xl w-full shadow-md h-60" />
              <p className="mt-4 text-blue-700 font-medium">Healthcare Coverage</p>
            </div>
            <div>
              <img src="./bus.webp" alt="Business Insurance" className="rounded-xl w-full shadow-md h-60" />
              <p className="mt-4 text-blue-700 font-medium">Business Protection</p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} className="bg-blue-900 text-white py-16 px-6">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Words That Inspire Us</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {moreQuotes.map((quote, idx) => (
              <div key={idx} className="bg-blue-800 rounded-xl p-6 shadow">
                <p className="italic text-lg">“{quote}”</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="bg-blue-700 text-white py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Why Choose Us</h2>
          <div className="flex flex-col md:flex-row justify-center gap-10 text-lg">
            <div>
              <p className="font-semibold text-4xl">7+</p>
              <p>Years of Experience</p>
            </div>
            <div>
              <p className="font-semibold text-4xl">50K+</p>
              <p>Satisfied Clients</p>
            </div>
            <div>
              <p className="font-semibold text-4xl">99%</p>
              <p>Claims Success Rate</p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="bg-white py-16 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">What Our Clients Say</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} whileHover={{ scale: 1.03 }} className="bg-gray-100 rounded-xl p-6 shadow-md">
                <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mx-auto mb-4" />
                <p className="italic text-gray-700 mb-2">"{testimonial.quote}"</p>
                <p className="text-blue-700 font-semibold">— {testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="bg-gray-100 py-16 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Meet Our CEO</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="w-40 h-40 rounded-full bg-gray-300 shadow-inner overflow-hidden">
              <img src="./ceo.jpg" alt="CEO" className="w-full h-full object-cover" />
            </div>
            <div className="max-w-xl text-left">
              <p className="text-black-700 italic text-lg leading-relaxed">
                "Our mission is to provide peace of mind and financial protection to every client. We lead with empathy, integrity, and a deep understanding of what truly matters in life security."
              </p>
              <p className="mt-4 text-blue-800 font-semibold text-right">— Delvin Lang, CEO</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default LandingPage;
