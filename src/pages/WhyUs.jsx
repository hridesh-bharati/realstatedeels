import React from 'react';
import { Link } from 'react-router-dom';
import './WhyUs.css';

const WhyUs = () => {
  const features = [
    { icon: '🔍', title: 'No Property Spam', desc: "We don't sell properties. We provide transparent, unbiased investment advice." },
    { icon: '📊', title: 'Data-Driven Analysis', desc: 'Every recommendation is backed by market data, ROI calculations, and risk assessment.' },
    { icon: '🤝', title: 'Transparent Partnerships', desc: 'We evaluate developers and projects independently to protect your interests.' },
    { icon: '🏗️', title: 'Developer Due Diligence', desc: 'Legal verification, background checks, and project viability analysis on every developer.' },
    { icon: '📈', title: 'Exit Planning', desc: 'Strategic exit strategies designed to maximize your returns and minimize risks.' },
    { icon: '💼', title: 'Portfolio Building', desc: 'Build a diversified real estate portfolio aligned with your financial goals.' },
    { icon: '📋', title: 'Independent Analysis', desc: 'We work for you, not for developers. Our analysis is completely unbiased.' },
    { icon: '⚖️', title: 'Legal Verification', desc: 'Every property and developer undergoes thorough legal verification before recommendation.' },
    { icon: '🏷️', title: 'Price Benchmark', desc: 'We benchmark every property against market standards to ensure fair pricing.' }
  ];

  return (
    <section className="why-us-section bg-light-main py-5">
      <div className="container py-lg-5 mt-4">
        
        {/* Section Header */}
        <div className="text-center mb-5" data-aos="fade-up">
          <span className="badge-purple mb-2 d-inline-block">Why We're Different</span>
          <h2 className="display-5 fw-bold text-dark mb-3">
            Investment Advisory, <br className="d-none d-md-block" />
            <span className="text-purple">Not Property Sales</span>
          </h2>
          <p className="text-muted fs-5 mx-auto max-w-600">
            We're fiduciaries to our investors. Our recommendations are always in your best interest.
          </p>
          <div className="purple-divider mx-auto mt-3"></div>
        </div>

        {/* Features Grid */}
        <div className="row g-4">
          {features.map((feature, i) => (
            <div className="col-12 col-md-6 col-lg-4" key={i} data-aos="fade-up" data-aos-delay={i * 50}>
              <div className="light-card text-center p-4 h-100 d-flex flex-column align-items-center">
                <div className="feature-icon display-5 mb-3">{feature.icon}</div>
                <h4 className="feature-title fw-bold mb-2">{feature.title}</h4>
                <p className="feature-desc text-muted mb-0">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="text-center mt-5" data-aos="fade-up">
          <Link to="/consultation" className="btn-purple btn-lg text-decoration-none">
            Book Your Strategy Session
          </Link>
        </div>

      </div>
    </section>
  );
};

export default WhyUs;