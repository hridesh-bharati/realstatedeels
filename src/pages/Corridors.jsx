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
    <section className="section-padding" style={{ background: '#050505', paddingTop: '120px' }}>
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <span className="section-tag">Investment Zones</span>
          <h2 className="section-title">
            Jaipur's <span className="text-gold">Growth Corridors</span>
          </h2>
          <p className="text-secondary" style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
            Explore the most promising investment zones with future infrastructure, metro connectivity, and high appreciation potential.
          </p>
          <div className="gold-divider-center"></div>
        </div>

        <div className="row g-4">
          {corridors.map((corridor, i) => (
            <div className="col-lg-4 col-md-6" key={i} data-aos="fade-up" data-aos-delay={i * 100}>
              <div className="p-4 glass" style={{ height: '100%', transition: 'all 0.4s ease' }}>
                <div style={{ width: '12px', height: '12px', background: '#D4AF37', borderRadius: '50%', marginBottom: '12px', boxShadow: '0 0 20px rgba(212,175,55,0.3)' }}></div>
                <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.5rem', fontWeight: 600 }}>{corridor.name}</h4>
                <span className="d-inline-block text-gold" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600, background: 'rgba(212,175,55,0.1)', padding: '4px 12px', borderRadius: '50px', margin: '8px 0' }}>
                  {corridor.potential}
                </span>
                <p style={{ color: '#d9d9d9', marginBottom: '4px' }}><strong>ROI:</strong> {corridor.roi}</p>
                <p style={{ color: '#d9d9d9', marginBottom: '4px' }}><strong>Infrastructure:</strong> {corridor.infra}</p>
                <p style={{ color: '#999', fontSize: '0.9rem', lineHeight: '1.6', marginTop: '8px', marginBottom: 0 }}>
                  {corridor.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5" data-aos="fade-up">
          <div className="p-4 glass d-inline-block" style={{ border: '1px dashed rgba(212,175,55,0.2)' }}>
            <h5 style={{ color: '#D4AF37', marginBottom: '8px' }}>🗺️ Interactive Map Coming Soon</h5>
            <p style={{ color: '#999', marginBottom: 0 }}>Detailed zone analysis with property data and projections</p>
          </div>
        </div>

        <div className="text-center mt-5" data-aos="fade-up">
          <Link to="/consultation" className="btn-gold">Get Investment Advice for Your Preferred Corridor</Link>
        </div>
      </div>
    </section>
  );
};

export default Corridors;