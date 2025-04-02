import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Droplets } from "lucide-react";

export default function Navbar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-#fcfaf6 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src="/leaf-int-2-modified.png"
                alt="Leaf International"
                className="h-8 w-8"
              />
              <span className="ml-2 text-xl font-semibold text-green-900 hover:text-green-700 transition-colors">
                Leaf international
              </span>
            </Link>
          </div>

          <div className="flex items-center space-x-8">
            <Link
              to="/"
              className={`${
                isActive("/") ? "text-blue-600" : "text-gray-600"
              } hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors`}
            >
              Home
            </Link>
            <Link
              to="/products"
              className={`${
                isActive("/products") ? "text-blue-600" : "text-gray-600"
              } hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors`}
            >
              Products
            </Link>

            <Link
              to="/contact"
              className={`${
                isActive("/contact") ? "text-blue-600" : "text-gray-600"
              } hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
