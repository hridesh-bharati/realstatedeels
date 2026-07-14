import React from 'react';
import { Link } from 'react-router-dom';

const Framework = () => {
  const steps = [
    { 
      num: '01', 
      title: 'Discover', 
      desc: 'We identify prime investment opportunities in Jaipur\'s growth corridors based on your goals, budget, and risk profile.',
      accentGradient: 'linear-gradient(135deg, #FF6B6B, #FF8E53)'
    },
    { 
      num: '02', 
      title: 'Analyze', 
      desc: 'Deep dive into market data, ROI potential, developer background, legal verification, and risk assessment.',
      accentGradient: 'linear-gradient(135deg, #4E65FF, #92EFFD)'
    },
    { 
      num: '03', 
      title: 'Compare', 
      desc: 'Side-by-side comparison of investment options with clear pros, cons, and future projections.',
      accentGradient: 'linear-gradient(135deg, #A855F7, #EC4899)'
    },
    { 
      num: '04', 
      title: 'Invest', 
      desc: 'Confident investment with our ongoing support, portfolio monitoring, and exit strategy planning.',
      accentGradient: 'linear-gradient(135deg, #10B981, #059669)'
    }
  ];

  return (
    <section 
      className="section-padding" 
      style={{ 
        background: 'linear-gradient(180deg, #F8FAFC 0%, #EEF2FF 50%, #F5F3FF 100%)', 
        paddingTop: '100px', 
        paddingBottom: '80px',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Header Section */}
        <div className="text-center mb-5" data-aos="fade-up">
          <span 
            className="section-tag" 
            style={{ 
              background: 'linear-gradient(90deg, #6366F1, #A855F7)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 700,
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              fontSize: '0.9rem'
            }}
          >
            Our Process
          </span>
          <h2 className="section-title mt-2" style={{ color: '#0F172A', fontWeight: 800, fontSize: '2.5rem' }}>
            Investment <span style={{ background: 'linear-gradient(90deg, #F59E0B, #EF4444)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Framework</span>
          </h2>
          <p style={{ maxWidth: '600px', margin: '12px auto 0', fontSize: '1.1rem', color: '#475569', lineHeight: '1.6' }}>
            A structured approach to help you make confident investment decisions.
          </p>
          <div 
            style={{ 
              background: 'linear-gradient(90deg, #6366F1, #EC4899, #F59E0B)', 
              height: '4px', 
              width: '70px', 
              borderRadius: '2px',
              margin: '20px auto 0' 
            }}
          ></div>
        </div>

        {/* 4 Steps Cards */}
        <div className="row g-4">
          {steps.map((step, i) => (
            <div className="col-lg-3 col-md-6" key={i} data-aos="fade-up" data-aos-delay={i * 100}>
              <div 
                className="step-card p-4 text-center" 
                style={{ 
                  height: '100%', 
                  backgroundColor: '#FFFFFF',
                  borderRadius: '20px',
                  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.01)',
                  position: 'relative',
                  borderTop: '5px solid transparent',
                  borderImage: `${step.accentGradient} 1`,
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 20px 30px -10px rgba(99, 102, 241, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(0, 0, 0, 0.05)';
                }}
              >
                {/* Colorful Step Number */}
                <div 
                  style={{ 
                    fontSize: '3.5rem', 
                    fontWeight: 900, 
                    background: step.accentGradient,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontFamily: "'Inter', sans-serif", 
                    opacity: 0.85,
                    lineHeight: '1'
                  }}
                >
                  {step.num}
                </div>
                
                <h4 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '15px 0 10px', color: '#1E293B' }}>
                  {step.title}
                </h4>
                
                <p style={{ color: '#64748B', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: 0 }}>
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Checklist Container */}
        <div className="text-center mt-5" data-aos="fade-up">
          <div 
            className="p-4 d-inline-block" 
            style={{ 
              background: '#FFFFFF',
              borderRadius: '50px',
              boxShadow: '0 15px 35px rgba(99, 102, 241, 0.1)',
              border: '1px solid #E0E7FF'
            }}
          >
            <div className="d-flex flex-wrap justify-content-center gap-4 px-3">
              <div className="d-flex align-items-center">
                <span style={{ background: 'linear-gradient(135deg, #10B981, #059669)', color: '#fff', borderRadius: '50%', width: '28px', height: '28px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem', fontWeight: 'bold' }}>✓</span>
                <span style={{ color: '#334155', marginLeft: '10px', fontWeight: 600 }}>Personalized Strategy</span>
              </div>
              <div className="d-flex align-items-center">
                <span style={{ background: 'linear-gradient(135deg, #6366F1, #4F46E5)', color: '#fff', borderRadius: '50%', width: '28px', height: '28px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem', fontWeight: 'bold' }}>✓</span>
                <span style={{ color: '#334155', marginLeft: '10px', fontWeight: 600 }}>Data-Backed Recommendations</span>
              </div>
              <div className="d-flex align-items-center">
                <span style={{ background: 'linear-gradient(135deg, #EC4899, #D946EF)', color: '#fff', borderRadius: '50%', width: '28px', height: '28px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem', fontWeight: 'bold' }}>✓</span>
                <span style={{ color: '#334155', marginLeft: '10px', fontWeight:600 }}>Ongoing Portfolio Support</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-5" data-aos="fade-up">
          <Link 
            to="/consultation" 
            style={{
              background: 'linear-gradient(135deg, #6366F1 0%, #A855F7 50%, #EC4899 100%)',
              color: '#FFFFFF',
              padding: '16px 36px',
              borderRadius: '50px',
              fontWeight: 700,
              fontSize: '1.05rem',
              textDecoration: 'none',
              display: 'inline-block',
              boxShadow: '0 10px 25px rgba(168, 85, 247, 0.4)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 15px 30px rgba(168, 85, 247, 0.6)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 10px 25px rgba(168, 85, 247, 0.4)';
            }}
          >
            Start Your Investment Journey →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Framework;