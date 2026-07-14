import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  Home, 
  Building2, 
  KeyRound, 
  Building, 
  Trees, 
  Map, 
  Store, 
  Briefcase, 
  Factory, 
  Boxes 
} from 'lucide-react';

const PropertyCategories = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  const categories = [
    { title: 'Residential house', icon: Home, bg: 'linear-gradient(135deg, rgba(37, 99, 235, 0.85), rgba(29, 78, 216, 0.9))', border: 'rgba(59, 130, 246, 0.5)' },
    { title: 'Office space', icon: Building2, bg: 'linear-gradient(135deg, rgba(16, 185, 129, 0.85), rgba(4, 120, 87, 0.9))', border: 'rgba(52, 211, 153, 0.5)' },
    { title: 'Flat rent', icon: KeyRound, bg: 'linear-gradient(135deg, rgba(245, 158, 11, 0.85), rgba(217, 119, 6, 0.9))', border: 'rgba(252, 211, 77, 0.5)' },
    { title: 'House rent', icon: Building, bg: 'linear-gradient(135deg, rgba(249, 115, 22, 0.85), rgba(194, 65, 12, 0.9))', border: 'rgba(253, 186, 116, 0.5)' },
    { title: 'Residential land', icon: Trees, bg: 'linear-gradient(135deg, rgba(139, 92, 246, 0.85), rgba(109, 40, 217, 0.9))', border: 'rgba(196, 181, 253, 0.5)' },
    { title: 'Flat project', icon: Map, bg: 'linear-gradient(135deg, rgba(14, 165, 233, 0.85), rgba(3, 105, 161, 0.9))', border: 'rgba(125, 211, 252, 0.5)' },
    { title: 'Commercial land', icon: Store, bg: 'linear-gradient(135deg, rgba(225, 29, 72, 0.85), rgba(159, 18, 57, 0.9))', border: 'rgba(251, 113, 133, 0.5)' },
    { title: 'Office rent', icon: Briefcase, bg: 'linear-gradient(135deg, rgba(217, 119, 6, 0.85), rgba(180, 83, 9, 0.9))', border: 'rgba(253, 230, 138, 0.5)' },
    { title: 'Industrial land', icon: Factory, bg: 'linear-gradient(135deg, rgba(71, 85, 105, 0.85), rgba(30, 41, 59, 0.9))', border: 'rgba(148, 163, 184, 0.5)' },
    { title: 'Flats or Apartments', icon: Boxes, bg: 'linear-gradient(135deg, rgba(244, 63, 94, 0.85), rgba(225, 29, 72, 0.9))', border: 'rgba(253, 164, 175, 0.5)' },
  ];

  return (
    <section 
      style={{ 
        background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)', 
        padding: '80px 20px',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="row g-4 justify-content-center" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          {categories.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={index} 
                data-aos="fade-up" 
                data-aos-delay={index * 80}
                style={{
                  flex: '1 1 calc(20% - 20px)',
                  minWidth: '180px',
                  maxWidth: '220px'
                }}
              >
                <div 
                  className="glass-card"
                  style={{
                    background: item.bg,
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    border: `1px solid ${item.border}`,
                    borderRadius: '20px',
                    padding: '30px 15px',
                    textAlign: 'center',
                    cursor: 'pointer',
                    boxShadow: '0 10px 30px -10px rgba(0,0,0,0.15)',
                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '160px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px) scale(1.03)';
                    e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(0,0,0,0.25)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = '0 10px 30px -10px rgba(0,0,0,0.15)';
                  }}
                >
                  <div style={{ marginBottom: '14px', color: '#FFFFFF', opacity: 0.95 }}>
                    <IconComponent size={42} strokeWidth={1.8} />
                  </div>
                  <h3 
                    style={{ 
                      color: '#FFFFFF', 
                      fontSize: '1rem', 
                      fontWeight: 600, 
                      margin: 0,
                      lineHeight: '1.3',
                      letterSpacing: '0.3px'
                    }}
                  >
                    {item.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PropertyCategories;