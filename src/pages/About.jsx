import React from 'react'

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-4xl space-y-8 font-sans">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
          About <span className="text-yellow-400">Zala Footwear</span>
        </h2>

        <p className="text-lg leading-relaxed">
          At <span className="text-yellow-500 font-semibold">Zala Footwear</span>, we believe that shoes are more than just accessories — they’re a reflection of your identity, confidence, and journey. Our brand was founded with a simple vision: to create elegant, handcrafted shoes that combine timeless design with modern comfort.
        </p>

        <p className="text-lg leading-relaxed">
          Our artisans are passionate about details. Each pair is carefully stitched, shaped, and finished with precision, ensuring it not only looks amazing but also feels incredible. We use locally-sourced materials and eco-conscious processes because we care about the environment and your well-being.
        </p>

        <p className="text-lg leading-relaxed">
          <span className="text-yellow-400 font-bold">
            Whether you're stepping into a boardroom or strolling through the city,
          </span>{' '}
          our shoes are made to move with you. We don’t just sell footwear — we offer experiences, crafted one step at a time.
        </p>

        <p className="text-lg leading-relaxed">
          Join our growing family of customers who value authenticity, comfort, and bold expression. At Zala, we’re not just designing shoes —{' '}
          <span className="text-yellow-500 italic font-medium">
            we’re designing confidence.
          </span>
        </p>
      </div>
    </section>
  );

}

export default About
