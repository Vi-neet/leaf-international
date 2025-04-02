import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="relative  h-[70vh]">
        <img
          src="/background-img.jpg"
          alt="Luxury Bathroom"
          className="w-full h-full object-cover "
        />

        <div className="absolute inset-0 bg-black/60 backdrop-opacity-90 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl font-bold mb-4">Elevate Your Bathroom</h1>
            <p className="text-xl mb-8">
              Discover our premium collection of bathroom fixtures
            </p>
            <Link
              to="/products"
              className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
            >
              Browse Collection
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <h3 className="text-xl font-semibold mb-3">Premium Quality</h3>
            <p className="text-gray-600">
              Crafted with the finest materials for lasting durability
            </p>
          </div>
          <div className="text-center p-6">
            <h3 className="text-xl font-semibold mb-3">Modern Design</h3>
            <p className="text-gray-600">
              Contemporary aesthetics meet functional excellence
            </p>
          </div>
          <div className="text-center p-6">
            <h3 className="text-xl font-semibold mb-3">Expert Support</h3>
            <p className="text-gray-600">
              Professional guidance for your perfect bathroom
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
