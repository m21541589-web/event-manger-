import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/", icon: "🏠" },
    { name: "About", path: "/about", icon: "📖" },
    { name: "Services", path: "/services", icon: "✨" },
    { name: "Events", path: "/events", icon: "🎉" },
    { name: "Contact", path: "/contact", icon: "📞" }
  ];

  const services = [
    { name: "Luxury Weddings", icon: "💍" },
    { name: "Corporate Events", icon: "🏢" },
    { name: "Birthday Parties", icon: "🎂" },
    { name: "Product Launches", icon: "🚀" },
    { name: "Live Entertainment", icon: "🎪" }
  ];

  const contactInfo = [
    { icon: "📍", text: "Bangla Gogera, Okara,Punjab,Pakistan" },
    { icon: "📞", text: "03466614399" },
    { icon: "✉️", text: "info@eliteevents.com" },
    { icon: "🌐", text: "www.eliteevents.com" }
  ];

  const socialLinks = [
    { icon: "📘", name: "Facebook", url: "#", color: "#1877f2" },
    { icon: "📸", name: "Instagram", url: "#", color: "#e4405f" },
    { icon: "🐦", name: "Twitter", url: "#", color: "#1da1f2" },
    { icon: "📌", name: "Pinterest", url: "#", color: "#bd081c" },
    { icon: "💼", name: "LinkedIn", url: "#", color: "#0a66c2" }
  ];

  return (
    <>
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }

          @keyframes glow {
            0%, 100% { filter: drop-shadow(0 0 5px gold); }
            50% { filter: drop-shadow(0 0 20px gold) drop-shadow(0 0 30px #ffa500); }
          }

          @keyframes gradientFlow {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.7; }
          }

          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }

          @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }

          .footer-section {
            transition: all 0.3s ease;
          }

          .footer-link {
            position: relative;
            transition: all 0.3s ease;
            display: inline-block;
          }

          .footer-link::after {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 0;
            height: 1px;
            background: gold;
            transition: width 0.3s ease;
          }

          .footer-link:hover::after {
            width: 100%;
          }

          .footer-link:hover {
            color: gold !important;
            transform: translateX(5px);
          }

          .social-icon {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            overflow: hidden;
          }

          .social-icon::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
            transition: left 0.5s;
          }

          .social-icon:hover::before {
            left: 100%;
          }

          .social-icon:hover {
            transform: translateY(-5px) scale(1.1);
            box-shadow: 0 10px 20px rgba(0,0,0,0.3);
          }

          .newsletter-input {
            transition: all 0.3s ease;
          }

          .newsletter-input:focus {
            outline: none;
            border-color: gold !important;
            box-shadow: 0 0 20px rgba(255,215,0,0.3);
          }

          .floating-element {
            animation: float 6s ease-in-out infinite;
          }

          .glowing-element {
            animation: glow 3s ease-in-out infinite;
          }

          .gradient-bg {
            background: linear-gradient(135deg, #000, #1a1a1a, #2a2a2a, #000);
            background-size: 400% 400%;
            animation: gradientFlow 15s ease infinite;
          }

          .pulse-element {
            animation: pulse 2s ease-in-out infinite;
          }

          .shimmer-effect {
            position: relative;
            overflow: hidden;
          }

          .shimmer-effect::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,215,0,0.1), transparent);
            animation: shimmer 3s infinite;
            pointer-events: none;
          }

          .gold-border {
            position: relative;
          }

          .gold-border::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 1px;
            background: linear-gradient(90deg, transparent, gold, transparent);
          }

          .hover-card {
            transition: all 0.3s ease;
          }

          .hover-card:hover {
            transform: translateY(-5px);
            background: rgba(255,215,0,0.05);
          }

          .animate-rotate {
            animation: rotate 10s linear infinite;
          }
        `}
      </style>

      <footer style={{
        width: "100%",
        background: "#0a0a0a",
        color: "#ccc",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid rgba(255,215,0,0.2)",
        boxShadow: "0 -10px 30px rgba(0,0,0,0.5)"
      }}>
        {/* Animated Background Elements */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: "none",
          zIndex: 0
        }}>
          {/* Gradient Overlay */}
          <div className="gradient-bg" style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.5
          }}></div>

          {/* Floating Particles */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="floating-element"
              style={{
                position: "absolute",
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                background: `rgba(255,215,0,${Math.random() * 0.3})`,
                borderRadius: "50%",
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 10 + 10}s`
              }}
            />
          ))}

          {/* Decorative Circles */}
          <div className="animate-rotate" style={{
            position: "absolute",
            width: "300px",
            height: "300px",
            border: "1px solid rgba(255,215,0,0.05)",
            borderRadius: "50%",
            left: "-100px",
            bottom: "-100px"
          }}></div>

          <div className="animate-rotate" style={{
            position: "absolute",
            width: "200px",
            height: "200px",
            border: "1px solid rgba(255,215,0,0.05)",
            borderRadius: "50%",
            right: "-50px",
            top: "-50px",
            animationDirection: "reverse"
          }}></div>
        </div>

        {/* Main Footer Content */}
        <div style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "60px 20px 30px",
          position: "relative",
          zIndex: 1
        }}>
          {/* Top Section with Logo and Newsletter */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "40px",
            marginBottom: "50px",
            paddingBottom: "40px",
            borderBottom: "1px solid rgba(255,215,0,0.2)"
          }}>
            {/* Logo and Description */}
            <div className="footer-section shimmer-effect" style={{
              textAlign: "left"
            }}>
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
                marginBottom: "20px"
              }}>
                <div className="floating-element" style={{
                  width: "60px",
                  height: "60px",
                  background: "linear-gradient(135deg, gold, #ffa500)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "2rem",
                  boxShadow: "0 0 30px gold"
                }}>
                  ✦
                </div>
                <div>
                  <h2 style={{
                    fontSize: "2rem",
                    fontWeight: "800",
                    margin: 0,
                    background: "linear-gradient(135deg, #fff, gold)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                  }}>
                    ELITE
                  </h2>
                  <p style={{
                    color: "gold",
                    letterSpacing: "3px",
                    fontSize: "0.8rem",
                    margin: 0
                  }}>
                    EVENTS
                  </p>
                </div>
              </div>
              <p style={{
                lineHeight: "1.8",
                color: "#999",
                marginBottom: "20px"
              }}>
                Creating unforgettable moments and extraordinary experiences since 2025. 
                We turn your vision into reality with precision and passion.
              </p>
              
              {/* Trust Badges */}
              <div style={{
                display: "flex",
                gap: "20px",
                marginTop: "20px"
              }}>
                <div className="hover-card" style={{
                  textAlign: "center",
                  padding: "10px",
                  background: "rgba(255,215,0,0.05)",
                  borderRadius: "10px",
                  flex: 1
                }}>
                  <div style={{ fontSize: "1.5rem", color: "gold" }}>⭐</div>
                  <div style={{ fontSize: "0.9rem", color: "#ccc" }}>Trusted</div>
                </div>
                <div className="hover-card" style={{
                  textAlign: "center",
                  padding: "10px",
                  background: "rgba(255,215,0,0.05)",
                  borderRadius: "10px",
                  flex: 1
                }}>
                  <div style={{ fontSize: "1.5rem", color: "gold" }}>🏆</div>
                  <div style={{ fontSize: "0.9rem", color: "#ccc" }}>Awarded</div>
                </div>
                <div className="hover-card" style={{
                  textAlign: "center",
                  padding: "10px",
                  background: "rgba(255,215,0,0.05)",
                  borderRadius: "10px",
                  flex: 1
                }}>
                  <div style={{ fontSize: "1.5rem", color: "gold" }}>💯</div>
                  <div style={{ fontSize: "0.9rem", color: "#ccc" }}>Quality</div>
                </div>
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="footer-section" style={{
              textAlign: "left"
            }}>
              <h3 style={{
                fontSize: "1.3rem",
                color: "white",
                marginBottom: "20px",
                display: "flex",
                alignItems: "center",
                gap: "10px"
              }}>
                <span style={{ color: "gold" }}>✦</span>
                Newsletter
              </h3>
              <p style={{
                color: "#999",
                marginBottom: "20px",
                lineHeight: "1.6"
              }}>
                Subscribe to get updates on events and exclusive offers
              </p>
              
              <div style={{
                display: "flex",
                gap: "10px",
                flexWrap: "wrap"
              }}>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="newsletter-input"
                  style={{
                    flex: 1,
                    minWidth: "200px",
                    padding: "15px",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,215,0,0.3)",
                    borderRadius: "30px",
                    color: "white",
                    fontSize: "1rem"
                  }}
                />
                <button className="glowing-element" style={{
                  padding: "15px 30px",
                  background: "linear-gradient(135deg, gold, #ffa500)",
                  color: "black",
                  border: "none",
                  borderRadius: "30px",
                  cursor: "pointer",
                  fontWeight: "bold",
                  transition: "all 0.3s ease",
                  whiteSpace: "nowrap"
                }}
                onMouseEnter={(e) => e.target.style.transform = "scale(1.05)"}
                onMouseLeave={(e) => e.target.style.transform = "scale(1)"}>
                  Subscribe
                </button>
              </div>

              {/* Social Links */}
              <div style={{
                display: "flex",
                gap: "15px",
                marginTop: "30px",
                flexWrap: "wrap"
              }}>
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    style={{
                      width: "45px",
                      height: "45px",
                      background: "rgba(255,255,255,0.05)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.5rem",
                      color: social.color,
                      textDecoration: "none",
                      border: "1px solid rgba(255,215,0,0.2)",
                      transition: "all 0.3s ease"
                    }}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Links Grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "40px",
            marginBottom: "40px"
          }}>
            {/* Quick Links */}
            <div className="footer-section">
              <h3 style={{
                fontSize: "1.3rem",
                color: "white",
                marginBottom: "20px",
                display: "flex",
                alignItems: "center",
                gap: "10px"
              }}>
                <span style={{ color: "gold" }}>✦</span>
                Quick Links
              </h3>
              <ul style={{
                listStyle: "none",
                padding: 0,
                margin: 0
              }}>
                {quickLinks.map((link, index) => (
                  <li key={index} style={{ marginBottom: "12px" }}>
                    <Link
                      to={link.path}
                      className="footer-link"
                      style={{
                        color: "#999",
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        transition: "all 0.3s ease"
                      }}
                    >
                      <span style={{ color: "gold", fontSize: "1.1rem" }}>{link.icon}</span>
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Services */}
            <div className="footer-section">
              <h3 style={{
                fontSize: "1.3rem",
                color: "white",
                marginBottom: "20px",
                display: "flex",
                alignItems: "center",
                gap: "10px"
              }}>
                <span style={{ color: "gold" }}>✦</span>
                Our Services
              </h3>
              <ul style={{
                listStyle: "none",
                padding: 0,
                margin: 0
              }}>
                {services.map((service, index) => (
                  <li key={index} style={{ marginBottom: "12px" }}>
                    <span
                      className="footer-link"
                      style={{
                        color: "#999",
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        cursor: "default"
                      }}
                    >
                      <span style={{ color: "gold", fontSize: "1.1rem" }}>{service.icon}</span>
                      <span>{service.name}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-section">
              <h3 style={{
                fontSize: "1.3rem",
                color: "white",
                marginBottom: "20px",
                display: "flex",
                alignItems: "center",
                gap: "10px"
              }}>
                <span style={{ color: "gold" }}>✦</span>
                Contact Info
              </h3>
              <ul style={{
                listStyle: "none",
                padding: 0,
                margin: 0
              }}>
                {contactInfo.map((info, index) => (
                  <li key={index} style={{
                    marginBottom: "15px",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                    color: "#999",
                    lineHeight: "1.6"
                  }}>
                    <span style={{ color: "gold", fontSize: "1.2rem" }}>{info.icon}</span>
                    <span>{info.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Business Hours */}
            <div className="footer-section">
              <h3 style={{
                fontSize: "1.3rem",
                color: "white",
                marginBottom: "20px",
                display: "flex",
                alignItems: "center",
                gap: "10px"
              }}>
                <span style={{ color: "gold" }}>✦</span>
                Business Hours
              </h3>
              <ul style={{
                listStyle: "none",
                padding: 0,
                margin: 0
              }}>
                <li style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "12px",
                  color: "#999"
                }}>
                  <span>Monday - Friday</span>
                  <span style={{ color: "gold" }}>9am - 8pm</span>
                </li>
                <li style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "12px",
                  color: "#999"
                }}>
                  <span>Saturday</span>
                  <span style={{ color: "gold" }}>10am - 6pm</span>
                </li>
                <li style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "12px",
                  color: "#999"
                }}>
                  <span>Sunday</span>
                  <span style={{ color: "gold" }}>12pm - 5pm</span>
                </li>
                <li style={{
                  marginTop: "20px",
                  padding: "15px",
                  background: "rgba(255,215,0,0.05)",
                  borderRadius: "10px",
                  textAlign: "center"
                }}>
                  <span style={{ color: "gold" }}>24/7 Emergency Support</span>
                  <br />
                  <span style={{ color: "#999", fontSize: "1.2rem", fontWeight: "bold" }}>03466614399</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="gold-border" style={{
            paddingTop: "30px",
            marginTop: "30px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "20px"
          }}>
            {/* Copyright */}
            <div style={{
              color: "#666",
              fontSize: "0.9rem",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              flexWrap: "wrap"
            }}>
              <span>© {currentYear} Elite Events. All Rights Reserved.</span>
              <span style={{ color: "gold" }}>✦</span>
              <span>Made with passion in NYC</span>
            </div>

            {/* Footer Links */}
            <div style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap"
            }}>
              <Link to="/privacy" className="footer-link" style={{
                color: "#999",
                textDecoration: "none",
                fontSize: "0.9rem"
              }}>
                Privacy Policy
              </Link>
              <Link to="/terms" className="footer-link" style={{
                color: "#999",
                textDecoration: "none",
                fontSize: "0.9rem"
              }}>
                Terms of Service
              </Link>
              <Link to="/cookies" className="footer-link" style={{
                color: "#999",
                textDecoration: "none",
                fontSize: "0.9rem"
              }}>
                Cookie Policy
              </Link>
              <Link to="/sitemap" className="footer-link" style={{
                color: "#999",
                textDecoration: "none",
                fontSize: "0.9rem"
              }}>
                Sitemap
              </Link>
            </div>

            {/* Payment Methods */}
            <div style={{
              display: "flex",
              gap: "10px",
              alignItems: "center"
            }}>
              <span style={{ color: "#666", fontSize: "0.9rem" }}>We Accept:</span>
              <span style={{ fontSize: "1.5rem", filter: "grayscale(0.5)" }}>💳</span>
              <span style={{ fontSize: "1.5rem", filter: "grayscale(0.5)" }}>💵</span>
              <span style={{ fontSize: "1.5rem", filter: "grayscale(0.5)" }}>🏦</span>
              <span style={{ fontSize: "1.5rem", filter: "grayscale(0.5)" }}>📱</span>
            </div>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="floating-element glowing-element"
            style={{
              position: "absolute",
              bottom: "30px",
              right: "30px",
              width: "50px",
              height: "50px",
              background: "linear-gradient(135deg, gold, #ffa500)",
              border: "none",
              borderRadius: "50%",
              cursor: "pointer",
              fontSize: "1.5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 5px 20px rgba(255,215,0,0.3)",
              transition: "all 0.3s ease",
              zIndex: 10
            }}
            onMouseEnter={(e) => e.target.style.transform = "scale(1.1)"}
            onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
          >
            ↑
          </button>
        </div>
      </footer>
    </>
  );
};

export default Footer;