import React, { useState } from 'react';

const Consultation = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-5 bg-white min-vh-100 d-flex align-items-center">
      <div className="container py-5">
        <div className="row g-5 align-items-center">
          
          <div className="col-lg-6" data-aos="fade-right">
            <span 
              className="badge rounded-pill px-3 py-2 mb-3 text-uppercase"
              style={{ backgroundColor: 'rgba(94, 53, 170, 0.1)', color: '#5E35AA' }}
            >
              1-on-1 Strategic Session
            </span>
            <h1 className="display-4 serif-font text-dark mb-4">
              Ready to Build <span className="purple-text">Long-Term Wealth?</span>
            </h1>
            <p className="text-muted lead mb-4">
              Schedule a private strategy call with our principal advisor. We evaluate your capital requirements, review developer risk maps, and share transparent data models.
            </p>

            <div className="d-flex flex-column gap-3 mb-4">
              <div className="d-flex align-items-center gap-3">
                <span className="purple-text fs-4">✓</span>
                <span className="text-muted">Zero property broker spam or listing pressure</span>
              </div>
              <div className="d-flex align-items-center gap-3">
                <span className="purple-text fs-4">✓</span>
                <span className="text-muted">Independent land title & legal due-diligence</span>
              </div>
              <div className="d-flex align-items-center gap-3">
                <span className="purple-text fs-4">✓</span>
                <span className="text-muted">Custom yield & cash flow models</span>
              </div>
            </div>

            <div className="d-flex align-items-center gap-4">
              <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="btn btn-outline-success rounded-pill px-4 py-2">
                WhatsApp Directly
              </a>
              <span className="text-muted small">Advisory Desk: +91 (0141) 490 0000</span>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-left">
            <div className="light-card p-4 p-md-5">
              {submitted ? (
                <div className="text-center py-5">
                  <div className="display-1 purple-text mb-3">✓</div>
                  <h3 className="serif-font text-dark">Session Requested Successfully</h3>
                  <p className="text-muted">Our Senior Real Estate Advisor will reach out within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 className="serif-font purple-text mb-4">Book Your Private Call</h3>
                  
                  <div className="mb-3">
                    <label className="form-label text-muted small">Full Name</label>
                    <input type="text" required className="form-control bg-light border text-dark py-2" placeholder="e.g. Vikramaditya Singh" />
                  </div>

                  <div className="mb-3">
                    <label className="form-label text-muted small">Phone Number</label>
                    <input type="tel" required className="form-control bg-light border text-dark py-2" placeholder="+91 98765 43210" />
                  </div>

                  <div className="mb-3">
                    <label className="form-label text-muted small">Investment Capital Range</label>
                    <select className="form-select bg-light border text-dark py-2">
                      <option>₹50 Lakhs - ₹1 Crore</option>
                      <option>₹1 Crore - ₹3 Crores</option>
                      <option>₹3 Crores - ₹10 Crores</option>
                      <option>₹10 Crores+</option>
                    </select>
                  </div>

                  <div className="mb-4">
                    <label className="form-label text-muted small">Investment Objective</label>
                    <textarea className="form-control bg-light border text-dark" rows="3" placeholder="e.g. Capital appreciation, rental yield, or land banking"></textarea>
                  </div>

                  <button type="submit" className="btn orange-btn w-100 py-3 rounded-pill text-uppercase">
                    Confirm Booking Request
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Consultation;