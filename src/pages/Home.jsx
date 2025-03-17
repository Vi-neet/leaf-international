import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      title: "Luxury Redefined",
      subtitle: "Premium bathroom fixtures crafted for elegance",
      image: "/images/hero-1.jpg", 
      cta: "Explore Collection"
    },
    {
      id: 2,
      title: "Timeless Design",
      subtitle: "Where functionality meets sophistication",
      image: "/images/hero-2.jpg",
      cta: "View Products"
    },
    {
      id: 3,
      title: "Sustainable Luxury",
      subtitle: "Eco-friendly solutions for the modern home",
      image: "/images/hero-3.jpg",
      cta: "Learn More"
    }
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    
    return () => clearInterval(interval);
  }, [slides.length]);
  
  const featuredProducts = [
    {
      id: 1,
      name: "Cascade Waterfall Faucet",
      category: "Faucets",
      image: "/images/product-1.jpg",
      price: 249.99
    },
    {
      id: 2,
      name: "Nova Rainfall Shower System",
      category: "Showers",
      image: "/images/product-2.jpg",
      price: 499.99
    },
    {
      id: 3,
      name: "Linear Infinity Bathtub",
      category: "Bathtubs",
      image: "/images/product-3.jpg",
      price: 1299.99
    },
    {
      id: 4,
      name: "Azure Handle Set",
      category: "Accessories",
      image: "/images/product-4.jpg",
      price: 129.99
    }
  ];
  
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-slider">
          {slides.map((slide, index) => (
            <div 
              key={slide.id} 
              className={`hero-slide ${index === currentSlide ? 'active' : ''}`} 
              style={{ backgroundImage: `url(${slide.image || '/images/placeholder.jpg'})` }}
            >
              <div className="hero-content">
                <h1>{slide.title}</h1>
                <p>{slide.subtitle}</p>
                <Link to="/products" className="btn btn-primary">{slide.cta}</Link>
              </div>
            </div>
          ))}
          
          <div className="slider-controls">
            {slides.map((_, index) => (
              <button 
                key={index}
                className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="features">
        <div className="features-container">
          <div className="feature">
            <div className="feature-icon">
              <i className="fas fa-award"></i>
            </div>
            <h3>Premium Quality</h3>
            <p>Built to last with superior materials and craftsmanship.</p>
          </div>
          
          <div className="feature">
            <div className="feature-icon">
              <i className="fas fa-leaf"></i>
            </div>
            <h3>Eco-Friendly</h3>
            <p>Water-saving technologies for sustainable living.</p>
          </div>
          
          <div className="feature">
            <div className="feature-icon">
              <i className="fas fa-tools"></i>
            </div>
            <h3>Easy Installation</h3>
            <p>Designed for hassle-free setup and maintenance.</p>
          </div>
          
          <div className="feature">
            <div className="feature-icon">
              <i className="fas fa-shield-alt"></i>
            </div>
            <h3>10 Year Warranty</h3>
            <p>Confidence and peace of mind with every purchase.</p>
          </div>
        </div>
      </section>
      
      {/* Featured Products */}
      <section className="featured-products">
        <div className="section-header">
          <h2>Featured Products</h2>
          <Link to="/products" className="view-all">View All Products</Link>
        </div>
        
        <div className="products-grid">
          {featuredProducts.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image || '/images/placeholder.jpg'} alt={product.name} />
                <div className="product-overlay">
                  <Link to={`/products/${product.id}`} className="btn-view">View Details</Link>
                </div>
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="product-category">{product.category}</p>
                <p className="product-price">${product.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="testimonials">
        <div className="section-header">
          <h2>What Our Customers Say</h2>
        </div>
        
        <div className="testimonials-container">
          <div className="testimonial">
            <div className="testimonial-rating">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <p>"The quality and design of LuxeFlow's faucets transformed our bathroom completely. Excellent craftsmanship!"</p>
            <div className="testimonial-author">
              <img src="/images/customer-1.jpg" alt="Customer" />
              <div>
                <h4>Sarah Johnson</h4>
                <p>Interior Designer</p>
              </div>
            </div>
          </div>
          
          <div className="testimonial">
            <div className="testimonial-rating">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <p>"Their customer service is unmatched. The team helped me select the perfect fixtures for my new home renovation."</p>
            <div className="testimonial-author">
              <img src="/images/customer-2.jpg" alt="Customer" />
              <div>
                <h4>Michael Chen</h4>
                <p>Homeowner</p>
              </div>
            </div>
          </div>
          
          <div className="testimonial">
            <div className="testimonial-rating">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
            <p>"The water-saving features have noticeably reduced our utility bills while maintaining excellent water pressure."</p>
            <div className="testimonial-author">
              <img src="/images/customer-3.jpg" alt="Customer" />
              <div>
                <h4>Lisa Thompson</h4>
                <p>Architect</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Transform Your Space</h2>
          <p>Discover our premium collection of designer faucets, showers, and bathroom accessories.</p>
          <Link to="/products" className="btn btn-primary">Shop Now</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;