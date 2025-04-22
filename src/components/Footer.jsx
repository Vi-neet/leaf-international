import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";

const Footer = () => {
  const navigate = useNavigate();

  // Function to handle navigation and scroll to top
  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  // Function to handle product category navigation
  const handleProductNavigation = (category) => {
    navigate(`/products?category=${category}`);
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Leaf International
            </h3>
            <p className="mb-4">
              Premium bathroom hardware solutions for modern homes. Quality
              faucets, taps and bathroom accessories.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleNavigation("/")}
                  className="hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/products")}
                  className="hover:text-white transition-colors"
                >
                  Products
                </button>
              </li>
              <li></li>
              <li>
                <button
                  onClick={() => handleNavigation("/contact")}
                  className="hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Our Products
            </h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleProductNavigation("Faucets")}
                  className="hover:text-white transition-colors"
                >
                  Premium Faucets
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleProductNavigation("Showers")}
                  className="hover:text-white transition-colors"
                >
                  Showers
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleProductNavigation("Plastic Taps")}
                  className="hover:text-white transition-colors"
                >
                  Plastic Taps
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleProductNavigation("Toilet hand shower")}
                  className="hover:text-white transition-colors"
                >
                  Handle Bars
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleProductNavigation("Concealed Parts")}
                  className="hover:text-white transition-colors"
                >
                  Concealed Parts
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 mt-1 h-5 w-5 flex-shrink-0" />
                <span>P-84 CSA Colony,Kishanganj,Delhi 110007 </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 flex-shrink-0" />
                <span>+91 9868840872</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 flex-shrink-0" />
                <span>infoleafdelhi@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Leaf International. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;