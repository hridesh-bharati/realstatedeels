import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import PropertyCategories from "./PropertyCategories"
const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
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
    });
    counters.forEach(counter => observer.observe(counter));
    return () => observer.disconnect();
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
    { name: 'Ajmer Road', potential: 'High Growth', roi: '15-20%', infra: 'Metro, Commercial Hub', color: '#5E35AA', bg: 'rgba(94, 53, 170, 0.1)' },
    { name: 'Jagatpura', potential: 'Emerging', roi: '12-18%', infra: 'Education Hub, IT Park', color: '#FF9F1C', bg: 'rgba(255, 159, 28, 0.1)' },
    { name: 'Tonk Road', potential: 'Stable', roi: '10-14%', infra: 'Industrial Zone, Airport', color: '#2ECC71', bg: 'rgba(46, 204, 113, 0.1)' },
    { name: 'Vaishali', potential: 'Mature', roi: '8-12%', infra: 'Commercial, Residential', color: '#3498DB', bg: 'rgba(52, 152, 219, 0.1)' },
    { name: 'Sitapura', potential: 'High Growth', roi: '14-20%', infra: 'SEZ, Industrial', color: '#E74C3C', bg: 'rgba(231, 76, 60, 0.1)' },
    { name: 'Ring Road', potential: 'Future Growth', roi: '12-18%', infra: 'Ring Road Development', color: '#D4AF37', bg: 'rgba(212, 175, 55, 0.1)' }
  ];

  const insights = [
    { title: '2026 Jaipur Market Outlook', cat: 'Market Report', date: 'Jan 2026' },
    { title: 'Metro Impact: Where Smart Investors Buy', cat: 'Infrastructure', date: 'Dec 2025' },
    { title: 'Future Growth Corridors of Jaipur', cat: 'Investment', date: 'Nov 2025' },
    { title: 'Budget Analysis 2026: Real Estate Impact', cat: 'Policy', date: 'Feb 2026' }
  ];

  return (
    <main className="overflow-hidden">
      {/* ===== HERO SECTION WITH FIXED COMPACT HEIGHT ===== */}
      <section className="hero-section d-flex align-items-center position-relative">
        <div className="container position-relative z-2">
          <div className="row align-items-center g-4">
            <div className="col-lg-7 text-center text-lg-start">
              <span className="hero-badge badge rounded-pill px-3 py-2 mb-2 fw-semibold">
                ✦ Jaipur's Most Trusted Investment Advisor
              </span>
              
              <h1 className="hero-title fw-bold mb-2 text-white font-serif">
                Invest in Jaipur with <br />
                <span className="text-sky">Confidence,</span> Not Confusion.
              </h1>
              
              <p className="hero-desc lead text-light mb-3 fs-6 max-w-lg">
                Transparent, data-driven real estate investment consulting for smart investors 
                looking to build long-term wealth in Jaipur's growth corridors.
              </p>

              {/* Bootstrap Enhanced Search Bar */}
              <div className="search-box bg-white p-2 rounded-4 shadow-lg mb-3">
                <div className="row g-2 align-items-center">
                  <div className="col-12 col-md-4">
                    <select 
                      className="form-select border-0 bg-light py-2 shadow-none fw-medium text-dark"
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
                      placeholder="Search zones, corridors..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <div className="col-12 col-md-3">
                    <button className="btn btn-sky w-100 py-2 fw-bold rounded-3">
                      Search
                    </button>
                  </div>
                </div>
              </div>

              {/* Category Pills */}
              <div className="d-flex flex-wrap gap-2 justify-content-center justify-content-lg-start mb-3">
                {categories.map((cat, i) => (
                  <span 
                    key={i} 
                    className="badge rounded-pill border bg-white text-dark px-3 py-2 cursor-pointer category-pill-hover"
                    style={{ borderColor: cat.color }}
                  >
                    {cat.icon} {cat.label}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="d-flex flex-column flex-sm-row gap-2 justify-content-center justify-content-lg-start">
                <Link to="/consultation" className="btn btn-gold rounded-pill px-4 py-2 fw-bold text-white shadow-sm">
                  Book a Strategy Call
                </Link>
                <Link to="/insights" className="btn btn-outline-light rounded-pill px-4 py-2 fw-bold">
                  Download Market Report
                </Link>
              </div>
            </div>

            {/* Stats Section */}
            <div className="col-lg-5">
              <div className="row g-2">
                <div className="col-6">
                  <div className="card border-0 shadow-sm rounded-4 text-center p-3 h-100 hover-lift bg-white-glass">
                    <h2 className="stat-number display-6 fw-bold text-sky font-serif mb-0" data-target="500">0+</h2>
                    <p className="text-dark small mb-0 fw-bold">Properties Analyzed</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="card border-0 shadow-sm rounded-4 text-center p-3 h-100 hover-lift bg-white-glass">
                    <h2 className="stat-number display-6 fw-bold text-sky font-serif mb-0" data-target="100">0+</h2>
                    <p className="text-dark small mb-0 fw-bold">Investors Served</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="card border-0 shadow-sm rounded-4 text-center p-3 h-100 hover-lift bg-white-glass">
                    <h2 className="stat-number display-6 fw-bold text-sky font-serif mb-0" data-target="25">0+</h2>
                    <p className="text-dark small mb-0 fw-bold">Years Experience</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="card border-0 shadow-sm rounded-4 text-center p-3 h-100 hover-lift bg-white-glass">
                    <h2 className="stat-number display-6 fw-bold text-sky font-serif mb-0" data-target="150">0+</h2>
                    <p className="text-dark small mb-0 fw-bold">Crore Portfolio</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
 <PropertyCategories />
      {/* ===== GROWTH CORRIDORS ===== */}
      <section className="py-5 bg-light">
        <div className="container py-3">
          <div className="text-center mb-4">
            <span className="text-purple fw-bold text-uppercase tracking-wider fs-7">Investment Zones</span>
            <h2 className="display-6 fw-bold font-serif my-2">Jaipur's <span className="text-purple">Growth Corridors</span></h2>
            <p className="text-muted mx-auto" style={{ maxWidth: '600px' }}>
              Explore the most promising investment zones with future infrastructure and high appreciation potential.
            </p>
            <div className="bg-purple mx-auto rounded-pill" style={{ width: '50px', height: '3px' }}></div>
          </div>

          <div className="row g-4">
            {growthCorridors.map((corridor, i) => (
              <div className="col-lg-4 col-md-6" key={i}>
                <div className="card h-100 border-0 shadow-sm rounded-4 p-4 hover-lift" style={{ borderLeft: `5px solid ${corridor.color}` }}>
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <h4 className="fw-bold font-serif mb-0 fs-5">{corridor.name}</h4>
                    <span className="badge rounded-pill px-3 py-1" style={{ background: corridor.bg, color: corridor.color }}>
                      {corridor.potential}
                    </span>
                  </div>
                  <div className="my-3 text-muted small">
                    <div className="mb-1"><strong>ROI:</strong> {corridor.roi}</div>
                    <div><strong>Infra:</strong> {corridor.infra}</div>
                  </div>
                  <Link to="/foundation" className="text-purple text-decoration-none fw-semibold small mt-auto">
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
          <div className="text-center mb-4">
            <span className="text-purple fw-bold text-uppercase tracking-wider fs-7">Why We're Different</span>
            <h2 className="display-6 fw-bold font-serif my-2">Investment Advisory, <br /><span className="text-purple">Not Property Sales</span></h2>
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
              <div className="col-lg-4 col-md-6" key={i}>
                <div className="card h-100 border-0 shadow-sm rounded-4 p-4 text-center hover-lift border-top-purple">
                  <div className="fs-1 mb-2">{feature.icon}</div>
                  <h5 className="fw-bold font-serif mb-2">{feature.title}</h5>
                  <p className="text-muted small mb-0">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROCESS FRAMEWORK ===== */}
      <section className="py-5 bg-light">
        <div className="container py-3">
          <div className="text-center mb-4">
            <span className="text-purple fw-bold text-uppercase tracking-wider fs-7">Our Process</span>
            <h2 className="display-6 fw-bold font-serif my-2">Investment <span className="text-purple">Framework</span></h2>
            <div className="bg-purple mx-auto rounded-pill mt-2" style={{ width: '50px', height: '3px' }}></div>
          </div>

          <div className="row g-4">
            {[
              { num: '01', title: 'Discover', desc: 'Identify prime investment opportunities in Jaipur\'s growth corridors.' },
              { num: '02', title: 'Analyze', desc: 'Deep dive into market data, ROI potential, developer background, and risks.' },
              { num: '03', title: 'Compare', desc: 'Side-by-side comparison of investment options with clear projections.' },
              { num: '04', title: 'Invest', desc: 'Confident investment with ongoing monitoring and exit strategy planning.' }
            ].map((step, i) => (
              <div className="col-lg-3 col-md-6" key={i}>
                <div className="card h-100 border-0 shadow-sm rounded-4 p-4 text-center hover-lift">
                  <div className="display-4 fw-bold text-purple opacity-25 font-serif mb-2">{step.num}</div>
                  <h5 className="fw-bold font-serif mb-2">{step.title}</h5>
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
          <div className="text-center mb-4">
            <span className="text-purple fw-bold text-uppercase tracking-wider fs-7">Trusted Partners</span>
            <h2 className="display-6 fw-bold font-serif my-2">Developers We <span className="text-purple">Evaluate</span></h2>
            <div className="bg-purple mx-auto rounded-pill mt-2" style={{ width: '50px', height: '3px' }}></div>
          </div>

          <div className="row g-3 justify-content-center">
            {['Mahima', 'Manglam', 'Ashiana', 'Unique Builders', 'ARG', 'Arihant'].map((dev, i) => (
              <div className="col-6 col-sm-4 col-md-2" key={i}>
                <div className="card border-0 shadow-sm rounded-3 p-3 text-center h-100 hover-lift">
                  <div className="fw-bold text-dark mb-1">{dev}</div>
                  <span className="text-warning small fs-8">✓ Verified</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MARKET INSIGHTS ===== */}
      <section className="py-5 bg-light">
        <div className="container py-3">
          <div className="text-center mb-4">
            <span className="text-purple fw-bold text-uppercase tracking-wider fs-7">Market Insights</span>
            <h2 className="display-6 fw-bold font-serif my-2">Latest <span className="text-purple">Reports</span></h2>
            <div className="bg-purple mx-auto rounded-pill mt-2" style={{ width: '50px', height: '3px' }}></div>
          </div>

          <div className="row g-4">
            {insights.map((insight, i) => (
              <div className="col-lg-3 col-md-6" key={i}>
                <div className="card h-100 border-0 shadow-sm rounded-4 p-4 hover-lift">
                  <span className="badge bg-purple-subtle text-purple mb-2 align-self-start">{insight.cat}</span>
                  <h5 className="fw-bold font-serif mb-2 fs-6">{insight.title}</h5>
                  <span className="text-muted small d-block mb-3">{insight.date}</span>
                  <Link to="/insights" className="text-purple text-decoration-none fw-semibold small mt-auto">Read Report →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-5">
        <div className="container py-3">
          <div className="text-center mb-4">
            <span className="text-purple fw-bold text-uppercase tracking-wider fs-7">Success Stories</span>
            <h2 className="display-6 fw-bold font-serif my-2">Investor <span className="text-purple">Testimonials</span></h2>
            <div className="bg-purple mx-auto rounded-pill mt-2" style={{ width: '50px', height: '3px' }}></div>
          </div>

          <div className="row g-4">
            {[
              { name: 'Rahul Sharma', roi: '22%', review: 'The team helped me identify the right property in Jagatpura. My investment appreciated 22% in 18 months.' },
              { name: 'Priya Mehta', roi: '18%', review: 'Transparent advice and thorough due diligence. I invested in Ajmer Road with complete confidence.' },
              { name: 'Amit Jain', roi: '15%', review: 'Their framework made the entire process simple. I am now planning my second investment with them.' }
            ].map((story, i) => (
              <div className="col-lg-4 col-md-6" key={i}>
                <div className="card h-100 border-0 shadow-sm rounded-4 p-4 hover-lift border-top-purple">
                  <p className="fst-italic text-muted small mb-3">"{story.review}"</p>
                  <div className="d-flex justify-content-between align-items-center mt-auto border-top pt-2">
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

      {/* ===== CONSULTATION CTA FORM ===== */}
      <section className="py-5 bg-light">
        <div className="container py-3">
          <div className="card border-0 shadow-lg rounded-4 p-4 p-md-5 bg-white">
            <div className="row align-items-center g-4">
              <div className="col-lg-5">
                <span className="text-purple fw-bold text-uppercase tracking-wider fs-7">Get Started</span>
                <h2 className="display-6 fw-bold font-serif my-3">Ready to Build <br /><span className="text-purple">Long-Term Wealth?</span></h2>
                <p className="text-muted mb-4 small">Book your free strategy session and discover how we can help you make smarter real estate investments in Jaipur.</p>
                <div className="d-flex flex-wrap gap-2">
                  <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" className="btn btn-success rounded-pill px-4 py-2">
                    📱 WhatsApp
                  </a>
                  <a href="tel:+919999999999" className="btn btn-outline-purple rounded-pill px-4 py-2">
                    📞 Call Now
                  </a>
                </div>
              </div>

              <div className="col-lg-7">
                <div className="bg-light p-4 rounded-4 border">
                  <h4 className="fw-bold font-serif mb-3 fs-5">Book Your Strategy Session</h4>
                  <form>
                    <div className="row g-3">
                      <div className="col-12">
                        <input type="text" className="form-control rounded-3 py-2" placeholder="Full Name" />
                      </div>
                      <div className="col-md-6">
                        <input type="email" className="form-control rounded-3 py-2" placeholder="Email Address" />
                      </div>
                      <div className="col-md-6">
                        <input type="tel" className="form-control rounded-3 py-2" placeholder="Phone Number" />
                      </div>
                      <div className="col-12">
                        <select className="form-select rounded-3 py-2">
                          <option value="">Investment Budget</option>
                          <option value="10-25">₹10 Lakh - ₹25 Lakh</option>
                          <option value="25-50">₹25 Lakh - ₹50 Lakh</option>
                          <option value="50-1cr">₹50 Lakh - ₹1 Crore</option>
                          <option value="1cr+">₹1 Crore+</option>
                        </select>
                      </div>
                      <div className="col-12">
                        <textarea className="form-control rounded-3" rows="3" placeholder="Your Message"></textarea>
                      </div>
                      <div className="col-12">
                        <button type="submit" className="btn btn-purple w-100 rounded-3 py-2 fw-bold">
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