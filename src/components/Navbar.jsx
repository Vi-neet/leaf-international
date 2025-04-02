import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-#fcfaf6 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          {/* Logo and brand name */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src="/leaf-int-2-modified.png"
                alt="Leaf International"
                className="h-8 w-8"
              />
              <span className="ml-2 text-xl font-semibold text-green-900 hover:text-green-700 transition-colors">
                Leaf International
              </span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`${
                isActive("/") ? "text-green-600" : "text-gray-600"
              } hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors`}
            >
              Home
            </Link>
            <Link
              to="/products"
              className={`${
                isActive("/products") ? "text-green-600" : "text-gray-600"
              } hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors`}
            >
              Products
            </Link>
            <Link
              to="/contact"
              className={`${
                isActive("/contact") ? "text-green-600" : "text-gray-600"
              } hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-green-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-2 pb-4 space-y-1">
            <Link
              to="/"
              className={`${
                isActive("/") ? "bg-green-50 text-green-600" : "text-gray-600"
              } hover:bg-green-50 hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium transition-colors`}
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/products"
              className={`${
                isActive("/products") ? "bg-green-50 text-green-600" : "text-gray-600"
              } hover:bg-green-50 hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium transition-colors`}
              onClick={toggleMenu}
            >
              Products
            </Link>
            <Link
              to="/contact"
              className={`${
                isActive("/contact") ? "bg-green-50 text-green-600" : "text-gray-600"
              } hover:bg-green-50 hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium transition-colors`}
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}