import React from 'react';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">About Lead International</h1>
          <p className="text-gray-600 mb-4">
            Since 1995, Lead International has been at the forefront of bathroom fixture innovation,
            combining elegant design with superior functionality to create products that
            transform everyday spaces into luxurious sanctuaries.
          </p>
          <p className="text-gray-600 mb-4">
            Our commitment to quality and sustainability drives everything we do,
            from our careful material selection to our eco-friendly manufacturing processes.
          </p>
          <div className="grid grid-cols-2 gap-6 mt-8">
            <div>
              <h3 className="text-2xl font-bold text-blue-600">25+</h3>
              <p className="text-gray-600">Years of Excellence</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-blue-600">1000+</h3>
              <p className="text-gray-600">Projects Completed</p>
            </div>
          </div>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&q=80&w=800"
            alt="Modern Bathroom"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}