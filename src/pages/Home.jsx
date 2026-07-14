import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import PropertyCategories from "./PropertyCategories"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    // Initialize AOS with better settings
    AOS.init({
      duration: 1000,
      easing: 'ease-out-cubic',
      once: false,
      mirror: true,
      offset: 50,
      delay: 50,
    });

    const counters = document.querySelectorAll('.stat-number');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = parseInt(entry.target.getAttribute('data-target'));
          let current = 0;
          const increment = target / 60;
          const updateCounter = () => {
            if (current < target) {
              current += increment;
              entry.target.textContent = Math.round(current) + '+';
              requestAnimationFrame(updateCounter);
            } else {
              entry.target.textContent = target + '+';
            }
          };
          updateCounter();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    
    counters.forEach(counter => observer.observe(counter));
    return () => {
      observer.disconnect();
      AOS.refresh();
    };
  }, []);

  const categories = [
    { icon: '🏢', label: 'Residential', color: '#38BDF8' },
    { icon: '🏭', label: 'Commercial', color: '#FF9F1C' },
    { icon: '🏗️', label: 'Under Construction', color: '#D4AF37' },
    { icon: '🌳', label: 'Vacant Land', color: '#2ECC71' },
    { icon: '🏘️', label: 'Villa / Plots', color: '#E74C3C' },
    { icon: '🏬', label: 'Office Spaces', color: '#3498DB' },
  ];

  const growthCorridors = [
    { name: 'Ajmer Road', potential: 'High Growth', roi: '15-20%', infra: 'Metro, Commercial Hub', color: '#5E35AA', bg: 'rgba(94, 53, 170, 0.15)' },
    { name: 'Jagatpura', potential: 'Emerging', roi: '12-18%', infra: 'Education Hub, IT Park', color: '#FF9F1C', bg: 'rgba(255, 159, 28, 0.15)' },
    { name: 'Tonk Road', potential: 'Stable', roi: '10-14%', infra: 'Industrial Zone, Airport', color: '#2ECC71', bg: 'rgba(46, 204, 113, 0.15)' },
    { name: 'Vaishali', potential: 'Mature', roi: '8-12%', infra: 'Commercial, Residential', color: '#3498DB', bg: 'rgba(52, 152, 219, 0.15)' },
    { name: 'Sitapura', potential: 'High Growth', roi: '14-20%', infra: 'SEZ, Industrial', color: '#E74C3C', bg: 'rgba(231, 76, 60, 0.15)' },
    { name: 'Ring Road', potential: 'Future Growth', roi: '12-18%', infra: 'Ring Road Development', color: '#D4AF37', bg: 'rgba(212, 175, 55, 0.15)' }
  ];

  const insights = [
    { title: '2026 Jaipur Market Outlook', cat: 'Market Report', date: 'Jan 2026' },
    { title: 'Metro Impact: Where Smart Investors Buy', cat: 'Infrastructure', date: 'Dec 2025' },
    { title: 'Future Growth Corridors of Jaipur', cat: 'Investment', date: 'Nov 2025' },
    { title: 'Budget Analysis 2026: Real Estate Impact', cat: 'Policy', date: 'Feb 2026' }
  ];

  return (
    <main className="overflow-hidden">
      {/* ===== HERO SECTION WITH GLASSMORPHISM ===== */}
      <section 
        className="hero-section d-flex align-items-center position-relative"
        data-aos="fade-down"
        data-aos-duration="1200"
      >
        <div className="container position-relative z-2">
          <div className="row align-items-center g-4">
            <div className="col-lg-7 text-center text-lg-start">
              <span 
                className="hero-badge badge rounded-pill px-4 py-2 mb-3 fw-semibold"
                style={{
                  background: 'rgba(255, 255, 255, 0.15)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
                }}
                data-aos="fade-right"
                data-aos-delay="100"
              >
                ✦ Jaipur's Most Trusted Investment Advisor
              </span>
              
              <h1 
                className="hero-title fw-bold mb-3 text-white"
                style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
                data-aos="fade-right"
                data-aos-delay="200"
              >
                Invest in Jaipur with <br />
                <span className="text-sky" style={{ 
                  background: 'linear-gradient(135deg, #38BDF8, #818CF8)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>Confidence,</span> Not Confusion.
              </h1>
              
              <p 
                className="hero-desc lead text-light mb-4 fs-6 max-w-lg"
                style={{ opacity: 0.95 }}
                data-aos="fade-right"
                data-aos-delay="300"
              >
                Transparent, data-driven real estate investment consulting for smart investors 
                looking to build long-term wealth in Jaipur's growth corridors.
              </p>

              {/* Glassmorphism Search Bar */}
              <div 
                className="search-box p-2 rounded-4 shadow-lg mb-4"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)'
                }}
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="row g-2 align-items-center">
                  <div className="col-12 col-md-4">
                    <select 
                      className="form-select border-0 py-2 shadow-none fw-medium"
                      style={{
                        background: 'rgba(255, 255, 255, 0.9)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '12px'
                      }}
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                      <option value="All">All Categories</option>
                      {categories.map((cat, i) => (
                        <option key={i} value={cat.label}>{cat.icon} {cat.label}</option>
                      ))}
                    </select>
                  </div>
                  <div className="col-12 col-md-5 border-start-md">
                    <input 
                      type="text" 
                      className="form-control border-0 py-2 shadow-none"
                      style={{
                        background: 'rgba(255, 255, 255, 0.9)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '12px'
                      }}
                      placeholder="Search zones, corridors..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <div className="col-12 col-md-3">
                    <button className="btn w-100 py-2 fw-bold rounded-3"
                      style={{
                        background: 'linear-gradient(135deg, #38BDF8, #818CF8)',
                        color: 'white',
                        border: 'none',
                        boxShadow: '0 4px 15px rgba(56, 189, 248, 0.3)',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = 'scale(1.02)';
                        e.target.style.boxShadow = '0 6px 25px rgba(56, 189, 248, 0.5)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = 'scale(1)';
                        e.target.style.boxShadow = '0 4px 15px rgba(56, 189, 248, 0.3)';
                      }}
                    >
                      Search
                    </button>
                  </div>
                </div>
              </div>

              {/* Glassmorphism Category Pills */}
              <div 
                className="d-flex flex-wrap gap-2 justify-content-center justify-content-lg-start mb-4"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                {categories.map((cat, i) => (
                  <span 
                    key={i} 
                    className="badge rounded-pill px-3 py-2 cursor-pointer"
                    style={{
                      background: 'rgba(255, 255, 255, 0.12)',
                      backdropFilter: 'blur(10px)',
                      border: `1px solid ${cat.color}`,
                      color: 'white',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = `rgba(255, 255, 255, 0.25)`;
                      e.target.style.transform = 'translateY(-2px)';
                      e.target.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'rgba(255, 255, 255, 0.12)';
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = 'none';
                    }}
                  >
                    {cat.icon} {cat.label}
                  </span>
                ))}
              </div>

              {/* Glassmorphism Action Buttons */}
              <div 
                className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <Link to="/consultation" className="btn rounded-pill px-4 py-2 fw-bold text-white"
                  style={{
                    background: 'linear-gradient(135deg, #D4AF37, #F59E0B)',
                    boxShadow: '0 4px 20px rgba(212, 175, 55, 0.3)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-3px) scale(1.02)';
                    e.target.style.boxShadow = '0 8px 30px rgba(212, 175, 55, 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0) scale(1)';
                    e.target.style.boxShadow = '0 4px 20px rgba(212, 175, 55, 0.3)';
                  }}
                >
                  Book a Strategy Call
                </Link>
                <Link to="/insights" className="btn rounded-pill px-4 py-2 fw-bold"
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    color: 'white',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(255, 255, 255, 0.25)';
                    e.target.style.transform = 'translateY(-3px)';
                    e.target.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  Download Market Report
                </Link>
              </div>
            </div>

            {/* Glassmorphism Stats Section */}
            <div className="col-lg-5">
              <div className="row g-3">
                <div className="col-6" data-aos="zoom-in" data-aos-delay="100">
                  <div className="card border-0 rounded-4 text-center p-3 h-100"
                    style={{
                      background: 'rgba(255, 255, 255, 0.08)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                      transition: 'all 0.4s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                      e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.2)';
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                      e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1)';
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                    }}
                  >
                    <h2 className="stat-number display-6 fw-bold text-sky mb-0" data-target="500"
                      style={{
                        background: 'linear-gradient(135deg, #38BDF8, #818CF8)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                      }}
                    >0+</h2>
                    <p className="text-light small mb-0 fw-bold" style={{ opacity: 0.9 }}>Properties Analyzed</p>
                  </div>
                </div>
                <div className="col-6" data-aos="zoom-in" data-aos-delay="200">
                  <div className="card border-0 rounded-4 text-center p-3 h-100"
                    style={{
                      background: 'rgba(255, 255, 255, 0.08)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                      transition: 'all 0.4s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                      e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.2)';
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                      e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1)';
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                    }}
                  >
                    <h2 className="stat-number display-6 fw-bold text-sky mb-0" data-target="100"
                      style={{
                        background: 'linear-gradient(135deg, #38BDF8, #818CF8)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                      }}
                    >0+</h2>
                    <p className="text-light small mb-0 fw-bold" style={{ opacity: 0.9 }}>Investors Served</p>
                  </div>
                </div>
                <div className="col-6" data-aos="zoom-in" data-aos-delay="300">
                  <div className="card border-0 rounded-4 text-center p-3 h-100"
                    style={{
                      background: 'rgba(255, 255, 255, 0.08)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                      transition: 'all 0.4s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                      e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.2)';
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                      e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1)';
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                    }}
                  >
                    <h2 className="stat-number display-6 fw-bold text-sky mb-0" data-target="25"
                      style={{
                        background: 'linear-gradient(135deg, #38BDF8, #818CF8)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                      }}
                    >0+</h2>
                    <p className="text-light small mb-0 fw-bold" style={{ opacity: 0.9 }}>Years Experience</p>
                  </div>
                </div>
                <div className="col-6" data-aos="zoom-in" data-aos-delay="400">
                  <div className="card border-0 rounded-4 text-center p-3 h-100"
                    style={{
                      background: 'rgba(255, 255, 255, 0.08)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                      transition: 'all 0.4s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                      e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.2)';
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                      e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1)';
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                    }}
                  >
                    <h2 className="stat-number display-6 fw-bold text-sky mb-0" data-target="150"
                      style={{
                        background: 'linear-gradient(135deg, #38BDF8, #818CF8)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                      }}
                    >0+</h2>
                    <p className="text-light small mb-0 fw-bold" style={{ opacity: 0.9 }}>Crore Portfolio</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div data-aos="fade-up" data-aos-duration="800">
        <PropertyCategories />
      </div>

      {/* ===== GROWTH CORRIDORS WITH GLASSMORPHISM ===== */}
      <section className="py-5" style={{ background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)' }}>
        <div className="container py-3">
          <div 
            className="text-center mb-5"
            data-aos="fade-up"
          >
            <span className="text-purple fw-bold text-uppercase tracking-wider fs-7">Investment Zones</span>
            <h2 className="display-6 fw-bold my-2">Jaipur's <span className="text-purple">Growth Corridors</span></h2>
            <p className="text-muted mx-auto" style={{ maxWidth: '600px' }}>
              Explore the most promising investment zones with future infrastructure and high appreciation potential.
            </p>
            <div className="bg-purple mx-auto rounded-pill" style={{ width: '50px', height: '3px' }}></div>
          </div>

          <div className="row g-4">
            {growthCorridors.map((corridor, i) => (
              <div 
                className="col-lg-4 col-md-6" 
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className="card h-100 border-0 rounded-4 p-4"
                  style={{
                    background: 'rgba(255, 255, 255, 0.7)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.8)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                    borderLeft: `5px solid ${corridor.color}`,
                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                    e.currentTarget.style.boxShadow = '0 20px 50px rgba(0, 0, 0, 0.15)';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.08)';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.7)';
                  }}
                >
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <h4 className="fw-bold mb-0 fs-5">{corridor.name}</h4>
                    <span className="badge rounded-pill px-3 py-1" 
                      style={{ 
                        background: corridor.bg, 
                        color: corridor.color,
                        backdropFilter: 'blur(5px)',
                        border: '1px solid rgba(255,255,255,0.2)'
                      }}
                    >
                      {corridor.potential}
                    </span>
                  </div>
                  <div className="my-3 text-muted small">
                    <div className="mb-1"><strong>ROI:</strong> {corridor.roi}</div>
                    <div><strong>Infra:</strong> {corridor.infra}</div>
                  </div>
                  <Link to="/foundation" className="text-purple text-decoration-none fw-semibold small mt-auto"
                    style={{ transition: 'all 0.3s ease' }}
                    onMouseEnter={(e) => { e.target.style.letterSpacing = '1px' }}
                    onMouseLeave={(e) => { e.target.style.letterSpacing = 'normal' }}
                  >
                    Explore Zone →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY WE'RE DIFFERENT ===== */}
      <section className="py-5">
        <div className="container py-3">
          <div 
            className="text-center mb-5"
            data-aos="fade-up"
          >
            <span className="text-purple fw-bold text-uppercase tracking-wider fs-7">Why We're Different</span>
            <h2 className="display-6 fw-bold my-2">Investment Advisory, <br /><span className="text-purple">Not Property Sales</span></h2>
            <div className="bg-purple mx-auto rounded-pill mt-2" style={{ width: '50px', height: '3px' }}></div>
          </div>

          <div className="row g-4">
            {[
              { icon: '🔍', title: 'No Property Spam', desc: "We don't sell properties. We provide transparent, unbiased investment advice." },
              { icon: '📊', title: 'Data-Driven Analysis', desc: 'Every recommendation is backed by market data, ROI calculations, and risk assessment.' },
              { icon: '🤝', title: 'Transparent Partnerships', desc: 'We evaluate developers and projects independently to protect your interests.' },
              { icon: '🏗️', title: 'Developer Due Diligence', desc: 'Legal verification, background checks, and project viability analysis.' },
              { icon: '📈', title: 'Exit Planning', desc: 'Strategic exit strategies designed to maximize your returns and minimize risks.' },
              { icon: '💼', title: 'Portfolio Building', desc: 'Build a diversified real estate portfolio aligned with your financial goals.' }
            ].map((feature, i) => (
              <div 
                className="col-lg-4 col-md-6" 
                key={i}
                data-aos="flip-up"
                data-aos-delay={i * 100}
              >
                <div className="card h-100 border-0 rounded-4 p-4 text-center"
                  style={{
                    background: 'rgba(255, 255, 255, 0.8)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.9)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.06)',
                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    borderTop: '4px solid transparent'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px)';
                    e.currentTarget.style.boxShadow = '0 20px 50px rgba(0, 0, 0, 0.12)';
                    e.currentTarget.style.borderTopColor = '#5E35AA';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.95)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.06)';
                    e.currentTarget.style.borderTopColor = 'transparent';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.8)';
                  }}
                >
                  <div className="fs-1 mb-2">{feature.icon}</div>
                  <h5 className="fw-bold mb-2">{feature.title}</h5>
                  <p className="text-muted small mb-0">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROCESS FRAMEWORK WITH GLASSMORPHISM ===== */}
      <section className="py-5" style={{ background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)' }}>
        <div className="container py-3">
          <div 
            className="text-center mb-5"
            data-aos="fade-up"
          >
            <span className="text-purple fw-bold text-uppercase tracking-wider fs-7">Our Process</span>
            <h2 className="display-6 fw-bold my-2">Investment <span className="text-purple">Framework</span></h2>
            <div className="bg-purple mx-auto rounded-pill mt-2" style={{ width: '50px', height: '3px' }}></div>
          </div>

          <div className="row g-4">
            {[
              { num: '01', title: 'Discover', desc: 'Identify prime investment opportunities in Jaipur\'s growth corridors.' },
              { num: '02', title: 'Analyze', desc: 'Deep dive into market data, ROI potential, developer background, and risks.' },
              { num: '03', title: 'Compare', desc: 'Side-by-side comparison of investment options with clear projections.' },
              { num: '04', title: 'Invest', desc: 'Confident investment with ongoing monitoring and exit strategy planning.' }
            ].map((step, i) => (
              <div 
                className="col-lg-3 col-md-6" 
                key={i}
                data-aos="fade-right"
                data-aos-delay={i * 150}
              >
                <div className="card h-100 border-0 rounded-4 p-4 text-center"
                  style={{
                    background: 'rgba(255, 255, 255, 0.7)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.8)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.06)',
                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                    e.currentTarget.style.boxShadow = '0 20px 50px rgba(94, 53, 170, 0.15)';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.06)';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.7)';
                  }}
                >
                  <div className="display-4 fw-bold mb-2"
                    style={{
                      background: 'linear-gradient(135deg, #5E35AA, #818CF8)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      opacity: 0.6
                    }}
                  >{step.num}</div>
                  <h5 className="fw-bold mb-2">{step.title}</h5>
                  <p className="text-muted small mb-0">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TRUSTED DEVELOPERS ===== */}
      <section className="py-5">
        <div className="container py-3">
          <div 
            className="text-center mb-5"
            data-aos="fade-up"
          >
            <span className="text-purple fw-bold text-uppercase tracking-wider fs-7">Trusted Partners</span>
            <h2 className="display-6 fw-bold my-2">Developers We <span className="text-purple">Evaluate</span></h2>
            <div className="bg-purple mx-auto rounded-pill mt-2" style={{ width: '50px', height: '3px' }}></div>
          </div>

          <div className="row g-3 justify-content-center">
            {['Mahima', 'Manglam', 'Ashiana', 'Unique Builders', 'ARG', 'Arihant'].map((dev, i) => (
              <div 
                className="col-6 col-sm-4 col-md-2" 
                key={i}
                data-aos="zoom-in"
                data-aos-delay={i * 100}
              >
                <div className="card border-0 rounded-3 p-3 text-center h-100"
                  style={{
                    background: 'rgba(255, 255, 255, 0.7)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.8)',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
                    transition: 'all 0.4s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px) scale(1.05)';
                    e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.12)';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.06)';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.7)';
                  }}
                >
                  <div className="fw-bold text-dark mb-1">{dev}</div>
                  <span className="text-warning small fs-8">✓ Verified</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MARKET INSIGHTS WITH GLASSMORPHISM ===== */}
      <section className="py-5" style={{ background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)' }}>
        <div className="container py-3">
          <div 
            className="text-center mb-5"
            data-aos="fade-up"
          >
            <span className="text-purple fw-bold text-uppercase tracking-wider fs-7">Market Insights</span>
            <h2 className="display-6 fw-bold my-2">Latest <span className="text-purple">Reports</span></h2>
            <div className="bg-purple mx-auto rounded-pill mt-2" style={{ width: '50px', height: '3px' }}></div>
          </div>

          <div className="row g-4">
            {insights.map((insight, i) => (
              <div 
                className="col-lg-3 col-md-6" 
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className="card h-100 border-0 rounded-4 p-4"
                  style={{
                    background: 'rgba(255, 255, 255, 0.7)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.8)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.06)',
                    transition: 'all 0.4s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 20px 50px rgba(0, 0, 0, 0.12)';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.06)';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.7)';
                  }}
                >
                  <span className="badge mb-2 align-self-start"
                    style={{
                      background: 'rgba(94, 53, 170, 0.1)',
                      color: '#5E35AA',
                      backdropFilter: 'blur(5px)',
                      border: '1px solid rgba(94, 53, 170, 0.2)'
                    }}
                  >{insight.cat}</span>
                  <h5 className="fw-bold mb-2 fs-6">{insight.title}</h5>
                  <span className="text-muted small d-block mb-3">{insight.date}</span>
                  <Link to="/insights" className="text-purple text-decoration-none fw-semibold small mt-auto"
                    style={{ transition: 'all 0.3s ease' }}
                    onMouseEnter={(e) => { e.target.style.letterSpacing = '1px' }}
                    onMouseLeave={(e) => { e.target.style.letterSpacing = 'normal' }}
                  >Read Report →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-5">
        <div className="container py-3">
          <div 
            className="text-center mb-5"
            data-aos="fade-up"
          >
            <span className="text-purple fw-bold text-uppercase tracking-wider fs-7">Success Stories</span>
            <h2 className="display-6 fw-bold my-2">Investor <span className="text-purple">Testimonials</span></h2>
            <div className="bg-purple mx-auto rounded-pill mt-2" style={{ width: '50px', height: '3px' }}></div>
          </div>

          <div className="row g-4">
            {[
              { name: 'Rahul Sharma', roi: '22%', review: 'The team helped me identify the right property in Jagatpura. My investment appreciated 22% in 18 months.' },
              { name: 'Priya Mehta', roi: '18%', review: 'Transparent advice and thorough due diligence. I invested in Ajmer Road with complete confidence.' },
              { name: 'Amit Jain', roi: '15%', review: 'Their framework made the entire process simple. I am now planning my second investment with them.' }
            ].map((story, i) => (
              <div 
                className="col-lg-4 col-md-6" 
                key={i}
                data-aos="flip-left"
                data-aos-delay={i * 150}
              >
                <div className="card h-100 border-0 rounded-4 p-4"
                  style={{
                    background: 'rgba(255, 255, 255, 0.7)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.8)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.06)',
                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    borderTop: '4px solid transparent'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px)';
                    e.currentTarget.style.boxShadow = '0 20px 50px rgba(0, 0, 0, 0.12)';
                    e.currentTarget.style.borderTopColor = '#5E35AA';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.06)';
                    e.currentTarget.style.borderTopColor = 'transparent';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.7)';
                  }}
                >
                  <p className="fst-italic text-muted small mb-3">"{story.review}"</p>
                  <div className="d-flex justify-content-between align-items-center mt-auto border-top pt-2"
                    style={{ borderColor: 'rgba(0,0,0,0.05)' }}
                  >
                    <div>
                      <div className="fw-bold text-dark small">{story.name}</div>
                      <div className="text-warning small fw-semibold">ROI: {story.roi}</div>
                    </div>
                    <span className="text-purple">✦</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONSULTATION CTA FORM WITH GLASSMORPHISM ===== */}
      <section className="py-5" style={{ background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)' }}>
        <div className="container py-3">
          <div 
            className="card border-0 rounded-4 p-4 p-md-5"
            style={{
              background: 'rgba(255, 255, 255, 0.7)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.9)',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.08)',
              transition: 'all 0.4s ease'
            }}
            data-aos="zoom-in-up"
            data-aos-duration="1000"
          >
            <div className="row align-items-center g-4">
              <div className="col-lg-5">
                <span className="text-purple fw-bold text-uppercase tracking-wider fs-7">Get Started</span>
                <h2 className="display-6 fw-bold my-3">Ready to Build <br /><span className="text-purple">Long-Term Wealth?</span></h2>
                <p className="text-muted mb-4 small">Book your free strategy session and discover how we can help you make smarter real estate investments in Jaipur.</p>
                <div className="d-flex flex-wrap gap-2">
                  <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" className="btn rounded-pill px-4 py-2 text-white"
                    style={{
                      background: 'linear-gradient(135deg, #25D366, #128C7E)',
                      boxShadow: '0 4px 15px rgba(37, 211, 102, 0.3)',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'translateY(-3px) scale(1.02)';
                      e.target.style.boxShadow = '0 8px 25px rgba(37, 211, 102, 0.5)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'translateY(0) scale(1)';
                      e.target.style.boxShadow = '0 4px 15px rgba(37, 211, 102, 0.3)';
                    }}
                  >
                    📱 WhatsApp
                  </a>
                  <a href="tel:+919999999999" className="btn rounded-pill px-4 py-2"
                    style={{
                      background: 'rgba(94, 53, 170, 0.1)',
                      border: '1px solid rgba(94, 53, 170, 0.2)',
                      color: '#5E35AA',
                      backdropFilter: 'blur(5px)',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = 'rgba(94, 53, 170, 0.2)';
                      e.target.style.transform = 'translateY(-3px)';
                      e.target.style.boxShadow = '0 8px 25px rgba(94, 53, 170, 0.15)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'rgba(94, 53, 170, 0.1)';
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = 'none';
                    }}
                  >
                    📞 Call Now
                  </a>
                </div>
              </div>

              <div className="col-lg-7">
                <div className="p-4 rounded-4"
                  style={{
                    background: 'rgba(255, 255, 255, 0.5)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.7)',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)'
                  }}
                >
                  <h4 className="fw-bold mb-3 fs-5">Book Your Strategy Session</h4>
                  <form>
                    <div className="row g-3">
                      <div className="col-12">
                        <input type="text" className="form-control rounded-3 py-2"
                          style={{
                            background: 'rgba(255, 255, 255, 0.8)',
                            backdropFilter: 'blur(5px)',
                            border: '1px solid rgba(0,0,0,0.05)'
                          }}
                          placeholder="Full Name" />
                      </div>
                      <div className="col-md-6">
                        <input type="email" className="form-control rounded-3 py-2"
                          style={{
                            background: 'rgba(255, 255, 255, 0.8)',
                            backdropFilter: 'blur(5px)',
                            border: '1px solid rgba(0,0,0,0.05)'
                          }}
                          placeholder="Email Address" />
                      </div>
                      <div className="col-md-6">
                        <input type="tel" className="form-control rounded-3 py-2"
                          style={{
                            background: 'rgba(255, 255, 255, 0.8)',
                            backdropFilter: 'blur(5px)',
                            border: '1px solid rgba(0,0,0,0.05)'
                          }}
                          placeholder="Phone Number" />
                      </div>
                      <div className="col-12">
                        <select className="form-select rounded-3 py-2"
                          style={{
                            background: 'rgba(255, 255, 255, 0.8)',
                            backdropFilter: 'blur(5px)',
                            border: '1px solid rgba(0,0,0,0.05)'
                          }}
                        >
                          <option value="">Investment Budget</option>
                          <option value="10-25">₹10 Lakh - ₹25 Lakh</option>
                          <option value="25-50">₹25 Lakh - ₹50 Lakh</option>
                          <option value="50-1cr">₹50 Lakh - ₹1 Crore</option>
                          <option value="1cr+">₹1 Crore+</option>
                        </select>
                      </div>
                      <div className="col-12">
                        <textarea className="form-control rounded-3"
                          style={{
                            background: 'rgba(255, 255, 255, 0.8)',
                            backdropFilter: 'blur(5px)',
                            border: '1px solid rgba(0,0,0,0.05)'
                          }}
                          rows="3" placeholder="Your Message"></textarea>
                      </div>
                      <div className="col-12">
                        <button type="submit" className="btn w-100 rounded-3 py-2 fw-bold text-white"
                          style={{
                            background: 'linear-gradient(135deg, #5E35AA, #818CF8)',
                            border: 'none',
                            boxShadow: '0 4px 15px rgba(94, 53, 170, 0.3)',
                            transition: 'all 0.3s ease'
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.transform = 'scale(1.02)';
                            e.target.style.boxShadow = '0 8px 25px rgba(94, 53, 170, 0.5)';
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.transform = 'scale(1)';
                            e.target.style.boxShadow = '0 4px 15px rgba(94, 53, 170, 0.3)';
                          }}
                        >
                          Book My Session
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;