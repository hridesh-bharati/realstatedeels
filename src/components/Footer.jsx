import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ background: '#050505', borderTop: '1px solid rgba(212,175,55,0.1)', padding: '60px 0 30px' }}>
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4">
            <div className="d-flex align-items-center" style={{ marginBottom: '16px' }}>
              <span style={{ color: '#D4AF37', fontSize: '1.6rem', marginRight: '8px' }}>✦</span>
              <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.5rem', fontWeight: 700 }}>
                ESTATE<span style={{ color: '#D4AF37' }}>DEELS</span>
              </span>
            </div>
            <p style={{ color: '#999', fontSize: '0.9rem', lineHeight: '1.8', maxWidth: '300px' }}>
              Jaipur's most trusted real estate investment advisor. Building wealth through smart, data-driven investments.
            </p>
          </div>

          <div className="col-lg-2 col-md-3 col-6">
            <h6 style={{ color: '#D4AF37', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '16px' }}>
              Quick Links
            </h6>
            <ul className="list-unstyled">
              <li><Link to="/" style={{ color: '#999', textDecoration: 'none', fontSize: '0.9rem' }}>Home</Link></li>
              <li><Link to="/why-us" style={{ color: '#999', textDecoration: 'none', fontSize: '0.9rem' }}>Why Us</Link></li>
              <li><Link to="/framework" style={{ color: '#999', textDecoration: 'none', fontSize: '0.9rem' }}>Framework</Link></li>
              <li><Link to="/consultation" style={{ color: '#999', textDecoration: 'none', fontSize: '0.9rem' }}>Consultation</Link></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-3 col-6">
            <h6 style={{ color: '#D4AF37', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '16px' }}>
              Resources
            </h6>
            <ul className="list-unstyled">
              <li><Link to="/insights" style={{ color: '#999', textDecoration: 'none', fontSize: '0.9rem' }}>Market Reports</Link></li>
              <li><Link to="/stories" style={{ color: '#999', textDecoration: 'none', fontSize: '0.9rem' }}>Success Stories</Link></li>
              <li><Link to="/foundation" style={{ color: '#999', textDecoration: 'none', fontSize: '0.9rem' }}>Growth Corridors</Link></li>
            </ul>
          </div>

          <div className="col-lg-4">
            <h6 style={{ color: '#D4AF37', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '16px' }}>
              Connect With Us
            </h6>
            <div className="d-flex gap-3">
              <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" 
                 style={{ color: '#999', textDecoration: 'none', fontSize: '1.5rem' }}>📱</a>
              <a href="tel:+919999999999" style={{ color: '#999', textDecoration: 'none', fontSize: '1.5rem' }}>📞</a>
              <a href="mailto:info@estatedeels.com" style={{ color: '#999', textDecoration: 'none', fontSize: '1.5rem' }}>✉️</a>
            </div>
            <p style={{ color: '#999', fontSize: '0.85rem', marginTop: '12px' }}>
              📍 Jaipur, Rajasthan
            </p>
          </div>
        </div>

        <hr style={{ borderColor: 'rgba(212,175,55,0.1)', margin: '30px 0 20px' }} />
        <div className="text-center">
          <p style={{ color: '#666', fontSize: '0.8rem', marginBottom: 0 }}>
            © 2026 EstateDeels. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;