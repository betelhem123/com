import React from 'react';
import { motion } from 'framer-motion';

import beachShoe from '../assets/images/shoe-front.png';
import homeShoe from '../assets/images/shoe-front.png';
import parentsShoe from '../assets/images/shoe-front.png';
import weddingShoe from '../assets/images/shoe-front.png';
import officeShoe from'../assets/images/shoe-front.png';
import casualShoe from '../assets/images/shoe-front.png';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  hover: {
    scale: 1.06,
    rotateX: 8,
    rotateY: 8,
    boxShadow: '0 15px 25px rgba(0,0,0,0.3)',
    transition: { duration: 0.3, type: 'spring', stiffness: 250 },
  },
};

const Shop = () => {
  const occasions = [
    {
      id: 1,
      title: 'Beach Vibes',
      description:
        'Step lightly into sunny days with Zala’s breathable beach shoes. Crafted to keep you comfortable by the shore, their water-resistant design lets you feel the sand beneath your feet, while stylishly blending form and function.',
      image: beachShoe,
      bgColor: 'bg-gray-800',
      textColor: 'text-gray-200',
    },
    {
      id: 2,
      title: 'Comfy Homewear',
      description:
        'Wrap your feet in warmth and softness with our plush home shoes. Designed for relaxation, these shoes deliver the perfect balance between cushioning and breathability, making every stay-at-home day a cozy retreat.',
      image: homeShoe,
      bgColor: 'bg-gray-900',
      textColor: 'text-gray-300',
    },
    {
      id: 3,
      title: 'For Parents',
      description:
        'Engineered for busy days and bustling schedules, our parent shoes offer durability and support without compromising on style. Whether it’s school runs or weekend errands, keep moving comfortably and confidently.',
      image: parentsShoe,
      bgColor: 'bg-gray-800',
      textColor: 'text-gray-200',
    },
   
    {
      id: 5,
      title: 'Elegant Weddings',
      description:
        'Celebrate in style with our handcrafted wedding shoes — where comfort meets sophistication. Designed for long days and memorable nights, these shoes blend classic elegance with modern touches.',
      image: weddingShoe,
      bgColor: 'bg-gray-800',
      textColor: 'text-yellow-300',
    },
    {
      id: 6,
      title: 'Office Essentials',
      description:
        'Step into professionalism with our sleek office shoes, combining sharp design with all-day comfort. Perfect for meetings, presentations, or daily work life, these shoes keep you polished from desk to dinner.',
      image: officeShoe,
      bgColor: 'bg-gray-900',
      textColor: 'text-gray-300',
    },
    {
      id: 7,
      title: 'Casual Classics',
      description:
        'Effortless style for everyday wear. Our casual collection features versatile shoes that pair with jeans or chinos, designed to keep you comfortable on city walks, coffee runs, or weekend hangouts.',
      image: casualShoe,
      bgColor: 'bg-gray-800',
      textColor: 'text-gray-200',
    },
  ];

  return (
    <section className="min-h-screen bg-white text-white px-6 md:px-20 py-16 font-poppins">
      <h1 className="text-5xl font-extrabold mb-14 text-center text-white drop-shadow-lg">
        Shoes for Every Occasion
      </h1>

      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        {occasions.map(({ id, title, description, image, bgColor, textColor }) => (
          <motion.div
            key={id}
            className={`relative rounded-3xl p-8 flex flex-col items-center justify-center cursor-pointer shadow-xl transform-gpu perspective-1500 ${bgColor}`}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            <motion.img
              src={image}
              alt={title}
              className="w-44 h-44 rounded-xl shadow-lg mb-6"
              whileHover={{ rotateY: 12, rotateX: 12, scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 220, damping: 18 }}
            />
            <h2 className={`text-3xl font-semibold mb-4 text-center ${textColor} drop-shadow-md`}>
              {title}
            </h2>
            <p className={`text-center text-sm md:text-base max-w-xl leading-relaxed tracking-wide ${textColor}`}>
              {description}
            </p>
            <div className="absolute inset-0 rounded-3xl opacity-10 blur-3xl -z-10 bg-gradient-to-br from-gray-600 via-gray-700 to-gray-900"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Shop;
