import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const GrouthCorridor = () => {
  const [activeZone, setActiveZone] = useState('ajmer');

  const zoneDetails = {
    ajmer: {
      title: "Ajmer Road SEZ Belt",
      type: "Industrial & Logistics Powerhouse",
      appreciation: "13.8% p.a.",
      rental: "4.2% yield",
      riico: "Mahindra World City (3000+ Acres)",
      description: "Driven by international IT giants, manufacturing hubs, and multi-modal logistics parks."
    },
    jagatpura: {
      title: "Jagatpura & Airport Belt",
      type: "Premium Residential & Academic Hub",
      appreciation: "12.4% p.a.",
      rental: "5.1% yield",
      riico: "Sitapura Industrial Area Phase I-IV",
      description: "High occupancy zone backstopped by medical infrastructure, universities, and international transit."
    },
    tonk: {
      title: "Tonk Road Growth Spine",
      type: "Commercial & Hospitality Zone",
      appreciation: "11.2% p.a.",
      rental: "6.0% yield",
      riico: "B2 Bypass Commercial Hub",
      description: "Institutional grade commercial real estate with high long-term land value preservation."
    },
    vaishali: {
      title: "Vaishali Nagar Extension",
      type: "Luxury Density & Retail Corridor",
      appreciation: "10.5% p.a.",
      rental: "3.8% yield",
      riico: "Karni Palace Retail Corridor",
      description: "Established ultra-HNWI residential neighborhood with prime retail appreciation."
    }
  };

  return (
    <div className="py-5 bg-white text-dark min-vh-100">
      <div className="container py-4">
        
        {/* Page Header */}
        <div className="text-center mb-5" data-aos="fade-up">
          <span 
            className="badge rounded-pill px-3 py-2 mb-3 text-uppercase"
            style={{ backgroundColor: 'rgba(94, 53, 170, 0.1)', color: '#5E35AA' }}
          >
            Interactive Macro Analysis
          </span>
          <h1 className="display-4 serif-font mb-3">Jaipur Growth <span className="purple-text">Corridors</span></h1>
          <p className="text-muted mx-auto max-w-2xl">
            Inspect micro-market growth data, infrastructure milestones, and long-term yield projections across Jaipur's key belts.
          </p>
        </div>

        <div className="row g-4 align-items-center">
          
          {/* Custom Interactive SVG Growth Map */}
          <div className="col-lg-6" data-aos="zoom-in">
            <div className="light-card p-4 text-center">
              <h5 className="serif-font purple-text mb-4">Jaipur Investment Node Map</h5>
              
              <svg viewBox="0 0 500 400" className="w-100 h-auto" style={{ maxHeight: '360px' }}>
                <path d="M 50,200 Q 150,50 250,50 Q 400,60 450,200 Q 400,350 250,360 Q 80,350 50,200 Z" 
                      fill="none" stroke="#5E35AA" strokeWidth="2" strokeDasharray="6,6" opacity="0.3" />
                
                <line x1="250" y1="50" x2="250" y2="360" stroke="#E0E0E0" strokeWidth="4" />
                <line x1="50" y1="200" x2="450" y2="200" stroke="#E0E0E0" strokeWidth="4" />

                {/* Nodes */}
                <g onClick={() => setActiveZone('ajmer')} className="cursor-pointer">
                  <circle cx="120" cy="220" r={activeZone === 'ajmer' ? "16" : "10"} fill="#FF9F1C" />
                  <text x="120" y="250" fill="#121212" fontSize="12" fontWeight="bold" textAnchor="middle">Ajmer Road</text>
                </g>

                <g onClick={() => setActiveZone('jagatpura')} className="cursor-pointer">
                  <circle cx="340" cy="260" r={activeZone === 'jagatpura' ? "16" : "10"} fill="#FF9F1C" />
                  <text x="340" y="290" fill="#121212" fontSize="12" fontWeight="bold" textAnchor="middle">Jagatpura</text>
                </g>

                <g onClick={() => setActiveZone('tonk')} className="cursor-pointer">
                  <circle cx="270" cy="310" r={activeZone === 'tonk' ? "16" : "10"} fill="#FF9F1C" />
                  <text x="270" y="340" fill="#121212" fontSize="12" fontWeight="bold" textAnchor="middle">Tonk Road</text>
                </g>

                <g onClick={() => setActiveZone('vaishali')} className="cursor-pointer">
                  <circle cx="180" cy="140" r={activeZone === 'vaishali' ? "16" : "10"} fill="#FF9F1C" />
                  <text x="180" y="120" fill="#121212" fontSize="12" fontWeight="bold" textAnchor="middle">Vaishali Ext.</text>
                </g>
              </svg>

              <p className="small text-muted mt-3 mb-0">Click on any node to review growth data metrics</p>
            </div>
          </div>

          {/* Details Column */}
          <div className="col-lg-6" data-aos="fade-left">
            <div className="light-card p-4 p-md-5">
              <span className="badge mb-2 text-uppercase" style={{ backgroundColor: 'rgba(94, 53, 170, 0.1)', color: '#5E35AA' }}>
                {zoneDetails[activeZone].type}
              </span>
              <h2 className="serif-font purple-text display-6 mb-3">{zoneDetails[activeZone].title}</h2>
              <p className="text-muted mb-4">{zoneDetails[activeZone].description}</p>

              <div className="row g-3 mb-4">
                <div className="col-6">
                  <div className="p-3 rounded bg-light border">
                    <div className="small text-muted">Est. Appreciation</div>
                    <div className="fs-4 fw-bold text-dark">{zoneDetails[activeZone].appreciation}</div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="p-3 rounded bg-light border">
                    <div className="small text-muted">Rental Yield</div>
                    <div className="fs-4 fw-bold text-dark">{zoneDetails[activeZone].rental}</div>
                  </div>
                </div>
              </div>

              <div className="mb-4 small text-muted">
                📍 <strong>RIICO Infrastructure Hub:</strong> {zoneDetails[activeZone].riico}
              </div>

              <Link to="/consultation" className="btn orange-btn w-100 py-3 rounded-pill text-uppercase">
                Request Corridor Due-Diligence Call
              </Link>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default GrouthCorridor;