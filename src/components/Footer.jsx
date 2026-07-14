import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer 
      className="text-white py-5"
      style={{ backgroundColor: '#5E35AA' }}
    >
      <div className="container">
        <div className="row g-4">
          {/* Brand Info */}
          <div className="col-lg-4">
            <div className="d-flex align-items-center mb-3">
              <span className="fs-3 text-warning me-2">✦</span>
              <span className="fs-4 fw-bold text-white tracking-wider">
                ESTATE<span className="text-warning">DEELS</span>
              </span>
            </div>
            <p className="small text-white-50 lh-lg" style={{ maxWidth: '300px' }}>
              Jaipur's most trusted real estate investment advisor. Building wealth through smart, data-driven investments.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-3 col-6">
            <h6 className="text-warning text-uppercase small fw-bold tracking-wider mb-3">
              Quick Links
            </h6>
            <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
              <li>
                <Link to="/" className="text-white-50 text-decoration-none small">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/why-us" className="text-white-50 text-decoration-none small">
                  Why Us
                </Link>
              </li>
              <li>
                <Link to="/framework" className="text-white-50 text-decoration-none small">
                  Framework
                </Link>
              </li>
              <li>
                <Link to="/consultation" className="text-white-50 text-decoration-none small">
                  Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="col-lg-2 col-md-3 col-6">
            <h6 className="text-warning text-uppercase small fw-bold tracking-wider mb-3">
              Resources
            </h6>
            <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
              <li>
                <Link to="/insights" className="text-white-50 text-decoration-none small">
                  Market Reports
                </Link>
              </li>
              <li>
                <Link to="/stories" className="text-white-50 text-decoration-none small">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link to="/foundation" className="text-white-50 text-decoration-none small">
                  Growth Corridors
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="col-lg-4">
            <h6 className="text-warning text-uppercase small fw-bold tracking-wider mb-3">
              Connect With Us
            </h6>
            <div className="d-flex gap-3 mb-2">
              <a 
                href="https://wa.me/919999999999" 
                target="_blank" 
                rel="noreferrer" 
                className="text-white text-decoration-none fs-5"
              >
                📱
              </a>
              <a 
                href="tel:+919999999999" 
                className="text-white text-decoration-none fs-5"
              >
                📞
              </a>
              <a 
                href="mailto:info@estatedeels.com" 
                className="text-white text-decoration-none fs-5"
              >
                ✉️
              </a>
            </div>
            <p className="small text-white-50 mt-2 mb-0">
              📍 Jaipur, Rajasthan
            </p>
          </div>
        </div>

        {/* Divider & Copyright */}
        <hr className="border-white opacity-25 my-4" />
        <div className="text-center">
          <p className="small text-white-50 mb-0">
            © 2026 EstateDeels. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;