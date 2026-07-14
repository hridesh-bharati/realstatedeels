import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section className="min-vh-100 d-flex align-items-center" style={{ background: '#050505', paddingTop: '80px' }}>
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-6" data-aos="fade-up">
            <div style={{ fontSize: '6rem', color: '#D4AF37', fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}>
              404
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2.5rem', marginBottom: '16px' }}>
              Page Not Found
            </h2>
            <p style={{ color: '#d9d9d9', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '24px' }}>
              The page you're looking for doesn't exist or has been moved.
            </p>
            <Link to="/" className="btn-gold">Return Home</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;