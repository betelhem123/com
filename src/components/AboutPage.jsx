import React from 'react';
import { motion } from 'framer-motion';

// Image imports (adjust paths as needed)
import growthImg from '../assets/images/shoe-front.png';
import processStep1 from  '../assets/images/shoe-front.png';
import processStep2 from  '../assets/images/1.png';
import processStep3 from  '../assets/images/1.png';
import branchesImg from  '../assets/images/1.png';

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const AboutPage = () => {
  return (
    <div className="bg-neutral-950 text-white">

      {/* Section 1: Establishment & Growth */}
      <motion.section
        className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-24 gap-12 bg-black"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold text-yellow-400">Founded in 2025</h2>
          <p className="text-lg leading-relaxed">
            Zala Footwear started with a dream — two friends determined to revive Ethiopian craftsmanship and create footwear that blends tradition with modern style.
            Our first tiny workshop in Addis Ababa held nothing but passion and two sewing machines. Early days saw long hours, careful stitching, and one shoe at a time.
          </p>
          <p className="text-lg leading-relaxed">
            Through dedication, word of mouth, and a commitment to quality, Zala quickly grew. From just <span className="text-yellow-300 font-semibold">5 artisans</span> in 2025, we now proudly employ over <span className="text-yellow-300 font-semibold">120 skilled workers</span> across multiple departments.
          </p>
          <p className="text-lg leading-relaxed">
            Our story is a testament to perseverance, and each pair of shoes carries the heart and soul of our expanding family.
          </p>
        </div>
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, rotateY: 90 }}
          whileInView={{ opacity: 1, rotateY: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <img src={growthImg} alt="Our team growth" className="rounded-xl shadow-2xl w-full" />
        </motion.div>
      </motion.section>

      {/* Section 2: How It's Made */}
      <motion.section
        className="px-6 md:px-20 py-24 bg-white text-black space-y-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">How Our Shoes Are Made</h2>
          <p className="text-lg leading-relaxed">
            Each Zala shoe is a masterpiece, crafted meticulously from ethically sourced materials. Our shoemakers blend generations-old techniques with cutting-edge tools,
            ensuring every stitch, every curve tells a story of quality and care. The journey from raw leather to finished shoe involves multiple detailed steps that prioritize durability, comfort, and style.
          </p>
          <p className="text-lg leading-relaxed">
            Our commitment to excellence means no shortcuts: every sole is glued and sewn securely, edges trimmed by hand, and final finishes polished to a gleam.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <motion.div
            className="space-y-4 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <img src={processStep1} alt="Cutting leather" className="w-full h-60 object-cover rounded-lg shadow-md" />
            <h3 className="text-xl font-semibold">Precision Cutting</h3>
            <p>
              Skilled artisans cut the finest quality leather and fabrics using hand patterns that balance aesthetics and durability.
            </p>
          </motion.div>

          <motion.div
            className="space-y-4 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <img src={processStep2} alt="Stitching" className="w-full h-60 object-cover rounded-lg shadow-md" />
            <h3 className="text-xl font-semibold">Hand Stitching</h3>
            <p>
              Each panel is carefully stitched with high-strength threads, combining durability with elegant detailing that lasts.
            </p>
          </motion.div>

          <motion.div
            className="space-y-4 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <img src={processStep3} alt="Finishing touches" className="w-full h-60 object-cover rounded-lg shadow-md" />
            <h3 className="text-xl font-semibold">Final Touches</h3>
            <p>
              After assembly, every shoe undergoes a strict quality check — polishing, trimming, and a final inspection to ensure perfection.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Section 3: Branches */}
      <motion.section
        className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-24 gap-12 bg-black"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold text-yellow-400">Our Branches</h2>
          <p className="text-lg leading-relaxed">
            Zala Footwear proudly serves customers across Ethiopia through our <span className="text-yellow-300 font-semibold">three main branches</span>. Each branch is a hub of craftsmanship and culture:
          </p>
          <ul className="list-disc list-inside text-lg pl-4 space-y-2">
            <li>
              <span className="font-semibold text-yellow-200">Addis Ababa HQ</span>: Our flagship store and workshop, where it all began.
            </li>
            <li>
              <span className="font-semibold text-yellow-200">Bahir Dar</span>: Bringing fresh styles to northern Ethiopia, near the beautiful Lake Tana.
            </li>
            <li>
              <span className="font-semibold text-yellow-200">Hawassa</span>: Our newest branch, dedicated to the southern region, known for its vibrant designs.
            </li>
          </ul>
          <p className="text-lg leading-relaxed">
            Each location is staffed by <span className="text-yellow-300 font-semibold">experienced local artisans and customer service teams</span>, who are passionate about sharing the Zala story.
          </p>
        </div>
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, rotateX: 45 }}
          whileInView={{ opacity: 1, rotateX: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <img src={branchesImg} alt="Zala Footwear Branches" className="rounded-xl shadow-2xl w-full" />
        </motion.div>
      </motion.section>

    </div>
  );
};

export default AboutPage;
