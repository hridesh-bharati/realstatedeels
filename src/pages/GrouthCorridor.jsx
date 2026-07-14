import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const GrowthCorridor = () => {
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

  const zones = [
    { id: 'ajmer', label: 'Ajmer Road', cx: 110, cy: 220 },
    { id: 'jagatpura', label: 'Jagatpura', cx: 350, cy: 250 },
    { id: 'tonk', label: 'Tonk Road', cx: 260, cy: 310 },
    { id: 'vaishali', label: 'Vaishali Ext.', cx: 180, cy: 130 },
  ];

  return (
    <div className="py-5 bg-light min-vh-100">
      <div className="container py-lg-4">
        
        {/* Page Header */}
        <div className="text-center mb-5" data-aos="fade-up">
          <span 
            className="badge rounded-pill px-3 py-2 mb-3 text-uppercase fw-semibold"
            style={{ backgroundColor: 'rgba(94, 53, 170, 0.12)', color: '#5E35AA', letterSpacing: '0.5px' }}
          >
            Interactive Macro Analysis
          </span>
          <h1 className="display-5 fw-bold text-dark mb-3">
            Jaipur Growth <span style={{ color: '#5E35AA' }}>Corridors</span>
          </h1>
          <p className="text-secondary mx-auto fs-5" style={{ maxWidth: '650px' }}>
            Inspect micro-market growth data, infrastructure milestones, and long-term yield projections across Jaipur's key belts.
          </p>
          <div className="mx-auto rounded-pill" style={{ width: '60px', height: '4px', backgroundColor: '#5E35AA' }}></div>
        </div>

        {/* Quick Filter Tabs for Mobile/Quick Toggle */}
        <div className="d-flex flex-wrap justify-content-center gap-2 mb-4 d-lg-none">
          {zones.map((zone) => (
            <button
              key={zone.id}
              onClick={() => setActiveZone(zone.id)}
              className={`btn btn-sm rounded-pill px-3 fw-semibold ${
                activeZone === zone.id ? 'text-white' : 'btn-outline-secondary'
              }`}
              style={{
                backgroundColor: activeZone === zone.id ? '#5E35AA' : 'transparent',
                borderColor: activeZone === zone.id ? '#5E35AA' : ''
              }}
            >
              {zone.label}
            </button>
          ))}
        </div>

        <div className="row g-4 align-items-center">
          
          {/* Interactive SVG Node Map */}
          <div className="col-lg-6" data-aos="zoom-in">
            <div className="card border-0 shadow-sm rounded-4 p-4 text-center bg-white">
              <h5 className="fw-bold mb-4" style={{ color: '#5E35AA' }}>
                Jaipur Investment Node Map
              </h5>
              
              <div className="position-relative">
                <svg viewBox="0 0 500 400" className="w-100 h-auto" style={{ maxHeight: '380px' }}>
                  {/* Outer Ring */}
                  <path 
                    d="M 50,200 Q 150,50 250,50 Q 400,60 450,200 Q 400,350 250,360 Q 80,350 50,200 Z" 
                    fill="none" 
                    stroke="#5E35AA" 
                    strokeWidth="2" 
                    strokeDasharray="6,6" 
                    opacity="0.3" 
                  />
                  
                  {/* Axis Lines */}
                  <line x1="250" y1="50" x2="250" y2="360" stroke="#E9ECEF" strokeWidth="4" strokeLinecap="round" />
                  <line x1="50" y1="200" x2="450" y2="200" stroke="#E9ECEF" strokeWidth="4" strokeLinecap="round" />

                  {/* Connectors to Center */}
                  {zones.map((zone) => (
                    <line 
                      key={`line-${zone.id}`}
                      x1="250" 
                      y1="200" 
                      x2={zone.cx} 
                      y2={zone.cy} 
                      stroke={activeZone === zone.id ? '#5E35AA' : '#DEE2E6'} 
                      strokeWidth={activeZone === zone.id ? '2.5' : '1'} 
                      strokeDasharray={activeZone === zone.id ? 'none' : '4,4'}
                    />
                  ))}

                  {/* Interactive Nodes */}
                  {zones.map((zone) => {
                    const isActive = activeZone === zone.id;
                    return (
                      <g 
                        key={zone.id} 
                        onClick={() => setActiveZone(zone.id)} 
                        style={{ cursor: 'pointer' }}
                      >
                        {/* Pulse Effect for Active Node */}
                        {isActive && (
                          <circle 
                            cx={zone.cx} 
                            cy={zone.cy} 
                            r="22" 
                            fill="#5E35AA" 
                            opacity="0.2" 
                          />
                        )}
                        <circle 
                          cx={zone.cx} 
                          cy={zone.cy} 
                          r={isActive ? "14" : "10"} 
                          fill={isActive ? "#5E35AA" : "#FF9F1C"} 
                          stroke="#FFFFFF"
                          strokeWidth="3"
                          style={{ transition: 'all 0.3s ease' }}
                        />
                        <text 
                          x={zone.cx} 
                          y={zone.cy + (zone.id === 'vaishali' ? -20 : 32)} 
                          fill={isActive ? "#5E35AA" : "#212529"} 
                          fontSize="13" 
                          fontWeight={isActive ? "bold" : "600"} 
                          textAnchor="middle"
                        >
                          {zone.label}
                        </text>
                      </g>
                    );
                  })}
                </svg>
              </div>

              <div className="mt-3 p-2 bg-light rounded-3">
                <p className="small text-muted mb-0">
                  👆 <strong>Interactive Map:</strong> Tap on any node to view real-time corridor metrics
                </p>
              </div>
            </div>
          </div>

          {/* Details Column */}
          <div className="col-lg-6" data-aos="fade-left">
            <div className="card border-0 shadow-sm rounded-4 p-4 p-md-5 bg-white">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <span 
                  className="badge px-3 py-2 text-uppercase fw-bold" 
                  style={{ backgroundColor: 'rgba(94, 53, 170, 0.1)', color: '#5E35AA', fontSize: '0.75rem' }}
                >
                  {zoneDetails[activeZone].type}
                </span>
                <span className="badge bg-success-subtle text-success border border-success-subtle px-2 py-1 small">
                  High Growth Potential
                </span>
              </div>

              <h2 className="fw-bold mb-3" style={{ color: '#1A1A1A' }}>
                {zoneDetails[activeZone].title}
              </h2>

              <p className="text-secondary lh-base mb-4 fs-6">
                {zoneDetails[activeZone].description}
              </p>

              {/* Key Metrics Grid */}
              <div className="row g-3 mb-4">
                <div className="col-6">
                  <div className="p-3 rounded-3 bg-light border border-light-subtle">
                    <div className="small text-muted fw-medium mb-1">Est. Appreciation</div>
                    <div className="fs-3 fw-bold" style={{ color: '#5E35AA' }}>
                      {zoneDetails[activeZone].appreciation}
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="p-3 rounded-3 bg-light border border-light-subtle">
                    <div className="small text-muted fw-medium mb-1">Rental Yield</div>
                    <div className="fs-3 fw-bold text-dark">
                      {zoneDetails[activeZone].rental}
                    </div>
                  </div>
                </div>
              </div>

              {/* RIICO Info */}
              <div className="p-3 rounded-3 mb-4 bg-light d-flex align-items-center gap-2 border-start border-4" style={{ borderColor: '#5E35AA' }}>
                <span className="fs-5">📍</span>
                <div className="small text-dark">
                  <strong>RIICO Infrastructure Hub:</strong>
                  <div className="text-secondary">{zoneDetails[activeZone].riico}</div>
                </div>
              </div>

              {/* Call to Action */}
              <Link 
                to="/consultation" 
                className="btn text-white w-100 py-3 rounded-pill text-uppercase fw-bold shadow-sm"
                style={{ backgroundColor: '#5E35AA' }}
              >
                Request Corridor Due-Diligence Call
              </Link>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default GrowthCorridor;