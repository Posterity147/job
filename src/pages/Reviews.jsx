import React from 'react';
import { motion } from 'framer-motion';

const reviews = [
  {
    name: "Sarah Johnson",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    rating: 5,
    review: "Great customer support and flexible plans. I'm very satisfied with their life insurance policy."
  },
  {
    name: "James Peterson",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    rating: 4,
    review: "Affordable and transparent. The claim process was smooth and hassle-free."
  },
  {
    name: "Emily Roberts",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    rating: 5,
    review: "I feel secure knowing my family is protected. Highly recommend!"
  },
  // ...add more reviews up to 20+ (I'll add more below)
];

while (reviews.length < 22) {
  const id = reviews.length + 1;
  reviews.push({
    name: `User ${id}`,
    image: `https://randomuser.me/api/portraits/${id % 2 === 0 ? 'men' : 'women'}/${id}.jpg`,
    rating: Math.floor(Math.random() * 2) + 4,
    review: "This insurance company offers amazing coverage and their team is very helpful and responsive."
  });
}

const ReviewCard = ({ name, image, review, rating, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-2xl shadow-lg p-6 w-full md:w-[350px] hover:scale-105 transition-transform duration-300"
    >
      <div className="flex items-center gap-4 mb-4">
        <img src={image} alt={name} className="w-14 h-14 rounded-full object-cover border-2 border-blue-500" />
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
          <div className="text-yellow-500">
            {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
          </div>
        </div>
      </div>
      <p className="text-gray-600 text-sm">{review}</p>
    </motion.div>
  );
};

const InsuranceReviews = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 py-10 px-6">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-10"
      >
        What Our Customers Say
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-6">
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} index={index} />
        ))}
      </div>
    </div>
  );
};

export default InsuranceReviews;
