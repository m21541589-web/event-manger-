import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Services = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  useEffect(() => {
    // Intersection Observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Mouse move for parallax
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const categories = [
    { id: "all", label: "All Services", icon: "✨" },
    { id: "wedding", label: "Weddings", icon: "💍" },
    { id: "corporate", label: "Corporate", icon: "🏢" },
    { id: "social", label: "Social Events", icon: "🎉" },
    { id: "entertainment", label: "Entertainment", icon: "🎪" }
  ];

  const services = [
    // Wedding Category
    {
      id: 1,
      category: "wedding",
      title: "Luxury Wedding Planning",
      description: "Complete wedding planning from venue selection to the last dance. We create your dream wedding with meticulous attention to detail.",
      icon: "💍",
      price: "Custom Quote",
      features: ["Venue Selection", "Catering", "Decoration", "Entertainment", "Photography", "Honeymoon Planning"],
      highlight: true
    },
    {
      id: 2,
      category: "wedding",
      title: "Wedding Decoration",
      description: "Transform your venue into a magical space with our award-winning decoration services.",
      icon: "🌸",
      price: "Starting $5,000",
      features: ["Floral Arrangements", "Lighting Design", "Table Settings", "Backdrop Design", "Theme Creation"]
    },
    {
      id: 3,
      category: "wedding",
      title: "Wedding Coordination",
      description: "Month-of coordination to ensure your big day runs smoothly without any stress.",
      icon: "📋",
      price: "Starting $2,500",
      features: ["Vendor Coordination", "Timeline Management", "Rehearsal Direction", "Day-of Coordination"]
    },

    // Corporate Category
    {
      id: 4,
      category: "corporate",
      title: "Corporate Conferences",
      description: "Professional conference management for businesses of all sizes.",
      icon: "🎯",
      price: "Custom Quote",
      features: ["Venue Booking", "AV Setup", "Speaker Management", "Attendee Registration", "Networking Events"],
      highlight: true
    },
    {
      id: 5,
      category: "corporate",
      title: "Product Launches",
      description: "Create buzz and excitement for your new products with spectacular launch events.",
      icon: "🚀",
      price: "Starting $10,000",
      features: ["Concept Development", "Media Invites", "Press Kits", "Live Demos", "Social Media Coverage"]
    },
    {
      id: 6,
      category: "corporate",
      title: "Team Building",
      description: "Fun and engaging team building activities that strengthen workplace relationships.",
      icon: "🤝",
      price: "Starting $3,000",
      features: ["Custom Activities", "Venue Selection", "Facilitators", "Meals Included", "Photo/Video Coverage"]
    },

    // Social Events
    {
      id: 7,
      category: "social",
      title: "Birthday Parties",
      description: "Unforgettable birthday celebrations for all ages, from kids to adults.",
      icon: "🎂",
      price: "Starting $1,500",
      features: ["Theme Design", "Catering", "Entertainment", "Decorations", "Party Favors"]
    },
    {
      id: 8,
      category: "social",
      title: "Anniversary Celebrations",
      description: "Celebrate your love story with an elegant anniversary party.",
      icon: "💕",
      price: "Starting $3,000",
      features: ["Vow Renewal", "Family Gathering", "Photo Montage", "Catering", "Live Music"]
    },
    {
      id: 9,
      category: "social",
      title: "Graduation Parties",
      description: "Honor your achievements with a memorable graduation celebration.",
      icon: "🎓",
      price: "Starting $2,000",
      features: ["Venue Decoration", "Catering", "Photo Booth", "DJ/Music", "Graduation Cake"]
    },

    // Entertainment
    {
      id: 10,
      category: "entertainment",
      title: "Live Entertainment",
      description: "Book top-tier performers, bands, and DJs for your event.",
      icon: "🎪",
      price: "Custom Quote",
      features: ["Bands", "DJs", "Dancers", "Magicians", "Comedians"]
    },
    {
      id: 11,
      category: "entertainment",
      title: "Photo & Video",
      description: "Capture every moment with professional photography and videography.",
      icon: "📸",
      price: "Starting $2,500",
      features: ["Professional Camera", "Drone Coverage", "Photo Editing", "Highlight Reel", "Same-Day Edits"]
    },
    {
      id: 12,
      category: "entertainment",
      title: "Lighting & Sound",
      description: "Create the perfect ambiance with professional lighting and sound systems.",
      icon: "🎵",
      price: "Starting $1,800",
      features: ["Stage Lighting", "Sound System", "LED Walls", "Special Effects", "Technical Support"]
    }
  ];

  const filteredServices = activeCategory === "all" 
    ? services 
    : services.filter(service => service.category === activeCategory);

  const processSteps = [
    { step: "01", title: "Consultation", icon: "📞", desc: "We discuss your vision and requirements" },
    { step: "02", title: "Planning", icon: "📝", desc: "Detailed planning and timeline creation" },
    { step: "03", title: "Design", icon: "🎨", desc: "Creative concept and design development" },
    { step: "04", title: "Execution", icon: "⚡", desc: "Flawless execution on the day" },
    { step: "05", title: "Follow-up", icon: "💝", desc: "Post-event support and feedback" }
  ];

  const packages = [
    {
      name: "Essential",
      price: "5,000",
      duration: "Starting",
      features: ["Basic Planning", "Venue Coordination", "Vendor Booking", "Day-of Coordination"],
      icon: "🌱",
      popular: false
    },
    {
      name: "Premium",
      price: "10,000",
      duration: "Most Popular",
      features: ["Full Planning", "Design Concept", "All Vendors", "Guest Management", "Photo/Video"],
      icon: "⭐",
      popular: true
    },
    {
      name: "Luxury",
      price: "20,000",
      duration: "Ultimate",
      features: ["Everything Premium", "Destination Options", "Celebrity Booking", "Full Production", "VIP Treatment"],
      icon: "👑",
      popular: false
    }
  ];

  return (
    <div style={{
      margin: 0,
      padding: 0,
      fontFamily: "'Poppins', sans-serif",
      background: "#0a0a0a",
      color: "white",
      overflow: "hidden",
      position: "relative",
      minHeight: "100vh"
    }}>
      {/* Google Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800&display=swap" rel="stylesheet" />

      {/* CSS Animations */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(5deg); }
          }

          @keyframes floatReverse {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(20px) rotate(-5deg); }
          }

          @keyframes glow {
            0%, 100% { filter: drop-shadow(0 0 20px gold); }
            50% { filter: drop-shadow(0 0 40px #ffd700); }
          }

          @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.05); opacity: 0.8; }
          }

          @keyframes slideInLeft {
            from {
              opacity: 0;
              transform: translateX(-100px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes slideInRight {
            from {
              opacity: 0;
              transform: translateX(100px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes slideInUp {
            from {
              opacity: 0;
              transform: translateY(100px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes scaleIn {
            from {
              opacity: 0;
              transform: scale(0);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }

          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }

          @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          .floating-element {
            animation: float 8s ease-in-out infinite;
          }

          .floating-reverse {
            animation: floatReverse 10s ease-in-out infinite;
          }

          .glowing-element {
            animation: glow 3s ease-in-out infinite;
          }

          .pulse-element {
            animation: pulse 2s ease-in-out infinite;
          }

          .rotating-element {
            animation: rotate 20s linear infinite;
          }

          .gradient-bg {
            background: linear-gradient(-45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4);
            background-size: 400% 400%;
            animation: gradientMove 15s ease infinite;
          }

          .service-card {
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            overflow: hidden;
          }

          .service-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,215,0,0.1), transparent);
            transition: left 0.5s;
          }

          .service-card:hover::before {
            left: 100%;
          }

          .service-card:hover {
            transform: translateY(-20px) scale(1.02);
            box-shadow: 0 30px 50px rgba(255,215,0,0.2);
            border-color: gold !important;
          }

          .service-card.highlight {
            border: 2px solid gold;
            box-shadow: 0 0 30px rgba(255,215,0,0.3);
          }

          .category-btn {
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
          }

          .category-btn::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%) scaleX(0);
            width: 100%;
            height: 2px;
            background: gold;
            transition: transform 0.3s ease;
          }

          .category-btn:hover::after {
            transform: translateX(-50%) scaleX(1);
          }

          .category-btn.active {
            background: gold !important;
            color: black !important;
          }

          .feature-tag {
            transition: all 0.3s ease;
          }

          .feature-tag:hover {
            background: gold !important;
            color: black !important;
            transform: scale(1.05);
          }

          .price-card {
            transition: all 0.3s ease;
          }

          .price-card:hover {
            transform: scale(1.05);
            box-shadow: 0 20px 40px rgba(255,215,0,0.2);
          }

          .price-card.popular {
            border: 2px solid gold;
            transform: scale(1.05);
          }

          .shimmer-effect {
            position: relative;
            overflow: hidden;
          }

          .shimmer-effect::after {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,215,0,0.2), transparent);
            animation: shimmer 2s infinite;
          }
        `}
      </style>

      {/* Animated Background */}
      <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none"
      }}>
        {/* Gradient Overlay */}
        <div className="gradient-bg" style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          opacity: 0.1
        }}></div>

        {/* Floating Particles */}
        {[...Array(50)].map((_, i) => (
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
        <div className="rotating-element" style={{
          position: "absolute",
          width: "800px",
          height: "800px",
          border: "2px solid rgba(255,215,0,0.05)",
          borderRadius: "50%",
          left: "-200px",
          top: "-200px"
        }}></div>

        <div className="rotating-element" style={{
          position: "absolute",
          width: "600px",
          height: "600px",
          border: "2px solid rgba(255,215,0,0.05)",
          borderRadius: "50%",
          right: "-100px",
          bottom: "-100px",
          animationDirection: "reverse"
        }}></div>

        {/* Geometric Shapes */}
        <div className="floating-element" style={{
          position: "absolute",
          width: "300px",
          height: "300px",
          border: "1px solid rgba(255,215,0,0.1)",
          transform: "rotate(45deg)",
          left: "5%",
          top: "20%"
        }}></div>

        <div className="floating-reverse" style={{
          position: "absolute",
          width: "200px",
          height: "200px",
          border: "1px solid rgba(255,215,0,0.1)",
          transform: "rotate(30deg)",
          right: "10%",
          bottom: "30%"
        }}></div>
      </div>

      {/* Main Content */}
      <div ref={sectionRef} style={{
        position: "relative",
        zIndex: 1,
        padding: "100px 20px 50px",
        maxWidth: "1400px",
        margin: "0 auto"
      }}>
        {/* Hero Section with Parallax */}
        <div style={{
          textAlign: "center",
          marginBottom: "60px",
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          transition: "transform 0.1s ease-out"
        }}>
          {/* Animated Badge */}
          <div className="floating-element" style={{
            display: "inline-block",
            padding: "10px 30px",
            background: "rgba(255,215,0,0.1)",
            border: "1px solid gold",
            borderRadius: "40px",
            marginBottom: "30px"
          }}>
            <span style={{ color: "gold", letterSpacing: "2px" }}>✦ PREMIUM SERVICES ✦</span>
          </div>

          {/* Title */}
          <h1 style={{
            fontSize: "clamp(2.5rem, 8vw, 5rem)",
            fontWeight: "800",
            marginBottom: "20px",
            lineHeight: "1.2"
          }}>
            Our <span style={{
              background: "linear-gradient(135deg, gold, #ffa500)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}>Services</span>
          </h1>

          {/* Description */}
          <p style={{
            maxWidth: "800px",
            margin: "0 auto",
            color: "#ccc",
            fontSize: "1.2rem",
            lineHeight: "1.8",
            marginBottom: "40px"
          }}>
            We offer comprehensive event management services tailored to your needs. 
            From intimate gatherings to large-scale productions, we deliver excellence in every detail.
          </p>

          {/* Stats Row */}
          <div style={{
            display: "flex",
            justifyContent: "center",
            gap: "50px",
            flexWrap: "wrap"
          }}>
            <div className="card-hover" style={{ textAlign: "center" }}>
              <div style={{ fontSize: "2rem", color: "gold" }}>50+</div>
              <div style={{ color: "#999" }}>Expert Team</div>
            </div>
            <div className="card-hover" style={{ textAlign: "center" }}>
              <div style={{ fontSize: "2rem", color: "gold" }}>500+</div>
              <div style={{ color: "#999" }}>Events Done</div>
            </div>
            <div className="card-hover" style={{ textAlign: "center" }}>
              <div style={{ fontSize: "2rem", color: "gold" }}>100%</div>
              <div style={{ color: "#999" }}>Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "15px",
          flexWrap: "wrap",
          marginBottom: "50px"
        }}>
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
              style={{
                padding: "12px 25px",
                background: activeCategory === category.id ? "gold" : "transparent",
                color: activeCategory === category.id ? "black" : "white",
                border: "2px solid gold",
                borderRadius: "40px",
                cursor: "pointer",
                fontSize: "1rem",
                fontWeight: "500",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                transition: "all 0.3s ease"
              }}
            >
              <span>{category.icon}</span>
              <span>{category.label}</span>
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
          gap: "30px",
          marginBottom: "80px"
        }}>
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              className={`service-card ${service.highlight ? 'highlight' : ''}`}
              style={{
                padding: "40px",
                background: "rgba(255,255,255,0.03)",
                borderRadius: "30px",
                border: service.highlight ? "2px solid gold" : "1px solid rgba(255,215,0,0.1)",
                animation: `slideInUp 0.5s ease ${index * 0.1}s forwards`,
                opacity: 0,
                position: "relative",
                overflow: "hidden"
              }}
            >
              {service.highlight && (
                <div style={{
                  position: "absolute",
                  top: "20px",
                  right: "20px",
                  background: "gold",
                  color: "black",
                  padding: "5px 15px",
                  borderRadius: "20px",
                  fontSize: "0.9rem",
                  fontWeight: "bold"
                }}>
                  Most Popular ✦
                </div>
              )}

              <div style={{
                fontSize: "3rem",
                marginBottom: "20px",
                animation: "pulse 2s ease infinite"
              }}>
                {service.icon}
              </div>

              <h3 style={{
                fontSize: "1.8rem",
                color: "white",
                marginBottom: "15px"
              }}>
                {service.title}
              </h3>

              <p style={{
                color: "#ccc",
                lineHeight: "1.8",
                marginBottom: "20px"
              }}>
                {service.description}
              </p>

              <div style={{
                fontSize: "1.3rem",
                color: "gold",
                marginBottom: "20px",
                fontWeight: "bold"
              }}>
                {service.price}
              </div>

              <div style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                marginBottom: "30px"
              }}>
                {service.features.map((feature, i) => (
                  <span
                    key={i}
                    className="feature-tag"
                    style={{
                      padding: "5px 15px",
                      background: "rgba(255,215,0,0.1)",
                      border: "1px solid rgba(255,215,0,0.3)",
                      borderRadius: "20px",
                      color: "#ccc",
                      fontSize: "0.9rem"
                    }}
                  >
                    ✓ {feature}
                  </span>
                ))}
              </div>

              <Link to="/contact">
                <button style={{
                  width: "100%",
                  padding: "15px",
                  background: service.highlight ? "gold" : "transparent",
                  color: service.highlight ? "black" : "gold",
                  border: "2px solid gold",
                  borderRadius: "30px",
                  cursor: "pointer",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  transition: "all 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = "gold";
                  e.target.style.color = "black";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = service.highlight ? "gold" : "transparent";
                  e.target.style.color = service.highlight ? "black" : "gold";
                }}>
                  Book Now ✦
                </button>
              </Link>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div style={{
          marginBottom: "80px",
          padding: "60px 20px",
          background: "rgba(255,255,255,0.02)",
          borderRadius: "50px"
        }}>
          <h2 style={{
            textAlign: "center",
            fontSize: "2.5rem",
            marginBottom: "20px"
          }}>
            Our <span style={{ color: "gold" }}>Process</span>
          </h2>
          <p style={{
            textAlign: "center",
            color: "#ccc",
            maxWidth: "600px",
            margin: "0 auto 50px"
          }}>
            How we bring your vision to life
          </p>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "30px"
          }}>
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="card-hover"
                style={{
                  textAlign: "center",
                  padding: "30px",
                  background: "rgba(255,255,255,0.03)",
                  borderRadius: "20px",
                  border: "1px solid rgba(255,215,0,0.1)",
                  position: "relative"
                }}
              >
                <div className="floating-element" style={{
                  fontSize: "3rem",
                  marginBottom: "15px"
                }}>
                  {step.icon}
                </div>
                <div style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  color: "gold",
                  marginBottom: "10px"
                }}>
                  {step.step}
                </div>
                <h3 style={{
                  fontSize: "1.2rem",
                  color: "white",
                  marginBottom: "10px"
                }}>
                  {step.title}
                </h3>
                <p style={{ color: "#999", fontSize: "0.9rem" }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Packages */}
        <div style={{
          marginBottom: "80px"
        }}>
          <h2 style={{
            textAlign: "center",
            fontSize: "2.5rem",
            marginBottom: "20px"
          }}>
            Pricing <span style={{ color: "gold" }}>Packages</span>
          </h2>
          <p style={{
            textAlign: "center",
            color: "#ccc",
            maxWidth: "600px",
            margin: "0 auto 50px"
          }}>
            Choose the perfect package for your event
          </p>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "30px",
            alignItems: "center"
          }}>
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`price-card ${pkg.popular ? 'popular' : ''}`}
                style={{
                  padding: "50px 30px",
                  background: "rgba(255,255,255,0.03)",
                  borderRadius: "30px",
                  border: pkg.popular ? "2px solid gold" : "1px solid rgba(255,215,0,0.1)",
                  textAlign: "center",
                  position: "relative",
                  transform: pkg.popular ? "scale(1.05)" : "scale(1)"
                }}
              >
                {pkg.popular && (
                  <div style={{
                    position: "absolute",
                    top: "-15px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "gold",
                    color: "black",
                    padding: "8px 25px",
                    borderRadius: "30px",
                    fontSize: "0.9rem",
                    fontWeight: "bold",
                    whiteSpace: "nowrap"
                  }}>
                    Most Popular ✦
                  </div>
                )}

                <div style={{
                  fontSize: "3rem",
                  marginBottom: "20px"
                }}>
                  {pkg.icon}
                </div>

                <h3 style={{
                  fontSize: "2rem",
                  color: "white",
                  marginBottom: "10px"
                }}>
                  {pkg.name}
                </h3>

                <div style={{
                  fontSize: "2.5rem",
                  fontWeight: "bold",
                  color: "gold",
                  marginBottom: "5px"
                }}>
                  ${pkg.price}
                </div>

                <p style={{
                  color: "#999",
                  marginBottom: "30px",
                  fontSize: "0.9rem"
                }}>
                  {pkg.duration}
                </p>

                <div style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "15px",
                  marginBottom: "30px"
                }}>
                  {pkg.features.map((feature, i) => (
                    <div key={i} style={{ color: "#ccc" }}>
                      ✓ {feature}
                    </div>
                  ))}
                </div>

                <Link to="/contact">
                  <button style={{
                    width: "100%",
                    padding: "15px",
                    background: pkg.popular ? "gold" : "transparent",
                    color: pkg.popular ? "black" : "gold",
                    border: "2px solid gold",
                    borderRadius: "30px",
                    cursor: "pointer",
                    fontSize: "1rem",
                    fontWeight: "bold",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = "gold";
                    e.target.style.color = "black";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = pkg.popular ? "gold" : "transparent";
                    e.target.style.color = pkg.popular ? "black" : "gold";
                  }}>
                    Select Package
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div style={{
          textAlign: "center",
          padding: "80px 20px",
          background: "linear-gradient(135deg, rgba(255,215,0,0.1), transparent)",
          borderRadius: "50px",
          position: "relative",
          overflow: "hidden"
        }}>
          <div className="rotating-element" style={{
            position: "absolute",
            width: "300px",
            height: "300px",
            border: "2px solid rgba(255,215,0,0.1)",
            borderRadius: "50%",
            left: "-100px",
            top: "-100px"
          }}></div>

          <div className="rotating-element" style={{
            position: "absolute",
            width: "200px",
            height: "200px",
            border: "2px solid rgba(255,215,0,0.1)",
            borderRadius: "50%",
            right: "-50px",
            bottom: "-50px",
            animationDirection: "reverse"
          }}></div>

          <div style={{ position: "relative", zIndex: 1 }}>
            <h2 style={{
              fontSize: "2.5rem",
              marginBottom: "20px"
            }}>
              Ready to Get <span style={{ color: "gold" }}>Started</span>?
            </h2>
            
            <p style={{
              color: "#ccc",
              fontSize: "1.2rem",
              maxWidth: "600px",
              margin: "0 auto 40px",
              lineHeight: "1.8"
            }}>
              Let's discuss your event and create something extraordinary together
            </p>

            <Link to="/contact">
              <button className="glowing-element pulse-element" style={{
                padding: "18px 60px",
                fontSize: "1.2rem",
                background: "linear-gradient(135deg, gold, #ffa500)",
                color: "black",
                border: "none",
                borderRadius: "50px",
                cursor: "pointer",
                fontWeight: "bold",
                transition: "all 0.3s ease",
                boxShadow: "0 10px 30px rgba(255,215,0,0.3)"
              }}
              onMouseEnter={(e) => e.target.style.transform = "scale(1.1)"}
              onMouseLeave={(e) => e.target.style.transform = "scale(1)"}>
                Get Free Consultation ✦
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;