import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { products } from '../data/product';
import ProductCard from '../components/ProductCard';
import { Loader } from 'lucide-react';

export default function Products() {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const categoryFromUrl = queryParams.get('category');
  
  const categories = ['All', ...new Set(products.map(p => p.category))];
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isLoading, setIsLoading] = useState(true);
  
  // Update selected category when the URL parameter changes
  useEffect(() => {
    if (categoryFromUrl && categories.includes(categoryFromUrl)) {
      setSelectedCategory(categoryFromUrl);
    } else {
      setSelectedCategory('All');
    }
  }, [categoryFromUrl, categories]);

  // Function to handle category selection and URL update
  const handleCategoryChange = (category) => {
    setIsLoading(true);
    setSelectedCategory(category);
    
    if (category === 'All') {
      navigate('/products');
    } else {
      navigate(`/products?category=${category}`);
    }
  };

  // Simulate loading time when category changes
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800); // Show loading for 800ms for better UX

    return () => clearTimeout(timer);
  }, [selectedCategory]);

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-green-900 mb-8">Our Products</h1>
      
      <div className="mb-8 flex flex-wrap gap-4">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`px-4 py-2 rounded-md cursor-pointer ${
              selectedCategory === category
                ? 'bg-green-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <Loader className="h-12 w-12 text-green-600 animate-spin" />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}