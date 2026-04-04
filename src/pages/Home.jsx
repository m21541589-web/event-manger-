import React, { useState, useEffect } from "react";

const Home = () => {
  const [showContent, setShowContent] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [counts, setCounts] = useState({
    events: 0,
    clients: 0,
    members: 0,
    years: 0,
    satisfaction: 0
  });

  useEffect(() => {
    setShowContent(true);

    // Counter animations with different speeds
    const intervals = [
      { key: 'events', target: 500, speed: 20 },
      { key: 'clients', target: 450, speed: 25 },
      { key: 'members', target: 50, speed: 15 },
      { key: 'years', target: 12, speed: 10 },
      { key: 'satisfaction', target: 100, speed: 5 }
    ];

    const timers = intervals.map(({ key, target, speed }) => {
      return setInterval(() => {
        setCounts(prev => ({
          ...prev,
          [key]: Math.min(prev[key] + 1, target)
        }));
      }, speed);
    });

    // Mouse move for parallax
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup
    return () => {
      timers.forEach(timer => clearInterval(timer));
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Particles generator
  const particles = Array(50).fill(null).map((_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: Math.random() * 6 + 2,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5,
    opacity: Math.random() * 0.5 + 0.2
  }));

  return (
    <div style={{
      margin: 0,
      padding: 0,
      fontFamily: "'Poppins', sans-serif",
      overflow: "hidden",
      position: "relative",
      background: "#0a0a0a",
      color: "white"
    }}>
      {/* Google Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800&display=swap" rel="stylesheet" />

      {/* CSS Animations */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            25% { transform: translate(10px, -10px) rotate(5deg); }
            50% { transform: translate(0, -20px) rotate(10deg); }
            75% { transform: translate(-10px, -10px) rotate(5deg); }
          }

          @keyframes floatReverse {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            25% { transform: translate(-10px, 10px) rotate(-5deg); }
            50% { transform: translate(0, 20px) rotate(-10deg); }
            75% { transform: translate(10px, 10px) rotate(-5deg); }
          }

          @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.1); opacity: 0.8; }
          }

          @keyframes glow {
            0%, 100% { filter: drop-shadow(0 0 20px gold); }
            50% { filter: drop-shadow(0 0 40px #ffd700) drop-shadow(0 0 60px #ffa500); }
          }

          @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }

          @keyframes rotateReverse {
            from { transform: rotate(360deg); }
            to { transform: rotate(0deg); }
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

          @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          @keyframes particleFloat {
            0%, 100% { transform: translate(0, 0); }
            25% { transform: translate(20px, -20px); }
            50% { transform: translate(40px, 0); }
            75% { transform: translate(20px, 20px); }
          }

          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }

          @keyframes zoomIn {
            from {
              transform: scale(1);
            }
            to {
              transform: scale(1.1);
            }
          }

          .floating-element {
            animation: float 8s ease-in-out infinite;
          }

          .floating-reverse {
            animation: floatReverse 10s ease-in-out infinite;
          }

          .pulse-element {
            animation: pulse 3s ease-in-out infinite;
          }

          .glowing-element {
            animation: glow 3s ease-in-out infinite;
          }

          .rotating-element {
            animation: rotate 20s linear infinite;
          }

          .rotating-reverse {
            animation: rotateReverse 25s linear infinite;
          }

          .gradient-bg {
            background: linear-gradient(-45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4);
            background-size: 400% 400%;
            animation: gradientMove 15s ease infinite;
          }

          .card-hover {
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            overflow: hidden;
          }

          .card-hover::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,215,0,0.2), transparent);
            transition: left 0.5s;
          }

          .card-hover:hover::before {
            left: 100%;
          }

          .card-hover:hover {
            transform: translateY(-20px) scale(1.05);
            box-shadow: 0 30px 50px rgba(255, 215, 0, 0.3);
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
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
            animation: shimmer 2s infinite;
          }

          .typewriter h1 {
            overflow: hidden;
            border-right: .15em solid gold;
            white-space: nowrap;
            margin: 0 auto;
            animation: typing 3.5s steps(40, end), blink-caret .75s step-end infinite;
          }

          @keyframes typing {
            from { width: 0 }
            to { width: 100% }
          }

          @keyframes blink-caret {
            from, to { border-color: transparent }
            50% { border-color: gold; }
          }

          .particle {
            position: absolute;
            background: gold;
            border-radius: 50%;
            pointer-events: none;
            animation: particleFloat linear infinite;
          }

          .counter-number {
            background: linear-gradient(135deg, gold, #ffa500);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-weight: 800;
          }

          .hero-image {
            animation: float 6s ease-in-out infinite;
          }

          .hero-background {
            animation: zoomIn 20s ease-in-out infinite alternate;
          }
        `}
      </style>

      {/* Animated Background Particles */}
      <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none"
      }}>
        {/* Gradient Background */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "radial-gradient(circle at 30% 50%, rgba(255,215,0,0.1) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(255,215,0,0.1) 0%, transparent 50%)",
          animation: "gradientMove 20s ease infinite"
        }}></div>

        {/* Floating Particles */}
        {particles.map(particle => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
              animationDuration: `${particle.duration}s`,
              animationDelay: `${particle.delay}s`,
              background: `radial-gradient(circle, gold, #ffa500)`
            }}
          />
        ))}

        {/* Geometric Shapes */}
        <div className="rotating-element" style={{
          position: "absolute",
          width: "800px",
          height: "800px",
          border: "2px solid rgba(255,215,0,0.05)",
          borderRadius: "50%",
          left: "-200px",
          top: "-200px"
        }}></div>

        <div className="rotating-reverse" style={{
          position: "absolute",
          width: "600px",
          height: "600px",
          border: "2px solid rgba(255,215,0,0.05)",
          borderRadius: "50%",
          right: "-100px",
          bottom: "-100px"
        }}></div>

        <div className="floating-element" style={{
          position: "absolute",
          width: "300px",
          height: "300px",
          border: "1px solid rgba(255,215,0,0.1)",
          transform: "rotate(45deg)",
          left: "10%",
          top: "20%"
        }}></div>

        <div className="floating-reverse" style={{
          position: "absolute",
          width: "200px",
          height: "200px",
          border: "1px solid rgba(255,215,0,0.1)",
          transform: "rotate(30deg)",
          right: "15%",
          bottom: "30%"
        }}></div>
      </div>

      {/* Main Content */}
      <div style={{
        position: "relative",
        zIndex: 1,
        minHeight: "100vh"
      }}>
        {/* Hero Section with Background Image */}
        <div style={{
          height: "100vh",
          paddingTop: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden"
        }}>
          {/* Hero Background Image with Zoom Animation */}
          <div className="hero-background" style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: "url('https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1920&h=1080&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px) scale(1.05)`,
            transition: "transform 0.1s ease-out",
            animation: "zoomIn 20s ease-in-out infinite alternate"
          }}>
            {/* Dark Overlay */}
            <div style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.8) 100%)"
            }}></div>
          </div>

          {/* Animated Background Gradient */}
          <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "radial-gradient(circle at 50% 50%, rgba(255,215,0,0.1) 0%, transparent 70%)",
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
            transition: "transform 0.1s ease-out"
          }}></div>

          {/* Hero Content */}
          <div style={{
            textAlign: "center",
            color: "white",
            transform: `translate(${mousePosition.x * 0.2}px, ${mousePosition.y * 0.2}px)`,
            transition: "transform 0.1s ease-out",
            maxWidth: "1200px",
            padding: "0 20px",
            position: "relative",
            zIndex: 2
          }}>
            {/* Hero Image */}
            <div className="hero-image" style={{
              width: "180px",
              height: "180px",
              margin: "0 auto 30px",
              borderRadius: "50%",
              overflow: "hidden",
              border: "3px solid gold",
              boxShadow: "0 0 50px rgba(255,215,0,0.5)",
              background: "rgba(0,0,0,0.5)",
              backdropFilter: "blur(10px)"
            }}>
              <img 
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=400&fit=crop"
                alt="Elite Events"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }}
              />
            </div>

            {/* Animated Badge */}
            <div style={{
              display: "inline-block",
              padding: "8px 20px",
              background: "rgba(255,215,0,0.2)",
              backdropFilter: "blur(10px)",
              border: "1px solid gold",
              borderRadius: "30px",
              marginBottom: "10px",
              opacity: showContent ? 1 : 0,
              animation: showContent ? "slideInUp 1s ease forwards" : "none"
            }}>
              <span style={{ color: "gold", letterSpacing: "2px" }}>✦ PREMIUM EVENT MANAGEMENT ✦</span>
            </div>

            {/* Main Title */}
            <h1 style={{
              fontSize: "clamp(3rem, 12vw, 7rem)",
              fontWeight: "800",
              lineHeight: "1.1",
              marginBottom: "10px",
              opacity: showContent ? 1 : 0,
              animation: showContent ? "slideInLeft 1s ease 0.2s forwards" : "none",
              textShadow: "2px 2px 4px rgba(0,0,0,0.5)"
            }}>
              <span style={{ display: "block", color: "white" }}>ELITE</span>
              <span style={{ 
                display: "block",
                background: "linear-gradient(135deg, gold, #ffa500, #ff6b6b)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 0 30px rgba(255,215,0,0.5)"
              }}>EVENTS</span>
            </h1>

            {/* Typewriter Effect */}
            <div className="typewriter" style={{
              maxWidth: "fit-content",
              margin: "10px auto"
            }}>
              <h1 style={{
                fontSize: "clamp(1rem, 4vw, 1.8rem)",
                color: "#ccc",
                fontWeight: "300",
                textShadow: "1px 1px 2px rgba(0,0,0,0.5)"
              }}>Creating Unforgettable Experiences Since 2025</h1>
            </div>

            {/* Stats Row */}
            <div style={{
              display: "flex",
              justifyContent: "center",
              gap: "40px",
              margin: "30px 0",
              flexWrap: "wrap",
              opacity: showContent ? 1 : 0,
              animation: showContent ? "fadeIn 1s ease 0.8s forwards" : "none"
            }}>
              {[
                { value: "500+", label: "Events" },
                { value: "450+", label: "Clients" },
                { value: "50+", label: "Experts" },
                { value: "100%", label: "Satisfaction" }
              ].map((stat, index) => (
                <div key={index} style={{ 
                  textAlign: "center",
                  background: "rgba(0,0,0,0.5)",
                  backdropFilter: "blur(10px)",
                  padding: "15px 25px",
                  borderRadius: "15px",
                  border: "1px solid rgba(255,215,0,0.3)"
                }}>
                  <div style={{ fontSize: "2rem", fontWeight: "bold", color: "gold" }}>{stat.value}</div>
                  <div style={{ fontSize: "0.9rem", color: "#999", letterSpacing: "1px" }}>{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div style={{
              display: "flex",
              gap: "20px",
              justifyContent: "center",
              flexWrap: "wrap",
              opacity: showContent ? 1 : 0,
              animation: showContent ? "slideInUp 1s ease 1s forwards" : "none"
            }}>
              <button className="glowing-element card-hover" style={{
                padding: "15px 50px",
                fontSize: "1.1rem",
                background: "gold",
                color: "black",
                border: "none",
                borderRadius: "50px",
                cursor: "pointer",
                fontWeight: "bold",
                position: "relative",
                overflow: "hidden"
              }}>
                <span style={{ position: "relative", zIndex: 1 }}>DISCOVER MORE</span>
              </button>

              <button className="card-hover" style={{
                padding: "15px 50px",
                fontSize: "1.1rem",
                background: "rgba(0,0,0,0.6)",
                backdropFilter: "blur(10px)",
                color: "white",
                border: "2px solid gold",
                borderRadius: "50px",
                cursor: "pointer",
                fontWeight: "bold",
                position: "relative",
                overflow: "hidden"
              }}>
                <span style={{ position: "relative", zIndex: 1 }}>WATCH SHOWREEL</span>
              </button>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="floating-element" style={{
            position: "absolute",
            bottom: "30px",
            left: "50%",
            transform: "translateX(-50%)",
            color: "white",
            fontSize: "0.8rem",
            letterSpacing: "2px",
            writingMode: "vertical-rl",
            opacity: 0.5,
            zIndex: 2
          }}>
            SCROLL
          </div>
        </div>

        {/* Live Counter Section with Images */}
        <div style={{
          padding: "100px 20px",
          position: "relative",
          background: "rgba(0,0,0,0.8)"
        }}>
          <div style={{
            maxWidth: "1200px",
            margin: "0 auto"
          }}>
            <h2 style={{
              textAlign: "center",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              marginBottom: "20px",
              opacity: showContent ? 1 : 0,
              animation: showContent ? "slideInUp 1s ease forwards" : "none"
            }}>
              Our <span style={{ color: "gold" }}>Achievements</span>
            </h2>
            
            <p style={{
              textAlign: "center",
              color: "#999",
              fontSize: "1.2rem",
              marginBottom: "60px",
              opacity: showContent ? 1 : 0,
              animation: showContent ? "fadeIn 1s ease 0.3s forwards" : "none"
            }}>
              Numbers that define our excellence
            </p>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "40px"
            }}>
              {/* Counter Cards */}
              {[
                { value: counts.events, label: "Events Completed", icon: "https://cdn-icons-png.flaticon.com/512/1041/1041918.png", suffix: "+" },
                { value: counts.clients, label: "Happy Clients", icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", suffix: "+" },
                { value: counts.members, label: "Team Members", icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", suffix: "+" },
                { value: counts.years, label: "Years Experience", icon: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png", suffix: "+" },
                { value: counts.satisfaction, label: "Satisfaction Rate", icon: "https://cdn-icons-png.flaticon.com/512/2583/2583197.png", suffix: "%" }
              ].map((counter, index) => (
                <div
                  key={index}
                  className="card-hover"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255,215,0,0.2)",
                    borderRadius: "20px",
                    padding: "40px 20px",
                    textAlign: "center",
                    animation: `scaleIn 0.5s ease ${index * 0.1}s forwards`,
                    opacity: 0
                  }}
                >
                  <div style={{
                    width: "60px",
                    height: "60px",
                    margin: "0 auto 20px",
                    background: "rgba(255,215,0,0.1)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}>
                    <img 
                      src={counter.icon}
                      alt={counter.label}
                      style={{
                        width: "40px",
                        height: "40px",
                        objectFit: "contain"
                      }}
                    />
                  </div>
                  <div style={{ fontSize: "3.5rem", fontWeight: "bold", color: "gold", marginBottom: "10px" }}>
                    {counter.value}{counter.suffix}
                  </div>
                  <div style={{ color: "#ccc", fontSize: "1.2rem" }}>{counter.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Premium Services with Images */}
        <div style={{
          padding: "100px 20px",
          position: "relative"
        }}>
          <div style={{
            maxWidth: "1200px",
            margin: "0 auto"
          }}>
            <h2 style={{
              textAlign: "center",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              marginBottom: "60px"
            }}>
              <span style={{ color: "gold" }}>Premium</span> Services
            </h2>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
              gap: "30px"
            }}>
              {[
                {
                  icon: "https://cdn-icons-png.flaticon.com/512/2917/2917995.png",
                  title: "Luxury Weddings",
                  desc: "Your dream wedding brought to life with meticulous attention to detail",
                  features: ["Venue Selection", "Catering", "Decoration", "Entertainment"],
                  image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=400&fit=crop"
                },
                {
                  icon: "https://cdn-icons-png.flaticon.com/512/3132/3132693.png",
                  title: "Corporate Events",
                  desc: "Impress clients and partners with flawless corporate events",
                  features: ["Conference", "Team Building", "Gala Dinner", "Awards Ceremony"],
                  image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600&h=400&fit=crop"
                },
                {
                  icon: "https://cdn-icons-png.flaticon.com/512/3659/3659893.png",
                  title: "Live Entertainment",
                  desc: "Spectacular shows and performances that leave lasting impressions",
                  features: ["Concerts", "Festivals", "Private Parties", "Cultural Events"],
                  image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&h=400&fit=crop"
                }
              ].map((service, index) => (
                <div
                  key={index}
                  className="card-hover"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    borderRadius: "30px",
                    padding: "40px",
                    border: "1px solid rgba(255,215,0,0.1)",
                    position: "relative",
                    overflow: "hidden"
                  }}
                >
                  {/* Service Image */}
                  <div style={{
                    width: "100%",
                    height: "200px",
                    borderRadius: "20px",
                    overflow: "hidden",
                    marginBottom: "20px"
                  }}>
                    <img 
                      src={service.image}
                      alt={service.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.5s ease"
                      }}
                      onMouseEnter={(e) => e.target.style.transform = "scale(1.1)"}
                      onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
                    />
                  </div>
                  
                  <div style={{
                    width: "70px",
                    height: "70px",
                    margin: "0 auto 20px",
                    background: "rgba(255,215,0,0.1)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}>
                    <img 
                      src={service.icon}
                      alt={service.title}
                      style={{
                        width: "40px",
                        height: "40px",
                        objectFit: "contain"
                      }}
                    />
                  </div>
                  
                  <h3 style={{
                    fontSize: "2rem",
                    color: "white",
                    marginBottom: "15px"
                  }}>
                    {service.title}
                  </h3>
                  
                  <p style={{
                    color: "#999",
                    lineHeight: "1.8",
                    marginBottom: "20px"
                  }}>
                    {service.desc}
                  </p>

                  <div style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "10px"
                  }}>
                    {service.features.map((feature, i) => (
                      <span
                        key={i}
                        style={{
                          padding: "5px 15px",
                          background: "rgba(255,215,0,0.1)",
                          border: "1px solid rgba(255,215,0,0.3)",
                          borderRadius: "20px",
                          color: "gold",
                          fontSize: "0.9rem"
                        }}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Shimmer Effect */}
                  <div className="shimmer-effect" style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    pointerEvents: "none"
                  }}></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials with Images */}
        <div style={{
          padding: "100px 20px",
          background: "rgba(0,0,0,0.8)"
        }}>
          <div style={{
            maxWidth: "1200px",
            margin: "0 auto"
          }}>
            <h2 style={{
              textAlign: "center",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              marginBottom: "60px"
            }}>
              Client <span style={{ color: "gold" }}>Stories</span>
            </h2>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "30px"
            }}>
              {[
                {
                  quote: "Elite Events transformed our vision into reality. Every detail was perfect!",
                  author: "Ajmal Hassan",
                  role: "Wedding Clients",
                  rating: 5,
                  image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop"
                },
                {
                  quote: "The most professional event team we've ever worked with. Exceptional service!",
                  author: "Rai Mudassar",
                  role: "CEO, TechCorp",
                  rating: 5,
                  image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400&h=300&fit=crop"
                },
                {
                  quote: "Our corporate gala was a massive success thanks to their expertise.",
                  author: "Nawazish Ali",
                  role: "Event Director",
                  rating: 5,
                  image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&h=300&fit=crop"
                }
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="card-hover"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    borderRadius: "20px",
                    padding: "40px",
                    border: "1px solid rgba(255,215,0,0.1)",
                    position: "relative"
                  }}
                >
                  {/* Testimonial Image */}
                  <div style={{
                    width: "100%",
                    height: "150px",
                    borderRadius: "15px",
                    overflow: "hidden",
                    marginBottom: "20px"
                  }}>
                    <img 
                      src={testimonial.image}
                      alt={testimonial.author}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover"
                      }}
                    />
                  </div>
                  
                  <div style={{
                    fontSize: "4rem",
                    color: "rgba(255,215,0,0.1)",
                    position: "absolute",
                    top: "20px",
                    right: "20px"
                  }}>"</div>
                  
                  <div style={{
                    display: "flex",
                    gap: "5px",
                    marginBottom: "20px"
                  }}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} style={{ color: "gold", fontSize: "1.5rem" }}>★</span>
                    ))}
                  </div>

                  <p style={{
                    color: "#ccc",
                    fontSize: "1.2rem",
                    lineHeight: "1.8",
                    marginBottom: "20px",
                    fontStyle: "italic"
                  }}>
                    "{testimonial.quote}"
                  </p>

                  <div>
                    <h4 style={{ color: "white", fontSize: "1.2rem" }}>{testimonial.author}</h4>
                    <p style={{ color: "gold", fontSize: "0.9rem" }}>{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Final CTA with Image */}
        <div style={{
          padding: "150px 20px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden"
        }}>
          {/* Animated Background */}
          <div className="rotating-element" style={{
            position: "absolute",
            width: "600px",
            height: "600px",
            border: "2px solid rgba(255,215,0,0.05)",
            borderRadius: "50%",
            left: "-200px",
            top: "-200px"
          }}></div>

          <div className="rotating-reverse" style={{
            position: "absolute",
            width: "500px",
            height: "500px",
            border: "2px solid rgba(255,215,0,0.05)",
            borderRadius: "50%",
            right: "-150px",
            bottom: "-150px"
          }}></div>

          <div style={{
            maxWidth: "800px",
            margin: "0 auto",
            position: "relative",
            zIndex: 2
          }}>
            {/* CTA Image */}
            <div style={{
              width: "150px",
              height: "150px",
              margin: "0 auto 30px",
              borderRadius: "50%",
              overflow: "hidden",
              border: "3px solid gold",
              boxShadow: "0 0 50px rgba(255,215,0,0.5)"
            }}>
              <img 
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=300&h=300&fit=crop"
                alt="Event Planning"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }}
              />
            </div>

            <h2 className="glowing-element" style={{
              fontSize: "clamp(2rem, 6vw, 4rem)",
              color: "white",
              marginBottom: "30px"
            }}>
              Ready to Create Something <span style={{ color: "gold" }}>Extraordinary</span>?
            </h2>

            <p style={{
              fontSize: "1.2rem",
              color: "#ccc",
              marginBottom: "40px",
              lineHeight: "1.8"
            }}>
              Let's bring your vision to life with our award-winning event management expertise
            </p>

            <button className="card-hover glowing-element" style={{
              padding: "20px 70px",
              fontSize: "1.2rem",
              background: "gold",
              color: "black",
              border: "none",
              borderRadius: "60px",
              cursor: "pointer",
              fontWeight: "bold",
              position: "relative",
              overflow: "hidden",
              transition: "all 0.3s"
            }}>
              <span style={{ position: "relative", zIndex: 1 }}>START YOUR JOURNEY →</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;