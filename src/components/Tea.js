import React, { useState, useEffect } from 'react';
import '../css/tea.css';
import { 
  Menu, X, Star, Leaf, Coffee, 
  MapPin, Phone, Clock, Users, 
  Facebook, Instagram, Twitter, Youtube, Send,
  ArrowRight, CheckCircle, Heart, Truck, Shield
} from 'lucide-react';
import tea1 from '../img/IMG_9130.JPG';
import tea2 from '../img/IMG_9125.JPG';
import tea3 from '../img/IMG_9126.JPG';
import tea4 from '../img/IMG_9127.JPG';
import tea5 from '../img/IMG_9129.JPG';
import tea6 from '../img/IMG_9131.JPG';
import tea7 from '../img/IMG_9136.JPG';
import tea8 from '../img/IMG_9133.JPG';
import tea10 from '../img/lemonades_9197.JPG';
import tea11 from '../img/IMG_9135.JPG';
import ansh from '../img/ansh.jpeg';
import amrinder from '../img/amrinder.jpeg';
import gurvansh from '../img/gurvansh.jpeg';

const Tea = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({ customers: 0, locations: 0, varieties: 0 });
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedStats({ customers: 6000, locations: 1, varieties: 10 });
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const teas = [
    {
      name: "Adrak Tea",
      price: "₹20",
      originalPrice: "₹30",
      image: tea1,
      rating: 4.9,
      reviews: 234,
      description: "Classic ginger-infused black tea with a spicy, warming finish",
      bestseller: true,
      tags: ["Black Tea", "Spicy", "Traditional"]
    },
    {
      name: "Chocolate Tea",
      price: "₹20",
      originalPrice: "₹30",
      image: tea2,
      rating: 4.8,
      reviews: 189,
      description: "Rich chocolate-flavored green tea with a smooth, indulgent taste",
      organic: true,
      tags: ["Green Tea", "Sweet", "Organic"]
    },
    {
      name: "Rose Tea",
      price: "₹20",
      originalPrice: "₹30",
      image: tea3,
      rating: 4.9,
      reviews: 156,
      description: "Delicate rose-infused black tea with floral undertones",
      premium: true,
      tags: ["Black Tea", "Floral", "Premium"]
    },
    {
      name: "Elaichi Tea",
      price: "₹20",
      originalPrice: "₹30",
      image: tea4,
      rating: 4.7,
      reviews: 298,
      description: "Cardamom-spiced herbal tea, soothing and aromatic",
      caffeineFree: true,
      tags: ["Herbal", "Caffeine-Free", "Aromatic"]
    },
    {
      name: "Masala Tea",
      price: "₹20",
      originalPrice: "₹30",
      image: tea5,
      rating: 4.9,
      reviews: 87,
      description: "Bold blend of spices and black tea, a classic Indian chai",
      limitedEdition: true,
      tags: ["Black Tea", "Spicy", "Artisan"]
    },
    {
      name: "Lemonade",
      price: "₹50",
      originalPrice: "₹60",
      image: tea10,
      rating: 4.8,
      reviews: 134,
      description: "Refreshing lemon-infused beverage with a zesty kick",
      tags: ["Non-Tea", "Citrus", "Refreshing"]
    },
    {
      name: "Watermelon Mojito",
      price: "₹50",
      originalPrice: "₹60",
      image: tea6,
      rating: 4.8,
      reviews: 134,
      description: "Cool watermelon and mint-infused drink, perfect for summer",
      tags: ["Non-Tea", "Fruity", "Refreshing"]
    },
    {
      name: "Black Currant Mojito",
      price: "₹50",
      originalPrice: "₹60",
      image: tea8,
      rating: 4.8,
      reviews: 134,
      description: "Tangy black currant mojito with a vibrant, fruity twist",
      tags: ["Non-Tea", "Fruity", "Refreshing"]
    },
    {
      name: "Mango Mojito",
      price: "₹50",
      originalPrice: "₹60",
      image: tea11,
      rating: 4.8,
      reviews: 134,
      description: "Sweet mango-infused mojito with a tropical flair",
      tags: ["Non-Tea", "Fruity", "Refreshing"]
    },
    {
      name: "Virgin Mojito",
      price: "₹50",
      originalPrice: "₹60",
      image: tea7,
      rating: 4.8,
      reviews: 134,
      description: "Classic mint and lime mojito, crisp and non-alcoholic",
      tags: ["Non-Tea", "Mint", "Refreshing"]
    }
  ];

  const testimonials = [
    {
      name: "Ansh Sidhu",
      role: "Founder",
      image: ansh,
      text: "At TEA BREW, we aim to revive the art of tea-making, blending tradition with innovation to create unforgettable flavors."
    },
    {
      name: "Amrinder Singh",
      role: "Co-founder",
      image: amrinder,
      text: "Our commitment to quality and sustainability drives every cup we serve, bringing joy to tea lovers in Bathinda and beyond."
    },
    {
      name: "Gurvansh Singh",
      role: "Operations Head",
      image: gurvansh,
      text: "Every beverage at TEA BREW is crafted with precision and passion, ensuring a delightful experience for our community."
    }
  ];

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    if (!contactForm.email.includes('@')) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    const formData = new FormData();
    formData.append('name', contactForm.name);
    formData.append('email', contactForm.email);
    formData.append('message', contactForm.message);

    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORMSPREE_ID', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSubmitted(true);
        setErrorMessage('');
        setTimeout(() => {
          setIsSubmitted(false);
          setContactForm({ name: '', email: '', message: '' });
        }, 3000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      setErrorMessage('Failed to send message. Please try again later.');
      console.error('Formspree error:', error);
    }
  };

  return (
    <div className="tea-app">
      {/* Navigation */}
      <nav className="tea-nav">
        <div className="tea-nav-container">
          <div className="tea-nav-content">
            <div className="tea-brand">
              <div className="tea-brand-icon">
                <Leaf className="tea-leaf-icon" aria-hidden="true" />
                <div className="tea-brand-dot"></div>
              </div>
              <span className="tea-brand-name">TEA BREW</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="tea-desktop-nav">
              <div className="tea-nav-links">
                {['Menu', 'About', 'Contact'].map((item) => (
                  <a 
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="tea-nav-link"
                    aria-label={`Navigate to ${item} section`}
                  >
                    {item}
                    <span className="tea-nav-underline"></span>
                  </a>
                ))}
              </div>
            </div>

            <div className="tea-nav-actions">
           
              <div className="tea-mobile-menu-btn">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="tea-menu-toggle"
                  aria-label={isMenuOpen ? "Close menu" : "Open menu"}
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
              {['Menu', 'About', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="tea-mobile-nav-link"
                  onClick={() => setIsMenuOpen(false)}
                  aria-label={`Navigate to ${item} section`}
                >
                  {item}
                </a>
              ))}
              <a 
                href="#menu"
                className="tea-mobile-nav-link"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Shop Now"
              >
                Shop Now
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="tea-hero" id="home">
        <div className="tea-hero-overlay"></div>
        <img 
          src="/images/tea-plantation.jpg" 
          alt="Lush tea plantation with vibrant green leaves"
          className="tea-hero-image"
        />
        <div className="tea-hero-content">
          <h1 className="tea-hero-title">
            Discover Artisan Teas
          </h1>
          <p className="tea-hero-subtitle">
            Savor the finest tea blends and refreshing beverages, crafted with tradition and passion.
          </p>
          <div className="tea-hero-buttons">
            <a href="#menu" className="tea-primary-btn">
              Explore Menu
              <ArrowRight className="tea-btn-arrow" />
            </a>
            <a href="#contact" className="tea-secondary-btn">
              Contact Us
              <ArrowRight className="tea-btn-arrow" />
            </a>
          </div>
          <div className="tea-scroll-indicator" aria-hidden="true">
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
                <Truck className="tea-feature-icon" aria-hidden="true" />
              </div>
              <h3 className="tea-feature-title">Free Shipping</h3>
              <p className="tea-feature-description">On orders over ₹500</p>
            </div>
            <div className="tea-feature-item">
              <div className="tea-feature-icon-container">
                <Shield className="tea-feature-icon" aria-hidden="true" />
              </div>
              <h3 className="tea-feature-title">Quality Guarantee</h3>
              <p className="tea-feature-description">100% satisfaction promise</p>
            </div>
            <div className="tea-feature-item">
              <div className="tea-feature-icon-container">
                <Leaf className="tea-feature-icon" aria-hidden="true" />
              </div>
              <h3 className="tea-feature-title">Organic Certified</h3>
              <p className="tea-feature-description">Sustainably sourced</p>
            </div>
            <div className="tea-feature-item">
              <div className="tea-feature-icon-container">
                <Heart className="tea-feature-icon" aria-hidden="true" />
              </div>
              <h3 className="tea-feature-title">Expert Curated</h3>
              <p className="tea-feature-description">By tea artisans</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Teas Section */}
      <section className="tea-products" id="menu">
        <div className="tea-products-container">
          <div className="tea-section-header">
            <h2 className="tea-section-title">Our Signature Menu</h2>
            <p className="tea-section-description">
              Explore our curated selection of teas and refreshing beverages, crafted with love and tradition.
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
                    alt={`${tea.name} beverage`}
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
                  <button 
                    className="tea-wishlist-btn" 
                    aria-label={`Add ${tea.name} to wishlist`}
                  >
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
                          aria-hidden="true"
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
            <h2 className="tea-stats-title">Trusted by Tea Lovers</h2>
            <p className="tea-stats-subtitle">
              Join thousands who enjoy TEA BREW’s premium beverages daily.
            </p>
          </div>
          
          <div className="tea-stats-grid">
            <div className="tea-stat-item">
              <div className="tea-stat-value">
                {animatedStats.customers.toLocaleString()}+
              </div>
              <div className="tea-stat-label">What Our Founder Says</div>
              <Users className="tea-stat-icon" aria-hidden="true" />
            </div>
            <div className="tea-stat-item">
              <div className="tea-stat-value">
                {animatedStats.locations}
              </div>
              <div className="tea-stat-label">Store Location</div>
              <MapPin className="tea-stat-icon" aria-hidden="true" />
            </div>
            <div className="tea-stat-item">
              <div className="tea-stat-value">
                {animatedStats.varieties}+
              </div>
              <div className="tea-stat-label">Beverage Varieties</div>
              <Coffee className="tea-stat-icon" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="tea-about" id="about">
        <div className="tea-about-container">
          <div className="tea-about-grid">
            <div className="tea-about-content">
              <span className="tea-about-badge">Our Heritage</span>
              <h2 className="tea-about-title">Our Story</h2>
              <div className="tea-about-text">
                <p>
                  TEA BREW was born in the heart of Bathinda, with a mission to bring authentic, high-quality teas and beverages to every cup. Our passion drives us to source the finest ingredients sustainably.
                </p>
                <p>
                  From traditional Indian chai to refreshing mojitos, each drink is crafted with care by our artisans, celebrating the rich heritage of flavors and community.
                </p>
              </div>
              
              <div className="tea-about-stats">
                <div className="tea-about-stat">
                  <div className="tea-about-stat-icon-container">
                    <Coffee className="tea-about-stat-icon" aria-hidden="true" />
                  </div>
                  <div className="tea-about-stat-value">10+</div>
                  <div className="tea-about-stat-label">Beverage Varieties</div>
                </div>
                <div className="tea-about-stat">
                  <div className="tea-about-stat-icon-container">
                    <Leaf className="tea-about-stat-icon" aria-hidden="true" />
                  </div>
                  <div className="tea-about-stat-value">100%</div>
                  <div className="tea-about-stat-label">Organic</div>
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
            <span className="tea-testimonials-badge">Founders' Vision</span>
            <h2 className="tea-testimonials-title">What Our Founders Say</h2>
            <p className="tea-testimonials-subtitle">
              Meet the visionaries behind TEA BREW’s exceptional beverages.
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
                    alt={`Portrait of ${testimonial.name}`}
                    className="tea-testimonial-avatar"
                  />
                  <div>
                    <div className="tea-testimonial-name">{testimonial.name}</div>
                    <div className="tea-testimonial-role">{testimonial.role}</div>
                  </div>
                </div>
                <p className="tea-testimonial-text">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="tea-contact" id="contact">
        <div className="tea-contact-container">
          <div className="tea-contact-header">
            <span className="tea-contact-badge">Get In Touch</span>
            <h2 className="tea-contact-title">Contact Us</h2>
            <p className="tea-contact-subtitle">
              Have questions or need recommendations? Reach out to us!
            </p>
          </div>
          
          <div className="tea-contact-grid">
            <div className="tea-contact-info">
              <div className="tea-contact-info-item">
                <div className="tea-contact-icon-container">
                  <MapPin className="tea-contact-icon" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="tea-contact-info-title">Visit Our Store</h3>
                  <p className="tea-contact-info-text"> Bathinda, Punjab 151001</p>
                </div>
              </div>
              
              <div className="tea-contact-info-item">
                <div className="tea-contact-icon-container">
                  <Phone className="tea-contact-icon" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="tea-contact-info-title">Call Us</h3>
                  <p className="tea-contact-info-text">
                    <p href="tel:+917973137104">+91 7973137104</p><br />
                    <p href="tel:+916283946618">+91 6283946618</p>
                  </p>
                </div>
              </div>
              
              <div className="tea-contact-info-item">
                <div className="tea-contact-icon-container">
                  <Clock className="tea-contact-icon" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="tea-contact-info-title">Store Hours</h3>
                  <p className="tea-contact-info-text">Mon-Sun: 8AM-11PM</p>
                </div>
              </div>
            </div>
            
            <div className="tea-contact-form-container">
              {isSubmitted ? (
                <div className="tea-contact-success">
                  <CheckCircle className="tea-success-icon" aria-hidden="true" />
                  <h3 className="tea-success-title">Message Sent!</h3>
                  <p className="tea-success-text">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="tea-contact-form">
                  <div className="tea-form-group">
                    <label className="tea-form-label" htmlFor="name">Your Name</label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      value={contactForm.name}
                      onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                      className="tea-form-input"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div className="tea-form-group">
                    <label className="tea-form-label" htmlFor="email">Email Address</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      value={contactForm.email}
                      onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                      className="tea-form-input"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div className="tea-form-group">
                    <label className="tea-form-label" htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={contactForm.message}
                      onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                      className="tea-form-textarea"
                      placeholder="Tell us about your preferences or questions..."
                    />
                  </div>
                  
                  {errorMessage && (
                    <p className="tea-form-error" style={{ color: 'red', fontSize: '0.95rem' }}>
                      {errorMessage}
                    </p>
                  )}
                  
                  <button
                    type="submit"
                    className="tea-form-submit-btn"
                    aria-label="Submit contact form"
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

      {/* Footer */}
      <footer className="tea-footer">
        <div className="tea-footer-content">
          <div className="tea-footer-main">
            <div className="tea-footer-grid">
              <div className="tea-footer-brand">
                <div className="tea-footer-brand-container">
                  <Leaf className="tea-footer-brand-icon" aria-hidden="true" />
                  <span className="tea-footer-brand-name">TEA BREW</span>
                </div>
                <p className="tea-footer-brand-text">
                  Crafting premium teas and beverages in Bathinda since 2020.
                </p>
                <div className="tea-footer-social">
                  <a href="https://facebook.com" className="tea-social-link tea-social-facebook" aria-label="Follow us on Facebook">
                    <Facebook className="tea-social-icon" />
                  </a>
                  <a href="https://instagram.com" className="tea-social-link tea-social-instagram" aria-label="Follow us on Instagram">
                    <Instagram className="tea-social-icon" />
                  </a>
                  <a href="https://twitter.com" className="tea-social-link tea-social-twitter" aria-label="Follow us on Twitter">
                    <Twitter className="tea-social-icon" />
                  </a>
                  <a href="https://youtube.com" className="tea-social-link tea-social-youtube" aria-label="Follow us on YouTube">
                    <Youtube className="tea-social-icon" />
                  </a>
                </div>
              </div>
              
              <div className="tea-footer-links">
                <h3 className="tea-footer-links-title">Quick Links</h3>
                <ul className="tea-footer-links-list">
                  {['Menu', 'About', 'Contact'].map((item, index) => (
                    <li key={index}>
                      <a 
                        href={`#${item.toLowerCase()}`}
                        className="tea-footer-link"
                        aria-label={`Navigate to ${item} section`}
                      >
                        <span className="tea-footer-link-text">{item}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="tea-footer-links">
                <h3 className="tea-footer-links-title">Contact</h3>
                <ul className="tea-footer-links-list">
                  <li>
                    <a href="tel:+917973137104" className="tea-footer-link">
                      <span className="tea-footer-link-text">+91 7973137104</span>
                    </a>
                  </li>
                  <li>
                    <a href="tel:+916283946618" className="tea-footer-link">
                      <span className="tea-footer-link-text">+91 6283946618</span>
                    </a>
                  </li>
                  <li>
                    <span className="tea-footer-link-text">Bathinda</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="tea-footer-bottom">
            <div className="tea-footer-bottom-content">
              <div className="tea-footer-copyright">
                © 2025 TEA BREW. All rights reserved.
              </div>
            </div>
          </div> 
        </div>
      </footer>
    </div>
  );
};

export default Tea;