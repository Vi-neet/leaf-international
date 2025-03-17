import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

const Products = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialCategory = queryParams.get('category') || 'all';
  
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    price: { min: 0, max: 5000 },
    finishes: [],
    waterSaving: false
  });
  
  // Product data
  const products = [
    {
      id: 1,
      name: "Cascade Waterfall Faucet",
      category: "faucets",
      price: 249.99,
      rating: 4.8,
      reviews: 124,
      image: "/images/product-1.jpg",
      finish: "chrome",
      waterSaving: true,
      description: "Elegant waterfall design with smooth operation and eco-friendly water flow.",
      featured: true
    },
    {
      id: 2,
      name: "Nova Rainfall Shower System",
      category: "showers",
      price: 499.99,
      rating: 4.7,
      reviews: 85,
      image: "/images/product-2.jpg",
      finish: "brushed-nickel",
      waterSaving: true,
      description: "Complete shower system with rainfall head and adjustable pressure settings.",
      featured: true
    },
    {
      id: 3,
      name: "Linear Infinity Bathtub",
      category: "bathtubs",
      price: 1299.99,
      rating: 4.9,
      reviews: 37,
      image: "/images/product-3.jpg",
      finish: "white",
      waterSaving: false,
      description: "Freestanding bathtub with clean lines and ergonomic design for maximum comfort.",
      featured: true
    },
    {
      id: 4,
      name: "Azure Handle Set",
      category: "accessories",
      price: 129.99,
      rating: 4.6,
      reviews: 52,
      image: "/images/product-4.jpg",
      finish: "matte-black",
      waterSaving: false,
      description: "Premium handle set with smooth operation and modern design.",
      featured: true
    },
    {
      id: 5,
      name: "Vertex Single-Handle Faucet",
      category: "faucets",
      price: 179.99,
      rating: 4.5,
      reviews: 67,
      image: "/images/product-5.jpg",
      finish: "brushed-gold",
      waterSaving: true,
      description: "Modern single-handle design with precision control and sleek aesthetics.",
      featured: false
    },
    {
      id: 6,
      name: "Aqua Logic Shower Panel",
      category: "showers",
      price: 659.99,
      rating: 4.8,
      reviews: 43,
      image: "/images/product-6.jpg",
      finish: "chrome",
      waterSaving: true,
      description: "Multi-function shower panel with body jets and digital temperature control.",
      featured: false
    },
    {
      id: 7,
      name: "Minimalist Basin Faucet",
      category: "faucets",
      price: 189.99,
      rating: 4.7,
      reviews: 91,
      image: "/images/product-7.jpg",
      finish: "brushed-nickel",
      waterSaving: true,
      description: "Clean, minimalist design with water-saving technology.",
      featured: false
    },
    {
      id: 8,
      name: "Oceanic Whirlpool Tub",
      category: "bathtubs",
      price: 1599.99,
      rating: 4.9,
      reviews: 28,
      image: "/images/product-8.jpg",
      finish: "white",
      waterSaving: false,
      description: "Luxury whirlpool tub with therapeutic jets and LED mood lighting.",
      featured: false
    },
    {
      id: 9,
      name: "Designer Towel Rack",
      category: "accessories",
      price: 89.99,
      rating: 4.4,
      reviews: 62,
      image: "/images/product-9.jpg",
      finish: "chrome",
      waterSaving: false,
      description: "Stylish and durable towel rack with ample hanging space.",
      featured: false
    },
    {
      id: 10,
      name: "Waterfall Wall-Mount Faucet",
      category: "faucets",
      price: 299.99,
      rating: 4.8,
      reviews: 47,
      image: "/images/product-10.jpg",
      finish: "matte-black",
      waterSaving: true,
      description: "Wall-mounted waterfall faucet with dramatic water presentation.",
      featured: false
    },
    {
      id: 11,
      name: "Handheld Shower Combo",
      category: "showers",
      price: 179.99,
      rating: 4.6,
      reviews: 73,
      image: "/images/product-11.jpg",
      finish: "brushed-gold",
      waterSaving: true,
      description: "Versatile shower combo with fixed and handheld options.",
      featured: false
    },
    {
      id: 12,
      name: "Modern Toilet Paper Holder",
      category: "accessories",
      price: 49.99,
      rating: 4.3,
      reviews: 104,
      image: "/images/product-12.jpg",
      finish: "chrome",
      waterSaving: false,
      description: "Contemporary design with easy roll replacement.",
      featured: false
    },
    {
      id: 13,
      name: "Curved Spout Kitchen Faucet",
      category: "faucets",
      price: 219.99,
      rating: 4.7,
      reviews: 83,
      image: "/images/product-13.jpg",
      finish: "brushed-nickel",
      waterSaving: true,
      description: "High-arc spout with pull-down sprayer for kitchen versatility.",
      featured: false
    },
    {
      id: 14,
      name: "Luxury Shower Head",
      category: "showers",
      price: 149.99,
      rating: 4.5,
      reviews: 96,
      image: "/images/product-14.jpg",
      finish: "chrome",
      waterSaving: true,
      description: "Multi-function luxury shower head with easy clean nozzles.",
      featured: false
    },
    {
      id: 15,
      name: "Freestanding Soaking Tub",
      category: "bathtubs",
      price: 1099.99,
      rating: 4.8,
      reviews: 32,
      image: "/images/product-15.jpg",
      finish: "white",
      waterSaving: false,
      description: "Deep soaking tub with contemporary oval design.",
      featured: false
    },
    {
      id: 16,
      name: "Double Robe Hook",
      category: "accessories",
      price: 29.99,
      rating: 4.2,
      reviews: 58,
      image: "/images/product-16.jpg",
      finish: "matte-black",
      waterSaving: false,
      description: "Double hook design for towels and robes with secure mounting.",
      featured: false
    }
  ];
  
  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'faucets', name: 'Faucets' },
    { id: 'showers', name: 'Showers' },
    { id: 'bathtubs', name: 'Bathtubs' },
    { id: 'accessories', name: 'Accessories' }
  ];
  
  const finishOptions = [
    { id: 'chrome', name: 'Chrome' },
    { id: 'brushed-nickel', name: 'Brushed Nickel' },
    { id: 'matte-black', name: 'Matte Black' },
    { id: 'brushed-gold', name: 'Brushed Gold' },
    { id: 'white', name: 'White' }
  ];
  
  // Filter products
  const filteredProducts = products.filter(product => {
    // Category filter
    if (activeCategory !== 'all' && product.category !== activeCategory) {
      return false;
    }
    
    // Search filter
    if (searchTerm && !product.name.toLowerCase().includes(searchTerm.toLowerCase()) && 
        !product.description.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    
    // Price filter
    if (product.price < filters.price.min || product.price > filters.price.max) {
      return false;
    }
    
    // Finish filter
    if (filters.finishes.length > 0 && !filters.finishes.includes(product.finish)) {
      return false;
    }
    
    // Water saving filter
    if (filters.waterSaving && !product.waterSaving) {
      return false;
    }
    
    return true;
  });
  
  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
        return b.id - a.id;
      default: // featured
        return b.featured - a.featured;
    }
  });
  
  // Pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);
  
  // Handle filter changes
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };
  
  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };
  
  const handleViewModeChange = (mode) => {
    setViewMode(mode);
  };
  
  const handlePriceChange = (e, type) => {
    const value = parseInt(e.target.value) || 0;
    setFilters({
      ...filters,
      price: {
        ...filters.price,
        [type]: value
      }
    });
  };
  
  const handleFinishToggle = (finish) => {
    setFilters({
      ...filters,
      finishes: filters.finishes.includes(finish)
        ? filters.finishes.filter(f => f !== finish)
        : [...filters.finishes, finish]
    });
  };
  
  const handleWaterSavingToggle = () => {
    setFilters({
      ...filters,
      waterSaving: !filters.waterSaving
    });
  };
  
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };
  
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };
  
  // Update URL when category changes
  useEffect(() => {
    const newUrl = activeCategory === 'all' 
      ? '/products' 
      : `/products?category=${activeCategory}`;
    
    window.history.replaceState(null, '', newUrl);
  }, [activeCategory]);
  
  return (
    <div className="products-page">
      <div className="products-header">
        <h1>Our Products</h1>
        <p>Discover our premium collection of bathroom and kitchen fixtures</p>
      </div>
      
      <div className="products-container">
        {/* Sidebar - Filters */}
        <aside className="filters-sidebar">
          <div className="filter-section">
            <h3>Categories</h3>
            <ul className="category-list">
              {categories.map(category => (
                <li 
                  key={category.id}
                  className={activeCategory === category.id ? 'active' : ''}
                  onClick={() => handleCategoryChange(category.id)}
                >
                  {category.name}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="filter-section">
            <h3>Price Range</h3>
            <div className="price-inputs">
              <div className="price-input">
                <label>Min ($)</label>
                <input 
                  type="number" 
                  value={filters.price.min}
                  onChange={(e) => handlePriceChange(e, 'min')}
                  min="0"
                />
              </div>
              <div className="price-input">
                <label>Max ($)</label>
                <input 
                  type="number"
                  value={filters.price.max}
                  onChange={(e) => handlePriceChange(e, 'max')}
                  min="0"
                />
              </div>
            </div>
          </div>
          
          <div className="filter-section">
            <h3>Finish</h3>
            <div className="finish-options">
              {finishOptions.map(finish => (
                <label key={finish.id} className="checkbox-label">
                  <input 
                    type="checkbox"
                    checked={filters.finishes.includes(finish.id)}
                    onChange={() => handleFinishToggle(finish.id)}
                  />
                  {finish.name}
                </label>
              ))}
            </div>
          </div>
          
          <div className="filter-section">
            <h3>Features</h3>
            <label className="checkbox-label">
              <input 
                type="checkbox"
                checked={filters.waterSaving}
                onChange={handleWaterSavingToggle}
              />
              Water Saving
            </label>
          </div>
          
          <button className="reset-filters" onClick={() => {
            setFilters({
              price: { min: 0, max: 5000 },
              finishes: [],
              waterSaving: false
            });
            setActiveCategory('all');
            setSearchTerm('');
          }}>
            Reset Filters
          </button>
        </aside>
        
        {/* Main Products Area */}
        <main className="products-main">
          {/* Products Toolbar */}
          <div className="products-toolbar">
            <div className="search-box">
              <input 
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <button aria-label="Search"><i className="fas fa-search"></i></button>
            </div>
            
            <div className="toolbar-actions">
              <div className="sort-by">
                <label>Sort By:</label>
                <select value={sortBy} onChange={handleSortChange}>
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Customer Rating</option>
                  <option value="newest">Newest First</option>
                </select>
              </div>
              
              <div className="view-mode">
                <button 
                  className={viewMode === 'grid' ? 'active' : ''}
                  onClick={() => handleViewModeChange('grid')}
                  aria-label="Grid view"
                >
                  <i className="fas fa-th"></i>
                </button>
                <button 
                  className={viewMode === 'list' ? 'active' : ''}
                  onClick={() => handleViewModeChange('list')}
                  aria-label="List view"
                >
                  <i className="fas fa-list"></i>
                </button>
              </div>
            </div>
          </div>
          
          {/* Products Count */}
          <div className="products-count">
            <p>{sortedProducts.length} products found</p>
          </div>
          
          {/* Products Grid/List */}
          {sortedProducts.length > 0 ? (
            <div className={`products-${viewMode}`}>
              {currentProducts.map(product => (
                <div key={product.id} className={`product-card ${viewMode === 'list' ? 'list-view' : ''}`}>
                  <div className="product-image">
                    <img src={product.image || '/images/placeholder.jpg'} alt={product.name} />
                    {product.waterSaving && (
                      <span className="product-badge eco">Eco-Friendly</span>
                    )}
                    <div className="product-overlay">
                      <Link to={`/products/${product.id}`} className="btn-view">View Details</Link>
                    </div>
                  </div>
                  
                  <div className="product-info">
                    <h3>{product.name}</h3>
                    <p className="product-category">{product.category.charAt(0).toUpperCase() + product.category.slice(1)}</p>
                    <div className="product-rating">
                      <div className="stars">
                        {[...Array(5)].map((_, i) => (
                          <i key={i} className={`fas fa-star ${i < Math.floor(product.rating) ? 'filled' : ''}`}></i>
                        ))}
                        {product.rating % 1 !== 0 && (
                          <i className="fas fa-star-half-alt filled"></i>
                        )}
                      </div>
                      <span>{product.reviews} reviews</span>
                    </div>
                    <p className="product-price">${product.price.toFixed(2)}</p>
                    
                    {viewMode === 'list' && (
                      <div className="product-description">
                        <p>{product.description}</p>
                        <p className="product-finish">Finish: <span>{product.finish.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</span></p>
                        <div className="product-actions">
                          <button className="btn btn-primary">Add to Cart</button>
                          <button className="btn btn-secondary">Add to Wishlist</button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-products">
              <p>No products found matching your criteria.</p>
              <button onClick={() => {
                setFilters({
                  price: { min: 0, max: 5000 },
                  finishes: [],
                  waterSaving: false
                });
                setActiveCategory('all');
                setSearchTerm('');
              }}>Clear All Filters</button>
            </div>
          )}
          
          {/* Pagination */}
          {sortedProducts.length > 0 && (
            <div className="pagination">
              <button 
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="page-arrow"
                aria-label="Previous page"
              >
                <i className="fas fa-chevron-left"></i>
              </button>
              
              {[...Array(totalPages)].map((_, index) => {
                const pageNumber = index + 1;
                // Show first page, last page, current page, and pages around current
                if (
                  pageNumber === 1 ||
                  pageNumber === totalPages ||
                  (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
                ) {
                  return (
                    <button
                      key={pageNumber}
                      onClick={() => handlePageChange(pageNumber)}
                      className={`page-number ${pageNumber === currentPage ? 'active' : ''}`}
                    >
                      {pageNumber}
                    </button>
                  );
                } else if (
                  (pageNumber === currentPage - 2 && currentPage > 3) ||
                  (pageNumber === currentPage + 2 && currentPage < totalPages - 2)
                ) {
                  return <span key={pageNumber} className="page-ellipsis">...</span>;
                }
                return null;
              })}
              
              <button 
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="page-arrow"
                aria-label="Next page"
              >
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Products;

