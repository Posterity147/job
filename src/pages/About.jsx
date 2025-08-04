import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Users, Globe, Target, Quote } from 'lucide-react';

const values = [
  {
    icon: <ShieldCheck className="w-10 h-10 text-blue-500 bg-blue-100 p-2 rounded-full shadow-md" />,
    title: 'Trust & Integrity',
    description: 'Our foundation is built on transparency, integrity, and trust with every policyholder.',
  },
  {
    icon: <Users className="w-10 h-10 text-purple-500 bg-purple-100 p-2 rounded-full shadow-md" />,
    title: 'Client-Centric',
    description: 'We listen, understand, and tailor solutions that prioritize your unique needs.',
  },
  {
    icon: <Globe className="w-10 h-10 text-green-500 bg-green-100 p-2 rounded-full shadow-md" />,
    title: 'Global Standards',
    description: 'Secure Trust aligns with global insurance compliance and industry best practices.',
  },
  {
    icon: <Target className="w-10 h-10 text-red-500 bg-red-100 p-2 rounded-full shadow-md" />,
    title: 'Results-Driven',
    description: 'We’re focused on delivering reliable coverage and measurable peace of mind.',
  },
];

const AboutUs = () => {
  return (
    <div className="bg-white py-20 px-6 md:px-20">
      {/* Intro */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
          About <span className="text-blue-600">Secure Trust Insurance</span>
        </h2>
        <p className="text-center text-gray-600 text-lg mb-12 max-w-3xl mx-auto">
          Secure Trust Insurance is more than just a provider — we’re a partner in protecting your financial future.
          With over <strong>7 years of expertise</strong>, our team has proudly supported thousands of individuals,
          families, and businesses through dependable, customized insurance solutions.
        </p>

        {/* Mission + Core Values */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Side */}
          <div className="space-y-8">
            <section>
              <h3 className="text-2xl font-semibold text-gray-700">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To empower lives and safeguard futures through exceptional insurance services delivered with empathy, precision,
                and a deep understanding of your unique needs.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-gray-700">Why Choose Us?</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>7+ years of trusted service</li>
                <li>Tailor-fit insurance plans that evolve with your lifestyle</li>
                <li>Dedicated advisors and 24/7 claims assistance</li>
                <li>Quick, transparent, and reliable policy processes</li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-gray-700">Our Vision</h3>
              <p className="text-gray-600">
                To be a global benchmark in providing peace of mind through innovative, inclusive, and sustainable insurance.
              </p>
            </section>
          </div>

          {/* Right Side - Core Values */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="bg-gradient-to-br from-blue-50 to-purple-100 rounded-2xl shadow-xl p-8"
          >
            <h4 className="text-xl font-semibold text-blue-600 mb-6 text-center">Our Core Values</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="mt-1">{value.icon}</div>
                  <div>
                    <h5 className="font-semibold text-gray-800">{value.title}</h5>
                    <p className="text-sm text-gray-600">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Legacy */}
        <section className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white border-l-4 border-blue-600 pl-6 py-6 shadow-md rounded-xl"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Our Story & Legacy</h3>
            <p className="text-gray-600">
              Founded in 2018 with a vision to make insurance accessible and human, Secure Trust Insurance started as a
              small family-run business. Over the decades, we've grown to become a trusted name in protection and care,
              blending traditional values with modern innovations.
            </p>
          </motion.div>
        </section>

        {/* Quote */}
        <section className="mt-16 text-center relative">
          <Quote className="w-12 h-12 text-blue-500 mx-auto mb-4" />
          <blockquote className="italic text-gray-700 text-xl max-w-3xl mx-auto">
            “Insurance is not just about protection — it’s about peace of mind, dignity, and securing dreams.”
          </blockquote>
          <cite className="block mt-4 text-blue-600 font-medium">— CEO, Secure Trust Insurance</cite>
        </section>

        {/* Leadership */}
        <section className="mt-20">
          <h3 className="text-3xl font-semibold text-center text-gray-800 mb-10">Our Leadership</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Delvin Lang', role: 'Chief Executive Officer', img: '/ceo.jpg' },
              { name: 'Michael Tapley', role: 'Operations Manager', img: 'https://randomuser.me/api/portraits/men/32.jpg' },
              { name: 'Jessica Walters', role: 'Claims Supervisor', img: 'https://randomuser.me/api/portraits/women/68.jpg' },
            ].map((person, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-xl shadow-lg p-4 hover:shadow-xl transition duration-300"
              >
                <div className="flex flex-col items-center">
                  <img
                    src={person.img}
                    alt={person.name}
                    className="w-40 h-40 object-cover rounded-full border-4 border-blue-500 shadow-md hover:scale-105 transition-transform duration-300"
                  />
                  <h4 className="text-lg font-semibold text-gray-800 mt-4">{person.name}</h4>
                  <p className="text-sm text-gray-600">{person.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default AboutUs;
