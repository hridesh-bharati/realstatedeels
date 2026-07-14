import React from 'react';
import { Link } from 'react-router-dom';

const Corridors = () => {
  const corridors = [
    { name: 'Ajmer Road', potential: 'High Growth', roi: '15-20%', infra: 'Metro, Commercial Hub', desc: 'One of the most promising corridors with upcoming metro connectivity and commercial development.' },
    { name: 'Jagatpura', potential: 'Emerging', roi: '12-18%', infra: 'Education Hub, IT Park', desc: 'Rapidly developing area with educational institutions and IT parks driving demand.' },
    { name: 'Tonk Road', potential: 'Stable', roi: '10-14%', infra: 'Industrial Zone, Airport', desc: 'Established corridor with stable growth, industrial presence, and airport connectivity.' },
    { name: 'Vaishali', potential: 'Mature', roi: '8-12%', infra: 'Commercial, Residential', desc: 'Well-developed residential and commercial hub with consistent appreciation.' },
    { name: 'Sitapura', potential: 'High Growth', roi: '14-20%', infra: 'SEZ, Industrial', desc: 'Special Economic Zone with high industrial growth and employment opportunities.' },
    { name: 'Ring Road', potential: 'Future Growth', roi: '12-18%', infra: 'Ring Road Development', desc: 'Strategic location with upcoming infrastructure projects and smart city development.' }
  ];

  return (
    <section className="py-5 bg-light min-vh-100">
      <div className="container py-lg-4">
        {/* Section Header */}
        <div className="text-center mb-5" data-aos="fade-up">
          <span 
            className="badge rounded-pill px-3 py-2 mb-3 text-uppercase fw-semibold"
            style={{ backgroundColor: 'rgba(94, 53, 170, 0.12)', color: '#5E35AA' }}
          >
            Investment Zones
          </span>
          <h2 className="display-5 fw-bold text-dark mb-3">
            Jaipur's <span style={{ color: '#5E35AA' }}>Growth Corridors</span>
          </h2>
          <p className="text-secondary mx-auto fs-5" style={{ maxWidth: '650px' }}>
            Explore the most promising investment zones with future infrastructure, metro connectivity, and high appreciation potential.
          </p>
          <div className="mx-auto rounded-pill" style={{ width: '60px', height: '4px', backgroundColor: '#5E35AA' }}></div>
        </div>

        {/* Corridors Grid */}
        <div className="row g-4">
          {corridors.map((corridor, i) => (
            <div className="col-lg-4 col-md-6" key={i} data-aos="fade-up" data-aos-delay={i * 100}>
              <div className="card h-100 border-0 shadow-sm rounded-4 p-4 bg-white d-flex flex-column justify-content-between">
                <div>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div 
                      className="rounded-circle"
                      style={{ width: '12px', height: '12px', backgroundColor: '#5E35AA' }}
                    ></div>
                    <span 
                      className="badge px-3 py-2 text-uppercase fw-bold rounded-pill"
                      style={{ backgroundColor: 'rgba(94, 53, 170, 0.1)', color: '#5E35AA', fontSize: '0.75rem' }}
                    >
                      {corridor.potential}
                    </span>
                  </div>

                  <h4 className="fw-bold text-dark mb-3">{corridor.name}</h4>
                  
                  <div className="p-3 bg-light rounded-3 mb-3 border border-light-subtle">
                    <p className="text-dark small mb-1">
                      <strong>Expected ROI:</strong> <span className="fw-bold" style={{ color: '#5E35AA' }}>{corridor.roi}</span>
                    </p>
                    <p className="text-dark small mb-0">
                      <strong>Infrastructure:</strong> {corridor.infra}
                    </p>
                  </div>

                  <p className="text-secondary small lh-base mb-0">
                    {corridor.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Map Banner */}
        <div className="text-center mt-5" data-aos="fade-up">
          <div className="p-4 bg-white rounded-4 shadow-sm d-inline-block border border-dashed" style={{ borderColor: '#5E35AA' }}>
            <h5 className="fw-bold mb-2" style={{ color: '#5E35AA' }}>🗺️ Interactive Map Coming Soon</h5>
            <p className="text-secondary small mb-0">Detailed zone analysis with property data and projections</p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-4" data-aos="fade-up">
          <Link 
            to="/consultation" 
            className="btn text-white rounded-pill px-4 py-3 fw-bold shadow-sm text-uppercase"
            style={{ backgroundColor: '#5E35AA' }}
          >
            Get Investment Advice for Your Preferred Corridor
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Corridors;