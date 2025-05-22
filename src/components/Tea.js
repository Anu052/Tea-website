import React, { useState, useEffect } from 'react';
import '../css/tea.css';
import { 
  Menu, X, ShoppingBag, Star, Leaf, Coffee, Award, 
  MapPin, Phone, Mail, Clock, Users, Globe, 
  Facebook, Instagram, Twitter, Youtube, Send,
  ArrowRight, CheckCircle, Heart, Truck, Shield
} from 'lucide-react';

const Tea = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({ customers: 0, locations: 0, varieties: 0 });
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedStats({ customers: 50000, locations: 25, varieties: 75 });
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const teas = [
    {
      name: "Earl Grey Supreme",
      price: "$24.99",
      originalPrice: "$29.99",
      image: "/api/placeholder/300/300",
      rating: 4.9,
      reviews: 234,
      description: "Classic bergamot blend with cornflower petals and lavender notes",
      bestseller: true,
      tags: ["Black Tea", "Citrus", "Floral"]
    },
    {
      name: "Dragon Well Green",
      price: "$28.99",
      originalPrice: "$32.99",
      image: "/api/placeholder/300/300",
      rating: 4.8,
      reviews: 189,
      description: "Premium Chinese green tea with delicate umami flavor profile",
      organic: true,
      tags: ["Green Tea", "Light", "Organic"]
    },
    {
      name: "Himalayan Gold",
      price: "$32.99",
      originalPrice: "$37.99",
      image: "/api/placeholder/300/300",
      rating: 4.9,
      reviews: 156,
      description: "High-altitude black tea with golden tips and muscatel notes",
      premium: true,
      tags: ["Black Tea", "Bold", "Premium"]
    },
    {
      name: "Chamomile Dreams",
      price: "$22.99",
      originalPrice: "$26.99",
      image: "/api/placeholder/300/300",
      rating: 4.7,
      reviews: 298,
      description: "Soothing herbal blend with honey notes for peaceful evenings",
      caffeineFree: true,
      tags: ["Herbal", "Caffeine-Free", "Relaxing"]
    },
    {
      name: "Jasmine Phoenix Pearls",
      price: "$45.99",
      originalPrice: "$52.99",
      image: "/api/placeholder/300/300",
      rating: 4.9,
      reviews: 87,
      description: "Hand-rolled green tea pearls scented with fresh jasmine flowers",
      limitedEdition: true,
      tags: ["Green Tea", "Floral", "Artisan"]
    },
    {
      name: "Royal Pu-erh",
      price: "$38.99",
      originalPrice: "$44.99",
      image: "/api/placeholder/300/300",
      rating: 4.8,
      reviews: 134,
      description: "Aged dark tea with rich, earthy complexity and smooth finish",
      aged: true,
      tags: ["Pu-erh", "Earthy", "Aged"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Tea Enthusiast",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "TEA BREW has completely transformed my daily tea ritual. The Earl Grey Supreme is absolutely divine!"
    },
    {
      name: "Marcus Johnson",
      role: "Restaurant Owner",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "We've been serving TEA BREW teas in our restaurant for 2 years. Our customers love the quality and variety."
    },
    {
      name: "Emily Rodriguez",
      role: "Wellness Coach",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "The herbal blends are perfect for my clients. Pure, organic, and incredibly soothing."
    }
  ];

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setContactForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="tea-app">
      {/* Navigation */}
      <nav className="tea-nav">
        <div className="tea-nav-container">
          <div className="tea-nav-content">
            <div className="tea-brand">
              <div className="tea-brand-icon">
                <Leaf className="tea-leaf-icon" />
                <div className="tea-brand-dot"></div>
              </div>
              <span className="tea-brand-name">TEA BREW</span>
              <span className="tea-premium-badge">Premium</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="tea-desktop-nav">
              <div className="tea-nav-links">
                {['Menu', 'About', 'Locations', 'Rewards', 'Blog'].map((item) => (
                  <a 
                    key={item}
                    href="#" 
                    className="tea-nav-link"
                  >
                    {item}
                    <span className="tea-nav-underline"></span>
                  </a>
                ))}
              </div>
            </div>

            <div className="tea-nav-actions">
              <button className="tea-signin-btn">
                Sign In
              </button>
              <div className="tea-cart-icon">
                <ShoppingBag className="tea-shopping-bag" />
                <span className="tea-cart-badge">3</span>
              </div>
              
              {/* Mobile menu button */}
              <div className="tea-mobile-menu-btn">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="tea-menu-toggle"
                >
                  {isMenuOpen ? <X className="tea-menu-icon" /> : <Menu className="tea-menu-icon" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="tea-mobile-nav">
            <div className="tea-mobile-nav-links">
              {['Menu', 'About', 'Locations', 'Rewards', 'Blog'].map((item) => (
                <a 
                  key={item}
                  href="#" 
                  className="tea-mobile-nav-link"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="tea-hero">
        <div className="tea-hero-overlay"></div>
        <div className="tea-hero-overlay-dark"></div>
        <img 
          src="/api/placeholder/1920/1080" 
          alt="Tea plantation" 
          className="tea-hero-image"
        />
        
        {/* Floating elements */}
        <div className="tea-float-circle tea-float-1"></div>
        <div className="tea-float-circle tea-float-2"></div>
        <div className="tea-float-circle tea-float-3"></div>
        
        <div className="tea-hero-content">
          <div className="tea-hero-badge-container">
            <span className="tea-hero-badge">
              ✨ Premium Tea Collection 2025
            </span>
          </div>
          <h1 className="tea-hero-title">
            Artisan Tea
            <span className="tea-hero-highlight">
              Crafted Daily
            </span>
          </h1>
          <p className="tea-hero-subtitle">
            Experience the finest tea blends from around the world, carefully curated by master tea artisans for the perfect brew every time.
          </p>
          <div className="tea-hero-buttons">
            <button className="tea-primary-btn">
              Order Now
              <ArrowRight className="tea-btn-arrow" />
            </button>
            <button className="tea-secondary-btn">
              Discover Blends
            </button>
          </div>
          
          {/* Scroll indicator */}
          <div className="tea-scroll-indicator">
            <div className="tea-scroll-circle">
              <div className="tea-scroll-dot"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Banner */}
      <section className="tea-features">
        <div className="tea-features-container">
          <div className="tea-features-grid">
            <div className="tea-feature-item">
              <div className="tea-feature-icon-container">
                <Truck className="tea-feature-icon" />
              </div>
              <h3 className="tea-feature-title">Free Shipping</h3>
              <p className="tea-feature-description">On orders over $50</p>
            </div>
            <div className="tea-feature-item">
              <div className="tea-feature-icon-container">
                <Shield className="tea-feature-icon" />
              </div>
              <h3 className="tea-feature-title">Quality Guarantee</h3>
              <p className="tea-feature-description">100% satisfaction promise</p>
            </div>
            <div className="tea-feature-item">
              <div className="tea-feature-icon-container">
                <Leaf className="tea-feature-icon" />
              </div>
              <h3 className="tea-feature-title">Organic Certified</h3>
              <p className="tea-feature-description">Sustainably sourced</p>
            </div>
            <div className="tea-feature-item">
              <div className="tea-feature-icon-container">
                <Heart className="tea-feature-icon" />
              </div>
              <h3 className="tea-feature-title">Expert Curated</h3>
              <p className="tea-feature-description">By tea masters</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Teas Section */}
      <section className="tea-products">
        <div className="tea-products-container">
          <div className="tea-section-header">
            <span className="tea-section-badge">
              Premium Collection
            </span>
            <h2 className="tea-section-title">Featured Blends</h2>
            <p className="tea-section-description">
              Discover our signature collection of premium teas, each blend telling a unique story of flavor, tradition, and craftsmanship from tea gardens around the world.
            </p>
          </div>
          
          <div className="tea-products-grid">
            {teas.map((tea, index) => (
              <div 
                key={index} 
                className="tea-product-card"
              >
                <div className="tea-product-image-container">
                  <img 
                    src={tea.image} 
                    alt={tea.name}
                    className="tea-product-image"
                  />
                  {tea.bestseller && (
                    <span className="tea-product-badge tea-bestseller-badge">
                      Bestseller
                    </span>
                  )}
                  {tea.organic && (
                    <span className="tea-product-badge tea-organic-badge">
                      Organic
                    </span>
                  )}
                  {tea.premium && (
                    <span className="tea-product-badge tea-premium-badge">
                      Premium
                    </span>
                  )}
                  {tea.limitedEdition && (
                    <span className="tea-product-badge tea-limited-badge">
                      Limited
                    </span>
                  )}
                  <button className="tea-wishlist-btn">
                    <Heart className="tea-wishlist-icon" />
                  </button>
                </div>
                <div className="tea-product-details">
                  <div className="tea-product-rating">
                    <div className="tea-stars">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`tea-star ${i < Math.floor(tea.rating) ? 'tea-star-filled' : ''}`}
                        />
                      ))}
                      <span className="tea-review-count">({tea.reviews})</span>
                    </div>
                    <span className="tea-rating-value">{tea.rating}</span>
                  </div>
                  
                  <h3 className="tea-product-name">{tea.name}</h3>
                  <p className="tea-product-description">{tea.description}</p>
                  
                  <div className="tea-tags">
                    {tea.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="tea-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="tea-product-footer">
                    <div className="tea-price-container">
                      <span className="tea-current-price">{tea.price}</span>
                      <span className="tea-original-price">{tea.originalPrice}</span>
                    </div>
                    <button className="tea-add-to-cart-btn">
                      Add to Cart
                      <ArrowRight className="tea-cart-arrow" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="tea-stats">
        <div className="tea-stats-container">
          <div className="tea-stats-header">
            <h2 className="tea-stats-title">Trusted Worldwide</h2>
            <p className="tea-stats-subtitle">
              Join thousands of tea lovers who have made TEA BREW their daily ritual
            </p>
          </div>
          
          <div className="tea-stats-grid">
            <div className="tea-stat-item">
              <div className="tea-stat-value">
                {animatedStats.customers.toLocaleString()}+
              </div>
              <div className="tea-stat-label">Happy Customers</div>
              <Users className="tea-stat-icon" />
            </div>
            <div className="tea-stat-item">
              <div className="tea-stat-value">
                {animatedStats.locations}+
              </div>
              <div className="tea-stat-label">Store Locations</div>
              <MapPin className="tea-stat-icon" />
            </div>
            <div className="tea-stat-item">
              <div className="tea-stat-value">
                {animatedStats.varieties}+
              </div>
              <div className="tea-stat-label">Tea Varieties</div>
              <Coffee className="tea-stat-icon" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="tea-about">
        <div className="tea-about-container">
          <div className="tea-about-grid">
            <div className="tea-about-content">
              <span className="tea-about-badge">
                Our Heritage
              </span>
              <h2 className="tea-about-title">Our Story</h2>
              <div className="tea-about-text">
                <p>
                  Founded in the heart of tea country, TEA BREW began as a passionate quest to bring the world's finest teas directly to your cup. Our journey started with a simple belief: exceptional tea should be accessible to everyone.
                </p>
                <p>
                  We work directly with tea gardens across the globe, from the misty highlands of Darjeeling to the ancient mountains of Fujian, ensuring fair trade practices and supporting local communities while maintaining the highest quality standards.
                </p>
                <p>
                  Every blend is carefully crafted by our master tea artisans, who bring decades of experience and an unwavering commitment to excellence. We believe that great tea tells a story - of the land, the people, and the tradition behind every leaf.
                </p>
              </div>
              
              <div className="tea-about-stats">
                <div className="tea-about-stat">
                  <div className="tea-about-stat-icon-container">
                    <Coffee className="tea-about-stat-icon" />
                  </div>
                  <div className="tea-about-stat-value">75+</div>
                  <div className="tea-about-stat-label">Tea Varieties</div>
                </div>
                <div className="tea-about-stat">
                  <div className="tea-about-stat-icon-container">
                    <Award className="tea-about-stat-icon" />
                  </div>
                  <div className="tea-about-stat-value">25</div>
                  <div className="tea-about-stat-label">Awards Won</div>
                </div>
                <div className="tea-about-stat">
                  <div className="tea-about-stat-icon-container">
                    <Leaf className="tea-about-stat-icon" />
                  </div>
                  <div className="tea-about-stat-value">100%</div>
                  <div className="tea-about-stat-label">Organic</div>
                </div>
              </div>
            </div>
            
            <div className="tea-about-image-container">
              <div className="tea-about-image-wrapper">
                <img 
                  src="/api/placeholder/600/500" 
                  alt="Tea master at work"
                  className="tea-about-image"
                />
                <div className="tea-about-image-overlay"></div>
                <div className="tea-about-image-caption">
                  <div className="tea-about-image-title">Master Tea Artisan</div>
                  <div className="tea-about-image-subtitle">Crafting excellence since 1985</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="tea-testimonials">
        <div className="tea-testimonials-container">
          <div className="tea-testimonials-header">
            <span className="tea-testimonials-badge">
              Customer Love
            </span>
            <h2 className="tea-testimonials-title">What Our Customers Say</h2>
            <p className="tea-testimonials-subtitle">
              Don't just take our word for it - hear from the tea lovers who make our community special
            </p>
          </div>
          
          <div className="tea-testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="tea-testimonial-card"
              >
                <div className="tea-testimonial-header">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="tea-testimonial-avatar"
                  />
                  <div>
                    <div className="tea-testimonial-name">{testimonial.name}</div>
                    <div className="tea-testimonial-role">{testimonial.role}</div>
                  </div>
                </div>
                <div className="tea-testimonial-stars">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="tea-testimonial-star" />
                  ))}
                </div>
                <p className="tea-testimonial-text">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="tea-contact">
        <div className="tea-contact-container">
          <div className="tea-contact-header">
            <span className="tea-contact-badge">
              Get In Touch
            </span>
            <h2 className="tea-contact-title">Contact Us</h2>
            <p className="tea-contact-subtitle">
              Have questions about our teas or need personalized recommendations? We'd love to hear from you.
            </p>
          </div>
          
          <div className="tea-contact-grid">
            {/* Contact Info */}
            <div className="tea-contact-info">
              <div className="tea-contact-info-item">
                <div className="tea-contact-icon-container">
                  <MapPin className="tea-contact-icon" />
                </div>
                <div>
                  <h3 className="tea-contact-info-title">Visit Our Flagship Store</h3>
                  <p className="tea-contact-info-text">123 Tea Garden Lane<br />San Francisco, CA 94102</p>
                </div>
              </div>
              
              <div className="tea-contact-info-item">
                <div className="tea-contact-icon-container">
                  <Phone className="tea-contact-icon" />
                </div>
                <div>
                  <h3 className="tea-contact-info-title">Call Us</h3>
                  <p className="tea-contact-info-text">+1 (555) 123-BREW<br />Mon-Fri: 8AM-8PM PST</p>
                </div>
              </div>
              
              <div className="tea-contact-info-item">
                <div className="tea-contact-icon-container">
                  <Mail className="tea-contact-icon" />
                </div>
                <div>
                  <h3 className="tea-contact-info-title">Email Us</h3>
                  <p className="tea-contact-info-text">hello@teabrew.com<br />support@teabrew.com</p>
                </div>
              </div>
              
              <div className="tea-contact-info-item">
                <div className="tea-contact-icon-container">
                  <Clock className="tea-contact-icon" />
                </div>
                <div>
                  <h3 className="tea-contact-info-title">Store Hours</h3>
                  <p className="tea-contact-info-text">Mon-Sat: 7AM-9PM<br />Sunday: 8AM-7PM</p>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="tea-contact-form-container">
              {isSubmitted ? (
                <div className="tea-contact-success">
                  <CheckCircle className="tea-success-icon" />
                  <h3 className="tea-success-title">Message Sent!</h3>
                  <p className="tea-success-text">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="tea-contact-form">
                  <div className="tea-form-group">
                    <label className="tea-form-label">Your Name</label>
                    <input
                      type="text"
                      required
                      value={contactForm.name}
                      onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                      className="tea-form-input"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div className="tea-form-group">
                    <label className="tea-form-label">Email Address</label>
                    <input
                      type="email"
                      required
                      value={contactForm.email}
                      onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                      className="tea-form-input"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div className="tea-form-group">
                    <label className="tea-form-label">Message</label>
                    <textarea
                      required
                      rows={5}
                      value={contactForm.message}
                      onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                      className="tea-form-textarea"
                      placeholder="Tell us about your tea preferences or ask any questions..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="tea-form-submit-btn"
                  >
                    Send Message
                    <Send className="tea-submit-icon" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA Section */}
      <section className="tea-newsletter">
        <div className="tea-newsletter-container">
          <div className="tea-newsletter-card">
            <h2 className="tea-newsletter-title">
              Join the TEA BREW Experience
            </h2>
            <p className="tea-newsletter-text">
              Sign up for our newsletter and get <span className="tea-newsletter-highlight">15% off</span> your first order. Plus, be the first to know about new blends, exclusive offers, and tea brewing tips from our experts.
            </p>
            <div className="tea-newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="tea-newsletter-input"
              />
              <button className="tea-newsletter-btn">
                Subscribe
                <ArrowRight className="tea-newsletter-arrow" />
              </button>
            </div>
            <p className="tea-newsletter-note">
              🔒 We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced Footer with Animations */}
      <footer className="tea-footer">
        {/* Background Animation Elements */}
        <div className="tea-footer-bg-elements">
          <div className="tea-footer-bg-circle tea-footer-bg-circle-1"></div>
          <div className="tea-footer-bg-circle tea-footer-bg-circle-2"></div>
          <div className="tea-footer-bg-circle tea-footer-bg-circle-3"></div>
        </div>
        
        <div className="tea-footer-content">
          {/* Main Footer Content */}
          <div className="tea-footer-main">
            <div className="tea-footer-grid">
              {/* Brand Section */}
              <div className="tea-footer-brand">
                <div className="tea-footer-brand-container">
                  <Leaf className="tea-footer-brand-icon" />
                  <span className="tea-footer-brand-name">TEA BREW</span>
                  <span className="tea-footer-premium-badge">Premium</span>
                </div>
                <p className="tea-footer-brand-text">
                  Crafting exceptional tea experiences since our founding. We believe in quality, sustainability, and passion in every cup. Join our community of tea lovers worldwide.
                </p>
                
                {/* Social Media with Hover Effects */}
                <div className="tea-footer-social">
                  <a href="#" className="tea-social-link tea-social-facebook">
                    <Facebook className="tea-social-icon" />
                  </a>
                  <a href="#" className="tea-social-link tea-social-instagram">
                    <Instagram className="tea-social-icon" />
                  </a>
                  <a href="#" className="tea-social-link tea-social-twitter">
                    <Twitter className="tea-social-icon" />
                  </a>
                  <a href="#" className="tea-social-link tea-social-youtube">
                    <Youtube className="tea-social-icon" />
                  </a>
                </div>
              </div>
              
              {/* Quick Links */}
              <div className="tea-footer-links">
                <h3 className="tea-footer-links-title">
                  Quick Links
                  <div className="tea-footer-title-underline"></div>
                </h3>
                <ul className="tea-footer-links-list">
                  {['Our Teas', 'About Us', 'Store Locator', 'Careers', 'Press', 'Blog'].map((item, index) => (
                    <li key={index}>
                      <a 
                        href="#" 
                        className="tea-footer-link"
                      >
                        <span className="tea-footer-link-text">{item}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Customer Care */}
              <div className="tea-footer-links">
                <h3 className="tea-footer-links-title">
                  Customer Care
                  <div className="tea-footer-title-underline"></div>
                </h3>
                <ul className="tea-footer-links-list">
                  {['Help Center', 'Contact Support', 'Shipping Info', 'Returns & Exchanges', 'Size Guide', 'Track Order'].map((item, index) => (
                    <li key={index}>
                      <a 
                        href="#" 
                        className="tea-footer-link"
                      >
                        <span className="tea-footer-link-text">{item}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Company Info */}
              <div className="tea-footer-links">
                <h3 className="tea-footer-links-title">
                  Company
                  <div className="tea-footer-title-underline"></div>
                </h3>
                <ul className="tea-footer-links-list">
                  {['Our Story', 'Sustainability', 'Partnerships', 'Wholesale', 'Affiliate Program', 'Gift Cards'].map((item, index) => (
                    <li key={index}>
                      <a 
                        href="#" 
                        className="tea-footer-link"
                      >
                        <span className="tea-footer-link-text">{item}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Newsletter Section in Footer */}
            <div className="tea-footer-newsletter">
              <div className="tea-footer-newsletter-container">
                <h3 className="tea-footer-newsletter-title">Stay Steeped in the Latest</h3>
                <p className="tea-footer-newsletter-text">Get brewing tips, new product launches, and exclusive offers delivered to your inbox.</p>
                <div className="tea-footer-newsletter-form">
                  <input 
                    type="email" 
                    placeholder="your.email@example.com"
                    className="tea-footer-newsletter-input"
                  />
                  <button className="tea-footer-newsletter-btn">
                    Subscribe
                    <Send className="tea-footer-newsletter-icon" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Footer */}
          <div className="tea-footer-bottom">
            <div className="tea-footer-bottom-content">
              <div className="tea-footer-copyright">
                © 2025 TEA BREW. All rights reserved. | 
                <a href="#" className="tea-footer-legal-link">Privacy Policy</a> | 
                <a href="#" className="tea-footer-legal-link">Terms of Service</a> | 
                <a href="#" className="tea-footer-legal-link">Cookie Policy</a>
              </div>
              <div className="tea-footer-settings">
                <span className="tea-footer-setting">
                  <Globe className="tea-footer-setting-icon" />
                  English (US)
                </span>
                <span>🇺🇸 USD</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Tea;