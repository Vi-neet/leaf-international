import React, { useState } from "react";

export default function ProductCard({ product }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105  cursor-pointer"
        onClick={openModal}
      >
        <div className="relative">
          <img
            src={product.image}
            alt={product.category}
            className="w-full h-80 object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black/40 bg-opacity-60 text-white p-1 hover:bg-black/70 transition-all duration-300 ease-in-out text-center">
            <p className="text-lg font-medium ">{product.category}</p>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/60 bg-opacity-75 flex items-center justify-center z-50 "
          onClick={closeModal}
        >
          <div
            className="relative max-w-4xl max-h-screen p-2 "
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 bg-white rounded-full p-2 text-black hover:bg-gray-200 "
              onClick={closeModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <img
              src={product.image}
              alt={product.category}
              className="max-w-full max-h-screen object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
