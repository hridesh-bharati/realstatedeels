import React from 'react';
import { Link } from 'react-router-dom';

const Insights = () => {
  const insights = [
    { title: '2026 Jaipur Market Outlook', cat: 'Market Report', date: 'Jan 2026', desc: 'Comprehensive analysis of Jaipur\'s real estate market trends, price movements, and future projections.' },
    { title: 'Metro Impact: Where Smart Investors Buy', cat: 'Infrastructure', date: 'Dec 2025', desc: 'How the upcoming metro connectivity is transforming investment patterns in Jaipur\'s growth corridors.' },
    { title: 'Future Growth Corridors of Jaipur', cat: 'Investment', date: 'Nov 2025', desc: 'Detailed analysis of emerging investment zones with high growth potential and infrastructure development.' },
    { title: 'Budget Analysis 2026: Real Estate Impact', cat: 'Policy', date: 'Feb 2026', desc: 'Understanding the budget\'s impact on real estate investments, taxes, and market sentiment.' },
    { title: 'Why Invest in Jaipur: A Comprehensive Guide', cat: 'Investment', date: 'Oct 2025', desc: 'Everything you need to know about investing in Jaipur\'s growing real estate market.' },
    { title: 'Developer Evaluation Framework', cat: 'Analysis', date: 'Sep 2025', desc: 'How we evaluate developers, verify credentials, and ensure project viability for our investors.' }
  ];

  return (
    <section className="section-padding" style={{ background: '#F8F9FA', paddingTop: '120px', paddingBottom: '80px' }}>
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5" data-aos="fade-up">
          <span className="section-tag" style={{ color: '#5E35AA', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', fontSize: '0.85rem' }}>
            Market Insights
          </span>
          <h2 className="section-title" style={{ color: '#1A1A1A', fontWeight: 700, marginTop: '8px' }}>
            Latest <span style={{ color: '#5E35AA' }}>Reports</span>
          </h2>
          <p style={{ color: '#6C757D', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
            Stay informed with our expert analysis and market reports.
          </p>
          <div className="purple-divider-center" style={{ width: '60px', height: '3px', background: '#5E35AA', margin: '16px auto 0' }}></div>
        </div>

        {/* Cards Grid */}
        <div className="row g-4">
          {insights.map((insight, i) => (
            <div className="col-lg-4 col-md-6" key={i} data-aos="fade-up" data-aos-delay={i * 100}>
              <div 
                className="p-4 d-flex flex-column justify-content-between" 
                style={{ 
                  height: '100%', 
                  background: '#FFFFFF', 
                  borderRadius: '16px',
                  border: '1px solid #E9ECEF',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                  transition: 'all 0.3s ease'
                }}
              >
                <div>
                  <span style={{ fontSize: '0.75rem', color: '#5E35AA', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>
                    {insight.cat}
                  </span>
                  <h5 style={{ fontSize: '1.25rem', fontWeight: 600, marginTop: '8px', color: '#111111' }}>
                    {insight.title}
                  </h5>
                  <p style={{ color: '#8C8C8C', fontSize: '0.85rem', marginBottom: '12px' }}>{insight.date}</p>
                  <p style={{ color: '#4A4A4A', fontSize: '0.95rem', lineHeight: '1.6' }}>
                    {insight.desc}
                  </p>
                </div>

                <div className="mt-4">
                  <Link 
                    to="/consultation" 
                    className="btn d-inline-block text-white" 
                    style={{ 
                      backgroundColor: '#5E35AA', 
                      borderRadius: '50px',
                      padding: '8px 22px', 
                      fontSize: '0.85rem',
                      fontWeight: 500,
                      textDecoration: 'none'
                    }}
                  >
                    Request Full Report
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="text-center mt-5" data-aos="fade-up">
          <div 
            className="d-inline-block px-4 py-4 text-start text-sm-center" 
            style={{ 
              background: '#FFFFFF', 
              borderRadius: '16px', 
              border: '1px solid rgba(94, 53, 170, 0.2)',
              boxShadow: '0 8px 24px rgba(94, 53, 170, 0.08)',
              maxWidth: '550px',
              width: '100%'
            }}
          >
            <span style={{ color: '#2B2B2B', fontSize: '0.95rem', fontWeight: 500 }}>
              📧 Subscribe to our newsletter for exclusive market insights
            </span>
            <div className="d-flex gap-2 mt-3 flex-column flex-sm-row">
              <input 
                type="email" 
                className="form-control bg-light text-dark" 
                placeholder="Enter your email" 
                style={{ borderRadius: '50px', border: '1px solid #CED4DA', padding: '10px 20px' }} 
              />
              <button 
                className="btn text-white" 
                style={{ backgroundColor: '#5E35AA', borderRadius: '50px', padding: '10px 24px', fontWeight: 600, border: 'none' }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insights;