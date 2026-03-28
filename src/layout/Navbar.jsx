import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: "/", label: "Home", icon: "🏠" },
    { path: "/about", label: "About", icon: "📖" },
    { path: "/services", label: "Services", icon: "✨" },
    { path: "/events", label: "Events", icon: "🎉" },
    { path: "/contact", label: "Contact", icon: "📞" }
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      <style>
        {`
          @keyframes slideDown {
            from {
              transform: translateY(-100%);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }

          @keyframes glow {
            0%, 100% { box-shadow: 0 0 20px rgba(255,215,0,0.3); }
            50% { box-shadow: 0 0 40px rgba(255,215,0,0.6); }
          }

          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-5px); }
          }

          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }

          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.7; }
          }

          .nav-link {
            position: relative;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .nav-link::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 50%;
            transform: translateX(-50%) scaleX(0);
            width: 100%;
            height: 2px;
            background: linear-gradient(90deg, transparent, gold, transparent);
            transition: transform 0.3s ease;
          }

          .nav-link:hover::after {
            transform: translateX(-50%) scaleX(1);
          }

          .nav-link.active::after {
            transform: translateX(-50%) scaleX(1);
          }

          .nav-link.active {
            color: gold !important;
            text-shadow: 0 0 10px rgba(255,215,0,0.5);
          }

          .nav-link:hover {
            color: gold !important;
            transform: translateY(-2px);
          }

          .menu-button {
            transition: all 0.3s ease;
          }

          .menu-button:hover {
            transform: rotate(90deg);
          }

          .mobile-menu {
            animation: slideDown 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          }

          .logo-container {
            position: relative;
            overflow: hidden;
          }

          .logo-container::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,215,0,0.2), transparent);
            animation: shimmer 3s infinite;
          }

          .logo-text {
            background: linear-gradient(135deg, #fff, gold, #ffa500);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-size: 200% 200%;
            animation: gradientMove 3s ease infinite;
          }

          @keyframes gradientMove {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }

          .floating-element {
            animation: float 3s ease-in-out infinite;
          }

          .pulse-element {
            animation: pulse 2s ease-in-out infinite;
          }

          .glowing-border {
            animation: glow 2s ease-in-out infinite;
          }

          .icon-hover {
            transition: all 0.3s ease;
          }

          .icon-hover:hover {
            transform: scale(1.2) rotate(5deg);
          }

          .mobile-link {
            transition: all 0.3s ease;
          }

          .mobile-link:hover {
            background: linear-gradient(90deg, transparent, rgba(255,215,0,0.1), transparent);
            transform: translateX(10px);
          }
        `}
      </style>

      <nav style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: scrolled 
          ? "linear-gradient(135deg, rgba(0,0,0,0.95), rgba(0,0,0,0.98))" 
          : "linear-gradient(135deg, rgba(0,0,0,0.8), rgba(0,0,0,0.9))",
        backdropFilter: scrolled ? "blur(10px)" : "blur(5px)",
        borderBottom: scrolled 
          ? "2px solid rgba(255,215,0,0.3)" 
          : "1px solid rgba(255,215,0,0.1)",
        transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
        boxShadow: scrolled 
          ? "0 10px 30px rgba(0,0,0,0.5), 0 0 20px rgba(255,215,0,0.2)" 
          : "0 5px 20px rgba(0,0,0,0.3)"
      }}>
        <div style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: scrolled ? "12px 24px" : "20px 24px",
          transition: "all 0.5s ease"
        }}>
          {/* Logo Section with Animation */}
          <Link to="/" style={{ textDecoration: "none" }}>
            <div className="logo-container floating-element" style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              position: "relative",
              cursor: "pointer"
            }}>
              {/* Animated Icon */}
              <div style={{
                width: "50px",
                height: "50px",
                background: "linear-gradient(135deg, gold, #ffa500)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.8rem",
                boxShadow: "0 0 30px gold",
                transform: scrolled ? "scale(0.9)" : "scale(1)",
                transition: "all 0.3s ease"
              }}>
                ✦
              </div>
              
              {/* Text Logo */}
              <div>
                <h1 className="logo-text" style={{
                  fontSize: scrolled ? "1.5rem" : "2rem",
                  fontWeight: "800",
                  margin: 0,
                  lineHeight: "1.2",
                  transition: "all 0.3s ease"
                }}>
                  ELITE
                </h1>
                <p style={{
                  fontSize: "0.7rem",
                  color: "gold",
                  margin: 0,
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  opacity: scrolled ? 0.8 : 1,
                  transition: "all 0.3s ease"
                }}>
                  EVENTS
                </p>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div style={{
            display: "flex",
            gap: "30px",
            alignItems: "center"
          }}>
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${isActive(link.path) ? 'active' : ''}`}
                onMouseEnter={() => setHoveredLink(index)}
                onMouseLeave={() => setHoveredLink(null)}
                style={{
                  color: isActive(link.path) ? "gold" : "white",
                  textDecoration: "none",
                  fontSize: "1.1rem",
                  fontWeight: isActive(link.path) ? "700" : "500",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "5px 10px",
                  position: "relative",
                  transform: hoveredLink === index ? "translateY(-2px)" : "translateY(0)",
                  transition: "all 0.3s ease"
                }}
              >
                <span className="icon-hover" style={{
                  fontSize: "1.2rem",
                  opacity: hoveredLink === index ? 1 : 0.7
                }}>
                  {link.icon}
                </span>
                <span>{link.label}</span>
                
                {/* Active Indicator Dot */}
                {isActive(link.path) && (
                  <span style={{
                    position: "absolute",
                    bottom: "-8px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "5px",
                    height: "5px",
                    background: "gold",
                    borderRadius: "50%",
                    boxShadow: "0 0 10px gold"
                  }}></span>
                )}
              </Link>
            ))}

            {/* Book Now Button */}
            <Link to="/contact">
              <button className="glowing-border" style={{
                padding: scrolled ? "10px 25px" : "12px 30px",
                background: "linear-gradient(135deg, gold, #ffa500)",
                color: "black",
                border: "none",
                borderRadius: "40px",
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: "1rem",
                transition: "all 0.3s ease",
                boxShadow: "0 5px 20px rgba(255,215,0,0.4)",
                position: "relative",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                gap: "8px"
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "scale(1.05)";
                e.target.style.boxShadow = "0 10px 30px rgba(255,215,0,0.6)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1)";
                e.target.style.boxShadow = "0 5px 20px rgba(255,215,0,0.4)";
              }}>
                <span>Book Now</span>
                <span style={{ fontSize: "1.2rem" }}>✦</span>
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div 
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              display: "none",
              cursor: "pointer",
              fontSize: "2rem",
              color: "gold",
              width: "40px",
              height: "40px",
              alignItems: "center",
              justifyContent: "center",
              border: "2px solid gold",
              borderRadius: "10px",
              transition: "all 0.3s ease"
            }}
          >
            {menuOpen ? "✕" : "☰"}
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="mobile-menu" style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            background: "linear-gradient(135deg, rgba(0,0,0,0.98), rgba(0,0,0,0.95))",
            backdropFilter: "blur(10px)",
            padding: "30px",
            borderBottom: "2px solid gold",
            boxShadow: "0 20px 40px rgba(0,0,0,0.5)"
          }}>
            <div style={{
              display: "flex",
              flexDirection: "column",
              gap: "15px"
            }}>
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="mobile-link"
                  style={{
                    color: isActive(link.path) ? "gold" : "white",
                    textDecoration: "none",
                    fontSize: "1.3rem",
                    padding: "15px 20px",
                    borderBottom: "1px solid rgba(255,215,0,0.1)",
                    display: "flex",
                    alignItems: "center",
                    gap: "15px",
                    background: isActive(link.path) ? "rgba(255,215,0,0.1)" : "transparent",
                    borderRadius: "10px",
                    transition: "all 0.3s ease"
                  }}
                >
                  <span style={{ fontSize: "1.5rem" }}>{link.icon}</span>
                  <span>{link.label}</span>
                  {isActive(link.path) && (
                    <span style={{ marginLeft: "auto", color: "gold" }}>✦</span>
                  )}
                </Link>
              ))}
              
              {/* Mobile Book Button */}
              <Link to="/contact" style={{ textDecoration: "none" }}>
                <button style={{
                  width: "100%",
                  padding: "15px",
                  background: "linear-gradient(135deg, gold, #ffa500)",
                  color: "black",
                  border: "none",
                  borderRadius: "10px",
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  marginTop: "20px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px"
                }}>
                  <span>Book Now</span>
                  <span>✦</span>
                </button>
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Responsive Styles */}
      <style>
        {`
          @media (max-width: 768px) {
            nav > div > div:nth-child(2) {
              display: none !important;
            }
            
            .menu-button {
              display: flex !important;
            }
          }

          @media (max-width: 480px) {
            nav > div {
              padding-left: 15px !important;
              padding-right: 15px !important;
            }
            
            .logo-container > div:first-child {
              width: 40px !important;
              height: 40px !important;
              font-size: 1.2rem !important;
            }
            
            .logo-text {
              font-size: 1.2rem !important;
            }
            
            .logo-container p {
              font-size: 0.6rem !important;
            }
          }
        `}
      </style>
    </>
  );
};

export default Navbar;