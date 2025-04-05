import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen md:h-[70vh]">
        <img
          src="/background-img.jpg"
          alt="Premium Bathroom Hardware"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl font-bold mb-4">Elevate Your Bathroom</h1>
            <p className="text-xl mb-8">
              Premium bathroom hardware solutions for modern homes
            </p>
            <Link
              to="/products"
              className="inline-flex items-center bg-green-700 text-white px-6 py-3 rounded-md hover:bg-green-800 transition-colors ease-in-out duration-300"
            >
              Browse Collection
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-green-100 p-3 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-green-900 mb-3">
              Premium Quality
            </h3>
            <p className="text-gray-600">
              Durable materials and precision engineering for long-lasting
              performance
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-green-100 p-3 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-xl text-green-900 font-semibold mb-3">
              Modern Design
            </h3>
            <p className="text-gray-600">
              Stylish fixtures that enhance your bathroom's aesthetic appeal
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-green-100 p-3 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-green-900 mb-3">
              Expert Support
            </h3>
            <p className="text-gray-600">
              Professional guidance for selecting the perfect bathroom hardware
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              {/* Option 1: Logo next to heading */}
              <div className="flex items-center gap-4 mb-6">
                <h2 className="text-4xl font-bold text-green-900">
                  About Leaf International
                </h2>
                <img
                  src="/leaf-int-2-modified.png"
                  alt="Leaf International Logo"
                  className="h-12 w-auto"
                />
              </div>

              <p className="text-green-600 mb-4">
                Leaf International specializes in high-quality bathroom
                hardware, offering a comprehensive range of taps, faucets,
                plastic taps, and handle bars designed for both functionality
                and style.
              </p>
              <p className="text-green-600 mb-4">
                We combine innovative design with reliable construction to
                deliver bathroom hardware that stands the test of time while
                enhancing the look of your space.
              </p>
              <div className="mt-8">
                <h3 className="text-xl text-green-800 font-semibold mb-3">
                  Our Product Range
                </h3>
                <ul className="grid grid-cols-2 gap-2">
                  <li className="text-green-600">• Luxury Faucets</li>
                  <li className="text-green-600">• Premium Taps</li>
                  <li className="text-green-600">• Durable Plastic Taps</li>
                  <li className="text-green-600">• Ergonomic Handle Bars</li>
                  <li className="text-green-600">• Shower Systems</li>
                  <li className="text-green-600">• Bathroom Accessories</li>
                </ul>
              </div>
            </div>
            <div className="relative group">
              {/* Product Image */}
              <img
                src="https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&q=80&w=800"
                alt="Lead International Products"
                className="rounded-lg shadow-lg transition-opacity duration-300 group-hover:opacity-30"
              />

              {/* Logo Overlay (Hidden by default, shown on hover) */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <img
                  src="/leaf-int.png"
                  alt="Leaf International Logo"
                  className="w-48 h-48 object-cover rounded-full shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Product Categories */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-green-900 text-center mb-12">
          Our Featured Collections
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="/faucet-3.jpg"
              alt="Premium Faucets"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Premium Faucets</h3>
              <p className="text-gray-600 mb-4">
                Elegant designs with advanced water-saving technology
              </p>
              <Link
                to="/products"
                className="text-green-600 hover:underline inline-flex items-center"
              >
                View Collection <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="rounded-lg shadow-lg">
            <img src="/Tap.jpg" alt="Faucet" className="w-full h-56" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Durable Taps</h3>
              <p className="text-gray-600 mb-4">
                Cost-effective solutions without compromising on quality
              </p>
              <Link
                to="/products"
                className="text-green-600 hover:underline inline-flex items-center"
              >
                View Collection <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="/hand-held-1.jpg"
              alt="Handle Bars"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Safety Handle Baths
              </h3>
              <p className="text-gray-600 mb-4">
                Ergonomic designs for enhanced bathroom safety and accessibility
              </p>
              <Link
                to="/products"
                className="text-green-600 hover:underline inline-flex items-center"
              >
                View Collection <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
